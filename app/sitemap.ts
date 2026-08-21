import type { MetadataRoute } from "next";
import { services } from "@/content/services";

const BASE = "https://maanevents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about-us/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio/", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/contact/", priority: 0.7, changeFrequency: "yearly" as const },
    ...services.map((s) => ({
      url: s.url,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
  ];
  return pages.map((p) => ({
    url: `${BASE}${p.url}`,
    lastModified: now,
    changeFrequency: p.changeFrequency,
    priority: p.priority,
  }));
}
