"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { letters, SHOW_LETTER_PLACEHOLDERS, type Letter } from "@/content/clients";

const PLACEHOLDERS: Letter[] = [
  { org: "Government department", excerpt: "Letter of appreciation to be added." },
  { org: "Corporate client", excerpt: "Letter of appreciation to be added." },
  { org: "Event agency partner", excerpt: "Letter of appreciation to be added." },
];

/**
 * Appreciation letters as framed "paper" cards; a scanned letter opens
 * full-size in a lightbox. Renders nothing when there are no letters and
 * placeholders are switched off.
 */
export function LettersGallery() {
  const items = letters.length ? letters : SHOW_LETTER_PLACEHOLDERS ? PLACEHOLDERS : [];
  const [open, setOpen] = useState<Letter | null>(null);

  const close = useCallback(() => setOpen(null), []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  if (!items.length) return null;

  return (
    <>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((l, i) => (
          <li key={`${l.org}-${i}`}>
            <button
              type="button"
              disabled={!l.image}
              onClick={() => setOpen(l)}
              className="group w-full text-left bg-paper border border-line p-3 transition-shadow enabled:hover:shadow-[0_24px_50px_-24px_rgba(20,16,12,0.35)] disabled:cursor-default"
            >
              <div className="relative aspect-[3/4] bg-bone overflow-hidden">
                {l.image ? (
                  <Image
                    src={l.image}
                    alt={`Appreciation letter from ${l.org}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  // Ruled "paper" stand-in until the scan arrives.
                  <div className="absolute inset-0 p-8 flex flex-col">
                    <div className="h-8 w-8 rounded-full border border-line" />
                    <div className="mt-8 space-y-3">
                      {Array.from({ length: 9 }, (_, k) => (
                        <div key={k} className="h-px bg-line" style={{ width: `${92 - (k % 3) * 14}%` }} />
                      ))}
                    </div>
                    <div className="mt-auto text-[10px] uppercase tracking-[0.22em] text-mute">
                      Scan to be added
                    </div>
                  </div>
                )}
              </div>
              <div className="px-2 pt-5 pb-3">
                <div className="font-display text-xl">{l.org}</div>
                {l.date && <div className="mt-1 text-xs uppercase tracking-[0.18em] text-mute">{l.date}</div>}
                {l.excerpt && <p className="mt-3 text-sm leading-relaxed text-ink/75 italic">“{l.excerpt}”</p>}
              </div>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {open?.image && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-deep/95 backdrop-blur-sm flex flex-col"
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={`Appreciation letter from ${open.org}`}
          >
            <div className="flex items-center justify-between p-5 md:p-7 text-bone">
              <div className="text-[10px] uppercase tracking-[0.22em] text-bone/70">{open.org}</div>
              <button
                onClick={close}
                aria-label="Close"
                className="h-10 w-10 flex items-center justify-center border border-bone/30 hover:bg-bone hover:text-ink transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                  <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </button>
            </div>
            <div className="relative flex-1 m-5 md:m-10 mt-0 md:mt-0" onClick={(e) => e.stopPropagation()}>
              <Image src={open.image} alt={`Appreciation letter from ${open.org}`} fill sizes="100vw" className="object-contain" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
