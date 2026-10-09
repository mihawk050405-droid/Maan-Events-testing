import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { PortfolioBrowser } from "@/components/portfolio/PortfolioBrowser";
import { CTA } from "@/components/sections/CTA";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/sections/FAQ";
import { faqs } from "@/content/faqs";

export const metadata: Metadata = {
  title: "Portfolio — Selected Work Across Government, Corporate & Public Events",
  description:
    "Selected projects from Prime Minister, President, Chief Minister, Fortune-500 and public-event engagements delivered by Maan Events.",
  alternates: { canonical: "/portfolio/" },
};

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", url: "/" }, { name: "Portfolio", url: "/portfolio/" }]} />
      <section className="bg-deep text-bone -mt-16 md:-mt-20">
        <Container className="pt-36 md:pt-52 pb-16 md:pb-24">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <span>Portfolio</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
              The work.<br />
              <span className="italic font-light text-bone/80">In its own words.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">
              Browse by event type, from heads of state and national ceremonies to
              weddings, concerts and brand launches.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bone">
        <Container className="section-y">
          <PortfolioBrowser />
        </Container>
      </section>

      <FAQ faqs={faqs} heading="The best event company for every category we serve." />

      <CTA />
    </>
  );
}
