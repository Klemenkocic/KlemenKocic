"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Props = {
  id: string;
  title: string;
  copy: string;
  images: { src: string; alt: string }[];
  index: number;
};

export default function TrackHorizontal({ title, copy, images, index }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (prefersReduced) return;
    const section = sectionRef.current!;
    const track = trackRef.current!;
    const ctx = gsap.context(() => {
      const total = track.scrollWidth - window.innerWidth;
      gsap.to(track, {
        x: () => -total,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${window.innerWidth + total}`,
          pin: true,
          scrub: 0.4,
          anticipatePin: 1,
        },
      });
    }, section);
    return () => ctx.revert();
  }, [prefersReduced]);

  return (
    <div ref={sectionRef} className="track-horizontal">
      <div className="track-intro">
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <div ref={trackRef} className="track">
        {images.slice(0, 3).map((img, i) => (
          <figure key={i} className="frame">
            <Image src={img.src} alt={img.alt} width={1600} height={1000} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}


