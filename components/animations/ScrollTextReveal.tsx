"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ScrollTextRevealProps {
  children: string | string[];
  className?: string;
}

export default function ScrollTextReveal({
  children,
  className,
}: ScrollTextRevealProps) {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!container.current) return;

    const words = container.current.querySelectorAll(".word");

    gsap.fromTo(
      words,
      { opacity: 0.15 },
      {
        opacity: 1,
        stagger: 0.5,
        scrollTrigger: {
          trigger: container.current,
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      },
    );
  }, []);

  const paragraphs = Array.isArray(children) ? children : [children];

  return (
    <div ref={container} className={cn("space-y-6", className)}>
      {paragraphs.map((text, pIndex) => (
        <p key={pIndex} className="flex flex-wrap gap-x-[0.25em]">
          {text.split(" ").map((word, wIndex) => (
            <span
              key={`${pIndex}-${wIndex}`}
              className="word transition-opacity"
            >
              {word}
            </span>
          ))}
        </p>
      ))}
    </div>
  );
}
