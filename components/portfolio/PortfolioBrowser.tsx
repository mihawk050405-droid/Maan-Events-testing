"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { categories, projects, imagesFor, type Project } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const ALL = "all";

export function PortfolioBrowser() {
  const [active, setActive] = useState<string>(ALL);
  const [openProject, setOpenProject] = useState<Project | null>(null);
  const [imageIndex, setImageIndex] = useState(0);
  const reduce = useReducedMotion();

  const filtered = useMemo(() => {
    if (active === ALL) return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  const filters = useMemo(
    () => [{ slug: ALL, label: "All" }, ...categories.sort((a, b) => b.weight - a.weight).map((c) => ({ slug: c.slug, label: c.label }))],
    [],
  );

  const openLightbox = (p: Project) => {
    setOpenProject(p);
    setImageIndex(0);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setOpenProject(null);
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    setImageIndex((i) => (openProject ? (i + 1) % openProject.imageCount : i));
  }, [openProject]);

  const prevImage = useCallback(() => {
    setImageIndex((i) =>
      openProject ? (i - 1 + openProject.imageCount) % openProject.imageCount : i,
    );
  }, [openProject]);

  // A 24-image gallery is unusable without arrow keys, and a modal that traps
  // scroll must always be dismissible with Escape.
  useEffect(() => {
    if (!openProject) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
      else return;
      e.preventDefault();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openProject, closeLightbox, nextImage, prevImage]);

  // Restore scroll if this unmounts while the lightbox is still open.
  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      {/* Filters */}
      <div className="sticky top-16 md:top-20 z-20 bg-bone/90 backdrop-blur-md border-b border-line -mx-5 md:-mx-8 px-5 md:px-8 mb-12 md:mb-16">
        <div className="overflow-x-auto no-scrollbar">
          <div className="flex gap-1.5 py-4 min-w-max">
            {filters.map((f) => (
              <button
                key={f.slug}
                onClick={() => setActive(f.slug)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-wider whitespace-nowrap transition-colors border",
                  active === f.slug
                    ? "bg-deep text-bone border-ink"
                    : "border-line text-mute hover:border-ink hover:text-ink",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((p) => (
            <motion.button
              key={p.slug}
              layout
              // Architectural wipe rather than a pop — the frame stays put and
              // the image is uncovered from the bottom up.
              initial={
                reduce
                  ? { opacity: 0 }
                  : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
              }
              animate={
                reduce ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0 0 0% 0)" }
              }
              exit={
                reduce ? { opacity: 0 } : { opacity: 0, clipPath: "inset(0 0 100% 0)" }
              }
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => openLightbox(p)}
              aria-label={`${p.title} — ${p.categoryLabel}, ${p.imageCount} images`}
              className="group relative aspect-[4/5] overflow-hidden bg-line text-left"
            >
              <Image
                src={p.cover}
                alt={`${p.title} — ${p.categoryLabel}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/80 via-deep/0 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end text-bone">
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-bone/70 mb-1">
                  {p.categoryLabel}
                </div>
                <div className="font-display text-base md:text-xl leading-tight">{p.title}</div>
                <div className="mt-1 text-[10px] text-bone/60">
                  {p.imageCount} {p.imageCount === 1 ? "image" : "images"}
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {openProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-deep/95 backdrop-blur-sm flex flex-col"
            onClick={closeLightbox}
          >
            <div className="flex items-center justify-between p-5 md:p-7 text-bone" onClick={(e) => e.stopPropagation()}>
              <div>
                <div className="text-[10px] uppercase tracking-[0.22em] text-bone/60">
                  {openProject.categoryLabel}
                </div>
                <div className="font-display text-xl md:text-2xl">{openProject.title}</div>
              </div>
              <button
                onClick={closeLightbox}
                aria-label="Close"
                className="h-10 w-10 flex items-center justify-center border border-bone/30 bg-deep-raised hover:bg-bone hover:text-ink transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </div>
            <div
              className="relative flex-1 flex items-center justify-center px-5 md:px-16"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full max-h-[78vh]"
              >
                <Image
                  src={imagesFor(openProject)[imageIndex]}
                  alt={`${openProject.title} ${imageIndex + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {openProject.imageCount > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    aria-label="Previous"
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center text-bone/70 hover:text-bone bg-deep/40 hover:bg-deep/60 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                      <path d="M9 1L3 7L9 13" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    aria-label="Next"
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center text-bone/70 hover:text-bone bg-deep/40 hover:bg-deep/60 transition-colors"
                  >
                    <svg width="18" height="18" viewBox="0 0 14 14" fill="none">
                      <path d="M5 1L11 7L5 13" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </button>
                </>
              )}
            </div>
            <div className="p-5 md:p-7 text-center text-xs text-bone/60" onClick={(e) => e.stopPropagation()}>
              <span className="tabular-nums">
                {imageIndex + 1} / {openProject.imageCount}
              </span>
              {openProject.imageCount > 1 && (
                <span className="ml-3 hidden md:inline text-bone/40">
                  Use ← → to browse · Esc to close
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
