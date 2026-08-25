"use client";

import { useEffect, useMemo, useState } from "react";

type IntroSplashProps = {
  onDone: () => void;
};

/**
 * The site's opening line, revealed phrase by phrase.
 *
 * Split into phrases rather than words: at eleven words a per-word stagger
 * runs too long and wraps unpredictably on narrow screens. Phrases keep the
 * grammar intact on every line.
 */
const PHRASES = ["Planting trees", "in the shade of which", "I will never sit."];

const PRE_BLACK_MS = 500;
const SHOW_MS = 3400;
const FADE_MS = 700;
const PHRASE_STAGGER_MS = 420;

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
    const toShowText = setTimeout(() => setPreBlack(false), PRE_BLACK_MS);
    const toClose = setTimeout(() => setClosing(true), PRE_BLACK_MS + SHOW_MS);
    const toHide = setTimeout(() => {
      setHidden(true);
      onDone();
    }, PRE_BLACK_MS + SHOW_MS + FADE_MS);

    return () => {
      clearTimeout(toShowText);
      clearTimeout(toClose);
      clearTimeout(toHide);
    };
  }, [onDone, prefersReduced]);

  if (hidden) return null;

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
        // Block layout, not flex: a column flex container sizes to max-content
        // and overflows narrow viewports. Block spans inherit the width they
        // are given, so the line stays inside the screen at 320px.
        <p className="intro-text w-full text-xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-snug text-center select-none px-5">
          {PHRASES.map((phrase, i) => (
            <span
              key={phrase}
              className="intro-line block"
              style={{ animationDelay: `${i * PHRASE_STAGGER_MS}ms` }}
            >
              {phrase}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
