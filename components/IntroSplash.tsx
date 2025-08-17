"use client";

import { useEffect, useMemo, useState } from "react";

type IntroSplashProps = {
  onDone: () => void;
};

export default function IntroSplash({ onDone }: IntroSplashProps) {
  const [hidden, setHidden] = useState(false);
  const [closing, setClosing] = useState(false);
  const [preBlack, setPreBlack] = useState(true);

  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReduced) {
      // Skip quickly when user prefers reduced motion
      const t = setTimeout(() => {
        setClosing(true);
        setTimeout(() => {
          setHidden(true);
          onDone();
        }, 50);
      }, 50);
      return () => clearTimeout(t);
    }

    // First show a pure black screen for smoother visual load, then the text
    const preBlackMs = 500;
    const showMs = 2200; // longer display time
    const fadeMs = 700;  // longer fade duration

    const toShowText = setTimeout(() => setPreBlack(false), preBlackMs);
    const toClose = setTimeout(() => setClosing(true), preBlackMs + showMs);
    const toHide = setTimeout(() => {
      setHidden(true);
      onDone();
    }, preBlackMs + showMs + fadeMs);

    return () => {
      clearTimeout(toShowText);
      clearTimeout(toClose);
      clearTimeout(toHide);
    };
  }, [onDone, prefersReduced]);

  if (hidden) return null;

  const words = ["keep", "it", "simple"];

  return (
    <div
      className={
        "fixed inset-0 z-50 flex items-center justify-center bg-background text-foreground " +
        (closing ? "opacity-0 transition-opacity duration-700" : "opacity-100")
      }
      role="dialog"
      aria-label="Intro"
    >
      {preBlack ? (
        <div className="absolute inset-0 bg-black" aria-hidden />
      ) : (
        <div className="intro-text flex gap-3 text-4xl md:text-6xl lg:text-7xl font-display select-none">
          {words.map((w, i) => (
            <span key={w} className="intro-word" style={{ animationDelay: `${i * 260}ms` }}>
              {w}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}


