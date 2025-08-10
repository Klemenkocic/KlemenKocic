"use client";

import { useEffect, useState } from "react";
import { useReducedMotion, motion } from "framer-motion";
import Section from "@/components/Section";
import { experiences, projects, skills } from "@/content/workData";
import ProgressRail from "@/components/ProgressRail";

export default function WorkClient() {
  const prefersReduced = useReducedMotion();
  const [progress, setProgress] = useState(0);

  // Track document scroll progress for the left-edge rail
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

  const fadeSlide = (i = 0) => ({
    initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: prefersReduced
      ? { duration: 0.001 }
      : { duration: 0.6, ease: "easeOut", delay: i * 0.03 },
  });

  return (
    <main className="bg-background">
      <ProgressRail progress={progress} accentClassName="bg-work" />
      {/* 1) Intro */}
      <Section className="py-24 md:py-32">
        <motion.div {...fadeSlide()}>
          <h1 className="font-display text-4xl md:text-6xl tracking-tight">
            Building calm systems and strong teams.
          </h1>
          <p className="mt-6 text-foreground/80 leading-relaxed max-w-3xl">
            I lead engineering with a product-first mindset and an operations toolkit. My focus
            is clear scope, tight feedback loops, and pragmatic architecture that scales. I enjoy
            pairing with designers, shaping with PMs, and translating ideas into reliable
            software.
          </p>
          <p className="mt-4 text-foreground/80 leading-relaxed max-w-3xl">
            As a coach, I elevate people through structure and care: clear goals, thoughtful
            reviews, and steady rituals. The result is steady delivery without drama.
          </p>
        </motion.div>
      </Section>

      {/* 2) Experience Timeline */}
      <Section className="py-16 md:py-24">
        <motion.h2
          className="font-display text-2xl md:text-3xl mb-10 md:mb-14"
          {...fadeSlide()}
        >
          Experience
        </motion.h2>
        <div className="relative">
          {/* vertical connector */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

          <ul className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li key={`${exp.company}-${exp.role}-${idx}`} className="relative">
                  {/* marker */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-3 w-2.5 h-2.5 rounded-full bg-work shadow-[0_0_0_3px_rgba(10,37,64,0.25)]" />
                  <motion.div
                    className="md:grid md:grid-cols-2 md:gap-10"
                    {...fadeSlide(idx)}
                  >
                    <div className={`${isLeft ? "md:pr-10" : "md:order-2 md:pl-10"}`}>
                      <h3 className="font-display text-xl md:text-2xl">
                        {exp.role} <span className="text-foreground/60">— {exp.company}</span>
                      </h3>
                      <p className="mt-1 text-sm text-foreground/60">
                        {exp.location ? `${exp.location} • ` : ""}
                        {exp.from} – {exp.to}
                      </p>
                      <ul className="mt-4 space-y-2.5 leading-relaxed list-disc pl-5">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="text-foreground/85">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${isLeft ? "md:order-2" : ""}`}></div>
                  </motion.div>

                  {/* mobile connector */}
                  <div className="md:hidden absolute left-3 top-0 bottom-0 w-px bg-white/10" />
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      {/* 3) Skills & Tools */}
      <Section className="py-16 md:py-24">
        <motion.h2 className="font-display text-2xl md:text-3xl mb-8" {...fadeSlide()}>
          Skills & Tools
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Category title="Languages" items={skills.languages} />
          <Category title="Frameworks" items={skills.frameworks} />
          <Category title="Data Platforms" items={skills.data_platforms} />
          <Category title="Tools" items={skills.tools} />
        </div>
      </Section>

      {/* 4) Education & Certifications */}
      <Section className="py-16 md:py-24">
        <motion.h2 className="font-display text-2xl md:text-3xl mb-8" {...fadeSlide()}>
          Education & Certifications
        </motion.h2>
        <motion.div className="space-y-6" {...fadeSlide()}>
          <div>
            <p className="font-medium">B.Sc. International Business</p>
            <p className="text-foreground/70 text-sm">University of Ljubljana (2019–2023)</p>
          </div>
          <div>
            <p className="font-medium">Exchanges</p>
            <p className="text-foreground/70 text-sm">
              University of Seoul (Korea), ISCTE Lisbon (Portugal)
            </p>
          </div>
          <div>
            <p className="font-medium mb-2">Certifications</p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-foreground/85">
              {skills.certifications.map((c) => (
                <li key={c} className="pl-3 relative">
                  <span className="absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-work" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </Section>

      {/* 5) Projects */}
      <Section className="py-16 md:py-24">
        <motion.h2 className="font-display text-2xl md:text-3xl mb-8" {...fadeSlide()}>
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              className="border border-white/10 rounded-xl p-6 bg-white/5 backdrop-blur-[1px]"
              whileHover={prefersReduced ? undefined : { y: -4 }}
              {...fadeSlide(i)}
            >
              <h3 className="font-display text-xl">{p.name}</h3>
              <p className="mt-2 text-foreground/80 leading-relaxed">{p.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-foreground/90"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* 6) Closer */}
      <Section className="py-20 md:py-28">
        <motion.p className="text-foreground/80" {...fadeSlide()}>
          Thanks for reading — onward.
        </motion.p>
      </Section>
    </main>
  );
}

function Category({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm uppercase tracking-widest text-foreground/60 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-foreground/90"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}


