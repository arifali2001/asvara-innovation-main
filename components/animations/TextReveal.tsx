"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  className?: string;
}

export default function TextReveal({
  children,
  className = "",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    // Manual text split (free alternative to SplitText)
    const words = children.split(" ");
    ref.current.innerHTML = words
      .map(
        (word) =>
          `<span class="inline-block overflow-hidden"><span class="inline-block">${word}</span></span>`
      )
      .join(" ");

    const spans = ref.current.querySelectorAll("span span");

    gsap.fromTo(
      spans,
      { y: "100%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  }, [children]);

  return <div ref={ref} className={className} />;
}
