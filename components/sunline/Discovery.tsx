"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

/**
 * How Sunline gets found.
 *
 * The tension in the brief was "hidden, but not so hidden that nobody finds
 * it". The resolution is layers: each one catches a different kind of
 * visitor, and none of them puts a "play a game" button on the page.
 *
 *   1. Patience  — linger and a seedling sprouts. On theme: the visitor who
 *                  stays is the one who would enjoy it.
 *   2. Curiosity — type "grow" anywhere.
 *   3. Developer — a console message, and lines in robots.txt.
 *
 * The route itself (/plant) is real and linkable, because hidden triggers do
 * not spread and links do.
 */

/** Time on the page before the seedling appears. */
const SPROUT_AFTER_MS = 75_000;
const WORD = "grow";

export default function Discovery() {
  const router = useRouter();
  const pathname = usePathname();
  const [sprouted, setSprouted] = useState(false);
  const typed = useRef("");

  // The game's own page should not advertise itself.
  const active = pathname !== "/plant";

  useEffect(() => {
    if (!active) return;
    // eslint-disable-next-line no-console
    console.log(
      "%c      🌱\n" +
        "%cTrees take time.\n" +
        "Type ‘grow’, or visit /plant.",
      "font-size:14px",
      "color:#A8DB57;font-family:ui-monospace,monospace;line-height:1.5",
    );
  }, [active]);

  useEffect(() => {
    if (!active) return;
    const t = setTimeout(() => setSprouted(true), SPROUT_AFTER_MS);
    return () => clearTimeout(t);
  }, [active, pathname]);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      // Ignore anything typed into a real field, and any modified keystroke.
      const el = e.target as HTMLElement | null;
      if (el && /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName)) return;
      if (el?.isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key.length !== 1) return;

      typed.current = (typed.current + e.key.toLowerCase()).slice(-WORD.length);
      if (typed.current === WORD) {
        typed.current = "";
        router.push("/plant");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, router]);

  if (!active || !sprouted) return null;

  return (
    <Link
      href="/plant"
      aria-label="A seedling has sprouted"
      title="Something grew here"
      className="group fixed bottom-4 right-4 z-40 grid h-9 w-9 place-items-center rounded-full text-foreground/25 transition-colors hover:text-foreground/70 focus-visible:text-foreground/70"
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
        {/* a two-leaf seedling: small enough to be missable, odd enough to click */}
        <path
          d="M12 21v-7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 14c0-3 2-5 5-5 0 3-2 5-5 5Z"
          className="origin-bottom transition-transform duration-500 group-hover:-rotate-6"
          fill="currentColor"
        />
        <path
          d="M12 15c0-2.6-1.8-4.4-4.4-4.4 0 2.6 1.8 4.4 4.4 4.4Z"
          className="origin-bottom transition-transform duration-500 group-hover:rotate-6"
          fill="currentColor"
        />
      </svg>
    </Link>
  );
}
