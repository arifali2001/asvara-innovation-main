"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type AnimationType = "slide-up" | "fade-in" | "blur" | "rotate" | "scale";

interface LetterRevealAdvancedProps {
  children: string;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  animateOnce?: boolean;
  animationType?: AnimationType;
}

// Super advance split rendering with advance controls. EXPERIMENTAL
export default function LetterRevealAdvanced({
  children,
  className = "",
  stagger = 0.03,
  duration = 0.6,
  delay = 0,
  animateOnce = true,
  animationType = "slide-up",
}: LetterRevealAdvancedProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const letters = children
      .split("")
      .map((char, index) => {
        if (char === " ") {
          return `<span class="inline-block" style="width: 0.25em;">&nbsp;</span>`;
        }
        return `<span class="inline-block overflow-hidden">
                <span class="inline-block letter-${index}">${char}</span>
              </span>`;
      })
      .join("");

    ref.current.innerHTML = letters;
    const letterSpans = ref.current.querySelectorAll('[class*="letter-"]');
    const animations: Record<
      AnimationType,
      { from: gsap.TweenVars; to: gsap.TweenVars }
    > = {
      "slide-up": {
        from: { y: "100%", opacity: 0 },
        to: { y: 0, opacity: 1, ease: "power4.out" },
      },
      "fade-in": {
        from: { opacity: 0, scale: 0.5 },
        to: { opacity: 1, scale: 1, ease: "back.out(1.7)" },
      },
      blur: {
        from: {
          opacity: 0,
          filter: "blur(20px)",
          y: 20,
          scale: 0.9,
        },
        to: {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          scale: 1,
          ease: "power3.out",
        },
      },
      rotate: {
        from: { opacity: 0, rotateY: -90, transformOrigin: "left center" },
        to: { opacity: 1, rotateY: 0, ease: "power3.out" },
      },
      scale: {
        from: { opacity: 0, scale: 0, rotation: -180 },
        to: { opacity: 1, scale: 1, rotation: 0, ease: "elastic.out(1, 0.5)" },
      },
    };

    const selectedAnimation = animations[animationType];

    gsap.fromTo(letterSpans, selectedAnimation.from, {
      ...selectedAnimation.to,
      duration: duration,
      delay: delay,
      stagger: stagger,
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: animateOnce
          ? "play none none none"
          : "play none none reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [children, stagger, duration, delay, animateOnce, animationType]);

  return (
    <div
      ref={ref}
      className={`perspective preserve-3d ${className}`}
      style={{ perspective: "1000px" }}
    />
  );
}
