import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";

const nextConfig: NextConfig = {
  trailingSlash: true,
  // Hides the dev-only on-screen route indicator (the [data-next-badge-root]
  // element). Build and runtime errors are still surfaced.
  devIndicators: false,
  // Pin the workspace root — a stray lockfile in a parent directory otherwise
  // makes Turbopack infer the wrong root and resolve assets from there.
  turbopack: { root: fileURLToPath(new URL(".", import.meta.url)) },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [60, 75, 85],
  },
  async redirects() {
    // These 12 routes are leftover discipline-level pages from an earlier
    // site structure — content/services.ts now organizes offerings by
    // event type instead, so each one 301s into the event-type page whose
    // description most directly covers that discipline. This keeps any
    // inbound links/search equity pointed at a live, indexed page instead
    // of a 404.
    const legacy: Record<string, string> = {
      "air-conditioning": "government-public-sector-events",
      "aluminium-structure-and-hangers": "government-public-sector-events",
      "barrication": "government-public-sector-events",
      "barricading": "government-public-sector-events",
      "superstructure-hangers-pandals": "government-public-sector-events",
      "venue-construction": "government-public-sector-events",
      "staging": "concerts-entertainment",
      "exhibition-facades-and-stall-designs": "exhibitions-trade-fairs",
      "weather-sheds": "spiritual-devotional-events",
      "carpeting-and-flooring": "signature-weddings",
      "event-decoration": "signature-weddings",
      "furniture": "signature-weddings",
      "pagodas-tents": "signature-weddings",
    };
    return Object.entries(legacy).flatMap(([source, destSlug]) => [
      { source: `/${source}`, destination: `/services/${destSlug}/`, permanent: true },
      { source: `/${source}/`, destination: `/services/${destSlug}/`, permanent: true },
    ]);
  },
};

export default nextConfig;
