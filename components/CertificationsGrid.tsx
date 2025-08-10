"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Section from "./Section";
import { certifications } from "@/content/certificationsData";

export default function CertificationsGrid() {
  const prefersReduced = useReducedMotion();
  const fade = {
    initial: prefersReduced ? { opacity: 0 } : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: prefersReduced ? { duration: 0.001 } : { duration: 0.6, ease: "easeOut" },
  } as const;

  return (
    <Section className="py-16 md:py-24">
      <motion.h2 className="font-display text-2xl md:text-3xl mb-8" {...fade}>
        Certifications
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {certifications.map((c) => (
          <motion.div
            key={c.name}
            className="border border-white/10 rounded-xl p-6 bg-white/5 text-center"
            whileHover={prefersReduced ? undefined : { y: -2 }}
            {...fade}
          >
            <div className="flex items-center justify-center h-20">
              <Image src={c.logoSrc} alt={c.logoAlt} width={140} height={56} className="h-12 w-auto object-contain" />
            </div>
            <div className="mt-4">
              <p className="font-medium">{c.name}</p>
              <p className="text-foreground/60 text-sm">{c.issuer}{c.year ? ` • ${c.year}` : ""}</p>
              {c.note && <p className="text-foreground/60 text-xs mt-1">{c.note}</p>}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}


