import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceBySlug, services } from "@/content/services";
import { projects } from "@/content/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/sections/CTA";

export function ServicePageTemplate({ slug }: { slug: string }) {
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 4);
  const showcase = projects.slice(0, 6);

  return (
    <>
      {/* HERO */}
      <section className="relative -mt-16 md:-mt-20 bg-deep text-bone overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.cover}
            alt={service.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/40 to-deep/95" />
        </div>
        <Container className="relative pt-40 pb-20 md:pt-56 md:pb-28">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <Link href="/services/" className="hover:text-bone">Services</Link>
              <span className="text-bone/40">/</span>
              <span>{service.shortTitle}</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] max-w-5xl">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">
              {service.tagline}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* OVERVIEW + CAPABILITIES */}
      <section className="bg-bone">
        <Container className="section-y">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <Reveal className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-mute" />
                <span>The Discipline</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                Built in-house.<br />
                <span className="italic font-light text-mute">Delivered on time.</span>
              </h2>
            </Reveal>
            <div className="md:col-span-7">
              <Reveal>
                <p className="text-lg leading-relaxed text-ink/90">{service.description}</p>
              </Reveal>
              <Stagger className="mt-10 grid sm:grid-cols-2 gap-x-8 gap-y-6">
                {service.capabilities.map((c) => (
                  <StaggerItem key={c}>
                    <div className="flex items-start gap-4 border-t border-line pt-4">
                      <span className="font-display text-mute mt-0.5">—</span>
                      <span className="text-base leading-relaxed">{c}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </Container>
      </section>

      {/* PROJECT SHOWCASE */}
      <section className="bg-deep text-bone">
        <Container className="section-y">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <Reveal>
              <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-mute-dark" />
                <span>In the Field</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl">Selected deployments</h2>
            </Reveal>
            <Reveal>
              <Link
                href="/portfolio/"
                className="group inline-flex items-center gap-3 text-sm uppercase tracking-wider border-b border-bone pb-1 self-start"
              >
                See full portfolio
                <Arrow />
              </Link>
            </Reveal>
          </div>
          <Stagger className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {showcase.map((p) => (
              <StaggerItem key={p.slug}>
                <Link href="/portfolio/" className="group block relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={p.cover}
                    alt={`${p.title} — ${p.categoryLabel}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 50vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/0 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-1">
                      {p.categoryLabel}
                    </div>
                    <div className="font-display text-lg md:text-xl leading-tight">{p.title}</div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-bone">
        <Container className="section-y">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute" />
              <span>Adjacent Capabilities</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-12">
              Often delivered together.
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((r) => (
              <StaggerItem key={r.slug}>
                <Link href={r.url} className="group block relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={r.cover}
                    alt={r.title}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/30 to-transparent" />
                  <div className="absolute inset-0 p-5 flex flex-col justify-end text-bone">
                    <div className="font-display text-xl leading-tight">{r.shortTitle}</div>
                    <div className="mt-3 inline-flex items-center gap-2 text-[10px] uppercase tracking-wider opacity-80 group-hover:opacity-100">
                      Explore <Arrow />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTA />
    </>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M9 1L13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}

export function serviceMetadata(slug: string) {
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: `${s.title}`,
    description: `${s.tagline} ${s.description}`,
    alternates: { canonical: s.url },
    openGraph: {
      title: `${s.title} · Maan Events`,
      description: s.tagline,
      images: [s.cover],
    },
  };
}
