import { portfolioManifest } from "./portfolio-manifest";

/* =======================================================================
   CURATION

   The photo folders on disk are raw shoot dumps — up to 24 frames for a
   single job. The site shows a curated selection instead: fewer, better
   images per event.
   ======================================================================= */

/**
 * How many images a single project shows. Change this one number to
 * re-curate the whole site.
 */
export const IMAGES_PER_PROJECT = 10;

/* =======================================================================
   EVENT NAMES

   The folder names are the photographer's location tags — "boothpur",
   "kurnool", "sangareddy" — not event names, so they must never reach
   the page as labels. A project carries a real `name` only once the
   client has confirmed one; until then it renders a placeholder.
   ======================================================================= */

/**
 * While true, projects with no confirmed name render NAME_PLACEHOLDER,
 * which makes the gaps obvious at a glance while names are being
 * collected. Set to false before going live and those projects fall
 * back to their category label ("Prime Minister Event") instead — still
 * truthful, never a location.
 */
export const SHOW_NAME_PLACEHOLDERS = true;

export const NAME_PLACEHOLDER = "Event Name — TBD";

export type Project = {
  slug: string;
  /** The confirmed event name, or null while it is still unknown. */
  name: string | null;
  /** What the UI renders — resolved from `name`, never from the folder. */
  title: string;
  nameConfirmed: boolean;
  category: string;
  categoryLabel: string;
  cover: string;
  /** Curated public paths, in display order. Extensions come from disk. */
  images: string[];
  /** Length of `images` — what the page shows. */
  imageCount: number;
  /** How many frames exist in the folder, for reference while selecting. */
  availableCount: number;
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

/**
 * A project's editable settings. Everything here is optional, so filling
 * in a real event name or a hand-picked image set is a one-line change to
 * the `mk(...)` call below — no other file needs to know.
 */
type ProjectOptions = {
  /**
   * The confirmed event name. Omit it while the name is still unknown;
   * NEVER put the folder's location tag here.
   */
  name?: string;
  /**
   * The exact frames to show, in the order to show them — filenames as
   * they appear in the folder, e.g. ["04.jpg", "01.jpg", "09.jpg"].
   * Omit and the first IMAGES_PER_PROJECT files are used as a stand-in.
   */
  select?: string[];
  /**
   * Pins which photo represents the project in the grid. Political shoots
   * often lead with a leader portrait, and Maan Events builds for
   * competing parties — so those projects point at a structure shot
   * instead of whatever happens to sort first.
   */
  cover?: string;
};

const mk = (
  category: string,
  slug: string,
  options: ProjectOptions = {},
): Project => {
  const { name, select, cover } = options;
  const cat = categories.find((c) => c.slug === category)!;
  const dir = `${category}/${slug}`;
  const files = portfolioManifest[dir];

  if (!files?.length) {
    throw new Error(
      `No images found for portfolio project "${dir}". ` +
        `Add photos under public/portfolio/${dir}/ and run \`npm run manifest\`.`,
    );
  }

  // A typo in `select` would silently drop a frame the client chose, so
  // fail loudly instead — this runs at build time, not in the browser.
  const missing = select?.filter((f) => !files.includes(f)) ?? [];
  if (missing.length) {
    throw new Error(
      `Selected image(s) ${missing.join(", ")} are not in public/portfolio/${dir}/ ` +
        `(has: ${files.join(", ")}). Fix the names or run \`npm run manifest\`.`,
    );
  }

  if (cover && !files.includes(cover)) {
    throw new Error(
      `Cover "${cover}" is not in public/portfolio/${dir}/ ` +
        `(has: ${files.join(", ")}). Fix the name or run \`npm run manifest\`.`,
    );
  }

  const chosen = (select ?? files).slice(0, IMAGES_PER_PROJECT);

  // The cover has to be inside the curated set, or clicking a tile would
  // open a gallery that doesn't contain the photo that was clicked.
  const ordered =
    cover && !chosen.includes(cover)
      ? [cover, ...chosen].slice(0, IMAGES_PER_PROJECT)
      : chosen;

  const nameConfirmed = Boolean(name);

  return {
    slug,
    name: name ?? null,
    title: name ?? (SHOW_NAME_PLACEHOLDERS ? NAME_PLACEHOLDER : cat.label),
    nameConfirmed,
    category,
    categoryLabel: cat.label,
    cover: `/portfolio/${dir}/${cover ?? ordered[0]}`,
    images: ordered.map((f) => `/portfolio/${dir}/${f}`),
    imageCount: ordered.length,
    availableCount: files.length,
  };
};

/* =======================================================================
   THE PROJECTS

   To finish a project, edit its line here — nothing else:
     name:   the confirmed event name (omit = placeholder on the page)
     select: the ~10 chosen frames, in order (omit = first 10 on disk)
     cover:  the frame that represents it in the grid

   Projects with NO `name` are the ones whose folders are named after a
   location rather than an event. They are awaiting names from the
   client and currently render "Event Name — TBD".
   ======================================================================= */
export const projects: Project[] = [
  // PM Events
  mk("pm-events", "amaravati-event"),
  mk("pm-events", "boothpur-event"),
  mk("pm-events", "kurnool-event"),
  mk("pm-events", "sangareddy-event"),
  mk("pm-events", "yoga-day-vizag-event", { name: "International Yoga Day" }),
  mk("pm-events", "nithin-gatkari-events-ambarpet", { name: "Nitin Gadkari" }),

  // President
  mk("president-events", "gachibowli-stadium-event"),
  mk("president-events", "puri-navy-day-event", { name: "Navy Day, Puri" }),

  // CM Events
  mk("cm-events", "26th-january-amaravathi", { name: "Republic Day" }),
  mk("cm-events", "cm-police-event", { name: "CM Police Event" }),
  mk("cm-events", "gandikota"),
  // 02.jpg onward lead with leader portraits
  mk("cm-events", "mega-dsc", { name: "Mega DSC", cover: "05.jpg" }),
  // 02–05 carry CM portraits on banners
  mk("cm-events", "ts-cm-event-abhinandhana-sabha", {
    name: "Abhinandana Sabha",
    cover: "07.jpg",
  }),

  // Corporate
  mk("corporate", "am-ns", { name: "AM/NS" }),
  mk("corporate", "wings-india", { name: "Wings India" }),
  mk("corporate", "tv9-event", { name: "TV9" }),
  mk("corporate", "mahindra-car-jaisalmeer", { name: "Mahindra · Jaisalmer" }),
  mk("corporate", "mahindra-udo-auto", { name: "Mahindra UDO Auto" }),
  mk("corporate", "greenko-event", { name: "Greenko" }),

  // Exhibitions
  mk("exhibitions", "hitex-event", { name: "HITEX" }),
  mk("exhibitions", "saras-mela-guntur", { name: "Saras Mela" }),
  mk("exhibitions", "vizag-light-house-events"),

  // Weddings
  mk("weddings", "gmr-wedding-event-01", { name: "GMR Wedding I" }),
  mk("weddings", "gmr-wedding-event-03", { name: "GMR Wedding III" }),
  mk("weddings", "gmr-wedding-event-04", { name: "GMR Wedding IV" }),
  mk("weddings", "gme-wedding-event-02", { name: "GME Wedding II" }),
  mk("weddings", "hitex-wedding"),
  mk("weddings", "kondapur-wedding"),
  mk("weddings", "mahabubnagar"),
  mk("weddings", "anantapur-wedding-event"),
  mk("weddings", "sangareddy-reception"),

  // Concerts
  mk("concerts", "karthik", { name: "Karthik Live" }),
  mk("concerts", "zahir-khan", { name: "Zahir Khan" }),
  mk("concerts", "arijit-singh-event-gmr", { name: "Arijit Singh" }),
  mk("concerts", "diljith-dosanjh-event", { name: "Diljit Dosanjh" }),

  // Movies
  mk("movie-releases", "main", { name: "Film Premieres" }),

  // Spiritual
  mk("spiritual-events", "bathukamma-event", { name: "Bathukamma" }),
  mk("spiritual-events", "maha-tv-events", { name: "Maha TV" }),
];

/** Projects still awaiting a confirmed event name from the client. */
export const projectsAwaitingName = projects.filter((p) => !p.nameConfirmed);

export const imagesFor = (p: Project): string[] => p.images;

export const projectsByCategory = (slug: string) =>
  projects.filter((p) => p.category === slug);

export const sortedProjects = [...projects].sort((a, b) => {
  const wa = categories.find((c) => c.slug === a.category)?.weight ?? 0;
  const wb = categories.find((c) => c.slug === b.category)?.weight ?? 0;
  return wb - wa;
});

/**
 * The landing-page showcase. Named projects come first — the homepage
 * should lead with real work, not a row of pending placeholders — but
 * trust order is preserved within each group, and unnamed projects still
 * backfill so the showcase never runs short.
 */
export const featuredProjects = [
  ...sortedProjects.filter((p) => p.nameConfirmed),
  ...sortedProjects.filter((p) => !p.nameConfirmed),
].slice(0, 9);
