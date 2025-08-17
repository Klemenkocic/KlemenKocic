"use client";

import Image from "next/image";
import { useMemo } from "react";

type Props = {
  id: string;
  title: string;
  copy: string;
  images: { src: string; alt: string }[];
  index: number;
};

export default function StackVertical({ title, copy, images }: Props) {
  const prefersReduced = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  return (
    <div className="stack-vertical">
      <div className="sv-head">
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <div className="sv-grid">
        {images.slice(0, 3).map((img, i) => (
          <figure key={i} className={prefersReduced ? "sv-img" : "sv-img parallax ratio-3x2 ph"}>
            <Image src={img.src} alt={img.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw" style={{ objectFit: "cover" }} loading="lazy" />
          </figure>
        ))}
      </div>
    </div>
  );
}


