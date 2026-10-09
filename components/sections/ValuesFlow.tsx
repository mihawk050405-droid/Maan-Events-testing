"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";

export type Value = {
  title: string;
  /** A short, concrete proof point shown in accent under the title. */
  proof: string;
  body: string;
  icon: "precision" | "spark" | "scale";
};

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * "What we are" as a connected flow: three nodes on one line that draws
 * itself when the section enters view, with a pulse travelling along it —
 * one system, not three separate claims. Horizontal on desktop, a
 * vertical spine on mobile.
 */
export function ValuesFlow({ values }: { values: Value[] }) {
  const reduce = useReducedMotion();
  const viewport = { once: true, margin: "-20% 0px -20% 0px" };

  return (
    <section className="bg-deep text-bone overflow-hidden">
      <div className="container-x section-y">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.18em] text-mute-dark mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-mute-dark" />
            <span>What we are</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl max-w-4xl mb-16 md:mb-24">
            Three traits the work
            <br />
            <span className="italic font-light text-mute-dark">has earned us a name for.</span>
          </h2>
        </Reveal>

        <div className="relative">
          {/* Connector — horizontal (md+) between node centres. */}
          <div aria-hidden className="hidden md:block absolute top-10 left-[16.66%] right-[16.66%] h-px">
            <span className="absolute inset-0 bg-bone/10" />
            <motion.span
              className="absolute inset-0 origin-left bg-gradient-to-r from-gold-soft via-accent to-gold-soft"
              initial={{ scaleX: reduce ? 1 : 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={viewport}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
            />
            {!reduce && (
              <motion.span
                className="absolute -top-[3px] h-[7px] w-[7px] rounded-full bg-accent-light shadow-[0_0_12px_4px_rgba(255,207,61,0.55)]"
                initial={{ left: "0%", opacity: 0 }}
                whileInView={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
                viewport={{ margin: "-20% 0px -20% 0px" }}
                transition={{ duration: 3.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1.2, delay: 1.6 }}
              />
            )}
          </div>

          {/* Connector — vertical spine (mobile). */}
          <div aria-hidden className="md:hidden absolute left-10 top-10 bottom-10 w-px">
            <span className="absolute inset-0 bg-bone/10" />
            <motion.span
              className="absolute inset-0 origin-top bg-gradient-to-b from-gold-soft via-accent to-gold-soft"
              initial={{ scaleY: reduce ? 1 : 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={viewport}
              transition={{ duration: 1.4, ease: EASE, delay: 0.2 }}
            />
          </div>

          <ol className="relative grid md:grid-cols-3 gap-14 md:gap-10 lg:gap-16">
            {values.map((v, i) => (
              <li key={v.title} className="flex md:flex-col md:items-center md:text-center gap-6 md:gap-0">
                <motion.div
                  initial={reduce ? false : { scale: 0.6, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewport}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.3 + i * 0.35 }}
                  className="relative shrink-0 h-20 w-20 rounded-full border border-gold-soft/60 bg-deep grid place-items-center"
                >
                  <span aria-hidden className="absolute inset-1.5 rounded-full border border-bone/10" />
                  <Icon name={v.icon} />
                </motion.div>

                <motion.div
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.7, ease: EASE, delay: 0.45 + i * 0.35 }}
                  className="md:mt-8 max-w-sm"
                >
                  <div className="font-mono text-[11px] text-mute-dark">{String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-2 text-2xl md:text-3xl">{v.title}</h3>
                  <div className="mt-2 text-xs uppercase tracking-[0.18em] text-accent-light">{v.proof}</div>
                  <p className="mt-4 text-mute-dark leading-relaxed">{v.body}</p>
                </motion.div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

const ICONS: Record<Value["icon"], ReactNode> = {
  // A set square and plumb line — precision, done to spec.
  precision: (
    <>
      <path d="M8 34L34 8V34H8Z" />
      <path d="M15 34L34 15" opacity={0.5} />
      <path d="M26 34V28H32" />
    </>
  ),
  // A spark — new ideas, industry firsts.
  spark: (
    <>
      <path d="M21 5V13" />
      <path d="M21 29V37" />
      <path d="M5 21H13" />
      <path d="M29 21H37" />
      <path d="M21 13L24 18L29 21L24 24L21 29L18 24L13 21L18 18Z" />
    </>
  ),
  // Three ascending blocks — capacity at scale.
  scale: (
    <>
      <path d="M6 36H36" />
      <path d="M9 36V27H16V36" />
      <path d="M18 36V19H25V36" />
      <path d="M27 36V9H34V36" />
    </>
  ),
};

function Icon({ name }: { name: Value["icon"] }) {
  return (
    <svg
      viewBox="0 0 42 42"
      width="36"
      height="36"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="text-gold-soft"
    >
      {ICONS[name]}
    </svg>
  );
}
