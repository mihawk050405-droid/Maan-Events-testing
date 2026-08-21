export type Service = {
  slug: string;
  url: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  cover: string;
  featured: boolean;
};

export const services: Service[] = [
  {
    slug: "superstructure-hangers-pandals",
    url: "/superstructure-hangers-pandals/",
    title: "Superstructures, Hangars & Pandals",
    shortTitle: "Pandals & Hangars",
    tagline: "Engineered shelter at any scale.",
    description:
      "From compact gatherings to 100,000-seat assemblies, we engineer, fabricate and erect pandals and hangars built to government, corporate and public-event standards. Our in-house metal yards, fabric inventory and rigging crews mean we never wait on vendors.",
    capabilities: [
      "Spans from 20ft to 300ft column-free",
      "Cyclone-rated, fire-retardant fabrics",
      "Integrated cable management for AV and AC",
      "Rapid deployment — large pandals in 72 hours",
    ],
    cover: "/portfolio/cm-events/mahanadu-2025/01.jpg",
    featured: true,
  },
  {
    slug: "aluminium-structure-and-hangers",
    url: "/aluminium-structure-and-hangers/",
    title: "Aluminium Structures & Hangars",
    shortTitle: "Aluminium Structures",
    tagline: "Lightweight engineering, heavyweight presence.",
    description:
      "Modular aluminium trussing and clear-span hangars for premium product launches, exhibitions and architectural installations. Faster setup, cleaner sightlines, world-class finish.",
    capabilities: [
      "Modular trussing system, infinitely configurable",
      "Clear-span hangars without internal columns",
      "Polished and powder-coated finishes",
      "Compatible with rigging-rated AV loads",
    ],
    cover: "/portfolio/corporate/wings-india/01.jpg",
    featured: true,
  },
  {
    slug: "venue-construction",
    url: "/venue-construction/",
    title: "Venue Construction",
    shortTitle: "Venue Construction",
    tagline: "We build venues. Not just decorate them.",
    description:
      "End-to-end venue construction for greenfield events: site grading, flooring, structures, power, AC, fire and crowd-flow design — delivered as a single turnkey package.",
    capabilities: [
      "Site survey, grading and foundation",
      "Turnkey integration with utilities",
      "Permitting and safety compliance support",
      "Decommission and site reinstatement",
    ],
    cover: "/portfolio/pm-events/amaravati-event/01.jpg",
    featured: true,
  },
  {
    slug: "barrication",
    url: "/barrication/",
    title: "Barricading",
    shortTitle: "Barricading",
    tagline: "Crowd safety, by design.",
    description:
      "Heavy-duty barricading systems for crowd control, VIP movement corridors and stage perimeters — used at events with crowds of 100,000+.",
    capabilities: [
      "Steel and aluminium barricade systems",
      "VIP and protocol corridors",
      "Anti-crush perimeter design",
      "Rapid deployment and reconfiguration",
    ],
    cover: "/portfolio/cm-events/mahanadu-rajahmundry/01.webp",
    featured: false,
  },
  {
    slug: "air-conditioning",
    url: "/air-conditioning/",
    title: "Event Air Conditioning",
    shortTitle: "AC Systems",
    tagline: "Climate-controlled comfort, at any scale.",
    description:
      "Industrial-grade air-conditioning for pandals, hangars, exhibitions and conference halls. Quiet, efficient, redundant — engineered for the Indian summer.",
    capabilities: [
      "Spot, ductable and central HVAC systems",
      "Redundant power and chiller backup",
      "Silent operation suitable for AV",
      "Sustainability-conscious load planning",
    ],
    cover: "/portfolio/pm-events/boothpur-event/01.webp",
    featured: true,
  },
  {
    slug: "exhibition-facades-and-stall-designs",
    url: "/exhibition-facades-and-stall-designs/",
    title: "Exhibition Facades & Stall Design",
    shortTitle: "Exhibitions",
    tagline: "Stalls that earn the second look.",
    description:
      "Custom-built exhibition facades, stalls and pavilions — from boutique 9 sqm stands to flagship 1000 sqm anchor pavilions. Design, fabricate, install, dismantle.",
    capabilities: [
      "Custom carpentry and modular octanorm",
      "Branded facades and signage integration",
      "Lighting and AV-ready builds",
      "On-site project management",
    ],
    cover: "/portfolio/exhibitions/hitex-event/01.jpg",
    featured: false,
  },
  {
    slug: "pagodas-tents",
    url: "/pagodas-tents/",
    title: "Pagodas & Premium Tents",
    shortTitle: "Pagodas & Tents",
    tagline: "Elegant, weatherproof, infinitely configurable.",
    description:
      "Premium pagoda tents and German-engineered Pearl tents for weddings, VIP receptions, expos and outdoor brand activations. Clean sightlines, premium finishes.",
    capabilities: [
      "Pagodas from 3m to 10m squares",
      "Pearl tents and clear-span marquees",
      "Wind-rated for outdoor use",
      "Glass-wall and decorated linings",
    ],
    cover: "/portfolio/weddings/gmr-wedding-event-01/01.jpg",
    featured: true,
  },
  {
    slug: "weather-sheds",
    url: "/weather-sheds/",
    title: "Weather Sheds",
    shortTitle: "Weather Sheds",
    tagline: "Rain-rated, sun-rated, event-rated.",
    description:
      "Walkways, transit canopies and protected zones to keep guests and equipment safe through unpredictable weather without compromising the look of the event.",
    capabilities: [
      "Modular weather-rated canopies",
      "Tinted and clear-roof options",
      "Compatible with carpeting and lighting",
      "Rapid deployment for emergency cover",
    ],
    cover: "/portfolio/weddings/hitex-wedding/01.jpg",
    featured: false,
  },
  {
    slug: "event-decoration",
    url: "/event-decoration/",
    title: "Event Decoration",
    shortTitle: "Decoration",
    tagline: "Set design, not styling.",
    description:
      "Concept-led decoration with the production rigour of a film set — for product launches, government ceremonies, weddings and brand activations.",
    capabilities: [
      "Concept design and 3D walkthroughs",
      "Florals, draping, props, signage",
      "Themed-build fabrication in-house",
      "Lighting integration and finishing",
    ],
    cover: "/portfolio/weddings/sangareddy-reception/01.jpg",
    featured: true,
  },
  {
    slug: "furniture",
    url: "/furniture/",
    title: "Event Furniture",
    shortTitle: "Furniture",
    tagline: "From banquet seating to executive lounges.",
    description:
      "Curated rental inventory of seating, lounge sets, banquet rounds, conference tables, dais furniture and protocol seating — all maintained in-house.",
    capabilities: [
      "VIP and protocol-grade dais furniture",
      "Banquet, theatre and classroom layouts",
      "Lounge and breakout furniture",
      "Cleaning, refurbishing, just-in-time delivery",
    ],
    cover: "/portfolio/corporate/tv9-event/01.webp",
    featured: false,
  },
  {
    slug: "carpeting-and-flooring",
    url: "/carpeting-and-flooring/",
    title: "Carpeting & Flooring",
    shortTitle: "Carpeting",
    tagline: "Floor finishes that read on camera.",
    description:
      "Event-grade carpeting, raised flooring, dance floors and red-carpet builds — supplied, installed and removed on tight production schedules.",
    capabilities: [
      "Wall-to-wall event carpeting",
      "Raised flooring with cable trays",
      "Acrylic and LED dance floors",
      "Red-carpet and protocol builds",
    ],
    cover: "/portfolio/cm-events/mega-dsc/01.jpg",
    featured: false,
  },
  {
    slug: "staging",
    url: "/staging/",
    title: "Staging & Platforming",
    shortTitle: "Staging",
    tagline: "Stages that hold up under scrutiny.",
    description:
      "Engineered stage platforms, runways and tiered seating built to broadcast-ready standards — from political rallies to corporate keynotes.",
    capabilities: [
      "Modular stages from 1ft to 12ft elevation",
      "Tiered audience platforms",
      "Runways and processional builds",
      "Broadcast and rigging-ready loads",
    ],
    cover: "/portfolio/cm-events/26th-january-amaravathi/01.jpg",
    featured: false,
  },
];

export const featuredServices = services.filter((s) => s.featured);
export const serviceBySlug = (slug: string) => services.find((s) => s.slug === slug);
