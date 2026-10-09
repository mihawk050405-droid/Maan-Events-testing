"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { history } from "@/content/company";
import { Reveal } from "@/components/motion/Reveal";

/**
 * "Our Story" — how the business evolved, era by era. The spine fills as
 * the reader scrolls through it, and each era's node lights up as it is
 * reached, so the page reads as one continuous line of growth.
 */
export function Evolution() {
  const ref = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section className="bg-bone">
      <div className="container-x section-y">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="text-xs uppercase tracking-[0.18em] text-mute mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-mute" />
                <span>Our Story</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl">
                From a tent works,
                <br />
                <span className="italic font-light text-mute">to a nation&apos;s stage.</span>
              </h2>
              <p className="mt-8 text-base md:text-lg leading-relaxed text-ink/80 max-w-md">
                Three generations of one family business. What began as a tent manufacturing
                workshop grew into Maan Decorators and then Maan Events &amp; Entertainment Pvt. Ltd.,
                the two companies behind this website.
              </p>
            </div>
          </Reveal>

          <ol ref={ref} className="lg:col-span-8 relative">
            {/* Spine: a faint track, and the filled part that follows scroll. */}
            <span aria-hidden className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px bg-line" />
            <motion.span
              aria-hidden
              style={{ scaleY: reduce ? 1 : fill }}
              className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px origin-top bg-gradient-to-b from-gold via-accent-hover to-deep"
            />

            {history.map((era, i) => (
              <li key={era.year} className="relative pl-12 md:pl-20 pb-16 last:pb-0">
                <motion.span
                  aria-hidden
                  initial={reduce ? false : { scale: 0.4, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-35% 0px -35% 0px" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-1 h-[23px] w-[23px] md:h-[31px] md:w-[31px] rounded-full border border-deep bg-bone grid place-items-center"
                >
                  <span className="h-2 w-2 md:h-2.5 md:w-2.5 rounded-full bg-deep" />
                </motion.span>

                <Reveal delay={0.05 * i}>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="font-display text-6xl md:text-7xl leading-none gradient-text">
                      {era.year}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-mute border border-line px-2.5 py-1">
                      {era.eyebrow}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-2xl md:text-3xl">{era.name}</h3>
                  <div className="mt-1 text-sm uppercase tracking-[0.14em] text-accent-hover">
                    {era.headline}
                  </div>
                  <ul className="mt-6 grid gap-3 max-w-2xl">
                    {era.points.map((pt) => (
                      <li key={pt} className="flex gap-4 text-base leading-relaxed text-ink/85">
                        <span aria-hidden className="mt-[0.7em] h-px w-4 shrink-0 bg-mute" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
