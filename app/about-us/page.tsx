import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { Stats } from "@/components/sections/Stats";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { CTA } from "@/components/sections/CTA";
import { company } from "@/content/company";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "About Maan Events — Since 1983",
  description:
    "From Maan Tent Works in 1983 to one of the largest event infrastructure providers in South India. The story, the scale and the people behind Maan Events.",
  alternates: { canonical: "/about-us/" },
};

const values = [
  {
    title: "Extreme Professionalism",
    body: "Every brief is treated as a flagship engagement. From first contact to final dismantle, the work happens on time, on spec, on schedule.",
  },
  {
    title: "Highly Innovative",
    body: "We bring techniques, materials and structures to South India before anyone else. Many of the industry's firsts have come out of our yards.",
  },
  {
    title: "Capable of Scale",
    body: "When the gathering is national and the stakes are televised, our in-house team of 1000+ delivers what no vendor network can match.",
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
              <span>About · Since 1983</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
              Four decades<br />
              <span className="italic font-light text-bone/80">behind the scenes.</span>
            </h1>
          </Reveal>
        </Container>
      </section>

      {/* Story */}
      <section className="bg-bone">
        <Container className="section-y">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
            <Reveal className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-mute" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">From a tent works,<br /><span className="italic font-light text-mute">to a nation&apos;s stage.</span></h2>
            </Reveal>
            <div className="md:col-span-8 space-y-6 text-lg leading-relaxed text-ink/90">
              <Reveal>
                <p>
                  Established in 1983 as <span className="italic">Maan Tent Works</span>, the
                  sheer dedication of our founders saw the company grow to be a pioneering tent
                  manufacturing enterprise.
                </p>
              </Reveal>
              <Reveal delay={0.05}>
                <p>
                  It was foresight into the world of modern events that prompted the initiation
                  and development of <span className="italic">Maan Decorators</span>. From there
                  we broke ground into integrated event management — and today, we have emerged
                  as one of the biggest event infrastructure providers in South India.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Maan Events and Entertainment Pvt. Ltd. has been the backbone of preeminent
                  event management companies in terms of infrastructure supply ever since its
                  conception. The events we deliver cater to the Governments of Andhra Pradesh,
                  Telangana and Karnataka, and to the South Central and South Western Railways —
                  among the most prestigious employers in South India.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-deep text-bone">
        <Container className="section-y">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute-dark" />
              <span>What we are</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-16">
              Three traits the work has<br />
              <span className="italic font-light text-mute-dark">earned us a name for.</span>
            </h2>
          </Reveal>
          <Stagger className="grid md:grid-cols-3 gap-8 md:gap-12">
            {values.map((v, i) => (
              <StaggerItem key={v.title}>
                <div className="border-t border-bone/20 pt-8">
                  <div className="font-display text-bone/40 text-sm mb-3">0{i + 1}</div>
                  <h3 className="text-2xl md:text-3xl mb-5">{v.title}</h3>
                  <p className="text-mute-dark leading-relaxed">{v.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

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
              Maan Events is expanding — with sister concerns and additional service lines designed
              to complement what we already do at the highest level. The same standards, applied
              to the next set of disciplines.
            </p>
          </Reveal>
        </Container>
      </section>

      <ClientMarquee />
      <CTA />
    </>
  );
}
