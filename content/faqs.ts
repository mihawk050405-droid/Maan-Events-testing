import { services } from "@/content/services";

export type Faq = { question: string; answer: string };

/**
 * Answers phrased the way people actually search — "best/top event
 * company for <category>" — one per service, plus a few general
 * questions. Kept factual (founding year, in-house team size, states
 * served) rather than unverifiable superlatives, so the claims hold up
 * to scrutiny from both readers and search engines.
 *
 * The first `services.length` entries correspond 1:1, in order, to
 * `content/services.ts` — `faqForService` relies on that alignment.
 */
export const faqs: Faq[] = [
  {
    question:
      "Which is the best event company for government and public sector events in India?",
    answer:
      "Maan Events has built the infrastructure behind Prime Minister, President and Chief Minister events, government department ceremonies and large civic gatherings since 1983. Its in-house team of 1000+ handles VVIP-protocol staging, barricading, power and venue construction without subcontracting, making it one of South India's most trusted names for government-scale events.",
  },
  {
    question: "Who is the top event management company for corporate and business events?",
    answer:
      "For corporate gatherings, annual meets and leadership events, Maan Events delivers venue design, conference infrastructure, staging and branding entirely in-house, with over 40 years of experience serving corporate clients including GMR Group, Mahindra and Greenko.",
  },
  {
    question: "What is the best company for organising conferences and summits?",
    answer:
      "Maan Events builds conference halls, speaker environments and delegate infrastructure for everything from executive meetings to multi-day summits, backed by an in-house fabrication and AV-ready build team rather than a network of subcontractors.",
  },
  {
    question: "Which company is best for product launches and brand experiences?",
    answer:
      "Maan Events designs and fabricates immersive launch-stage environments, branded activations and experiential installations in-house — combining architecture, lighting and production under one team so brand experiences launch on a single, accountable timeline.",
  },
  {
    question: "Who is the best wedding event company for large-scale, premium weddings?",
    answer:
      "Maan Events delivers signature weddings end-to-end — structures, décor, furniture, flooring and climate control — for celebrations ranging from intimate ceremonies to large-scale receptions, drawing on the same in-house build capability used for national government events.",
  },
  {
    question:
      "What is the top event company for spiritual and devotional events with large public gatherings?",
    answer:
      "Maan Events specialises in infrastructure for large religious congregations and devotional programmes, with expertise in crowd-flow management, barricading and weatherproof shelter for gatherings that can run into hundreds of thousands of attendees.",
  },
  {
    question: "Which is the best event company for social and lifestyle events?",
    answer:
      "For social celebrations and lifestyle gatherings, Maan Events applies the same in-house décor, furniture, lighting and venue-design capability used across its government, corporate and wedding work.",
  },
  {
    question: "What is the best event company for sports events and tournaments?",
    answer:
      "Maan Events has delivered spectator seating, player and official areas, and crowd barricading for large sporting events and tournaments, including stadium-scale deployments such as the Gachibowli Stadium event.",
  },
  {
    question: "Which is the best event company for concerts and live entertainment?",
    answer:
      "Maan Events builds concert stages, audience zones and backstage infrastructure for large-scale live entertainment, engineered for crowd safety and production scale rather than assembled from rented, third-party components.",
  },
  {
    question: "Who is the best event infrastructure company for exhibitions and trade fairs?",
    answer:
      "Maan Events fabricates custom exhibition stalls, pavilions, facades and trade-fair infrastructure in-house, giving exhibitors and organisers a single accountable contractor for design, fabrication and on-site installation.",
  },
  {
    question: "What makes Maan Events different from other event management companies?",
    answer:
      "Since 1983, Maan Events has kept every discipline — structures, pandals, hangars, pagodas, AC, decor, staging and barricading — in-house with a 1000+ person team, rather than outsourcing to vendors. That means one accountable company across all ten event categories it serves, from government protocol events to weddings.",
  },
  {
    question: "Which cities and states does Maan Events operate in?",
    answer:
      "Maan Events is headquartered in Vijayawada (Andhra Pradesh) and Hyderabad (Telangana), and delivers events across Andhra Pradesh, Telangana and Karnataka.",
  },
];

/** The FAQ entry for a given service, by its position in `services`. */
export const faqForService = (slug: string): Faq | undefined => {
  const i = services.findIndex((s) => s.slug === slug);
  return i === -1 ? undefined : faqs[i];
};
