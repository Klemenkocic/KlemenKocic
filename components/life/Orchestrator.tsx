"use client";

import { useEffect, useMemo, useRef } from "react";
import { chapters } from "@/content/life.data";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TrackHorizontal from "./TrackHorizontal";
import StackVertical from "./StackVertical";
import SectionHero from "./SectionHero";
import "@/styles/life.css";

gsap.registerPlugin(ScrollTrigger);

export default function Orchestrator() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      gsap.ticker.tick();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // sync ScrollTrigger with Lenis
    lenis.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(document.documentElement, {
      scrollTop(value) {
        if (arguments.length) lenis.scrollTo(value as number, { immediate: true });
        return lenis.scroll as unknown as number;
      },
    });
    ScrollTrigger.addEventListener("refresh", () => lenis.update());
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
      ScrollTrigger.killAll();
    };
  }, [prefersReduced]);

  // keyboard nav: jump between sections
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!rootRef.current) return;
      const sections = Array.from(rootRef.current.querySelectorAll<HTMLElement>("section[data-chapter]"));
      if (!sections.length) return;
      const y = window.scrollY + 1;
      const idx = sections.findIndex((s) => s.offsetTop + s.offsetHeight > y);
      const current = idx === -1 ? sections.length - 1 : idx;
      const next = Math.min(sections.length - 1, current + 1);
      const prev = Math.max(0, current - 1);
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        sections[next].scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      }
      if (["ArrowUp", "PageUp"].includes(e.key)) {
        sections[prev].scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prefersReduced]);

  return (
    <div ref={rootRef} className="life-root grain">
      {chapters.map((c, i) => {
        const theme = `theme-${c.theme.bg}`;
        const common = { id: c.id, title: c.title, copy: c.copy, images: c.images, index: i } as const;
        return (
          <section key={c.id} data-chapter className={`${theme}`}>
            {c.kind === "hero" ? (
              <SectionHero {...common} />
            ) : c.dir === "horizontal" ? (
              <TrackHorizontal {...common} />
            ) : (
              <StackVertical {...common} />
            )}
          </section>
        );
      })}
    </div>
  );
}


