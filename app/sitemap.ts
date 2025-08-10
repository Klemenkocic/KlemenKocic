import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://klemenkocic.com";
  const now = new Date().toISOString();
  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/work`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/life`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}


