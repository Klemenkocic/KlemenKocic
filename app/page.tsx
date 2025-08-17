"use client";

import Link from "next/link";
import { motion, useReducedMotion, TargetAndTransition } from "framer-motion";
import { useCallback } from "react";

export default function Home() {
  const prefersReduced = useReducedMotion();

  const handleMove = useCallback<
    React.PointerEventHandler<HTMLAnchorElement>
  >((e) => {
    const target = e.currentTarget as HTMLAnchorElement;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--x", `${x}px`);
    target.style.setProperty("--y", `${y}px`);
  }, []);

  const baseHover: TargetAndTransition = prefersReduced
    ? {}
    : { scale: 1.02 };

  return (
    <main className="landing relative min-h-screen grid md:grid-cols-2 grid-cols-1">
      {/* Work */}
      <Link
        href="/work"
        aria-label="Go to Work"
        className="split-link grain group relative flex items-center justify-center border-b md:border-b-0 md:border-r border-white/10 focus:outline-none"
        style={{
          // Use white accent for glow
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore custom CSS var
          "--accent": "255,255,255",
        }}
        onPointerMove={handleMove}
      >
        <motion.div
          initial={false}
          whileHover={baseHover}
          whileFocus={baseHover}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="w-full h-full p-10 md:p-16 text-center select-none"
        >
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight text-white group-hover:drop-shadow-[0_4px_24px_rgba(255,255,255,0.35)]">
              Work
            </h2>
            <p className="mt-4 text-foreground/80 text-base md:text-lg">
              Professional Journey
            </p>
          </div>
        </motion.div>
        <span aria-hidden className="absolute inset-y-0 right-0 w-px bg-white/10 md:block hidden" />
      </Link>

      {/* Life */}
      <Link
        href="/life"
        aria-label="Go to Life"
        className="split-link grain group relative flex items-center justify-center focus:outline-none"
        style={{
          // FF7A59 -> (255,122,89)
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore custom CSS var
          "--accent": "255,122,89",
        }}
        onPointerMove={handleMove}
      >
        <motion.div
          initial={false}
          whileHover={baseHover}
          whileFocus={baseHover}
          transition={{ type: "spring", stiffness: 260, damping: 25 }}
          className="w-full h-full p-10 md:p-16 text-center select-none"
        >
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-6xl md:text-7xl lg:text-8xl tracking-tight text-life group-hover:drop-shadow-[0_4px_24px_rgba(255,122,89,0.35)]">
              Life
            </h2>
            <p className="mt-4 text-foreground/80 text-base md:text-lg">
              Personal Journey
            </p>
          </div>
        </motion.div>
      </Link>

      {/* Focus ring for accessibility */}
      <style jsx>{`
        a.split-link:focus-visible {
          outline: 2px solid rgba(255, 255, 255, 0.6);
          outline-offset: -4px;
        }
        @media (prefers-reduced-motion: reduce) {
          :global(.group:hover .group-hover\:drop-shadow-\[0_4px_24px_rgba\(10,37,64,0\.35\)\]) {
            filter: none !important;
          }
          :global(.group:hover .group-hover\:drop-shadow-\[0_4px_24px_rgba\(255,122,89,0\.35\)\]) {
            filter: none !important;
          }
        }
      `}</style>
    </main>
  );
}
