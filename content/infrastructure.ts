export type InfraDiscipline = {
  slug: string;
  label: string;
  description: string;
};

/**
 * The physical disciplines behind every service line — the actual
 * structures, systems and crafts our in-house team builds with, as
 * distinct from the 10 audience-facing service categories in
 * content/services.ts. Order matches the reference "Our Infra" grid.
 */
export const infraDisciplines: InfraDiscipline[] = [
  {
    slug: "facades-and-stalls",
    label: "Facades and Stalls",
    description:
      "Custom-built stall fronts and branded facades for exhibitions, trade fairs and public installations — designed and fabricated in-house down to the signage.",
  },
  {
    slug: "barricading",
    label: "Barricading",
    description:
      "Crowd-flow and VVIP-grade barricading systems that keep large public and government events safe, organised and easy to navigate.",
  },
  {
    slug: "megastructures-and-superstructures",
    label: "Megastructures and Superstructures",
    description:
      "Large-span aluminium structures engineered for national-scale gatherings — the superstructures behind our biggest government and public events.",
  },
  {
    slug: "pagodas-and-cottages",
    label: "Pagodas & Cottages",
    description:
      "Premium pagoda tents and cottage-style structures for weddings, VIP hospitality areas and boutique event spaces.",
  },
  {
    slug: "transparent-hangars",
    label: "Transparent Hangars",
    description:
      "Glass-walled transparent hangars that bring daylight and openness into large covered venues without losing weather protection.",
  },
  {
    slug: "event-decoration",
    label: "Event Decoration",
    description:
      "Full decor design and execution — florals, drapery and thematic styling that turns a bare structure into a finished occasion.",
  },
  {
    slug: "venue-construction",
    label: "Venue Construction",
    description:
      "Ground-up venue construction — site prep, power, flooring and access — for events built entirely from scratch, on schedule.",
  },
  {
    slug: "staging-and-platforming",
    label: "Staging and Platforming",
    description:
      "Engineered stages and platforms built to hold VVIP protocol, concert production or ceremonial requirements at any scale.",
  },
  {
    slug: "german-hangars",
    label: "German Hangars",
    description:
      "Precision-engineered German hangar structures for column-free, weatherproof coverage across the largest event footprints.",
  },
  {
    slug: "trussing-and-draping",
    label: "Trussing & Draping",
    description:
      "Truss rigging and drapery systems for lighting, AV and staging — the structural backbone behind every finished stage look.",
  },
  {
    slug: "air-conditioning",
    label: "Air Conditioning",
    description:
      "Industrial-scale climate control that keeps large tented venues comfortable for guests, regardless of outdoor conditions.",
  },
  {
    slug: "furniture",
    label: "Furniture",
    description:
      "Event furniture — from banquet seating to VIP lounges — sourced, maintained and deployed in-house for every event scale.",
  },
  {
    slug: "weather-sheds",
    label: "Weather Sheds",
    description:
      "Weatherproof sheds and covered walkways that protect guests, equipment and queues from sun and rain alike.",
  },
];
