import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/content/services";
import { infraDisciplines } from "@/content/infrastructure";
import { faqs } from "@/content/faqs";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Services — Event Infrastructure Disciplines Under One Roof",
  description:
    "From Prime Minister and President events to weddings, exhibitions and concerts — Maan Events delivers every event infrastructure discipline in-house, across ten specialised service lines.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <BreadcrumbJsonLd crumbs={[{ name: "Home", url: "/" }, { name: "Services", url: "/services/" }]} />
      {/* =========================================================
          HERO SECTION
          ========================================================= */}
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
              Ten disciplines.
              <br />
              <span className="italic font-light text-bone/80">
                One in-house team.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">
              From structure and climate to flooring, decor and safety,
              every layer of an event is designed, fabricated and installed
              by our own team — with no outsourcing and no compromise.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* =========================================================
          OUR INFRASTRUCTURE
          ========================================================= */}
      <section className="bg-deep text-bone">
        <Container className="section-y">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute-dark" />
              <span>Our Infra</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mb-10 md:mb-14">
              Thirteen disciplines,
              <br />
              <span className="italic font-light text-mute-dark">
                built and stocked in-house.
              </span>
            </h2>
          </Reveal>

          <Stagger className="flex flex-col gap-12 md:gap-16" gap={0.06}>
            {infraDisciplines.map((d, i) => {
              const reversed = i % 2 === 1;
              return (
                <StaggerItem key={d.slug} y={14}>
                  <div
                    className={`flex flex-col sm:items-center gap-6 sm:gap-10 md:gap-14 ${
                      reversed ? "sm:flex-row-reverse" : "sm:flex-row"
                    }`}
                  >
                    <div className="relative aspect-square w-full max-w-[240px] mx-auto sm:mx-0 shrink-0 overflow-hidden">
                      <Image
                        src={d.image}
                        alt={d.label}
                        fill
                        sizes="240px"
                        className="object-contain"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <div className="font-display text-mute-dark text-sm mb-2">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <h3 className="font-display text-xl md:text-2xl mb-2">
                        {d.label}
                      </h3>
                      <p className="text-sm md:text-base leading-relaxed text-bone/80 max-w-md mx-auto sm:mx-0">
                        {d.description}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </Container>
      </section>

      {/* Services grid */}
      <section className="bg-paper text-ink">
        <Container className="section-y">
          <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={s.url}
                  className="group block relative overflow-hidden bg-paper border border-line"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={s.cover}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-deep/95 via-deep/45 to-transparent" />

                    <div className="absolute inset-0 p-7 flex flex-col justify-end text-bone">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-2">
                        {s.tagline}
                      </div>

                      <h2 className="font-display text-2xl md:text-3xl leading-tight">
                        {s.title}
                      </h2>

                      <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-bone/80 group-hover:text-bone">
                        Explore

                        <svg
                          width="14"
                          height="10"
                          viewBox="0 0 14 10"
                          fill="none"
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path
                            d="M9 1L13 5L9 9M13 5H0"
                            stroke="currentColor"
                            strokeWidth="1.4"
                            strokeLinecap="square"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <FAQ
        faqs={faqs}
        heading="The best event company for every category we serve."
      />

      {/* =========================================================
          CTA SECTION
          ========================================================= */}
      <CTA />
    </>
  );
}