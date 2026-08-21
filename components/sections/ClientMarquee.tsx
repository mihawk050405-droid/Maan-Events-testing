"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { clientLogos } from "@/content/testimonials";

export function ClientMarquee() {
  const row = [...clientLogos, ...clientLogos];
  const reduce = useReducedMotion();
  const [paused, setPaused] = useState(false);

  return (
    <section className="bg-bone border-y border-line">
      <div className="container-x py-10 md:py-14">
        <div className="text-xs uppercase tracking-[0.22em] text-mute mb-8 text-center">
          Trusted by
        </div>
        <div
          className="relative overflow-hidden mask-fade"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <motion.div
            className="flex gap-12 md:gap-20 whitespace-nowrap will-change-transform"
            // An endless scroll is the worst offender for motion sensitivity,
            // so it becomes a static row rather than a slower one.
            animate={reduce || paused ? undefined : { x: ["0%", "-50%"] }}
            transition={{ duration: 38, ease: "linear", repeat: Infinity }}
          >
            {row.map((c, i) => (
              <div
                key={`${c}-${i}`}
                className="font-display text-2xl md:text-3xl lg:text-4xl text-ink/70 tracking-tight italic transition-colors duration-500 hover:text-ink"
              >
                {c}
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        .mask-fade {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0,
            black 8%,
            black 92%,
            transparent 100%
          );
        }
      `}</style>
    </section>
  );
}
