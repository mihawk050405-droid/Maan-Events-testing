import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://maanevents.com/sitemap.xml",
    host: "https://maanevents.com",
  };
}
