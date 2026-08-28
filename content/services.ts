export type Service = {
  slug: string;
  url: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  capabilities: string[];
  /**
   * Must stay party-neutral: Maan Events builds for competing political parties,
   * so covers may not show politicians (in frame, or on banners and LED screens)
   * or be dominated by a party colour — yellow above all. Prefer structure-led
   * shots: aerials, empty builds, national-event imagery.
   */
  cover: string;
  featured: boolean;
  /**
   * Portfolio categories this service draws its showcase from, most
   * relevant first. Used to fill the gallery until real per-service
   * photography arrives — without it a service shows whichever projects
   * happen to sort first, which is rarely its own work.
   */
  portfolioCategories?: string[];
  /**
   * Hand-picked images for this service's gallery, as public paths
   * (e.g. "/portfolio/concerts/karthik/03.jpg"). Set this and it wins
   * over portfolioCategories. Displayed at 4:5, matching the portfolio
   * grid — supply images in that ratio.
   */
  gallery?: string[];
};

export const services: Service[] = [
  {
    slug: "government-public-sector-events",
    url: "/services/government-public-sector-events/",
    title: "Government & Public Sector Events",
    shortTitle: "Government & Public Sector Events",
    tagline: "Large-scale events built with precision and protocol.",
    description:
      "End-to-end event production for government departments and public-sector organisations, including official ceremonies, public gatherings, conferences, inaugurations and large-scale civic events.",
    capabilities: [
      "Protocol-compliant event infrastructure",
      "Large-scale venue and audience management",
      "Stage, seating and barricading systems",
      "Power, AV and climate-control coordination",
    ],
    cover: "/portfolio/pm-events/kurnool-event/01.jpg",
    portfolioCategories: ["pm-events", "president-events", "cm-events"],
    featured: true,
  },

  {
    slug: "corporate-business-events",
    url: "/services/corporate-business-events/",
    title: "Corporate & Business Events",
    shortTitle: "Corporate & Business Events",
    tagline: "Professional environments for businesses that mean business.",
    description:
      "Complete event solutions for corporate gatherings, annual meets, leadership events, employee experiences, business functions and institutional celebrations.",
    capabilities: [
      "Corporate venue design and execution",
      "Conference and meeting infrastructure",
      "Stage, branding and signage",
      "Guest management and event logistics",
    ],
    cover: "/portfolio/corporate/wings-india/01.jpg",
    portfolioCategories: ["corporate"],
    featured: true,
  },

  {
    slug: "conferences-summits",
    url: "/services/conferences-summits/",
    title: "Conferences & Summits",
    shortTitle: "Conferences & Summits",
    tagline: "Ideas deserve an environment built around them.",
    description:
      "Production and infrastructure for conferences, conventions, summits and knowledge-led gatherings, from intimate executive meetings to large multi-day events.",
    capabilities: [
      "Conference halls and seating layouts",
      "Stage and speaker environments",
      "AV-ready infrastructure",
      "Delegate and breakout-area planning",
    ],
    cover: "/portfolio/corporate/tv9-event/01.webp",
    portfolioCategories: ["corporate", "exhibitions"],
    featured: true,
  },

  {
    slug: "product-launches-brand-experiences",
    url: "/services/product-launches-brand-experiences/",
    title: "Product Launches & Brand Experiences",
    shortTitle: "Product Launches & Brand Experiences",
    tagline: "Make the first impression impossible to forget.",
    description:
      "Immersive environments for product launches, brand activations and experiential campaigns, combining architecture, production, lighting, branding and audience experience.",
    capabilities: [
      "Launch-stage and reveal environments",
      "Branded experiential installations",
      "Lighting, AV and visual integration",
      "Custom fabrication and set design",
    ],
    cover: "/portfolio/corporate/wings-india/01.jpg",
    portfolioCategories: ["corporate", "movie-releases"],
    featured: true,
  },

  {
    slug: "signature-weddings",
    url: "/services/signature-weddings/",
    title: "Signature Weddings",
    shortTitle: "Signature Weddings",
    tagline: "Celebrations designed around your story.",
    description:
      "Premium wedding environments combining structures, décor, furniture, lighting, flooring and guest infrastructure to create distinctive celebrations from intimate ceremonies to large-scale receptions.",
    capabilities: [
      "Wedding venue construction and décor",
      "Premium tents and pagodas",
      "Stage, seating and furniture",
      "Guest comfort and climate control",
    ],
    cover: "/portfolio/weddings/gmr-wedding-event-01/01.jpg",
    portfolioCategories: ["weddings"],
    featured: true,
  },

  {
    slug: "spiritual-devotional-events",
    url: "/services/spiritual-devotional-events/",
    title: "Spiritual & Devotional Events",
    shortTitle: "Spiritual & Devotional Events",
    tagline: "Purposeful spaces for meaningful gatherings.",
    description:
      "Infrastructure and event production for spiritual gatherings, devotional programmes, religious ceremonies and large public congregations, with careful attention to crowd movement and guest comfort.",
    capabilities: [
      "Large congregation infrastructure",
      "Crowd-flow and barricading systems",
      "Weather protection and climate control",
      "Stage, seating and public-area setup",
    ],
    cover: "/portfolio/pm-events/yoga-day-vizag-event/01.jpg",
    portfolioCategories: ["spiritual-events", "pm-events"],
    featured: true,
  },

  {
    slug: "social-lifestyle-events",
    url: "/services/social-lifestyle-events/",
    title: "Social & Lifestyle Events",
    shortTitle: "Social & Lifestyle Events",
    tagline: "Spaces made for people to connect.",
    description:
      "Creative event environments for social celebrations, lifestyle gatherings, private functions and memorable community experiences.",
    capabilities: [
      "Themed venue design",
      "Décor and furniture",
      "Lighting and ambience",
      "Guest-area planning",
    ],
    cover: "/portfolio/weddings/hitex-wedding/01.jpg",
    portfolioCategories: ["weddings", "concerts"],
    featured: false,
  },

  {
    slug: "sports-events",
    url: "/services/sports-events/",
    title: "Sports Events",
    shortTitle: "Sports Events",
    tagline: "Built for competition, crowds and spectacle.",
    description:
      "Infrastructure and event production for sporting events, tournaments, ceremonies and fan experiences, designed around audience visibility, safety and operational efficiency.",
    capabilities: [
      "Spectator seating and infrastructure",
      "Player and official areas",
      "Crowd barricading and access control",
      "Temporary structures and weather protection",
    ],
    cover: "/portfolio/pm-events/kurnool-event/01.jpg",
    portfolioCategories: ["president-events", "pm-events"],
    featured: false,
  },

  {
    slug: "concerts-entertainment",
    url: "/services/concerts-entertainment/",
    title: "Concerts & Entertainment",
    shortTitle: "Concerts & Entertainment",
    tagline: "Big stages. Bigger experiences.",
    description:
      "Large-scale infrastructure for concerts, live entertainment and public performances, including stages, audience areas, backstage infrastructure and event-support systems.",
    capabilities: [
      "Concert stages and platforms",
      "Audience zones and barricading",
      "Backstage and artist areas",
      "Power, structures and event infrastructure",
    ],
    cover: "/portfolio/pm-events/kurnool-event/01.jpg",
    portfolioCategories: ["concerts", "movie-releases"],
    featured: false,
  },

  {
    slug: "exhibitions-trade-fairs",
    url: "/services/exhibitions-trade-fairs/",
    title: "Exhibitions & Trade Fairs",
    shortTitle: "Exhibitions & Trade Fairs",
    tagline: "Build environments where businesses get noticed.",
    description:
      "Complete exhibition and trade-fair infrastructure including pavilions, stalls, facades, visitor areas and supporting event facilities for businesses and institutions.",
    capabilities: [
      "Custom exhibition stalls and pavilions",
      "Trade-fair infrastructure",
      "Branded facades and signage",
      "Lighting, AV and visitor-area integration",
    ],
    cover: "/portfolio/exhibitions/hitex-event/01.jpg",
    portfolioCategories: ["exhibitions", "corporate"],
    featured: true,
  },
];

export const featuredServices = services.filter((s) => s.featured);

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);