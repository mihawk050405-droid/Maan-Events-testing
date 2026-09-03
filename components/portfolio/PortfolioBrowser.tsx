"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { categories, galleryImages, type GalleryImage } from "@/content/portfolio";
import { cn } from "@/lib/utils";

const ALL = "all";

export function PortfolioBrowser() {
  const [active, setActive] = useState<string>(ALL);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  // Category straight to images — no per-project grouping shown or
  // clicked through. `filtered` is what's on screen and what the
  // lightbox arrows step through.
  const filtered = useMemo(() => {
    if (active === ALL) return galleryImages;
    return galleryImages.filter((img) => img.category === active);
  }, [active]);

  const filters = useMemo(
    () => [{ slug: ALL, label: "All" }, ...categories.sort((a, b) => b.weight - a.weight).map((c) => ({ slug: c.slug, label: c.label }))],
    [],
  );

  const openLightbox = (index: number) => {
    setOpenIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = useCallback(() => {
    setOpenIndex(null);
    document.body.style.overflow = "";
  }, []);

  const nextImage = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % filtered.length));
  }, [filtered.length]);

  const prevImage = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  // Switching categories with the lightbox open would leave the index
  // pointing at a different photo than the one on screen — close it.
  useEffect(() => {
    closeLightbox();
  }, [active, closeLightbox]);

  // A large gallery is unusable without arrow keys, and a modal that traps
  // scroll must always be dismissible with Escape.
  useEffect(() => {
    if (openIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "ArrowLeft") prevImage();
      else return;
      e.preventDefault();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, closeLightbox, nextImage, prevImage]);

  // Restore scroll if this unmounts while the lightbox is still open.
  useEffect(() => () => {
    document.body.style.overflow = "";
  }, []);

  const openImage: GalleryImage | null = openIndex === null ? null : filtered[openIndex];

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
          {filtered.map((img, i) => (
            <motion.button
              key={img.key}
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
              onClick={() => openLightbox(i)}
              aria-label={img.categoryLabel}
              className="group relative aspect-[4/5] overflow-hidden bg-line text-left"
            >
              <Image
                src={img.src}
                alt={img.categoryLabel}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep/70 via-deep/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 p-3 md:p-5 flex flex-col justify-end text-bone opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="text-[9px] md:text-[10px] uppercase tracking-[0.22em] text-bone/80">
                  {img.categoryLabel}
                </div>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {openImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-deep/95 backdrop-blur-sm flex flex-col"
            onClick={closeLightbox}
          >
            <div className="flex items-center justify-between p-5 md:p-7 text-bone" onClick={(e) => e.stopPropagation()}>
              <div className="text-[10px] uppercase tracking-[0.22em] text-bone/60">
                {openImage.categoryLabel}
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
                key={openIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="relative w-full h-full max-h-[78vh]"
              >
                <Image
                  src={openImage.src}
                  alt={`${openImage.categoryLabel} — image ${(openIndex ?? 0) + 1} of ${filtered.length}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </motion.div>

              {filtered.length > 1 && (
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
                {(openIndex ?? 0) + 1} / {filtered.length}
              </span>
              {filtered.length > 1 && (
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
