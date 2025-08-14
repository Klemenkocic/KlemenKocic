"use client";

import Image from "next/image";

type Props = { images: { src: string; alt: string }[] };

export default function Carousel3({ images }: Props) {
  return (
    <div className="carousel3" style={{ scrollSnapType: "x mandatory" }}>
      {images.slice(0, 3).map((img, i) => (
        <div key={i} className="c3-frame" style={{ scrollSnapAlign: "center" }}>
          <Image src={img.src} alt={img.alt} width={1400} height={900} loading="lazy" />
        </div>
      ))}
    </div>
  );
}


