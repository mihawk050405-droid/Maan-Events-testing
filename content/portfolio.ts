export type Project = {
  slug: string;
  title: string;
  category: string;
  categoryLabel: string;
  cover: string;
  imageCount: number;
  ext: "jpg" | "webp" | "png";
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

const mk = (
  category: string,
  slug: string,
  imageCount: number,
  ext: Project["ext"] = "jpg",
  titleOverride?: string,
): Project => {
  const cat = categories.find((c) => c.slug === category)!;
  return {
    slug,
    title: titleOverride ?? titleFromSlug(slug),
    category,
    categoryLabel: cat.label,
    cover: `/portfolio/${category}/${slug}/01.${ext}`,
    imageCount,
    ext,
  };
};

export const projects: Project[] = [
  // PM Events
  mk("pm-events", "amaravati-event", 10, "jpg", "Amaravati"),
  mk("pm-events", "boothpur-event", 11, "webp", "Boothpur"),
  mk("pm-events", "kurnool-event", 12, "jpg", "Kurnool"),
  mk("pm-events", "sangareddy-event", 4, "jpg", "Sangareddy"),
  mk("pm-events", "yoga-day-vizag-event", 7, "jpg", "International Yoga Day, Vizag"),
  mk("pm-events", "nithin-gatkari-events-ambarpet", 7, "jpg", "Nitin Gadkari, Amberpet"),

  // President
  mk("president-events", "gachibowli-stadium-event", 6, "jpg", "Gachibowli Stadium"),
  mk("president-events", "puri-navy-day-event", 12, "jpg", "Puri Navy Day"),

  // CM Events
  mk("cm-events", "mahanadu-2025", 6, "jpg", "Mahanadu 2025"),
  mk("cm-events", "mahanadu-rajahmundry", 6, "webp", "Mahanadu Rajahmundry"),
  mk("cm-events", "26th-january-amaravathi", 6, "jpg", "Republic Day, Amaravathi"),
  mk("cm-events", "cm-police-event", 2, "jpg", "CM Police Event"),
  mk("cm-events", "gandikota", 5, "jpg", "Gandikota"),
  mk("cm-events", "mega-dsc", 8, "jpg", "Mega DSC"),
  mk("cm-events", "ts-cm-event-abhinandhana-sabha", 7, "jpg", "Abhinandana Sabha"),

  // Corporate
  mk("corporate", "am-ns", 23, "jpg", "AM/NS"),
  mk("corporate", "wings-india", 24, "jpg", "Wings India"),
  mk("corporate", "tv9-event", 10, "webp", "TV9"),
  mk("corporate", "mahindra-car-jaisalmeer", 7, "jpg", "Mahindra · Jaisalmer"),
  mk("corporate", "mahindra-udo-auto", 8, "jpg", "Mahindra UDO Auto"),
  mk("corporate", "greenko-event", 6, "jpg", "Greenko"),

  // Exhibitions
  mk("exhibitions", "hitex-event", 8, "jpg", "HITEX"),
  mk("exhibitions", "saras-mela-guntur", 11, "jpg", "Saras Mela, Guntur"),
  mk("exhibitions", "vizag-light-house-events", 5, "jpg", "Vizag Light House"),

  // Weddings
  mk("weddings", "gmr-wedding-event-01", 13, "jpg", "GMR Wedding I"),
  mk("weddings", "gmr-wedding-event-03", 6, "jpg", "GMR Wedding III"),
  mk("weddings", "gmr-wedding-event-04", 9, "webp", "GMR Wedding IV"),
  mk("weddings", "gme-wedding-event-02", 5, "jpg", "GME Wedding II"),
  mk("weddings", "hitex-wedding", 6, "jpg", "HITEX Wedding"),
  mk("weddings", "kondapur-wedding", 5, "jpg", "Kondapur Wedding"),
  mk("weddings", "mahabubnagar", 5, "jpg", "Mahabubnagar Wedding"),
  mk("weddings", "anantapur-wedding-event", 4, "jpg", "Anantapur Wedding"),
  mk("weddings", "sangareddy-reception", 8, "jpg", "Sangareddy Reception"),

  // Concerts
  mk("concerts", "karthik", 7, "webp", "Karthik Live"),
  mk("concerts", "zahir-khan", 3, "webp", "Zahir Khan"),
  mk("concerts", "arijit-singh-event-gmr", 2, "png", "Arijit Singh, GMR"),
  mk("concerts", "diljith-dosanjh-event", 4, "png", "Diljit Dosanjh"),

  // Movies
  mk("movie-releases", "main", 6, "webp", "Film Premieres"),

  // Spiritual
  mk("spiritual-events", "bathukamma-event", 4, "webp", "Bathukamma"),
  mk("spiritual-events", "maha-tv-events", 5, "jpg", "Maha TV"),
];

export const imagesFor = (p: Project): string[] =>
  Array.from({ length: p.imageCount }, (_, i) => {
    const num = String(i + 1).padStart(2, "0");
    return `/portfolio/${p.category}/${p.slug}/${num}.${p.ext}`;
  });

export const projectsByCategory = (slug: string) =>
  projects.filter((p) => p.category === slug);

export const sortedProjects = [...projects].sort((a, b) => {
  const wa = categories.find((c) => c.slug === a.category)?.weight ?? 0;
  const wb = categories.find((c) => c.slug === b.category)?.weight ?? 0;
  return wb - wa;
});

export const featuredProjects = sortedProjects.slice(0, 9);
