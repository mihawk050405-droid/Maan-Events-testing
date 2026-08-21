import { portfolioManifest } from "./portfolio-manifest";

export type Project = {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  cover: string;
  imageCount: number;
  /** Full public paths, in display order. Extensions come from disk, not convention. */
  images: string[];
};

export type Category = {
  slug: string;
  label: string;
  description: string;
  weight: number; // for trust ordering — PM/CM/President first
};

export const categories: Category[] = [
  { slug: "pm-events", label: "Prime Minister Events", description: "National-stage events graced by the Prime Minister of India.", weight: 100 },
  { slug: "president-events", label: "President Events", description: "Hosting the President of India and head-of-state protocols.", weight: 95 },
  { slug: "cm-events", label: "Chief Minister Events", description: "State-level political ceremonies, rallies and assemblies.", weight: 90 },
  { slug: "corporate", label: "Corporate", description: "Product launches, brand activations and corporate ceremonies.", weight: 80 },
  { slug: "exhibitions", label: "Exhibitions", description: "Trade shows, expos and exhibition pavilions.", weight: 70 },
  { slug: "weddings", label: "Weddings", description: "Premium wedding and reception infrastructure.", weight: 60 },
  { slug: "concerts", label: "Concerts", description: "Stadium and arena-scale music events.", weight: 50 },
  { slug: "movie-releases", label: "Film Releases", description: "Film premieres and pre-release events.", weight: 40 },
  { slug: "spiritual-events", label: "Spiritual Events", description: "Devotional gatherings and cultural assemblies.", weight: 30 },
];

// Helper to format project title from slug
const titleFromSlug = (s: string) =>
  s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

/**
 * `coverFile` pins which photo represents the project in the grid. Political
 * shoots often lead with a leader portrait, and Maan Events builds for
 * competing parties — so those projects point at a structure shot instead of
 * whatever happens to sort first. Omit it and the first image wins.
 */
const mk = (
  category: string,
  slug: string,
  titleOverride?: string,
  coverFile?: string,
): Project => {
  const cat = categories.find((c) => c.slug === category)!;
  const files = portfolioManifest[`${category}/${slug}`];

  if (!files?.length) {
    throw new Error(
      `No images found for portfolio project "${category}/${slug}". ` +
        `Add photos under public/portfolio/${category}/${slug}/ and run \`npm run manifest\`.`,
    );
  }

  if (coverFile && !files.includes(coverFile)) {
    throw new Error(
      `Cover "${coverFile}" is not in public/portfolio/${category}/${slug}/ ` +
        `(has: ${files.join(", ")}). Fix the name or run \`npm run manifest\`.`,
    );
  }

  const images = files.map((f) => `/portfolio/${category}/${slug}/${f}`);

  return {
    slug,
    title: titleOverride ?? titleFromSlug(slug),
    category,
    categoryLabel: cat.label,
    cover: `/portfolio/${category}/${slug}/${coverFile ?? files[0]}`,
    imageCount: images.length,
    images,
  };
};

export const projects: Project[] = [
  // PM Events
  mk("pm-events", "amaravati-event", "Amaravati"),
  mk("pm-events", "boothpur-event", "Boothpur"),
  mk("pm-events", "kurnool-event", "Kurnool"),
  mk("pm-events", "sangareddy-event", "Sangareddy"),
  mk("pm-events", "yoga-day-vizag-event", "International Yoga Day, Vizag"),
  mk("pm-events", "nithin-gatkari-events-ambarpet", "Nitin Gadkari, Amberpet"),

  // President
  mk("president-events", "gachibowli-stadium-event", "Gachibowli Stadium"),
  mk("president-events", "puri-navy-day-event", "Puri Navy Day"),

  // CM Events
  mk("cm-events", "26th-january-amaravathi", "Republic Day, Amaravathi"),
  mk("cm-events", "cm-police-event", "CM Police Event"),
  mk("cm-events", "gandikota", "Gandikota"),
  mk("cm-events", "mega-dsc", "Mega DSC", "05.jpg"), // 02.jpg onward lead with leader portraits
  mk("cm-events", "ts-cm-event-abhinandhana-sabha", "Abhinandana Sabha", "07.jpg"), // 02–05 carry CM portraits on banners

  // Corporate
  mk("corporate", "am-ns", "AM/NS"),
  mk("corporate", "wings-india", "Wings India"),
  mk("corporate", "tv9-event", "TV9"),
  mk("corporate", "mahindra-car-jaisalmeer", "Mahindra · Jaisalmer"),
  mk("corporate", "mahindra-udo-auto", "Mahindra UDO Auto"),
  mk("corporate", "greenko-event", "Greenko"),

  // Exhibitions
  mk("exhibitions", "hitex-event", "HITEX"),
  mk("exhibitions", "saras-mela-guntur", "Saras Mela, Guntur"),
  mk("exhibitions", "vizag-light-house-events", "Vizag Light House"),

  // Weddings
  mk("weddings", "gmr-wedding-event-01", "GMR Wedding I"),
  mk("weddings", "gmr-wedding-event-03", "GMR Wedding III"),
  mk("weddings", "gmr-wedding-event-04", "GMR Wedding IV"),
  mk("weddings", "gme-wedding-event-02", "GME Wedding II"),
  mk("weddings", "hitex-wedding", "HITEX Wedding"),
  mk("weddings", "kondapur-wedding", "Kondapur Wedding"),
  mk("weddings", "mahabubnagar", "Mahabubnagar Wedding"),
  mk("weddings", "anantapur-wedding-event", "Anantapur Wedding"),
  mk("weddings", "sangareddy-reception", "Sangareddy Reception"),

  // Concerts
  mk("concerts", "karthik", "Karthik Live"),
  mk("concerts", "zahir-khan", "Zahir Khan"),
  mk("concerts", "arijit-singh-event-gmr", "Arijit Singh, GMR"),
  mk("concerts", "diljith-dosanjh-event", "Diljit Dosanjh"),

  // Movies
  mk("movie-releases", "main", "Film Premieres"),

  // Spiritual
  mk("spiritual-events", "bathukamma-event", "Bathukamma"),
  mk("spiritual-events", "maha-tv-events", "Maha TV"),
];

export const imagesFor = (p: Project): string[] => p.images;

export const projectsByCategory = (slug: string) =>
  projects.filter((p) => p.category === slug);

export const sortedProjects = [...projects].sort((a, b) => {
  const wa = categories.find((c) => c.slug === a.category)?.weight ?? 0;
  const wb = categories.find((c) => c.slug === b.category)?.weight ?? 0;
  return wb - wa;
});

export const featuredProjects = sortedProjects.slice(0, 9);
