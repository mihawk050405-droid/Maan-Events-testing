import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { infraBySlug, infraDisciplines } from "@/content/infrastructure";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/sections/CTA";
import { InfraIcon, InfraGlyph } from "@/components/icons/InfraIcon";
import { ServiceJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { whatsappLink } from "@/lib/utils";

const RELATED_COUNT = 4;

/** One infrastructure service — /services/<slug>/. */
export function InfraServiceTemplate({ slug }: { slug: string }) {
  const service = infraBySlug(slug);
  if (!service) notFound();

  // The next few services in catalogue order, wrapping around, so every
  // page links onward to a different set rather than the same first four.
  const i = infraDisciplines.findIndex((d) => d.slug === slug);
  const related = Array.from(
    { length: RELATED_COUNT },
    (_, k) => infraDisciplines[(i + 1 + k) % infraDisciplines.length],
  );
  const number = String(i + 1).padStart(2, "0");

  return (
    <>
      <ServiceJsonLd service={service} />
      <BreadcrumbJsonLd
        crumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services/" },
          { name: service.label, url: service.url },
        ]}
      />

      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 bg-deep text-bone overflow-hidden">
        <div className="absolute inset-0">
          <Image src={service.cover} alt={service.label} fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/75 via-deep/45 to-deep/95" />
        </div>
        <Container className="relative pt-40 pb-20 md:pt-56 md:pb-28">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <Link href="/services/" className="hover:text-bone">Infrastructure As A Service</Link>
              <span className="text-bone/40">/</span>
              <span className="font-mono">{number}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
              {service.label}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-bone/80">{service.tagline}</p>
          </Reveal>
        </Container>
      </section>

      {/* OVERVIEW + WHAT WE SUPPLY */}
      <section className="bg-bone">
        <Container className="section-y">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-mute" />
                <span>The Service</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Owned, stocked<br />
                <span className="italic font-light text-mute">and installed in-house.</span>
              </h2>
              <div className="mt-10 max-w-[200px] bg-deep p-1">
                <InfraIcon slug={service.slug} />
              </div>
            </Reveal>
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink/90">{service.description}</p>
              </Reveal>
              <Reveal delay={0.05}>
                <div className="mt-12 text-xs uppercase tracking-[0.18em] text-mute mb-2">What we supply</div>
              </Reveal>
              <Stagger className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                {service.highlights.map((h) => (
                  <StaggerItem key={h}>
                    <div className="flex items-start gap-4 border-t border-line pt-4 pb-2">
                      <span className="font-display text-accent-hover mt-0.5">—</span>
                      <span className="text-base leading-relaxed">{h}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      {/* INVENTORY & SPECIFICATIONS */}
      <section className="bg-paper">
        <Container className="section-y">
          <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
            <Reveal className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-mute" />
                <span>Inventory &amp; Specifications</span>
              </div>
              <h2 className="text-3xl md:text-4xl">
                Ready stock,<br />
                <span className="italic font-light text-mute">ready to mobilise.</span>
              </h2>
            </Reveal>
            <div className="md:col-span-7">
              {service.inventory?.length ? (
                <Stagger className="grid sm:grid-cols-2 border-t border-ink">
                  {service.inventory.map((item) => (
                    <StaggerItem key={item.label}>
                      <div className="border-b border-line py-5 pr-6">
                        <div className="text-[11px] uppercase tracking-[0.18em] text-mute">{item.label}</div>
                        <div className="mt-1 font-display text-2xl">{item.value}</div>
                      </div>
                    </StaggerItem>
                  ))}
                </Stagger>
              ) : (
                // Shown until the client supplies stock and spec figures for
                // this service (content/infrastructure.ts → inventory).
                <Reveal>
                  <div className="border border-dashed border-mute/50 p-8 md:p-10">
                    <p className="text-lg leading-relaxed text-ink/85">
                      Detailed inventory and specifications for {service.label.toLowerCase()} are being
                      updated. For current stock, sizes and availability, speak to our team directly.
                    </p>
                    <a
                      href={whatsappLink(`Hello Maan, I'd like inventory details for ${service.label}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-wider border-b border-ink pb-1"
                    >
                      Ask for availability <Arrow />
                    </a>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* GALLERY — only once service-specific photos exist */}
      {service.gallery?.length ? (
        <section className="bg-deep text-bone">
          <Container className="section-y">
            <Reveal>
              <h2 className="text-4xl md:text-5xl mb-12">In the field</h2>
            </Reveal>
            <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {service.gallery.map((src) => (
                <StaggerItem key={src}>
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={src}
                      alt={service.label}
                      fill
                      sizes="(min-width: 768px) 33vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </Container>
        </section>
      ) : null}

      {/* RELATED */}
      <section className="bg-bone">
        <Container className="section-y">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute" />
              <span>Often deployed together</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12">More infrastructure services.</h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <InfraCard service={r} compact />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTA />
    </>
  );
}

/** The image card used on /services/ and in "related" rows. */
export function InfraCard({
  service,
  index,
  compact = false,
}: {
  service: (typeof infraDisciplines)[number];
  index?: number;
  compact?: boolean;
}) {
  return (
    <Link href={service.url} className="group block relative overflow-hidden bg-deep">
      <div className={`relative overflow-hidden ${compact ? "aspect-[3/4]" : "aspect-[4/5]"}`}>
        <Image
          src={service.cover}
          alt={service.label}
          fill
          sizes={compact ? "(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" : "(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"}
          className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/50 to-deep/10" />

        <div className="absolute top-5 left-5 right-5 flex items-start justify-between text-bone">
          {index !== undefined && (
            <span className="font-mono text-[11px] text-bone/70">{String(index + 1).padStart(2, "0")}</span>
          )}
          <span className="ml-auto h-12 w-12 md:h-14 md:w-14 border border-bone/25 bg-deep/50 backdrop-blur-sm p-2">
            <InfraGlyph slug={service.slug} className="h-full w-full text-bone/90" />
          </span>
        </div>

        <div className={`absolute inset-x-0 bottom-0 text-bone ${compact ? "p-5" : "p-7"}`}>
          {!compact && (
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-2">{service.tagline}</div>
          )}
          <h3 className={`font-display leading-tight ${compact ? "text-xl" : "text-2xl md:text-3xl"}`}>
            {service.label}
          </h3>
          <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-bone/80 group-hover:text-bone">
            Explore <Arrow />
          </div>
        </div>
      </div>
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="10"
      viewBox="0 0 14 10"
      fill="none"
      aria-hidden
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path d="M9 1L13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

export function infraMetadata(slug: string) {
  const s = infraBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.label} — Infrastructure As A Service`,
    description: `${s.tagline} ${s.description}`,
    alternates: { canonical: s.url },
    openGraph: {
      title: `${s.label} · Maan`,
      description: s.tagline,
      type: "website" as const,
      url: s.url,
      images: [{ url: s.cover, alt: s.label }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${s.label} · Maan`,
      description: s.tagline,
      images: [s.cover],
    },
  };
}
