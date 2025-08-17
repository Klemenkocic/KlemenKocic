"use client";

import { useEffect, useRef, useState } from "react";

interface UseInViewVideoOptions {
  srcWebm: string;
  srcMp4?: string;
  poster?: string;
  threshold?: number;
}

// Singleton observer for all videos
let globalObserver: IntersectionObserver | null = null;
let observerRefCount = 0;

export function useInViewVideo({
  srcWebm,
  srcMp4,
  poster,
  threshold = 0.35,
}: UseInViewVideoOptions) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const exitTimeoutRef = useRef<NodeJS.Timeout>();

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reducedMotion) return;

    // Create or reuse singleton observer
    if (!globalObserver) {
      globalObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const target = entry.target as HTMLVideoElement;
            const callback = (target as any).__inViewCallback;
            if (callback) {
              callback(entry.isIntersecting);
            }
          });
        },
        {
          threshold,
          rootMargin: "50px",
        }
      );
    }
    observerRefCount++;

    // Store callback on the element
    (video as any).__inViewCallback = (inView: boolean) => {
      setIsInView(inView);
      
      if (inView) {
        // Clear any pending cleanup
        if (exitTimeoutRef.current) {
          clearTimeout(exitTimeoutRef.current);
          exitTimeoutRef.current = undefined;
        }

        // Load sources if not already loaded
        if (!hasLoaded && video) {
          // Remove any existing sources
          while (video.firstChild) {
            video.removeChild(video.firstChild);
          }

          // Add sources - prioritize WebM if available, otherwise use MP4
          if (srcWebm) {
            const sourceWebm = document.createElement("source");
            sourceWebm.src = srcWebm;
            sourceWebm.type = "video/webm";
            video.appendChild(sourceWebm);
          }

          if (srcMp4) {
            const sourceMp4 = document.createElement("source");
            sourceMp4.src = srcMp4;
            sourceMp4.type = "video/mp4";
            video.appendChild(sourceMp4);
          }

          video.load();
          setHasLoaded(true);
        }

        // Attempt to play
        video.play().catch(() => {
          // Silently handle autoplay failures (browser restrictions)
        });
      } else {
        // Pause immediately when out of view
        video.pause();

        // Schedule cleanup after 10 seconds
        exitTimeoutRef.current = setTimeout(() => {
          if (!isInView && video) {
            // Remove sources to free memory
            while (video.firstChild) {
              video.removeChild(video.firstChild);
            }
            video.load(); // Reset video element
            setHasLoaded(false);
          }
        }, 10000);
      }
    };

    globalObserver.observe(video);

    return () => {
      if (globalObserver && video) {
        globalObserver.unobserve(video);
        delete (video as any).__inViewCallback;
      }

      // Clean up singleton if no more refs
      observerRefCount--;
      if (observerRefCount === 0 && globalObserver) {
        globalObserver.disconnect();
        globalObserver = null;
      }

      // Clear any pending timeout
      if (exitTimeoutRef.current) {
        clearTimeout(exitTimeoutRef.current);
      }
    };
  }, [srcWebm, srcMp4, hasLoaded, isInView, threshold, reducedMotion]);

  return {
    videoRef,
    isInView,
    hasLoaded,
    reducedMotion,
  };
}
