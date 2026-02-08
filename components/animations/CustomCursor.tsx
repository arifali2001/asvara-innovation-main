"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const isVisible = useRef(false);
  const [isMobile, setIsMobile] = useState(true);
  const COLOR_PRIMARY = "#8b7355";
  const COLOR_SECONDARY = "#fafaf9";

  useEffect(() => {
    const checkMobile = () => {
      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      setIsMobile(isTouch);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const cursor = cursorRef.current;
    if (!cursor) return;
    document.body.style.cursor = "none";

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let isHoveringDark = false;

    const showCursor = () => {
      if (!isVisible.current) {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
        isVisible.current = true;
      }
    };

    const hideCursor = () => {
      if (isVisible.current) {
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
        isVisible.current = false;
      }
    };

    // Color Detector with color-mapping
    const checkHoverState = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      let foundDark = false;

      const darkClasses = [
        "bg-[#1a1a1a]",
        "bg-[#292929]",
        "bg-[#8b7355]",
        "bg-black",
        "bg-gray-900",
      ];

      while (target && target !== document.body) {
        const hasDarkClass = darkClasses.some((cls) =>
          target?.classList.contains(cls),
        );
        const hasDarkTheme = target.getAttribute("data-theme") === "dark";

        if (hasDarkClass || hasDarkTheme) {
          foundDark = true;
          break;
        }
        target = target.parentElement;
      }

      if (foundDark !== isHoveringDark) {
        isHoveringDark = foundDark;
        gsap.to(cursor, {
          backgroundColor: isHoveringDark ? COLOR_SECONDARY : COLOR_PRIMARY,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      showCursor();
      checkHoverState(e);
    };

    const onMouseLeave = () => hideCursor();
    const onMouseEnter = () => showCursor();

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Animation Ticker: GPT generated
    const ticker = () => {
      const dt = 1.0 - Math.pow(1.0 - 0.15, gsap.ticker.deltaRatio());

      cursorX += (mouseX - cursorX) * dt;
      cursorY += (mouseY - cursorY) * dt;

      const vx = mouseX - cursorX;
      const vy = mouseY - cursorY;
      const velocity = Math.sqrt(vx * vx + vy * vy);
      const angle = Math.atan2(vy, vx) * (180 / Math.PI);

      const scale = Math.min(1 + velocity * 0.005, 2.0);

      gsap.set(cursor, {
        x: cursorX,
        y: cursorY,
        rotation: angle,
        scaleX: scale,
        scaleY: 1 / scale,
        xPercent: -50,
        yPercent: -50,
      });
    };

    gsap.ticker.add(ticker);

    return () => {
      // Ahhh. Cleaners here
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      gsap.ticker.remove(ticker);
      document.body.style.cursor = "auto";
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[9999]"
      style={{
        backgroundColor: COLOR_PRIMARY,
        opacity: 0,
        willChange: "transform, background-color, opacity",
      }}
    />
  );
}
