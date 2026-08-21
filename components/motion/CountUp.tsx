"use client";

import {
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  animate,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function CountUp({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const reduce = useReducedMotion();

  // parse numeric portion and suffix (e.g. "1000+" -> 1000 + "+")
  const match = value.match(/^([\d.]+)(.*)$/);
  const target = match ? parseFloat(match[1]) : 0;
  const suffix = match ? match[2] : "";

  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toString());
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    // Ticking digits are motion too — snap straight to the number instead.
    if (reduce) {
      setDisplay(String(target));
      return;
    }
    const controls = animate(count, target, {
      duration,
      ease: [0.22, 1, 0.36, 1],
    });
    const unsubscribe = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsubscribe();
    };
  }, [inView, target, duration, count, rounded, reduce]);

  if (!match) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
