import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Stats } from "@/components/sections/Stats";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { CTA } from "@/components/sections/CTA";
import { Evolution } from "@/components/sections/Evolution";
import { ValuesFlow, type Value } from "@/components/sections/ValuesFlow";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Maan — Two Decades of Event Infrastructure",
  description:
    "From Maan Tent Works to Maan Decorators (2007) and Maan Events & Entertainment (2013): two decades as one of South India's largest event infrastructure providers.",
  alternates: { canonical: "/about-us/" },
};

const values: Value[] = [
  {
    title: "Extreme Professionalism",
    proof: "Protocol-grade delivery",
    body: "Every brief is treated as a flagship engagement. From the first site visit to the final dismantle, we deliver on time, on spec and to protocol.",
    icon: "precision",
  },
  {
    title: "Highly Innovative",
    proof: "Industry firsts in South India",
    body: "We bring new structures, materials and techniques to the region before anyone else, and engineer custom solutions where standard ones fall short.",
    icon: "spark",
  },
  {
    title: "Capable of Scale",
    proof: "1000+ in-house team",
    body: "When the gathering is national and the stakes are televised, our own people and inventory deliver what no vendor network can match.",
    icon: "scale",
  },
];

export default function AboutPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", url: "/" }, { name: "About Us", url: "/about-us/" }]} />
      {/* Hero */}
      <section className="relative -mt-16 md:-mt-20 bg-deep text-bone overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/portfolio/pm-events/yoga-day-vizag-event/01.jpg"
            alt="Maan Events on site"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/65 via-deep/40 to-deep/95" />
        </div>
        <Container className="relative pt-36 pb-20 md:pt-52 md:pb-32">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <span>About · Since 2007</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
              Two decades<br />
              <span className="italic font-light text-bone/80">behind the scenes.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      <Evolution />

      <ValuesFlow values={values} />

      <Stats />

      <section className="bg-bone">
        <Container className="section-y">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute" />
              <span>What&apos;s Next</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl">
              The next chapter is bigger.<br />
              <span className="italic font-light text-mute">Sister companies. Newer services.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-mute">
              Maan continues to grow, with sister concerns and new service lines that complement
              what we already do. Every one of them is held to the same standard.
            </p>
          </Reveal>
        </Container>
      </section>

      <ClientMarquee />
      <CTA />
    </>
  );
}
