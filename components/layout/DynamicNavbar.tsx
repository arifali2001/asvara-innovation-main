"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";
import { content } from "@/config/content";

export default function DynamicNavbar() {
  const { navbar, contact, brand } = content;

  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const collapsedRef = useRef<HTMLDivElement>(null);
  const expandedRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".nav-pill-item",
        { y: -20, opacity: 0, filter: "blur(5px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
          delay: 0.5,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggleMenu = () => {
    if (isAnimating.current) return;
    if (isOpen) closeMenu();
    else openMenu();
  };

  const openMenu = () => {
    isAnimating.current = true;
    setIsOpen(true);

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
      },
    });

    tl.to(
      overlayRef.current,
      {
        autoAlpha: 1,
        duration: 0.5,
        ease: "power2.out",
      },
      0,
    );

    tl.to(
      ".nav-pill-item",
      {
        opacity: 0,
        scale: 0.9,
        duration: 0.3,
        stagger: 0.05,
        ease: "power2.in",
      },
      0,
    );

    const isMobile = window.innerWidth < 768;
    const targetWidth = isMobile ? "95vw" : "800px";
    const targetHeight = isMobile ? "400px" : "400px";

    tl.to(
      containerRef.current,
      {
        width: targetWidth,
        height: targetHeight,
        borderRadius: "24px",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.2",
    );

    gsap.set(expandedRef.current, { display: "flex", opacity: 0 });

    tl.to(
      expandedRef.current,
      {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.4",
    );

    tl.fromTo(
      ".menu-item-left",
      { y: 20, opacity: 0, filter: "blur(5px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        stagger: 0.05,
        duration: 0.6,
        ease: "power3.out",
      },
      "-=0.4",
    );

    tl.fromTo(
      ".menu-item-right",
      { y: 20, opacity: 0, filter: "blur(5px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 0.6,
        ease: "power3.out",
      },
      "<",
    );
  };

  const closeMenu = () => {
    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpen(false);
        isAnimating.current = false;
        gsap.set(expandedRef.current, { display: "none" });
      },
    });

    tl.to(
      overlayRef.current,
      {
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.in",
      },
      0,
    );

    tl.to(
      expandedRef.current,
      {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      },
      0,
    );

    const isMobile = window.innerWidth < 768;
    const targetWidth = isMobile ? "92vw" : "550px";

    tl.to(
      containerRef.current,
      {
        width: targetWidth,
        height: "54px",
        borderRadius: "100px",
        duration: 0.8,
        ease: "power3.inOut",
      },
      "-=0.1",
    );

    tl.to(
      ".nav-pill-item",
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      },
      "-=0.4",
    );
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen && !isAnimating.current) closeMenu();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <>
      <div
        ref={overlayRef}
        onClick={() => !isAnimating.current && closeMenu()}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 invisible opacity-0 cursor-none"
        aria-hidden="true"
      />

      <FadeIn
        direction="down"
        delay={0.1}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto"
        blur={true}
      >
        <div
          ref={containerRef}
          className="bg-[#fafaf9] border border-[#d4d2d0] shadow-[0_10px_30px_-5px_rgba(0,0,0,0.05)] overflow-hidden relative transition-shadow hover:shadow-[0_20px_40px_-10px_rgba(139,115,85,0.15)]"
          style={{
            width: "550px",
            height: "54px",
            borderRadius: "100px",
            maxWidth: "92vw",
            willChange: "width, height, borderRadius",
          }}
        >
          <div
            ref={collapsedRef}
            className="absolute inset-0 flex items-center justify-between px-2 w-full h-full"
          >
            <div className="hidden md:flex items-center gap-8 pl-6">
              {navbar.links.slice(0, 2).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="nav-pill-item text-xs font-medium text-[#5a5a5a] hover:text-[#8b7355] transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="nav-pill-item absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 pointer-events-none select-none">
              <Image
                src="/logo-hex.svg"
                alt={brand.logoAlt}
                width={24}
                height={24}
                className="w-6 h-6 object-contain"
              />
              <span
                className="font-bold text-lg tracking-tight text-[#292929]"
                style={{ fontFamily: "var(--font-primary)" }}
              >
                {brand.name}
              </span>
            </div>

            <div className="nav-pill-item ml-auto">
              <button
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full bg-[#ebe9e7] hover:bg-[#e1dfdd] flex flex-col items-center justify-center gap-[4px] transition-colors cursor-none group active:scale-95"
              >
                <span className="w-4 h-[1.5px] bg-[#292929] rounded-full transition-all duration-300 group-hover:w-5"></span>
                <span className="w-4 h-[1.5px] bg-[#292929] rounded-full transition-all duration-300 group-hover:w-3"></span>
                <span className="w-4 h-[1.5px] bg-[#292929] rounded-full transition-all duration-300 group-hover:w-5"></span>
              </button>
            </div>
          </div>

          <div
            ref={expandedRef}
            className="absolute inset-0 flex-col w-full h-full p-6 hidden bg-gradient-to-br from-[#fafaf9] via-[#f5f3f1] to-[#ebe9e7] overflow-hidden"
          >
            <div className="flex items-center justify-between mb-2 w-full flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center">
                  <Image
                    src="/logo-hex.svg"
                    alt={brand.logoAlt}
                    width={20}
                    height={20}
                    className="w-5 h-5 object-contain"
                  />
                </div>
                <span
                  className="font-bold text-xl md:text-2xl text-[#292929]"
                  style={{ fontFamily: "var(--font-primary)" }}
                >
                  {brand.name}
                </span>
              </div>

              <button
                onClick={toggleMenu}
                className="w-10 h-10 rounded-full bg-[#292929] text-white flex items-center justify-center hover:bg-[#8b7355] hover:rotate-90 transition-all duration-500 cursor-none shadow-lg active:scale-95"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 h-full flex-grow">
              <div className="md:col-span-7 flex flex-col justify-center gap-1 border-r-0 md:border-r border-[#d4d2d0]/50 pr-0 md:pr-6">
                <span className="menu-item-left text-[10px] font-bold text-[#a8a6a3] uppercase tracking-wider mb-2">
                  Directory
                </span>
                {navbar.links.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={toggleMenu}
                    className="menu-item-left group flex items-center gap-3 text-2xl md:text-3xl font-bold text-[#292929] hover:text-[#8b7355] transition-colors w-fit py-0.5"
                    style={{ fontFamily: "var(--font-primary)" }}
                  >
                    <span className="hidden md:inline opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-lg text-[#8b7355]">
                      →
                    </span>
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="md:col-span-5 flex flex-col h-full pl-0 md:pl-4 justify-end md:justify-start pb-1 md:pt-4">
                <div className="menu-item-right bg-[#e8dfd5]/50 rounded-xl p-4 border border-[#d4d2d0]">
                  <div className="flex justify-between items-center text-xs">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-[#8b7355] font-bold mb-0.5">
                        Contact
                      </span>
                      <a
                        href={`mailto:${content.footer.contact.email}`} // Using footer contact email for consistency
                        className="font-mono text-[#292929] hover:underline"
                      >
                        {content.footer.contact.email}
                      </a>
                    </div>
                    <div className="text-right">
                      <a
                        href={`tel:${content.footer.contact.phone.replace(/\s/g, "")}`}
                        className="font-mono text-[#292929] hover:underline block"
                      >
                        {content.footer.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </>
  );
}
