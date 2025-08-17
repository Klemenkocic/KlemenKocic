"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInViewVideo } from "@/hooks/useInViewVideo";

type Props = {
  label: string; // e.g., "Blocklords — PM clip"
  srcWebm: string; // placeholder .webm
  srcMp4?: string; // optional fallback
  poster?: string; // placeholder poster
  className?: string; // to match layout grid
};

export default function ExperienceVideo({
  label,
  srcWebm,
  srcMp4,
  poster,
  className = "",
}: Props) {
  const { videoRef, hasLoaded, reducedMotion } = useInViewVideo({
    srcWebm,
    srcMp4,
    poster,
  });

  // Match the same fade/slide animation as text
  const fadeSlide = {
    initial: reducedMotion ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: reducedMotion
      ? { duration: 0.001 }
      : { duration: 0.6, ease: "easeOut" },
  };

  return (
    <motion.div 
      className={`experience-video ${className}`}
      {...fadeSlide}
    >
      <figure aria-label={label} className="relative aspect-video bg-white/5 rounded-xl overflow-hidden">
        {/* Loading shimmer/skeleton */}
        {!hasLoaded && !reducedMotion && (
          <div className="absolute inset-0 bg-white/5 animate-pulse" />
        )}
        
        {/* Fallback placeholder when no video/poster */}
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
          {/* Sources are dynamically added by the hook */}
        </video>
        
        {/* Show static image for reduced motion */}
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
