"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MaskReveal } from "@/components/motion/Reveal";

// Maan Events builds for competing political parties, so the hero must stay
// party-neutral: no politicians, no party insignia, and no dominant party
// colour (yellow in particular). Structure-only shots are the safe choice.
const HERO_IMAGE = "/portfolio/exhibitions/hitex-event/01.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  // Drift the backdrop slower than the page so the structures feel set back.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Positive y makes the backdrop lag the page. The element is 120% tall with
  // 10% hanging above, so the drift (6% of 120% = 7.2% of the hero) can never
  // pull the top edge into view.
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section ref={ref} className="relative -mt-16 md:-mt-20 overflow-hidden bg-deep text-bone">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: reduce ? 1 : 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          style={reduce ? undefined : { y: parallaxY }}
          className="absolute inset-x-0 -top-[10%] h-[120%]"
        >
          <Image
            src={HERO_IMAGE}
            alt="Maan Events — large scale event infrastructure"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-deep/75 via-deep/55 to-deep/90 md:via-deep/40 md:to-deep/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep/70 via-deep/25 to-transparent md:from-deep/60 md:via-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-x flex min-h-[65svh] lg:min-h-[70svh] flex-col justify-end pb-14 pt-24 md:pb-18 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-bone/70 mb-6"
        >
          <motion.span
            aria-hidden
            className="block h-px w-8 origin-left bg-gold-soft"
            initial={{ scaleX: reduce ? 1 : 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          />
          <span>Established 1983 · Maan Events</span>
        </motion.div>

        <h1 className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[8.5vw] xl:text-[7.5rem] max-w-[18ch]">
          <MaskReveal
            delay={0.2}
            // Descenders on "g"/"p" would clip against a tight box.
            lineClassName="pb-[0.08em] -mb-[0.08em]"
            lines={[
              "Event infrastructure,",
              <span key="2" className="italic font-light text-bone/80">
                engineered at scale.
              </span>,
            ]}
          />
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-bone/80 md:text-lg"
        >
          Four decades building the stages, structures and pavilions behind India&apos;s
          largest government, corporate and public events.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <Link
            href="/portfolio/"
            className="group inline-flex items-center gap-3 bg-[linear-gradient(180deg,#F0B968_0%,#E0912B_100%)] text-ink px-7 py-4 text-sm uppercase tracking-wider hover:bg-[linear-gradient(180deg,#E0912B_0%,#C2761A_100%)] transition-all duration-300 shadow-md"
          >
            View Portfolio
            <ArrowRight />
          </Link>
          <Link
            href="/services/"
            className="group inline-flex items-center gap-3 border border-bone/30 bg-bone/5 hover:bg-[linear-gradient(135deg,rgba(247,241,230,0.12)_0%,rgba(224,145,43,0.22)_100%)] px-7 py-4 text-sm uppercase tracking-wider hover:border-bone transition-all duration-300"
          >
            Our Capabilities
            <ArrowRight />
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.4 }}
        className="absolute bottom-8 right-6 hidden md:flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-bone/60"
      >
        <span className="block h-px w-10 bg-bone/40" />
        <span>Scroll</span>
      </motion.div>
    </section>
  );
}

function ArrowRight() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">
      <path d="M9 1L13 5L9 9M13 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
