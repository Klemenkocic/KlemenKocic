"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { education } from "@/content/educationData";

export default function EducationSection() {
  const prefersReduced = useReducedMotion();
  const fade = {
    initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: prefersReduced ? { duration: 0.001 } : { duration: 0.6, ease: "easeOut" },
  } as const;

  return (
    <Section className="py-12 sm:py-16 md:py-20">
      <motion.h2 className="font-display text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8" {...fade}>
        Education
      </motion.h2>
      <div className="space-y-8 md:space-y-10">
        {education.map((item, idx) => {
          const right = idx % 2 === 1;
          return (
            <motion.article key={item.institution} className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center" {...fade}>
              <div className={`${right ? "md:order-2" : ""} relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5`}>
                <Image
                  src={item.imageSrc}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-contain p-3 sm:p-4"
                  loading={idx === 0 ? "eager" : "lazy"}
                  priority={idx === 0}
                />
              </div>
              <div className={`${right ? "md:order-1" : ""}`}>
                <h3 className="font-display text-lg sm:text-xl md:text-2xl">{item.institution}</h3>
                <p className="text-sm sm:text-base text-foreground/80 mt-1">{item.program}</p>
                <p className="text-foreground/60 text-xs sm:text-sm mt-1">
                  {item.location ? `${item.location} • ` : ""}
                  {item.from}–{item.to}
                </p>
              </div>
            </motion.article>
          );
        })}
      </div>
    </Section>
  );
}


