import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { whatsappLink } from "@/lib/utils";
import { company } from "@/content/company";

export function CTA() {
  return (
    <section className="bg-deep text-bone relative overflow-hidden">
      <div className="container-x section-y">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <Reveal className="md:col-span-8">
            <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-mute-dark" />
              <span>Start a Conversation</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[0.95]">
              Planning an event<br />
              <span className="italic font-light text-mute-dark">that has to be flawless?</span>
            </h2>
            <p className="mt-8 max-w-xl text-mute-dark leading-relaxed">
              Tell us what you&apos;re building. We&apos;ll respond within the working day with a
              senior project lead.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-4 flex flex-col gap-3">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              // Gradient replaces the flat hover:bg-accent. Tailwind's
              // arbitrary-value syntax takes a raw CSS gradient directly in
              // a hover: utility — no inline style, no JS state needed.
              // Endpoints are darkened from the sampled reference image
              // (#F02B2C top -> #D60F10, #830204 bottom unchanged) so
              // text-bone clears 4.5:1 contrast at every point in the
              // range, not just the two ends — verified at 10% steps,
              // tightest margin 4.74:1 at the top.
              className="group inline-flex items-center justify-between gap-3 bg-bone text-ink px-6 py-5 text-sm uppercase tracking-wider transition-colors duration-300 hover:bg-[linear-gradient(180deg,#D60F10_0%,#830204_100%)] hover:text-bone"
            >
              WhatsApp <Arrow />
            </a>
            <a
              href={`tel:${company.primaryPhone}`}
              className="group inline-flex items-center justify-between gap-3 border border-bone/25 px-6 py-5 text-sm uppercase tracking-wider hover:border-bone transition-colors"
            >
              Call {company.primaryPhone} <Arrow />
            </a>
            <a
              href={`mailto:${company.email}`}
              className="group inline-flex items-center justify-between gap-3 border border-bone/25 px-6 py-5 text-sm uppercase tracking-wider hover:border-bone transition-colors"
            >
              {company.email} <Arrow />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M9 1L13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
