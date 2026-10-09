/* =======================================================================
   CLIENTELE

   Transcribed from the client's "Our Clientele" presentation slide.
   Names render as text wordmarks until logo files arrive: drop a logo
   into public/clients/ and set `logo` on its entry to switch that tile
   to the image.

   Two logos on the slide could not be identified from the screenshot
   and are left out until confirmed: a red circular seal with Telugu
   text (bottom row, beside Osmania University) and a logo partly hidden
   behind the slide title (right edge, third row).
   ======================================================================= */

export type Client = {
  name: string;
  /** Public path to a logo, e.g. "/clients/ntpc.svg". Optional. */
  logo?: string;
};

export type ClientGroup = {
  slug: string;
  label: string;
  clients: Client[];
};

const names = (...list: string[]): Client[] => list.map((name) => ({ name }));

export const clientGroups: ClientGroup[] = [
  {
    slug: "government",
    label: "Government & Public Sector",
    clients: names(
      "Government of India",
      "Government of Andhra Pradesh",
      "Government of Telangana",
      "Ministry of Civil Aviation",
      "National Highways Authority of India (NHAI)",
      "Indian Railways",
      "Indian Navy",
      "DRDO",
      "Employees' Provident Fund Organisation (EPFO)",
      "Bharat Dynamics Limited",
      "Bharat Electronics Limited",
      "Hindustan Petroleum (HPCL)",
      "Balmer Lawrie & Co. Ltd.",
      "National Book Trust, India",
      "Andhra Pradesh Tourism",
      "APCRDA",
      "APIIC",
      "TGIIC",
      "GHMC",
      "HMDA",
    ),
  },
  {
    slug: "corporate",
    label: "Corporate & Industry",
    clients: names(
      "Tata Trusts",
      "Reliance Industries",
      "Adani",
      "AM/NS India",
      "Aditya Birla Grasim",
      "Aditya Birla Fashion & Retail",
      "JSW Steel",
      "JSW Industrial Parks",
      "MEIL",
      "Mahindra Tractors",
      "GMR",
      "Dixon Technologies",
      "The Ramco Cements",
      "Yokohama",
      "Dalmia Bharat Cement",
      "Suzlon",
      "My Home Group",
      "MSN Laboratories",
      "Auro Realty",
      "Rajapushpa Properties",
    ),
  },
  {
    slug: "media",
    label: "Media, Entertainment & Agencies",
    clients: names(
      "BookMyShow",
      "TribeVibe",
      "Ramoji Film City",
      "The Crayons Network",
      "Madison Turnt",
    ),
  },
  {
    slug: "education",
    label: "Education",
    clients: names(
      "Indian School of Business (ISB)",
      "IIIT Hyderabad",
      "Osmania University",
      "VIT-AP University",
      "SRM University AP",
    ),
  },
];

export const clientCount = clientGroups.reduce((n, g) => n + g.clients.length, 0);

/** The scrolling "Trusted by" strip — a cross-section of the list. */
export const marqueeClients = [
  "Government of India",
  "Indian Navy",
  "DRDO",
  "Indian Railways",
  "Reliance",
  "Tata Trusts",
  "Adani",
  "AM/NS India",
  "JSW",
  "GMR",
  "Aditya Birla",
  "MEIL",
  "BookMyShow",
  "Ramoji Film City",
  "ISB",
];

/* =======================================================================
   APPRECIATION LETTERS

   Scans arrive from the client. Add each as an entry with `image` (a
   public path, e.g. "/clients/letters/ghmc-2024.jpg"). While
   SHOW_LETTER_PLACEHOLDERS is true and the list is empty, the page shows
   placeholder frames so the layout can be reviewed.
   ======================================================================= */

export type Letter = {
  org: string;
  /** e.g. "March 2024" */
  date?: string;
  /** A one- or two-line quote from the letter. */
  excerpt?: string;
  image?: string;
};

export const letters: Letter[] = [];

export const SHOW_LETTER_PLACEHOLDERS = true;
