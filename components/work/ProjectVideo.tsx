"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInViewVideo } from "@/hooks/useInViewVideo";

type Props = {
  label: string;
  srcWebm: string;
  srcMp4?: string;
  poster?: string;
  format?: "laptop" | "phone";
  className?: string;
};

export default function ProjectVideo({
  label,
  srcWebm,
  srcMp4,
  poster,
  format = "laptop",
  className = "",
}: Props) {
  const { videoRef, hasLoaded, reducedMotion } = useInViewVideo({
    srcWebm,
    srcMp4,
    poster,
  });

  const fadeSlide = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: reducedMotion
      ? { duration: 0.001 }
      : { duration: 0.6, ease: "easeOut" },
  };

  // iPhone-style phone format
  if (format === "phone") {
    return (
      <motion.div
        className={`project-video ${className}`}
        {...fadeSlide}
      >
        {/* iPhone Frame Container */}
        <div className="relative mx-auto w-fit">
          {/* iPhone device frame with shadow - increased by 5% */}
          <div className="relative w-[273px] sm:w-[315px] mx-auto">
            {/* Device border and shadow */}
            <div className="relative rounded-[2.5rem] bg-black p-3 shadow-2xl border-[12px] border-black">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-7 bg-black rounded-b-3xl z-10" />

              {/* Screen content */}
              <figure aria-label={label} className="relative aspect-[9/19.5] bg-white/5 rounded-[1.8rem] overflow-hidden">
                {/* Loading shimmer */}
                {!hasLoaded && !reducedMotion && (
                  <div className="absolute inset-0 bg-white/5 animate-pulse" />
                )}

                {/* Fallback placeholder */}
                {(!poster || (!srcWebm && !srcMp4)) && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
                    <div className="text-center">
                      <div className="text-white/40 text-xs font-medium">Video Preview</div>
                      <div className="text-white/30 text-[10px] mt-1">{label}</div>
                    </div>
                  </div>
                )}

                <video
                  ref={videoRef}
                  playsInline
                  muted
                  loop
                  preload="metadata"
                  poster={poster || "/videos/work/placeholder.svg"}
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-label={label}
                >
                  {/* Sources dynamically added by hook */}
                </video>

                {/* Static image for reduced motion */}
                {reducedMotion && poster && (
                  <Image
                    src={poster}
                    alt={label}
                    width={300}
                    height={650}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                )}

                <figcaption className="sr-only">{label}</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  // Laptop format (original design)
  return (
    <motion.div
      className={`project-video ${className}`}
      {...fadeSlide}
    >
      <figure aria-label={label} className="relative aspect-video bg-white/5 rounded-xl overflow-hidden shadow-lg">
        {/* Loading shimmer */}
        {!hasLoaded && !reducedMotion && (
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
        )}

        {/* Fallback placeholder */}
        {(!poster || (!srcWebm && !srcMp4)) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-white/5 to-white/10">
            <div className="text-center">
              <div className="text-white/40 text-sm font-medium">Video Preview</div>
              <div className="text-white/30 text-xs mt-1">{label}</div>
            </div>
          </div>
        )}

        <video
          ref={videoRef}
          playsInline
          muted
          loop
          preload="metadata"
          poster={poster || "/videos/work/placeholder.svg"}
          className="absolute inset-0 w-full h-full object-cover"
          aria-label={label}
        >
          {/* Sources dynamically added by hook */}
        </video>

        {/* Static image for reduced motion */}
        {reducedMotion && poster && (
          <Image
            src={poster}
            alt={label}
            width={640}
            height={360}
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}

        <figcaption className="sr-only">{label}</figcaption>
      </figure>
    </motion.div>
  );
}
