import { company } from "@/content/company";
import { services } from "@/content/services";
import type { Service } from "@/content/services";

const SITE_URL = "https://maanevents.com";

const localBusinessData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#org`,
  name: company.legalName,
  alternateName: company.name,
  description: company.positioning,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.ico`,
  image: `${SITE_URL}/portfolio/pm-events/kurnool-event/01.jpg`,
  email: company.email,
  telephone: company.primaryPhone,
  priceRange: "$$$",
  foundingDate: String(company.founded),
  areaServed: ["Andhra Pradesh", "Telangana", "Karnataka", "India"],
  address: company.offices.map((o) => ({
    "@type": "PostalAddress",
    streetAddress: o.lines.slice(0, -1).join(", "),
    addressLocality: o.lines[o.lines.length - 1],
    addressCountry: "IN",
  })),
  // What this business is known for — the ten disciplines search engines
  // should associate with the org itself, not just with each service's
  // own page, so a query naming any one of them can surface the brand.
  knowsAbout: services.map((s) => s.title),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Event Infrastructure Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.title,
        description: s.tagline,
        url: `${SITE_URL}${s.url}`,
      },
    })),
  },
  sameAs: Object.values(company.social).filter((v) => v && v !== "#"),
};

/** Rendered once, site-wide, from the root layout. */
export function LocalBusinessJsonLd() {
  return <JsonLdScript data={localBusinessData} />;
}

/**
 * One entry per service page, describing it as a Service offered by the
 * LocalBusiness above — the piece search engines use to connect "Prime
 * Minister event management" (etc.) as something this business actually
 * does, not just a page that mentions the phrase.
 */
export function ServiceJsonLd({ service }: { service: Service }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: { "@id": `${SITE_URL}/#org` },
    areaServed: ["Andhra Pradesh", "Telangana", "Karnataka", "India"],
    url: `${SITE_URL}${service.url}`,
    image: `${SITE_URL}${service.cover}`,
  };
  return <JsonLdScript data={data} />;
}

export type Crumb = { name: string; url: string };

/** `crumbs` runs Home → ... → current page, all as root-relative URLs. */
export function BreadcrumbJsonLd({ crumbs }: { crumbs: Crumb[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.url}`,
    })),
  };
  return <JsonLdScript data={data} />;
}

export type Faq = { question: string; answer: string };

/**
 * Marks up a visible FAQ section so search engines and AI answer engines
 * can lift a direct answer for "best/top event company for <category>"
 * style queries straight from the page they already trust for that
 * content, rather than only inferring it from prose.
 */
export function FaqJsonLd({ faqs }: { faqs: Faq[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
  return <JsonLdScript data={data} />;
}

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
