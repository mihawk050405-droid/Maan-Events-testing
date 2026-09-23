"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { categories, projectsByCategory, featuredProjects } from "@/content/portfolio";
import { Reveal } from "@/components/motion/Reveal";

export function PortfolioPreview() {
  return (
    <section className="bg-deep text-bone">
      <div className="container-x section-y">
        <Heading />
        <DesktopIndex />
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
          <div className="text-[10px] md:text-xs uppercase tracking-[0.22em] text-mute-dark mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-mute-dark" />
            <span>Selected Work — 8 Categories</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl">
            Where heads of state,<br />
            <span className="italic font-light text-mute-dark">brands and crowds gather.</span>
          </h2>
        </Reveal>
      </div>
      <Reveal>
        <Link
          href="/portfolio/"
          className="group hidden lg:inline-flex items-center gap-3 text-sm uppercase tracking-wider border-b border-bone pb-1 self-start"
        >
          Full Portfolio
          <Arrow />
        </Link>
      </Reveal>
    </div>
  );
}

/* ----------------------------- DESKTOP --------------------------------- */

type CatEntry = {
  slug: string;
  label: string;
  count: number;
  cover: string;
  featuredProjectTitle: string;
};

function useCategoryEntries(): CatEntry[] {
  return useMemo(() => {
    return [...categories]
      .sort((a, b) => b.weight - a.weight)
      .map((c) => {
        const ps = projectsByCategory(c.slug);
        // Represent each category with a project that has a confirmed
        // event name where one exists, so the landing page doesn't lead
        // with a "TBD" placeholder. The portfolio page still shows them.
        const lead = ps.find((p) => p.nameConfirmed) ?? ps[0];
        return {
          slug: c.slug,
          label: c.label,
          count: ps.length,
          cover: lead?.cover ?? "",
          featuredProjectTitle: lead?.nameConfirmed ? lead.title : "",
        };
      })
      .filter((c) => c.cover);
  }, []);
}

function DesktopIndex() {
  const entries = useCategoryEntries();
  const [active, setActive] = useState(0);
  const current = entries[active];

  if (!current) return null;

  return (
    <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-16 items-start">
      {/* List */}
      <ul className="border-t border-line-dark">
        {entries.map((c, i) => {
          const isActive = i === active;
          return (
            <li key={c.slug} className="border-b border-line-dark">
              <Link
                href="/portfolio/"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group flex items-center gap-6 py-[18px] xl:py-[22px]"
              >
                <span
                  className={`font-mono text-[10px] w-7 shrink-0 transition-colors duration-300 ${
                    isActive ? "text-accent-light" : "text-mute-dark"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="flex-1 min-w-0 flex items-baseline justify-between gap-4">
                  <motion.h3
                    animate={{ x: isActive ? 6 : 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-[1.15rem] xl:text-[1.35rem] leading-[1.15] tracking-tight"
                  >
                    {c.label}
                  </motion.h3>
                  <span
                    className={`font-mono text-[10px] shrink-0 transition-colors duration-300 ${
                      isActive ? "text-bone" : "text-mute-dark"
                    }`}
                  >
                    {String(c.count).padStart(2, "0")} {c.count === 1 ? "project" : "projects"}
                  </span>
                </div>

                <motion.span
                  animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -8 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center text-accent-light"
                  aria-hidden
                >
                  <Arrow />
                </motion.span>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Sticky image — 50% */}
      <div className="lg:sticky lg:top-24">
        <div className="relative aspect-[3/4] overflow-hidden bg-line-dark">
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
                alt={`${current.label} — ${current.featuredProjectTitle}`}
                fill
                sizes="50vw"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/10 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 p-7 xl:p-8 text-bone pointer-events-none">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.slug}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="font-display text-2xl xl:text-3xl leading-tight">
                  {current.label}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.22em] text-mute-dark">
          <span>Category</span>
          <span className="font-mono">
            {String(active + 1).padStart(2, "0")} / {String(entries.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- MOBILE --------------------------------- */

function MobileShowcase() {
  const items = featuredProjects.slice(0, 6);
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
        className="relative overflow-hidden bg-line-dark"
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
              alt={`${current.categoryLabel} — ${current.title}`}
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
          <span>Selected Work</span>
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
              <h3 className="font-display text-3xl md:text-4xl leading-[1.05] mb-6 max-w-[14ch]">
                {current.categoryLabel}
              </h3>
              <Link
                href="/portfolio/"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] border-b border-bone pb-1"
              >
                Open Project <Arrow />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tap zones for prev/next */}
        <button
          aria-label="Previous project"
          className="absolute inset-y-0 left-0 w-1/3 z-10"
          onClick={() => go(idx - 1)}
        />
        <button
          aria-label="Next project"
          className="absolute inset-y-0 right-0 w-1/3 z-10"
          onClick={() => go(idx + 1)}
        />

        {/* Progress dashes */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => go(i)}
              aria-label={`Go to project ${i + 1}`}
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
          href="/portfolio/"
          className="group flex items-center justify-between gap-2 bg-bone text-ink px-5 py-4 text-[11px] uppercase tracking-[0.18em]"
        >
          All Projects <Arrow />
        </Link>
        <Link
          href="/contact/"
          className="group flex items-center justify-between gap-2 border border-bone/25 px-5 py-4 text-[11px] uppercase tracking-[0.18em]"
        >
          Get in Touch <Arrow />
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
