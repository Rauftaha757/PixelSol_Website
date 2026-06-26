"use client";

import { useRef, type ElementType } from "react";
import { motion, useInView } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

const SETTLE = [0.625, 0.05, 0, 1] as const;

interface RevealTextProps {
  text: string;
  as?: ElementType;
  split?: "char" | "word";
  className?: string;
  delay?: number;
  /** mark the whole string as the energy gradient */
  energy?: boolean;
}

const container = {
  hidden: {},
  visible: (delay: number) => ({
    transition: { staggerChildren: 0.018, delayChildren: delay },
  }),
};
const unit = {
  hidden: { y: "115%" },
  visible: { y: 0, transition: { duration: 0.8, ease: SETTLE } },
};

/**
 * RevealText — masked line/word reveal, the headline workhorse.
 * Each split unit sits in an overflow-hidden wrapper and slides up from below
 * with the hard-settle curve, staggered. No external split dependency: the
 * string is split in JS so the markup is fully accessible + controllable.
 * Under reduced-motion it renders plain text.
 */
export default function RevealText({
  text,
  as,
  split = "word",
  className = "",
  delay = 0,
  energy = false,
}: RevealTextProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const Tag = (as ?? "span") as ElementType;

  if (reduce) {
    return (
      <Tag ref={ref} className={energy ? `text-energy ${className}` : className}>
        {text}
      </Tag>
    );
  }

  const units =
    split === "char"
      ? Array.from(text)
      : text.split(/(\s+)/); // keep whitespace tokens

  return (
    <Tag
      ref={ref}
      className={className}
      aria-label={text}
      style={{ display: "inline-block" }}
    >
      <motion.span
        aria-hidden
        style={{ display: "inline-block" }}
        variants={container}
        custom={delay}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {units.map((u, i) =>
          u.trim() === "" ? (
            <span key={i}>{u}</span>
          ) : (
            <span
              key={i}
              style={{
                display: "inline-block",
                overflow: "hidden",
                verticalAlign: "bottom",
                paddingBottom: "0.12em",
                marginBottom: "-0.12em",
              }}
            >
              <motion.span
                className={energy ? "text-energy" : undefined}
                style={{ display: "inline-block" }}
                variants={unit}
              >
                {u}
              </motion.span>
            </span>
          )
        )}
      </motion.span>
    </Tag>
  );
}
