import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal, Stagger, StaggerItem } from "@/components/motion/Reveal";
import { CTA } from "@/components/sections/CTA";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Services — Twelve Disciplines Under One Roof",
  description:
    "From engineered superstructures to red-carpet finishing — Maan Events delivers twelve event infrastructure disciplines, all in-house.",
  alternates: { canonical: "/services/" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-ink text-bone -mt-16 md:-mt-20">
        <Container className="pt-36 md:pt-52 pb-16 md:pb-24">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <span>Services</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
              Twelve disciplines.<br />
              <span className="italic font-light text-bone/80">One in-house team.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">
              Every layer of an event — structure, climate, floor, decor, safety — designed,
              fabricated and installed by Maan Events directly. No vendor chains.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bone">
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
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                    <div className="absolute inset-0 p-7 flex flex-col justify-end text-bone">
                      <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-2">
                        {s.tagline}
                      </div>
                      <h2 className="font-display text-2xl md:text-3xl leading-tight">
                        {s.title}
                      </h2>
                      <div className="mt-4 flex items-center gap-2 text-xs uppercase tracking-wider text-bone/80 group-hover:text-bone">
                        Explore
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
                          <path d="M9 1L13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
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

      <CTA />
    </>
  );
}
