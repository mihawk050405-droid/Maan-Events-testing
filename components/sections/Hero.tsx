"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Maan Events builds for competing political parties, so the hero must stay
// party-neutral: no politicians, no party insignia, and no dominant party
// colour (yellow in particular). Structure-only shots are the safe choice.
const HERO_IMAGE = "/portfolio/exhibitions/hitex-event/01.jpg";

export function Hero() {
  return (
    <section className="relative -mt-16 md:-mt-20 overflow-hidden bg-ink text-bone">
      {/* Background image */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
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
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/40 to-ink/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container-x flex min-h-[100svh] flex-col justify-end pb-20 pt-32 md:pb-28 md:pt-40 lg:min-h-[110svh]">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-bone/70 mb-6"
        >
          <span className="h-px w-8 bg-bone/60" />
          <span>Established 1983 · Maan Events</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl leading-[0.95] sm:text-6xl md:text-7xl lg:text-[8.5vw] xl:text-[7.5rem] max-w-[18ch]"
        >
          Event infrastructure,<br />
          <span className="italic font-light text-bone/80">engineered at scale.</span>
        </motion.h1>

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
            className="group inline-flex items-center gap-3 bg-bone text-ink px-7 py-4 text-sm uppercase tracking-wider hover:bg-accent hover:text-bone transition-colors duration-300"
          >
            View Portfolio
            <ArrowRight />
          </Link>
          <Link
            href="/services/"
            className="group inline-flex items-center gap-3 border border-bone/30 px-7 py-4 text-sm uppercase tracking-wider hover:border-bone transition-colors duration-300"
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
