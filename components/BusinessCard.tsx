"use client";

import Image from "next/image";
import { motion, useReducedMotion, useMotionValue, useSpring, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import FallingEmojiGame from "./FallingEmojiGame";

const LONG_PRESS_MS = 1500;

export default function BusinessCard() {
  const prefersReduced = useReducedMotion();
  const [isGameOpen, setIsGameOpen] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const longPressTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 150,
    damping: 35,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 150,
    damping: 35,
  });

  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 35,
  });
  const shadowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 35,
  });

  const boxShadow = useMotionTemplate`${shadowX}px ${shadowY}px 20px rgba(0, 0, 0, 0.4), 0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 10px 25px -5px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.05)`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReduced || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) / (rect.width / 2);
    const deltaY = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(deltaX);
    mouseY.set(deltaY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const clearLongPress = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current);
      longPressTimer.current = null;
    }
  };

  const startLongPress = () => {
    clearLongPress();
    longPressTimer.current = setTimeout(() => {
      setIsGameOpen(true);
      longPressTimer.current = null;
    }, LONG_PRESS_MS);
  };

  const fadeSlide = {
    initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: prefersReduced
      ? { duration: 0.001 }
      : { duration: 0.6, ease: "easeOut" },
  };

  return (
    <>
    <motion.div
      ref={cardRef}
      className="relative border border-white/10 rounded-xl p-6 sm:p-8 bg-white/5 backdrop-blur-sm mb-12 sm:mb-16 will-change-transform group"
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: prefersReduced ? 0 : rotateX,
        rotateY: prefersReduced ? 0 : rotateY,
        boxShadow: prefersReduced
          ? "0 20px 40px -10px rgba(0, 0, 0, 0.5), 0 10px 25px -5px rgba(0, 0, 0, 0.3)"
          : boxShadow,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={prefersReduced ? {} : { scale: 1.02, transition: { duration: 0.3 } }}
      {...fadeSlide}
    >
      <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
        {/* Profile Photo */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
          <Image
            src="/images/profile.jpg"
            alt="Klemen Kocic"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info Section */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
            {/* Name and Title */}
            <div className="min-w-0">
              <h1 className="font-display text-2xl sm:text-3xl tracking-tight">
                Klemen Kocic
              </h1>
              <p className="text-sm sm:text-base text-foreground/90 mt-1 font-medium">
                Interaction Architect &amp; AI Solutions Engineer at Luminous Group
              </p>
              <p className="text-xs sm:text-sm text-foreground/65 mt-1.5 max-w-xl">
                I find where AI fits in real work. I build the systems behind it. I work alongside the people who use them.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/in/klemen-kocic"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <svg
                  className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/Klemenkocic"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="GitHub Profile"
              >
                <svg
                  className="w-5 h-5 text-foreground/70 group-hover:text-foreground transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-3 text-sm text-foreground/70">
            <a
              href="mailto:klemen.kocic@gmail.com"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              klemen.kocic@gmail.com
            </a>
            <span className="hidden sm:inline text-foreground/40">•</span>
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              Munich, Germany
            </div>
            <span className="hidden sm:inline text-foreground/40">•</span>
            <a
              href="/Klemen_Kocic_CV.pdf"
              download
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download CV
            </a>
          </div>
        </div>
      </div>

      {/* Hidden easter-egg trigger: long-press the small ✦ for ~1.5s */}
      <button
        type="button"
        aria-label="Easter egg, long-press to play"
        title="Long-press to play"
        onPointerDown={startLongPress}
        onPointerUp={clearLongPress}
        onPointerLeave={clearLongPress}
        onPointerCancel={clearLongPress}
        onContextMenu={(e) => e.preventDefault()}
        className="absolute bottom-2 right-2 text-foreground/30 hover:text-foreground/60 transition-colors text-sm leading-none select-none touch-none"
      >
        ✦
      </button>
    </motion.div>

    {/* Game Modal */}
    <FallingEmojiGame isOpen={isGameOpen} onClose={() => setIsGameOpen(false)} />
    </>
  );
}
