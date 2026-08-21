import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
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
