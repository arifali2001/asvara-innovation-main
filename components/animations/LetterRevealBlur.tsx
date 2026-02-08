"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LetterRevealBlurProps {
  children: string;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  blurAmount?: number;
  fadeIntensity?: number;
  yOffset?: number;
  xOffset?: number;
  scaleFrom?: number;
  scaleTo?: number;
  ease?: string;
  animateOnce?: boolean;
  triggerStart?: string;
}

export default function LetterRevealBlur({
  children,
  className = "",
  stagger = 0.02,
  duration = 1,
  delay = 0,
  blurAmount = 15,
  fadeIntensity = 1,
  yOffset = 30,
  xOffset = 0,
  scaleFrom = 0.8,
  scaleTo = 1,
  ease = "power3.out",
  animateOnce = true,
  triggerStart = "top 85%",
}: LetterRevealBlurProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const letters = children
      .split("")
      .map((char, index) => {
        if (char === " ") {
          return `<span class="inline-block" style="width: 0.3em;">&nbsp;</span>`;
        }
        return `<span class="inline-block overflow-visible">
                <span class="inline-block letter-${index}" style="display: inline-block;">${char}</span>
              </span>`;
      })
      .join("");

    ref.current.innerHTML = letters;
    const letterSpans = ref.current.querySelectorAll('[class*="letter-"]');
    gsap.fromTo(
      letterSpans,
      {
        opacity: 0,
        filter: `blur(${blurAmount}px)`,
        y: yOffset,
        x: xOffset,
        scale: scaleFrom,
        willChange: "transform, opacity, filter",
      },
      {
        opacity: fadeIntensity,
        filter: "blur(0px)",
        y: 0,
        x: 0,
        scale: scaleTo,
        duration: duration,
        delay: delay,
        stagger: {
          amount: stagger * children.length,
          ease: "power2.inOut",
        },
        ease: ease,
        scrollTrigger: {
          trigger: ref.current,
          start: triggerStart,
          toggleActions: animateOnce
            ? "play none none none"
            : "play none none reverse",
        },
        clearProps: "willChange",
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [
    children,
    stagger,
    duration,
    delay,
    blurAmount,
    fadeIntensity,
    yOffset,
    xOffset,
    scaleFrom,
    scaleTo,
    ease,
    animateOnce,
    triggerStart,
  ]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        perspective: "1000px",
        willChange: "auto",
      }}
    />
  );
}
