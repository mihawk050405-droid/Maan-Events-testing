import type { MetadataRoute } from "next";
import { infraDisciplines } from "@/content/infrastructure";
import { eventCategories } from "@/content/event-categories";

const BASE = "https://maanevents.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about-us/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/services/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/portfolio/", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/clients/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact/", priority: 0.7, changeFrequency: "yearly" as const },
    ...infraDisciplines.map((s) => ({
      url: s.url,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    })),
    ...eventCategories.map((c) => ({
      url: c.url,
      priority: 0.7,
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
