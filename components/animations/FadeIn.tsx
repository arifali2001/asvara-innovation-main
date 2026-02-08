"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface FadeInProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  className?: string;
  threshold?: string;
  blur?: boolean;
  blurAmount?: number;
}

export default function FadeIn({
  children,
  direction = "up",
  delay = 0,
  className = "",
  threshold = "85%",
  blur = false,
  blurAmount = 10,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const directions = {
      up: { y: 60, x: 0 },
      down: { y: -60, x: 0 },
      left: { y: 0, x: 60 },
      right: { y: 0, x: -60 },
    };

    const fromProps: any = {
      opacity: 0,
      ...directions[direction],
    };

    const toProps: any = {
      opacity: 1,
      x: 0,
      y: 0,
      duration: 1,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: `top ${threshold}`,
        toggleActions: "play none none none",
      },
    };

    if (blur) {
      fromProps.filter = `blur(${blurAmount}px)`;
      toProps.filter = "blur(0px)";
    }

    gsap.fromTo(ref.current, fromProps, toProps);
  }, [direction, delay, threshold, blur, blurAmount]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
