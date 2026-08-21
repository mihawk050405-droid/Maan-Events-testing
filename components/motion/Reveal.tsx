"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "section" | "header" | "article" | "li" | "h1" | "h2" | "h3" | "p" | "span";
  once?: boolean;
};

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  as = "div",
  once = true,
}: Props) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;

  const variants: Variants = {
    hidden: { opacity: 0, y: reduce ? 0 : y },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px -10% 0px" }}
    >
      {children}
    </MotionTag>
  );
}

export function Stagger({
  children,
  className,
  gap = 0.08,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: gap } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : y },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Editorial line reveal: each line sits in its own clipping box and slides up
 * from below it. Pass one child per visual line — the mask is per-box, so a
 * single child that wraps onto two lines will slide as one block.
 */
export function MaskReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
  gap = 0.09,
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  gap?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: gap, delayChildren: delay } } }}
    >
      {lines.map((line, i) => (
        <span key={i} className={`block overflow-hidden ${lineClassName ?? ""}`}>
          <motion.span
            className="block"
            variants={{
              hidden: { y: reduce ? 0 : "110%", opacity: reduce ? 0 : 1 },
              show: {
                y: 0,
                opacity: 1,
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

/** Hairline that draws itself in from the left. Pairs with section eyebrows. */
export function AnimatedRule({
  className = "bg-gold",
  width = "2rem",
  delay = 0,
}: {
  className?: string;
  width?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.span
      aria-hidden
      className={`block h-px origin-left ${className}`}
      style={{ width }}
      initial={{ scaleX: reduce ? 1 : 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    />
  );
}
