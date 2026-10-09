import Image from "next/image";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { ClientMarquee } from "@/components/sections/ClientMarquee";
import { CTA } from "@/components/sections/CTA";
import { LettersGallery } from "@/components/clients/LettersGallery";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { clientCount, clientGroups } from "@/content/clients";

export const metadata: Metadata = {
  title: "Clients — Governments, Corporates and Institutions We Build For",
  description:
    "Maan has built event infrastructure for the Government of India, state governments, defence and public-sector undertakings, leading corporates, media houses and universities.",
  alternates: { canonical: "/clients/" },
};

export default function ClientsPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", url: "/" }, { name: "Clients", url: "/clients/" }]} />

      <section className="bg-deep text-bone -mt-16 md:-mt-20">
        <Container className="pt-36 md:pt-52 pb-16 md:pb-24">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <span>Clients</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
              Trusted by those
              <br />
              <span className="italic font-light text-bone/80">who can&apos;t afford to fail.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">
              From the Government of India and the armed forces to national corporates, media houses
              and universities: {clientCount}+ organisations rely on our infrastructure when the stakes
              are highest.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bone">
        <Container className="section-y space-y-20 md:space-y-28">
          {clientGroups.map((g, gi) => (
            <div key={g.slug} className="grid lg:grid-cols-12 gap-8 lg:gap-16">
              <Reveal className="lg:col-span-3">
                <div className="lg:sticky lg:top-28">
                  <div className="font-mono text-[11px] text-mute">{String(gi + 1).padStart(2, "0")}</div>
                  <h2 className="mt-2 text-2xl md:text-3xl">{g.label}</h2>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-mute">
                    {g.clients.length} clients
                  </div>
                </div>
              </Reveal>
              <Stagger
                className="lg:col-span-9 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 border-l border-t border-line"
                gap={0.03}
              >
                {g.clients.map((c) => (
                  <StaggerItem key={c.name}>
                    <div className="group relative h-28 md:h-32 border-r border-b border-line flex items-center justify-center p-4 md:p-6 text-center transition-colors duration-300 hover:bg-paper">
                      {c.logo ? (
                        <Image
                          src={c.logo}
                          alt={c.name}
                          width={160}
                          height={64}
                          className="max-h-14 w-auto object-contain grayscale group-hover:grayscale-0 transition-[filter] duration-300"
                        />
                      ) : (
                        <span className="font-display text-base md:text-lg leading-snug text-ink/75 group-hover:text-ink transition-colors">
                          {c.name}
                        </span>
                      )}
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-sand">
        <Container className="section-y">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute" />
              <span>Appreciation Letters</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mb-12 md:mb-16">
              In their own words.
              <br />
              <span className="italic font-light text-mute">On their own letterheads.</span>
            </h2>
          </Reveal>
          <LettersGallery />
        </Container>
      </section>

      <ClientMarquee />
      <CTA />
    </>
  );
}
