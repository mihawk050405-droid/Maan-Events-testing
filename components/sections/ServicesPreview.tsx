"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { services, featuredServices } from "@/content/services";
import { Reveal } from "@/components/motion/Reveal";

export function ServicesPreview() {
  return (
    <section className="bg-bone">
      <div className="container-x section-y">
        <Heading />
        {/* Desktop: editorial index */}
        <DesktopIndex />
        {/* Mobile/Tablet: auto-rotating showcase */}
        <MobileShowcase />
      </div>
    </section>
  );
}

function Heading() {
  return (
    <div className="mb-12 lg:mb-20 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
      <div className="max-w-2xl">
        <Reveal>
          <div className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-mute mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-mute" />
            <span>Capabilities — 12 in-house disciplines</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Twelve disciplines.<br />
            <span className="italic font-light text-mute">One in-house team.</span>
          </h2>
        </Reveal>
      </div>
      <Reveal>
        <Link
          href="/services/"
          className="group hidden lg:inline-flex items-center gap-3 text-sm uppercase tracking-wider border-b border-ink pb-1 self-start"
        >
          All Services
          <Arrow />
        </Link>
      </Reveal>
    </div>
  );
}

/* ----------------------------- DESKTOP --------------------------------- */

function DesktopIndex() {
  const [active, setActive] = useState(0);
  const current = services[active];

  return (
    <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
      {/* List */}
      <ul className="border-t border-line">
        {services.map((s, i) => {
          const isActive = i === active;
          return (
            <li key={s.slug} className="border-b border-line">
              <Link
                href={s.url}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-center gap-6 py-[14px] xl:py-[18px]"
              >
                <span
                  className={`font-mono text-[10px] w-7 shrink-0 transition-colors duration-300 ${
                    isActive
                      ? // Gradient text needs background-clip:text + a
                        // transparent fill color — this is why it can't
                        // reuse the plain `text-accent` utility class the
                        // way the inactive state does. Same endpoints as
                        // the CTA button gradient, for consistency.
                        "bg-[linear-gradient(180deg,#D60F10_0%,#830204_100%)] bg-clip-text text-transparent"
                      : "text-mute"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0">
                  <motion.h3
                    animate={{ x: isActive ? 6 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-[1.15rem] xl:text-[1.35rem] leading-[1.15] tracking-tight"
                  >
                    {s.title}
                  </motion.h3>
                </div>

                <motion.span
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                  transition={{ duration: 0.3 }}
                  // Solid midpoint of the gradient, not text-accent. The
                  // arrow SVG below reads stroke="currentColor", which
                  // resolves from this span's `color`. If this became
                  // gradient text (text-transparent), the SVG would
                  // inherit transparent too and disappear — currentColor
                  // only carries a single resolved color, not a gradient.
                  className="inline-flex items-center text-[#AC080A]"
                  aria-hidden
                >
                  <Arrow />
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Sticky image — true half */}
      <div className="lg:sticky lg:top-24">
        <div className="relative aspect-[3/4] overflow-hidden bg-deep">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={current.cover}
                alt={current.title}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-deep/85 via-deep/0 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 p-7 xl:p-8 text-bone pointer-events-none">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="text-[10px] uppercase tracking-[0.22em] text-bone/75 mb-2">
                  {current.tagline}
                </div>
                <div className="font-display text-2xl xl:text-3xl leading-tight">
                  {current.title}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-mute">
          <span>Capability</span>
          <span className="font-mono">
            {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- MOBILE --------------------------------- */

function MobileShowcase() {
  const items = featuredServices.length >= 4 ? featuredServices : services.slice(0, 6);
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 4200);
    return () => clearInterval(t);
  }, [items.length, paused]);

  const current = items[idx];
  const go = (i: number) => {
    setIdx((i + items.length) % items.length);
    setPaused(true);
  };

  return (
    <div className="lg:hidden">
      <div
        className="relative overflow-hidden bg-deep"
        style={{ aspectRatio: "4 / 5" }}
        onTouchStart={() => setPaused(true)}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.slug}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={current.cover}
              alt={current.title}
              fill
              priority={idx === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-deep/30" />

        {/* Top meta */}
        <div className="absolute top-5 inset-x-5 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-bone/70">
          <span>Capabilities</span>
          <span className="font-mono">
            {String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </span>
        </div>

        {/* Title block */}
        <div className="absolute inset-x-0 bottom-0 p-6 pb-10 text-bone">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={current.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-2">
                {current.tagline}
              </div>
              <h3 className="font-display text-3xl md:text-4xl leading-[1.05] mb-6 max-w-[12ch]">
                {current.title}
              </h3>
              <Link
                href={current.url}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] border-b border-bone pb-1"
              >
                Explore <Arrow />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tap zones for prev/next */}
        <button
          aria-label="Previous capability"
          className="absolute inset-y-0 left-0 w-1/3 z-10"
          onClick={() => go(idx - 1)}
        />
        <button
          aria-label="Next capability"
          className="absolute inset-y-0 right-0 w-1/3 z-10"
          onClick={() => go(idx + 1)}
        />

        {/* Progress dashes */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to capability ${i + 1}`}
              className={`h-px transition-all duration-500 ${
                i === idx ? "w-8 bg-bone" : "w-4 bg-bone/35"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Twin CTAs below */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <Link
          href="/services/"
          className="group flex items-center justify-between gap-2 bg-deep text-bone px-5 py-4 text-[11px] uppercase tracking-[0.18em]"
        >
          All 12 <Arrow />
        </Link>
        <Link
          href="/portfolio/"
          className="group flex items-center justify-between gap-2 border border-ink/15 px-5 py-4 text-[11px] uppercase tracking-[0.18em]"
        >
          Portfolio <Arrow />
        </Link>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <svg width="18" height="9" viewBox="0 0 22 10" fill="none" aria-hidden>
      <path d="M17 1L21 5L17 9M21 5H0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
    </svg>
  );
}
