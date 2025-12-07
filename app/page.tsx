"use client";

import Link from "next/link";
import { motion, useReducedMotion, TargetAndTransition } from "framer-motion";
import { useCallback, useState } from "react";
import ImageModal from "@/components/ImageModal";

export default function Home() {
  const prefersReduced = useReducedMotion();
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <div className="relative min-h-screen">
      <main className="landing grid md:grid-cols-2 grid-cols-1 min-h-screen">
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
          className="w-full h-full p-6 sm:p-10 md:p-16 text-center select-none"
        >
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-white group-hover:drop-shadow-[0_4px_24px_rgba(255,255,255,0.35)]">
              Work
            </h2>
            <p className="mt-3 sm:mt-4 text-foreground/80 text-sm sm:text-base md:text-lg">
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
          className="w-full h-full p-6 sm:p-10 md:p-16 text-center select-none"
        >
          <div className="mx-auto max-w-xl">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-life group-hover:drop-shadow-[0_4px_24px_rgba(255,122,89,0.35)]">
              Life
            </h2>
            <p className="mt-3 sm:mt-4 text-foreground/80 text-sm sm:text-base md:text-lg">
              Personal Journey
            </p>
          </div>
        </motion.div>
      </Link>
    </main>

    {/* Scalable Team Button */}
    <motion.button
      onClick={() => setIsModalOpen(true)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      className="fixed bottom-6 inset-x-0 mx-auto w-fit z-10 px-8 sm:px-12 py-4 sm:py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 group"
      aria-label="View message for Scalable Team"
    >
      <span className="text-2xl sm:text-3xl text-white/80 group-hover:text-white transition-colors flex items-center gap-4">
        <svg className="w-6 h-6 sm:w-8 sm:h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
        For the Scalable Team
      </span>
    </motion.button>

    {/* Image Modal */}
    <ImageModal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      imageSrc="/images/scalable-team.png"
      imageAlt="Message for the Scalable Team"
    />

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
    </div>
  );
}
