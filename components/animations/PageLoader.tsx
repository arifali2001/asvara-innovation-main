"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

// THIS LOADER IS AI GENERATED. The style is shit so we are not using any sort of loader for now.
export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const loaderRef = useRef<HTMLDivElement>(null);
  const curtainsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);

    const hasLoaded = sessionStorage.getItem("hasLoadedBefore");

    if (hasLoaded) {
      setIsComplete(true);
      return;
    }

    const duration = 2500;
    const steps = 100;
    const interval = duration / steps;
    let currentProgress = 0;

    const timer = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(timer);
        setTimeout(() => {
          animateCurtains();
        }, 500);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const animateCurtains = () => {
    const curtains = curtainsRef.current?.querySelectorAll(".curtain");
    if (!curtains) return;

    gsap.to(curtains, {
      y: "-100%",
      duration: 0.8,
      stagger: 0.08,
      ease: "power3.inOut",
      onComplete: () => {
        setIsComplete(true);
        sessionStorage.setItem("hasLoadedBefore", "true");
      },
    });

    gsap.to(loaderRef.current, {
      opacity: 0,
      duration: 0.3,
      delay: 0.6,
    });
  };

  if (isComplete) return null;

  const particles = isMounted
    ? Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: (i * 37.5 + 15.3) % 100,
        left: (i * 47.3 + 23.7) % 100,
        opacity: (((i * 13.7) % 30) + 10) / 100,
        duration: 3 + (i % 4),
        delay: (i % 20) / 10,
      }))
    : [];

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div ref={curtainsRef} className="absolute inset-0 flex">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="curtain flex-1 bg-gradient-to-b from-purple-900 via-black to-blue-900"
            style={{
              borderRight:
                i < 7 ? "1px solid rgba(255, 255, 255, 0.05)" : "none",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-80 h-80 mb-8">
          <svg className="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="160"
              cy="160"
              r="155"
              fill="none"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="2"
            />
            <circle
              cx="160"
              cy="160"
              r="155"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={2 * Math.PI * 155}
              strokeDashoffset={2 * Math.PI * 155 * (1 - progress / 100)}
              style={{
                transition: "stroke-dashoffset 0.1s ease-out",
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#a855f7" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#3b82f6" />
              </linearGradient>
            </defs>
          </svg>

          <div
            className="absolute inset-0 rounded-full blur-3xl opacity-20"
            style={{
              background: `conic-gradient(from ${progress * 3.6}deg, #a855f7, #ec4899, #3b82f6, #a855f7)`,
              transform: `scale(${0.7 + progress * 0.003})`,
              transition: "all 0.3s ease-out",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative flex flex-col items-center">
              <div className="relative mb-6">
                <div
                  className="w-28 h-28 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 rounded-3xl flex items-center justify-center shadow-2xl"
                  style={{
                    transform: `rotate(${progress * 3.6}deg) scale(${0.85 + progress * 0.0015})`,
                    transition: "all 0.1s ease-out",
                  }}
                >
                  <div className="absolute inset-2 bg-black/20 rounded-2xl" />

                  <span className="relative z-10 text-5xl font-bold text-white">
                    A
                  </span>
                </div>

                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full"
                    style={{
                      transform: `translate(-50%, -50%) rotate(${progress * 3.6 + i * 120}deg) translateX(65px)`,
                      opacity: 0.4 + (progress / 100) * 0.6,
                      transition: "all 0.1s linear",
                    }}
                  />
                ))}
              </div>

              <div className="text-center">
                <div className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {progress}%
                </div>
                <div className="text-xs text-gray-500 tracking-[0.3em] uppercase">
                  Loading Experience
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2 mt-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-white rounded-full animate-float"
              style={{
                top: `${particle.top}%`,
                left: `${particle.left}%`,
                opacity: particle.opacity,
                animationDuration: `${particle.duration}s`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      <style jsx>{`
        @keyframes animate-float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
        .animate-float {
          animation: animate-float infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
