"use client";

import { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { useReducedMotion, motion } from "framer-motion";
import Section from "@/components/Section";
import EducationSection from "@/components/EducationSection";
import CertificationsGrid from "@/components/CertificationsGrid";
import { experiences, projects, skills, personalSkills, aiSkills, aiUses } from "@/content/workData";
import ProgressRail from "@/components/ProgressRail";
import ExperienceVideo from "@/components/work/ExperienceVideo";

const techFont = Space_Grotesk({ subsets: ["latin"], display: "swap" });

// Utility function for chunking arrays (currently unused but kept for future use)
// function chunk<T>(arr: T[], size: number): T[][] {
//   const out: T[][] = [];
//   for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
//   return out;
// }

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
    <main className={`${techFont.className} bg-background`}>
      <ProgressRail progress={progress} accentClassName="bg-white" />
      {/* 1) Intro */}
      <Section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <motion.div {...fadeSlide()}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Building calm systems and strong teams.
          </h1>
          <p className="mt-4 sm:mt-6 text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
            I lead engineering with a user-first mindset and an operations toolkit. I keep scope
            clear, run tight feedback loops, and design pragmatic systems that scale, while
            staying flexible. I like pairing with designers, shaping with PMs, and turning ideas
            into reliable, maintainable software.
          </p>
        </motion.div>
      </Section>

      {/* How I work */}
      <Section className="py-10 sm:py-12 md:py-16">
        <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6" {...fadeSlide()}>
          How work gets done
        </motion.h2>
        <motion.ul className="space-y-3 text-sm sm:text-base leading-relaxed max-w-3xl" {...fadeSlide(0)}>
          <li className="text-foreground/85">
            I thrive in fast-paced teams thanks to hands-on time in VC, startups, and consulting. I take ownership,
            spot problems early, design a plan fast, and execute.
          </li>
          <li className="text-foreground/85">
            I work in a structured way with process optimisation, and I balance speed with quality. People come first,
            so plans adapt when reality changes.
          </li>
          <li className="text-foreground/85">
            I communicate clearly in English, Slovenian, and developing German, and I enjoy deep-tech topics. Learning
            fast and staying curious is part of the job.
          </li>
        </motion.ul>
      </Section>

      {/* 2) Experience Timeline */}
      <Section className="py-12 sm:py-16 md:py-24">
        <motion.h2
          className="font-display text-xl sm:text-2xl md:text-3xl mb-8 sm:mb-10 md:mb-14"
          {...fadeSlide()}
        >
          Experience
        </motion.h2>
        <div className="relative">
          {/* vertical connector */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

          <ul className="space-y-10 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <li key={`${exp.company}-${exp.role}-${idx}`} className="relative">
                  {/* marker */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-3 w-2.5 h-2.5 rounded-full bg-white shadow-[0_0_0_3px_rgba(255,255,255,0.25)]" />
                  <motion.div
                    className="flex flex-col gap-4 sm:gap-6 md:grid md:grid-cols-2 md:gap-10"
                    {...fadeSlide(idx)}
                  >
                    <div className={`${isLeft ? "md:pr-10" : "md:order-2 md:pl-10"} min-w-0`}>
                      <h3 className="font-display text-lg sm:text-xl md:text-2xl break-words">
                        {exp.role} <span className="text-foreground/60">— {exp.company}</span>
                      </h3>
                      <p className="mt-1 text-xs sm:text-sm text-foreground/60 break-words">
                        {exp.location ? `${exp.location} • ` : ""}
                        {exp.from} – {exp.to}
                      </p>
                      <ul className="mt-3 sm:mt-4 space-y-2 sm:space-y-2.5 text-sm sm:text-base leading-relaxed list-disc pl-4 sm:pl-5">
                        {exp.bullets.map((b, i) => (
                          <li key={i} className="text-foreground/85 break-words">
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={`${isLeft ? "md:order-2" : ""} ${exp.video ? "" : ""} min-w-0 w-full`}>
                      {exp.video && (
                        <ExperienceVideo
                          label={exp.video.label}
                          srcWebm={exp.video.srcWebm}
                          srcMp4={exp.video.srcMp4}
                          poster={exp.video.poster}
                          className="w-full max-w-full"
                        />
                      )}
                    </div>
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
      <Section className="py-12 sm:py-16 md:py-24">
        <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8" {...fadeSlide()}>
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
          <Category title="Languages" items={skills.languages} />
          <Category title="Frameworks" items={skills.frameworks} />
          <Category title="Data Platforms" items={skills.data_platforms} />
          <Category title="Tools" items={skills.tools} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10">
          <Category title="Personal & People Skills" items={personalSkills} />
          <div className="min-w-0">
            <h3 className="text-xs sm:text-sm uppercase tracking-widest text-foreground/60 mb-3">AI Skill Set</h3>
            <div className="relative">
              {/* Reserve vertical space for tooltips so the first row can be hovered without overlap */}
              <div className="absolute -top-8 left-0 right-0 h-8" />
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {aiSkills.map((s: string) => (
                  <div key={s} className="relative group">
                    <span className="text-xs px-2 sm:px-2.5 py-1 rounded-full bg-white/10 text-foreground/90 inline-block">
                      {s}
                    </span>
                    <span className="pointer-events-none absolute left-0 -top-8 z-20 whitespace-nowrap text-[10px] sm:text-[11px] px-2 py-1 rounded bg-black/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      I use this for {aiUses[s] ?? "everyday tasks"}.
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        
      </Section>

      {/* 4) Education */}
      <EducationSection />

      {/* Certifications */}
      <CertificationsGrid />

      {/* 5) Projects */}
      <Section className="py-12 sm:py-16 md:py-24">
        <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8" {...fadeSlide()}>
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              className="border border-white/10 rounded-xl p-4 sm:p-6 bg-white/5 backdrop-blur-[1px] min-w-0"
              whileHover={prefersReduced ? undefined : { y: -4 }}
              {...fadeSlide(i)}
            >
              <h3 className="font-display text-lg sm:text-xl break-words">{p.name}</h3>
              <p className="mt-2 text-sm sm:text-base text-foreground/80 leading-relaxed break-words">{p.summary}</p>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-white/10 text-foreground/90 break-words"
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
      <Section className="py-16 sm:py-20 md:py-28">
        <motion.p className="text-sm sm:text-base text-foreground/80" {...fadeSlide()}>
          Thanks for reading — onward.
        </motion.p>
      </Section>
    </main>
  );
}

function Category({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-xs sm:text-sm uppercase tracking-widest text-foreground/60 mb-3">{title}</h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {items.map((it) => (
          <span
            key={it}
            className="text-xs px-2 sm:px-2.5 py-1 rounded-full bg-white/10 text-foreground/90"
          >
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}


