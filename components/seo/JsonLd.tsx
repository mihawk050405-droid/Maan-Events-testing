import { company } from "@/content/company";
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
  email: company.email,
  telephone: company.primaryPhone,
  foundingDate: String(company.founded),
  areaServed: ["Andhra Pradesh", "Telangana", "Karnataka", "India"],
  address: company.offices.map((o) => ({
    "@type": "PostalAddress",
    streetAddress: o.lines.slice(0, -1).join(", "),
    addressLocality: o.lines[o.lines.length - 1],
    addressCountry: "IN",
  })),
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

function JsonLdScript({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
