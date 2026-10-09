const FOUNDED = 2007;

/** Whole years since founding — computed so the copy never goes stale. */
export const yearsActive = new Date().getFullYear() - FOUNDED;

export type HistoryEra = {
  year: number;
  name: string;
  /** Short label shown above the name — e.g. "Our roots". */
  eyebrow: string;
  headline: string;
  points: string[];
};

/**
 * How the business evolved. Maan Tent Works is the family's manufacturing
 * root; this website represents the two companies that grew out of it —
 * Maan Decorators and Maan Events & Entertainment Pvt. Ltd.
 */
export const history: HistoryEra[] = [
  {
    year: 1982,
    name: "Maan Tent Works",
    eyebrow: "Our roots",
    headline: "Event infrastructure manufacturing",
    points: [
      "Structural engineering, heavy-duty durability and manufacturing precision from day one.",
      "Manufacturer and supplier of tactical, weather-resistant tents for military and police departments.",
      "B2B supply of truss, tents and custom structures to rental companies nationwide.",
      "In-house quality control — no reliance on third-party fabrication, ensuring structural safety, stability and fast turnaround.",
    ],
  },
  {
    year: 2007,
    name: "Maan Decorators",
    eyebrow: "Scale",
    headline: "Mega-scale rental infrastructure",
    points: [
      "One of India's largest physical inventories of German hangars, air conditioning, specialised staging and VIP seating.",
      "Government & public-sector specialist, with a flawless record on protocol-sensitive state events, VVIP visits and massive public gatherings.",
      "Turnkey ground execution — rapid mobilisation of large infrastructure at short notice, in full compliance with safety standards.",
    ],
  },
  {
    year: 2013,
    name: "Maan Events & Entertainment",
    eyebrow: "Experience",
    headline: "Second-generation, turnkey experiences",
    points: [
      "Signature weddings and social gatherings.",
      "Movie audio and pre-release launches.",
      "Sports events, concerts and corporate summits.",
      "B2B agency partner — the go-to ground-production partner for leading event agencies handling complex, large-format productions.",
    ],
  },
];

export const company = {
  name: "Maan Events",
  legalName: "Maan Events and Entertainment Pvt. Ltd.",
  tagline: "Event Infrastructure, Engineered at Scale.",
  // Maan Decorators, 2007 — the oldest of the two companies this site
  // represents. Maan Tent Works (1982) is the family's earlier concern and
  // appears only as the root of the About-page timeline.
  founded: FOUNDED,
  positioning:
    "A specialist event design, event management and event hire company rendering avant-garde designs with expertise, passion and creativity.",
  phones: ["+91 77023 02102", "+91 77023 02103", "+91 77023 02110", "+91 77023 02135"],
  primaryPhone: "+91 77023 02102",
  // Display form for direct-line lists — full number plus alternate last-two-digit extensions.
  primaryPhoneDisplay: "+91 77023 02102 / 03 / 10 / 35",
  email: "info@maanevents.com",
  whatsapp: "917702302102",
  social: {
    facebook: "#",
    instagram: "#",
    youtube: "#",
    twitter: "#",
  },
  offices: [
    {
      label: "Andhra Pradesh HQ",
      lines: [
        "Plot No. 190, IDA, Kondapalli",
        "Ibrahimpatnam, Vijayawada",
        "Krishna District – 521228",
      ],
      maps:
        "https://www.google.com/maps?q=Plot+No+190+IDA+Kondapalli+Ibrahimpatnam+Vijayawada",
    },
    {
      label: "Telangana HQ",
      lines: [
        "No. 10, II Floor, MCH Complex",
        "Putli Bowli, Koti",
        "Hyderabad – 500095",
      ],
      maps:
        "https://www.google.com/maps?q=MCH+Complex+Putli+Bowli+Koti+Hyderabad",
    },
  ],
  stats: [
    { value: `${yearsActive}+`, label: "Years of Craft", sub: "Since 2007" },
    { value: "1000+", label: "In-house Team", sub: "No vendor dependency" },
    { value: "500+", label: "Events Delivered", sub: "Govt · Corporate · Public" },
    { value: "2", label: "States Operated", sub: "AP · Telangana " },
  ],
  marqueeWords: [
    "Pandals",
    "Hangars",
    "Pagodas",
    "Venue Construction",
    "AC",
    "Decor",
    "Exhibitions",
    "Barricading",
    "Staging",
  ],
};
