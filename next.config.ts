import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Pin the workspace root — a stray lockfile in a parent directory otherwise
  // makes Turbopack infer the wrong root and resolve assets from there.
  turbopack: { root: fileURLToPath(new URL(".", import.meta.url)) },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 85],
  },
  async redirects() {
    return [
      // SEO: common misspelling fix while preserving the indexed URL
      { source: "/barricading", destination: "/barrication", permanent: true },
      { source: "/barricading/", destination: "/barrication/", permanent: true },
    ];
  },
};

export default nextConfig;
