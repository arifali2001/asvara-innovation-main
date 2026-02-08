"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ParallaxProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}
// YEAH you can this a basic parallax
export default function Parallax({
  children,
  speed = 0.5,
  className = "",
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.to(ref.current, {
      y: () => window.innerHeight * speed,
      ease: "none",
      scrollTrigger: {
        trigger: ref.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  }, [speed]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
