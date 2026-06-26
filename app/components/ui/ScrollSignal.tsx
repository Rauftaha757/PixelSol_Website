"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

/**
 * ScrollSignal — a fixed 3px energy bar at the very top that charges up with
 * scroll progress, plus a lagging coral "comet" that trails the leading edge.
 * The single signature gradient reads as the system's energy filling up.
 */
export default function ScrollSignal() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    restDelta: 0.001,
  });
  // softer spring so the comet lags the bar's leading edge
  const cometSpring = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 22,
    restDelta: 0.001,
  });
  const cometLeft = useTransform(cometSpring, (v) => `${v * 100}%`);

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[100] h-[3px] w-full origin-left bg-energy"
      />
      <motion.div
        aria-hidden
        style={{ left: cometLeft }}
        className="pointer-events-none fixed top-0 z-[100] h-[3px] w-16 -translate-x-1/2 bg-[radial-gradient(circle,_#f8805f_0%,_transparent_70%)] blur-[2px]"
      />
    </>
  );
}
