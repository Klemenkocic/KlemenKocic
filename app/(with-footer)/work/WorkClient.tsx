"use client";

import { useEffect, useState } from "react";
import { Space_Grotesk } from "next/font/google";
import { useReducedMotion, motion } from "framer-motion";
import Section from "@/components/Section";
import EducationSection from "@/components/EducationSection";
import CertificationsGrid from "@/components/CertificationsGrid";
import BusinessCard from "@/components/BusinessCard";
import { experiences, projects, skills, personalSkills, aiEngineering, aiTools, aiUses, blogPosts } from "@/content/workData";
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
    <main className={`${techFont.className} bg-background overflow-x-hidden`}>
      <ProgressRail progress={progress} accentClassName="bg-white" />

      {/* Business Card */}
      <Section className="py-16 sm:py-20 md:py-24 lg:py-32">
        <BusinessCard />
      </Section>

      {/* 1) Intro */}
      <Section className="py-0 sm:py-0 md:py-0 lg:py-0">
        <motion.div {...fadeSlide()}>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            Hi, I&apos;m Klemen.
          </h1>
          <div className="mt-4 sm:mt-6 space-y-4 text-sm sm:text-base text-foreground/80 leading-relaxed max-w-3xl">
            <p>
              I build AI architecture that keeps humans in the loop. More
              precisely, I work on interaction architecture, across three
              layers: how agents get the right information at the right time
              (retrieval, vectors, the structure of context); how humans and
              agents work together (transparency, pacing, deliberate
              coordination); and what gets surfaced back to the user at the
              right moment.
            </p>
            <p>
              I focus on understanding what people actually need and finding
              where AI can help them specifically. A lot of people are lost
              in the pace AI is moving at right now. I stay close to the
              work, so I can give real help to real people.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* How I work */}
      <Section className="py-10 sm:py-12 md:py-16">
        <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6" {...fadeSlide()}>
          How I work
        </motion.h2>
        <motion.div className="space-y-4 text-sm sm:text-base leading-relaxed max-w-3xl" {...fadeSlide(0)}>
          <p className="text-foreground/85">
            I care about the team, I work hard, I tell the truth, and I try to understand
            before I optimise. I&apos;m at my best with people who want clarity, momentum,
            and outcomes.
          </p>
          <p className="text-foreground/85">
            Hands-on by default. Asking questions early, surfacing problems before they
            harden. The work lives between people, product, and technology — being
            comfortable in all three is what makes the difference.
          </p>
          <p className="text-foreground/85">
            Sport taught me to read people before reading data. Coaching taught me
            patience — and that the best intervention is usually a good question, not
            a good answer. Showing up is the whole thing.
          </p>
        </motion.div>
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

      {/* 2b) Projects */}
      <Section className="py-12 sm:py-16 md:py-24">
        <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8" {...fadeSlide()}>
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              className="border border-white/10 rounded-xl p-4 sm:p-6 bg-white/5 backdrop-blur-[1px] min-w-0 flex flex-col"
              {...fadeSlide(i)}
            >
              <div className="flex items-start justify-between gap-3 mb-2 sm:mb-3">
                <h3 className="font-display text-lg sm:text-xl md:text-2xl">
                  {p.name}
                </h3>
                <span
                  className={`text-[10px] sm:text-xs px-2 py-1 rounded-full whitespace-nowrap ${
                    p.status.startsWith("Live")
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : p.status === "Beta"
                      ? "bg-amber-500/20 text-amber-200 border border-amber-500/30"
                      : "bg-white/10 text-foreground/70 border border-white/20"
                  }`}
                >
                  {p.status}
                </span>
              </div>
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed flex-1">
                {p.summary}
              </p>
              {p.tech.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] sm:text-xs px-2 py-0.5 rounded-full bg-white/10 text-foreground/80">
                      {t}
                    </span>
                  ))}
                </div>
              )}
              {p.url && (
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground/90 hover:text-white transition-colors self-start"
                >
                  <span>Visit</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3) Writing */}
      <Section className="py-12 sm:py-16 md:py-24">
        <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8" {...fadeSlide()}>
          Writing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {blogPosts.map((post, i) => (
            <motion.a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-white/10 rounded-xl p-4 sm:p-6 bg-white/5 backdrop-blur-[1px] min-w-0 hover:bg-white/[0.07] transition-colors"
              whileHover={prefersReduced ? undefined : { y: -4 }}
              {...fadeSlide(i)}
            >
              {/* Meta information */}
              <div className="flex items-center gap-2 text-xs sm:text-sm text-foreground/60 mb-3">
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readingTime}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  {post.publication}
                  <svg className="w-3 h-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </span>
              </div>
              
              {/* Title */}
              <h3 className="font-display text-lg sm:text-xl md:text-2xl mb-3 group-hover:text-white transition-colors">
                {post.title}
              </h3>
              
              {/* Excerpt */}
              <p className="text-sm sm:text-base text-foreground/80 leading-relaxed line-clamp-3">
                {post.excerpt}
              </p>
              
              {/* Read more link */}
              <div className="mt-4 text-sm text-foreground/60 group-hover:text-foreground/80 transition-colors flex items-center gap-1">
                <span>Read on {post.publication}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </Section>

      {/* 4) Skills & Tools */}
      <Section className="py-12 sm:py-16 md:py-24">
        <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8" {...fadeSlide()}>
          Skills & Tools
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10">
          <Category title="Programming Languages" items={skills.languages} />
          <Category title="Frameworks" items={skills.frameworks} />
          <Category title="Data Platforms" items={skills.data_platforms} />
          <Category title="Tools" items={skills.tools} />
          <Category title="Methodology" items={skills.methodology} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-10 mt-8 sm:mt-10">
          <Category title="How I work with people" items={personalSkills} />
          <LanguagesSection />
        </div>
        <div className="mt-8 sm:mt-10 space-y-6 sm:space-y-8">
          <AiSkillCloud title="AI Engineering" items={aiEngineering} uses={aiUses} />
          <AiSkillCloud title="AI Tools I Use Daily" items={aiTools} uses={aiUses} />
        </div>
      </Section>

      {/* 5) Education */}
      <EducationSection />

      {/* Certifications */}
      <CertificationsGrid />

      {/* Contact */}
      <Section className="py-12 sm:py-16 md:py-24">
        <motion.div className="text-center max-w-2xl mx-auto" {...fadeSlide()}>
          <h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-4 sm:mb-6">
            Want to know more?
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 mb-6 sm:mb-8">
            Munich, Germany · EU citizen · open to remote (EU/US hours) · available from July 2026.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <motion.a
              href="mailto:klemen.kocic@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-white/30 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-white/10 transition-colors"
              whileHover={prefersReduced ? undefined : { scale: 1.05 }}
              whileTap={prefersReduced ? undefined : { scale: 0.95 }}
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Email me
            </motion.a>
            <motion.a
              href="/Klemen_Kocic_CV.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white rounded-lg font-medium text-sm sm:text-base hover:bg-white/15 transition-colors"
              whileHover={prefersReduced ? undefined : { scale: 1.05 }}
              whileTap={prefersReduced ? undefined : { scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3" />
              </svg>
              Download CV (PDF)
            </motion.a>
          </div>
        </motion.div>
      </Section>

      {/* 7) Closer */}
      <Section className="py-16 sm:py-20 md:py-28">
        <motion.p className="text-sm sm:text-base text-foreground/80" {...fadeSlide()}>
          Thanks for reading. Onward.
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

function AiSkillCloud({ title, items, uses }: { title: string; items: string[]; uses: Record<string, string> }) {
  return (
    <div className="min-w-0">
      <h3 className="text-xs sm:text-sm uppercase tracking-widest text-foreground/60 mb-3">{title}</h3>
      <div className="relative">
        {/* Reserve vertical space for tooltips so the first row can be hovered without overlap */}
        <div className="absolute -top-8 left-0 right-0 h-8" />
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {items.map((s) => (
            <div key={s} className="relative group">
              <span className="text-xs px-2 sm:px-2.5 py-1 rounded-full bg-white/10 text-foreground/90 inline-block">
                {s}
              </span>
              <div className="hidden sm:inline-block pointer-events-none absolute left-0 -top-8 z-20 w-fit max-w-none whitespace-nowrap text-[10px] sm:text-[11px] px-3 py-1.5 rounded-md bg-gradient-to-r from-gray-900 to-black backdrop-blur-sm text-white shadow-lg border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                I use this for {uses[s] ?? "everyday tasks"}.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function LanguagesSection() {
  const languages = [
    { name: "Slovenian", level: "Mother Language" },
    { name: "English", level: "C2" },
    { name: "SerboCroatian", level: "B2" },
    { name: "German", level: "B1" },
  ];
  
  return (
    <div>
      <h3 className="text-xs sm:text-sm uppercase tracking-widest text-foreground/60 mb-3">Languages</h3>
      <div className="flex flex-wrap gap-1.5 sm:gap-2">
        {languages.map((lang) => (
          <span
            key={lang.name}
            className="text-xs px-2 sm:px-2.5 py-1 rounded-full bg-white/10 text-foreground/90"
          >
            {lang.name}: {lang.level}
          </span>
        ))}
      </div>
    </div>
  );
}


