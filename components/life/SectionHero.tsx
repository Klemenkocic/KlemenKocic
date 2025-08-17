"use client";

import Image from "next/image";

type Props = {
  id: string;
  title: string;
  copy: string;
  images: { src: string; alt: string }[];
  index: number;
};

export default function SectionHero({ title, copy, images }: Props) {
  return (
    <div className="hero-wrap">
      <div className="hero-inner">
        <h1 className="hero-title">{title.toUpperCase()}</h1>
        <p className="hero-copy">{copy}</p>
        <div className="hero-images">
          {images.slice(0, 3).map((img, i) => (
            <div key={i} className="hero-img">
              <Image src={img.src} alt={img.alt} width={1200} height={1600} loading="eager" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


