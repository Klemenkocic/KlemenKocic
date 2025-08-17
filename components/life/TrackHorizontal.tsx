"use client";

import Image from "next/image";

type Props = {
  id: string;
  title: string;
  copy: string;
  images: { src: string; alt: string }[];
  index: number;
};

export default function TrackHorizontal({ title, copy, images, index }: Props) {
  return (
    <div className="track-horizontal">
      <div className="track-intro">
        <h2>{title}</h2>
        <p>{copy}</p>
      </div>
      <div className="track track-scroll">
        {images.slice(0, 3).map((img, i) => (
          <figure key={`${index}-${i}`} className="frame ratio-3x2 ph">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 90vw"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </div>
  );
}


