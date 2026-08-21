import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { company } from "@/content/company";
import { whatsappLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Maan Events",
  description:
    "Reach Maan Events in Vijayawada or Hyderabad — by phone, WhatsApp, email or in person. A senior project lead responds within the working day.",
  alternates: { canonical: "/contact/" },
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ink text-bone -mt-16 md:-mt-20">
        <Container className="pt-36 md:pt-52 pb-16 md:pb-24">
          <Reveal>
            <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-bone/60" />
              <span>Contact</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.95] max-w-5xl">
              Tell us what<br />
              <span className="italic font-light text-bone/80">you&apos;re building.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-bone/80">
              A senior project lead responds within the working day. For the fastest reply,
              WhatsApp us directly.
            </p>
          </Reveal>
        </Container>
      </section>

      <section className="bg-bone">
        <Container className="section-y">
          <div className="grid md:grid-cols-12 gap-12 md:gap-20">
            <Reveal className="md:col-span-5">
              <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-mute" />
                <span>Direct Lines</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-10">
                The fastest path<br />
                <span className="italic font-light text-mute">is a direct call.</span>
              </h2>
              <div className="space-y-4">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-3 bg-ink text-bone px-6 py-5 hover:bg-accent transition-colors"
                >
                  <span className="text-sm uppercase tracking-wider">WhatsApp Enquiry</span>
                  <ArrowRight />
                </a>
                <a
                  href={`tel:${company.primaryPhone}`}
                  className="group flex items-center justify-between gap-3 border border-ink/15 hover:border-ink px-6 py-5 transition-colors"
                >
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-mute">Call</span>
                    <span className="text-lg">{company.primaryPhone}</span>
                  </span>
                  <ArrowRight />
                </a>
                <a
                  href={`mailto:${company.email}`}
                  className="group flex items-center justify-between gap-3 border border-ink/15 hover:border-ink px-6 py-5 transition-colors"
                >
                  <span>
                    <span className="block text-[10px] uppercase tracking-[0.18em] text-mute">Email</span>
                    <span className="text-lg">{company.email}</span>
                  </span>
                  <ArrowRight />
                </a>
              </div>
            </Reveal>

            <div className="md:col-span-7 grid md:grid-cols-2 gap-10">
              {company.offices.map((o, i) => (
                <Reveal key={o.label} delay={0.05 + i * 0.05}>
                  <div className="border-t border-ink pt-8">
                    <div className="text-xs uppercase tracking-[0.18em] text-mute mb-4">
                      {o.label}
                    </div>
                    <address className="not-italic text-ink leading-relaxed mb-5">
                      {o.lines.map((l) => (
                        <span key={l} className="block">{l}</span>
                      ))}
                    </address>
                    <a
                      href={o.maps}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-2 text-sm border-b border-ink pb-1"
                    >
                      View on Google Maps <ArrowRight />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-bone pb-24 md:pb-32">
        <Container>
          <Reveal>
            <div className="border border-line overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=MCH+Complex+Putli+Bowli+Koti+Hyderabad&output=embed"
                width="100%"
                height="460"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Maan Events Hyderabad office"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M9 1L13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
