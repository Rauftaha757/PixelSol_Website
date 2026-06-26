"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * SmoothScroll — wraps the app and drives Lenis rAF smoothing.
 *
 * Lenis emits native scroll events, so Framer Motion's useScroll reads the
 * smoothed position automatically — the two compose by design. Under
 * reduced-motion Lenis is disabled and the browser's native scroll is used.
 *
 * `lenisScrollTo` is the single helper every section uses for in-page jumps
 * (nav, hero CTAs, process nodes); it falls back to native smooth scroll
 * when Lenis isn't initialised yet.
 */
let lenisInstance: Lenis | null = null;

export function lenisScrollTo(
  target: string | number | HTMLElement,
  offset = -80
) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { offset });
    return;
  }
  if (typeof target === "string") {
    const el = document.getElementById(target.replace(/^#/, ""));
    el?.scrollIntoView({ behavior: "smooth" });
  } else if (typeof window !== "undefined") {
    window.scrollTo({
      top: typeof target === "number" ? target : 0,
      behavior: "smooth",
    });
  }
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return; // native scroll under reduced motion

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const lenis = new Lenis({
      lerp: isMobile ? 0.12 : 0.1,
      smoothWheel: true,
      // touch keeps native momentum (smoother on mobile); Lenis only smooths wheel
      touchMultiplier: 1.5,
    });
    lenisInstance = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisInstance = null;
    };
  }, [reduce]);

  return <>{children}</>;
}
