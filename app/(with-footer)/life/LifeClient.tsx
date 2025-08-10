"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion, motion, useScroll, useTransform } from "framer-motion";
import Section from "@/components/Section";
import ProgressRail from "@/components/ProgressRail";
import { chapters } from "@/content/lifeData";

export default function LifeClient() {
  const prefersReduced = useReducedMotion() ?? false;
  const [progress, setProgress] = useState(0);

  // Track progress based on scroll position across the whole document
  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const p = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="bg-background">
      <ProgressRail progress={progress} accentClassName="bg-life" />

      {chapters.map((ch, idx) => (
        <ChapterSection key={ch.title} chapter={ch} index={idx} reduced={prefersReduced} />
      ))}
    </main>
  );
}

function ChapterSection({
  chapter,
  index,
  reduced,
}: {
  chapter: { title: string; years: string; body: string; image: string };
  index: number;
  reduced: boolean;
}) {
  const isEven = index % 2 === 0;

  // Parallax: small translateY mapped to viewport scroll within section
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const translateY = useTransform(scrollYProgress, [0, 1], [0, 30]);

  return (
    <Section className="py-20 md:py-28">
      <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* image left/right alternate */}
        <motion.div
          className={`${isEven ? "order-1" : "order-1 md:order-2"} relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5`}
          style={reduced ? undefined : { y: translateY as any }}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={reduced ? { duration: 0.001 } : { duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={chapter.image}
            alt={chapter.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={index === 0}
            loading={index === 0 ? "eager" : "lazy"}
          />
        </motion.div>

        <motion.div
          className={`${isEven ? "order-2" : "order-2 md:order-1"}`}
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={reduced ? { duration: 0.001 } : { duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-foreground/70 text-sm mb-2 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-life" aria-hidden />
            <span>{chapter.years}</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-foreground">
            <span className="text-life mr-2">{String(index + 1).padStart(2, "0")}</span>
            {chapter.title}
          </h2>
          <p className="mt-4 md:mt-5 leading-relaxed text-foreground/85 max-w-prose">
            {chapter.body}
          </p>

          {/* Special SVG map for Eurotrip */}
          {chapter.title === "The Eurotrip" && (
            <motion.div
              className="mt-6 md:mt-8 bg-white/5 border border-white/10 rounded-lg p-4"
              initial={reduced ? { opacity: 0 } : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={reduced ? { duration: 0.001 } : { duration: 0.5, ease: "easeOut" }}
            >
              <EurotripSVG />
            </motion.div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}

function EurotripSVG() {
  // Lightweight, stylistic path with dots and labels
  const cities = useMemo(
    () => [
      { name: "Ljubljana", x: 10, y: 60 },
      { name: "Bucharest", x: 85, y: 70 },
      { name: "Prague", x: 35, y: 40 },
      { name: "Bratislava", x: 45, y: 50 },
      { name: "Berlin", x: 30, y: 20 },
      { name: "Amsterdam", x: 20, y: 25 },
      { name: "Brussels", x: 18, y: 32 },
      { name: "Paris", x: 12, y: 40 },
      { name: "Zurich", x: 18, y: 55 },
      { name: "Ljubljana", x: 10, y: 60 },
    ],
    []
  );

  const pathD = useMemo(() => {
    return cities
      .map((c, i) => `${i === 0 ? "M" : "L"}${c.x} ${c.y}`)
      .join(" ");
  }, [cities]);

  return (
    <svg viewBox="0 0 100 80" className="w-full h-auto" aria-hidden>
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(255,122,89,0.3)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0.2)" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="100" height="80" fill="url(#g)" opacity="0.06" />
      <path d={pathD} fill="none" stroke="rgba(255,122,89,0.8)" strokeWidth="0.6" />
      {cities.map((c, i) => (
        <g key={`${c.name}-${i}`}>
          <circle cx={c.x} cy={c.y} r="1.1" fill="rgba(255,122,89,1)" />
          {i % 2 === 0 && (
            <text
              x={c.x + 1.5}
              y={c.y - 1.5}
              fontSize="3"
              fill="rgba(245,247,250,0.85)"
            >
              {c.name}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}


