"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

interface CameraMoveProps {
  children: ReactNode;
  className?: string;
}

/**
 * CameraMove — wraps a section so it reads as a continuous camera move:
 * gentle scale + vertical parallax + opacity dip at the section's edges.
 *
 * IMPORTANT: do NOT wrap sections that use internal `position: sticky`
 * (Services, Process) — a transformed ancestor becomes the containing block
 * and breaks sticky. Use it on free-flowing sections only.
 *
 * Under reduced-motion it renders children untouched.
 */
export default function CameraMove({ children, className = "" }: CameraMoveProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [24, 0, -24]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.18, 0.82, 1],
    [0.5, 1, 1, 0.5]
  );

  if (reduce) return <div className={className}>{children}</div>;

  return (
    <motion.div ref={ref} style={{ scale, y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}
