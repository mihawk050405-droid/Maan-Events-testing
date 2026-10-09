import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/sections/CTA";
import { infraDisciplines } from "@/content/infrastructure";
import { InfraCard } from "@/components/templates/InfraServiceTemplate";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Services — Infrastructure As A Service",
  description:
    "German hangars, megastructures, staging, barricading, air conditioning, decor and more — thirteen event infrastructure services, owned, stocked and installed in-house by Maan.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services/" }]} />

      <section className="bg-deep text-bone -mt-16 md:-mt-20">
        <Container className="pt-36 md:pt-52 pb-16 md:pb-24">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <span>Services</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
              Infrastructure
              <br />
              <span className="italic font-light text-bone/80">as a service.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">
              {infraDisciplines.length} infrastructure services, from hangars and megastructures to
              climate control, staging and decor. Every piece is owned, stocked and installed by our
              own team, with no outsourcing.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bone">
        <Container className="section-y">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute" />
              <span>Infrastructure As A Service</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mb-12 md:mb-16">
              Choose a service
              <br />
              <span className="italic font-light text-mute">to see what we deploy.</span>
            </h2>
          </Reveal>
          <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-7" gap={0.05}>
            {infraDisciplines.map((d, i) => (
              <StaggerItem key={d.slug}>
                <InfraCard service={d} index={i} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CTA />
    </>
  );
}
