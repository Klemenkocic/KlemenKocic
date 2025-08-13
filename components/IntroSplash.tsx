"use client";

import { useEffect, useMemo, useState } from "react";

type IntroSplashProps = {
  onDone: () => void;
};

export default function IntroSplash({ onDone }: IntroSplashProps) {
  const [hidden, setHidden] = useState(false);
  const [closing, setClosing] = useState(false);

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

    const showMs = 1200; // quick, elegant intro
    const fadeMs = 350;

    const toClose = setTimeout(() => setClosing(true), showMs);
    const toHide = setTimeout(() => {
      setHidden(true);
      onDone();
    }, showMs + fadeMs);

    return () => {
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
        (closing ? "opacity-0 transition-opacity duration-300" : "opacity-100")
      }
      role="dialog"
      aria-label="Intro"
    >
      <div className="intro-text flex gap-2 text-2xl md:text-4xl font-display select-none">
        {words.map((w, i) => (
          <span key={w} className="intro-word" style={{ animationDelay: `${i * 120}ms` }}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}


