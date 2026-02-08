"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface LetterRevealProps {
  children: string;
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  animateOnce?: boolean;
}

// Well well, this is code pen code. So just leave it. In future we'll make it more optimized and wil some
// more advance props
export default function LetterReveal({
  children,
  className = "",
  stagger = 0.03,
  duration = 0.6,
  delay = 0,
  animateOnce = true,
}: LetterRevealProps) {
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

    gsap.fromTo(
      letterSpans,
      {
        y: "100%",
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: duration,
        delay: delay,
        stagger: stagger,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          toggleActions: animateOnce
            ? "play none none none"
            : "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === ref.current) {
          trigger.kill();
        }
      });
    };
  }, [children, stagger, duration, delay, animateOnce]);

  return (
    <div
      ref={ref}
      className={`perspective ${className}`}
      style={{ perspective: "1000px" }}
    />
  );
}
