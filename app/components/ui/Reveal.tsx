"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

const SETTLE = [0.625, 0.05, 0, 1] as const;

/**
 * Reveal — the editorial headline/line workhorse.
 * Each child (a line) sits in an overflow-hidden wrapper and slides up from
 * below with the hard-settle curve, staggered. Pass lines as <span> children.
 * Under reduced-motion the global CSS snaps transitions to instant.
 */
export default function Reveal({
  children,
  as,
  className = "",
  delay = 0,
  stagger = 0.08,
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag ref={ref} className={className}>
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

/** A single line that mask-reveals. Use inside <Reveal>. */
export function Line({ children }: { children: ReactNode }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        className="block"
        variants={{
          hidden: { y: "110%" },
          visible: { y: 0, transition: { duration: 0.9, ease: SETTLE } },
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}
