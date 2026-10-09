export type InventoryItem = { label: string; value: string };

export type InfraDiscipline = {
  slug: string;
  /** Page URL — /services/<slug>/. */
  url: string;
  label: string;
  /** One line under the title on cards and the page hero. */
  tagline: string;
  description: string;
  /**
   * Placeholder cover chosen from existing portfolio photography until the
   * client supplies service-specific images. Keep it party-neutral — no
   * politicians in frame or on banners (see content/event-categories.ts).
   */
  cover: string;
  /** "What we supply" — DRAFT copy, pending client review. */
  highlights: string[];
  /**
   * Stock and specifications (e.g. { label: "Span", value: "Up to 60 m" }).
   * Pending from the client; the page shows a placeholder until set.
   */
  inventory?: InventoryItem[];
  /** Service-specific photos; falls back to the cover alone when unset. */
  gallery?: string[];
};

/**
 * "Infrastructure As A Service" — the thirteen services this site sells.
 * Each gets its own page at /services/<slug>/. The event types
 * (Government, Corporate, Weddings…) are portfolio categories, kept in
 * content/event-categories.ts — not services.
 */
export const infraDisciplines: InfraDiscipline[] = [
  {
    slug: "facades-and-stalls",
    url: "/services/facades-and-stalls/",
    label: "Facades and Stalls",
    tagline: "Branded fronts, built to draw a crowd.",
    description:
      "Custom-built stall fronts and branded facades for exhibitions, trade fairs and public installations — designed and fabricated in-house down to the signage.",
    cover: "/portfolio/exhibitions/saras-mela-guntur/06.jpg",
    highlights: [
      "Custom stall fronts and pavilion facades",
      "Branded entrance arches and signage",
      "Modular stall systems for trade fairs and expos",
      "Design, fabrication and installation in-house",
    ],
  },
  {
    slug: "barricading",
    url: "/services/barricading/",
    label: "Barricading",
    tagline: "Crowd flow, made safe and orderly.",
    description:
      "Crowd-flow and VVIP-grade barricading systems that keep large public and government events safe, organised and easy to navigate.",
    cover: "/portfolio/president-events/puri-navy-day-event/01.jpg",
    highlights: [
      "VVIP and protocol-grade barricading",
      "Crowd-flow and queue management layouts",
      "Enclosure, zoning and access-control fencing",
      "Rapid deployment for large public gatherings",
    ],
  },
  {
    slug: "megastructures-and-superstructures",
    url: "/services/megastructures-and-superstructures/",
    label: "Megastructures and Superstructures",
    tagline: "Engineered for national-scale gatherings.",
    description:
      "Large-span aluminium structures engineered for national-scale gatherings — the superstructures behind our biggest government and public events.",
    cover: "/portfolio/pm-events/amaravati-event/08.jpg",
    highlights: [
      "Large-span aluminium superstructures",
      "Column-free covered areas for mass audiences",
      "Structural design and safety compliance",
      "End-to-end erection and dismantling",
    ],
  },
  {
    slug: "pagodas-and-cottages",
    url: "/services/pagodas-and-cottages/",
    label: "Pagodas & Cottages",
    tagline: "Elegant shelter for hospitality and VIP areas.",
    description:
      "Premium pagoda tents and cottage-style structures for weddings, VIP hospitality areas and boutique event spaces.",
    cover: "/portfolio/exhibitions/saras-mela-guntur/07.jpg",
    highlights: [
      "Pagoda tents in multiple sizes",
      "Cottage-style structures for boutique spaces",
      "VIP lounges, hospitality and help desks",
      "Flooring, lighting and furnishing on request",
    ],
  },
  {
    slug: "transparent-hangars",
    url: "/services/transparent-hangars/",
    label: "Transparent Hangars",
    tagline: "Daylight and openness, fully weatherproof.",
    description:
      "Glass-walled transparent hangars that bring daylight and openness into large covered venues without losing weather protection.",
    cover: "/portfolio/weddings/gme-wedding-event-02/01.jpg",
    highlights: [
      "Glass-walled and clear-roof hangars",
      "Weather protection without losing the view",
      "Ideal for receptions, launches and night events",
      "Integrated lighting and climate control",
    ],
  },
  {
    slug: "event-decoration",
    url: "/services/event-decoration/",
    label: "Event Decoration",
    tagline: "From bare structure to finished occasion.",
    description:
      "Full decor design and execution — florals, drapery and thematic styling that turns a bare structure into a finished occasion.",
    cover: "/portfolio/weddings/gmr-wedding-event-03/02.jpg",
    highlights: [
      "Thematic decor design and execution",
      "Florals, drapery and stage backdrops",
      "Ceilings, entrances and photo zones",
      "Lighting design to finish the look",
    ],
  },
  {
    slug: "venue-construction",
    url: "/services/venue-construction/",
    label: "Venue Construction",
    tagline: "Ground-up venues, built on schedule.",
    description:
      "Ground-up venue construction — site prep, power, flooring and access — for events built entirely from scratch, on schedule.",
    cover: "/portfolio/cm-events/mega-dsc/03.jpg",
    highlights: [
      "Site preparation and levelling",
      "Temporary flooring, roads and access",
      "Power distribution and backup",
      "Complete venue layouts for open grounds",
    ],
  },
  {
    slug: "staging-and-platforming",
    url: "/services/staging-and-platforming/",
    label: "Staging and Platforming",
    tagline: "Stages built for protocol and production.",
    description:
      "Engineered stages and platforms built to hold VVIP protocol, concert production or ceremonial requirements at any scale.",
    cover: "/portfolio/social/main/DSC09361.JPG",
    highlights: [
      "VVIP daises and ceremonial stages",
      "Concert and production stages with roofing",
      "Risers, ramps and multi-level platforms",
      "Load-tested, safety-certified builds",
    ],
  },
  {
    slug: "german-hangars",
    url: "/services/german-hangars/",
    label: "German Hangars",
    tagline: "Column-free cover for the largest footprints.",
    description:
      "Precision-engineered German hangar structures for column-free, weatherproof coverage across the largest event footprints.",
    cover: "/portfolio/exhibitions/hitex-event/03.jpg",
    highlights: [
      "Precision-engineered German hangar structures",
      "Clear spans for exhibitions and mass events",
      "Weatherproof roofing and side walls",
      "One of India's largest hangar inventories",
    ],
  },
  {
    slug: "trussing-and-draping",
    url: "/services/trussing-and-draping/",
    label: "Trussing & Draping",
    tagline: "The backbone behind every stage look.",
    description:
      "Truss rigging and drapery systems for lighting, AV and staging — the structural backbone behind every finished stage look.",
    cover: "/portfolio/weddings/mahabubnagar/03.jpg",
    highlights: [
      "Truss rigging for lighting, AV and LED",
      "Ceiling and wall drapery",
      "Ground-support and roof truss systems",
      "Fabric finishes in any colour scheme",
    ],
  },
  {
    slug: "air-conditioning",
    url: "/services/air-conditioning/",
    label: "Air Conditioning",
    tagline: "Comfort at scale, whatever the weather.",
    description:
      "Industrial-scale climate control that keeps large tented venues comfortable for guests, regardless of outdoor conditions.",
    cover: "/portfolio/cm-events/ts-cm-event-abhinandhana-sabha/06.jpg",
    highlights: [
      "Industrial tower and ducted AC units",
      "Climate control for hangars and tented venues",
      "Generator-backed power for cooling",
      "On-site technicians throughout the event",
    ],
  },
  {
    slug: "furniture",
    url: "/services/furniture/",
    label: "Furniture",
    tagline: "Seating and lounges for every scale.",
    description:
      "Event furniture — from banquet seating to VIP lounges — sourced, maintained and deployed in-house for every event scale.",
    cover: "/portfolio/weddings/gmr-wedding-event-01/06.jpg",
    highlights: [
      "VIP sofas, lounges and dais seating",
      "Banquet, theatre and conference seating",
      "Tables, linen and covers",
      "Maintained and delivered in-house",
    ],
  },
  {
    slug: "weather-sheds",
    url: "/services/weather-sheds/",
    label: "Weather Sheds",
    tagline: "Protection from sun and rain, end to end.",
    description:
      "Weatherproof sheds and covered walkways that protect guests, equipment and queues from sun and rain alike.",
    cover: "/portfolio/cm-events/26th-january-amaravathi/01.jpg",
    highlights: [
      "Covered seating enclosures for open grounds",
      "Covered walkways and queue sheds",
      "Rain- and heat-resistant roofing",
      "Quick installation for parades and ceremonies",
    ],
  },
];

export const infraBySlug = (slug: string) =>
  infraDisciplines.find((d) => d.slug === slug);
