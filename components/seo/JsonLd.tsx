import { company } from "@/content/company";

const data = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://maanevents.com/#org",
  name: company.legalName,
  alternateName: company.name,
  description: company.positioning,
  url: "https://maanevents.com",
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

export function LocalBusinessJsonLd() {
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
