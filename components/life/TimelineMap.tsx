"use client";

import React from "react";

type Props = {
  projection: "europe" | "world";
  coords: Array<[number, number]>; // lon,lat
};

// Minimal placeholder map: simple polyline overlay on a neutral rect
export default function TimelineMap({ coords }: Props) {
  const path = coords
    .map(([lon, lat]) => `${lon},${-lat}`) // naive flip for placeholder
    .join(" ");
  return (
    <svg viewBox="-180 -90 360 180" className="timeline-map" aria-label="route map">
      <rect x="-180" y="-90" width="360" height="180" rx="2" fill="currentColor" opacity="0.06" />
      <polyline points={path} fill="none" stroke="currentColor" strokeWidth="1.5" />
      {coords.map(([lon, lat], i) => (
        <circle key={i} cx={lon} cy={-lat} r="1.6" fill="currentColor" />
      ))}
    </svg>
  );
}


