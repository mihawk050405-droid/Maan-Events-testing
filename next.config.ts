import type { NextConfig } from "next";
import { fileURLToPath } from "node:url";
import { eventCategories } from "./content/event-categories";

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
    // Leftover discipline-level URLs from an earlier site structure, each
    // pointed at the infrastructure service page that now covers it, so
    // inbound links and search equity land on a live page instead of a 404.
    const legacy: Record<string, string> = {
      "air-conditioning": "/services/air-conditioning/",
      "aluminium-structure-and-hangers": "/services/german-hangars/",
      "barrication": "/services/barricading/",
      "barricading": "/services/barricading/",
      "superstructure-hangers-pandals": "/services/megastructures-and-superstructures/",
      "venue-construction": "/services/venue-construction/",
      "staging": "/services/staging-and-platforming/",
      "exhibition-facades-and-stall-designs": "/services/facades-and-stalls/",
      "weather-sheds": "/services/weather-sheds/",
      "carpeting-and-flooring": "/services/venue-construction/",
      "event-decoration": "/services/event-decoration/",
      "furniture": "/services/furniture/",
      "pagodas-tents": "/services/pagodas-and-cottages/",
    };
    // The event-type pages used to be "services"; they are portfolio
    // categories now and live under /portfolio/.
    const movedCategories = eventCategories.map((c) => c.slug);

    return [
      ...Object.entries(legacy).flatMap(([source, destination]) => [
        { source: `/${source}`, destination, permanent: true },
        { source: `/${source}/`, destination, permanent: true },
      ]),
      ...movedCategories.map((slug) => ({
        source: `/services/${slug}/`,
        destination: `/portfolio/${slug}/`,
        permanent: true,
      })),
    ];
  },
};

export default nextConfig;
