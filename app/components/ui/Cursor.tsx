"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useReducedMotion } from "@/lib/useReducedMotion";

type CursorState = "default" | "link" | "node";

/**
 * Cursor — a "node" that lives in the neural field.
 * - Only active on fine pointers (matchMedia); native cursor restored elsewhere.
 * - Hides the system cursor while active; a focus-visible ring still renders.
 * - Reads `data-cursor` on hovered elements: "link" (energy ring) / "node"
 *   (filled energy + connection line drawn to the target's centre).
 * - Spring-follows the pointer; the connection line is updated in rAF.
 * - Under reduced-motion the component renders nothing (native cursor stays).
 */
export default function Cursor() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [state, setState] = useState<CursorState>("default");

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springConf = { stiffness: 500, damping: 38, mass: 0.3 };
  const sx = useSpring(x, springConf);
  const sy = useSpring(y, springConf);

  const lineRef = useRef<SVGLineElement>(null);
  const targetRect = useRef<DOMRect | null>(null);

  useEffect(() => {
    if (reduce) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    document.documentElement.style.cursor = "none";

    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = (e.target as HTMLElement | null)?.closest?.(
        "[data-cursor]"
      ) as HTMLElement | null;
      const kind = (target?.getAttribute("data-cursor") as CursorState) || null;
      setState(kind ?? "default");
      targetRect.current =
        kind === "node" || kind === "link" ? target!.getBoundingClientRect() : null;
    };
    const reset = () => {
      setState("default");
      targetRect.current = null;
    };

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", reset);
    window.addEventListener("blur", reset);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerout", reset);
      window.removeEventListener("blur", reset);
      document.documentElement.style.cursor = "";
    };
  }, [reduce, x, y]);

  // rAF: keep the connection line pinned between the dot and its target.
  useEffect(() => {
    if (!enabled) return;
    let raf = 0;
    const tick = () => {
      const line = lineRef.current;
      const rect = targetRect.current;
      if (line) {
        if (rect) {
          line.setAttribute("x1", String(sx.get()));
          line.setAttribute("y1", String(sy.get()));
          line.setAttribute("x2", String(rect.left + rect.width / 2));
          line.setAttribute("y2", String(rect.top + rect.height / 2));
          line.style.opacity = "0.6";
        } else {
          line.style.opacity = "0";
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [enabled, sx, sy]);

  if (!enabled) return null;

  const filled = state === "node";
  const ringed = state === "link" || state === "node";
  const size = ringed ? 42 : 12;

  return (
    <>
      <svg
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[9998] h-full w-full"
      >
        <defs>
          <linearGradient id="cursor-energy" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#7a66e1" />
            <stop offset="50%" stopColor="#fb3081" />
            <stop offset="100%" stopColor="#f8805f" />
          </linearGradient>
        </defs>
        <line
          ref={lineRef}
          x1={0}
          y1={0}
          x2={0}
          y2={0}
          stroke="url(#cursor-energy)"
          strokeWidth={1}
          style={{ opacity: 0 }}
        />
      </svg>

      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999]"
        style={{ x: sx, y: sy }}
      >
        <div className="-translate-x-1/2 -translate-y-1/2">
          <motion.div
            animate={{
              width: size,
              height: size,
              backgroundColor: filled
                ? "rgba(251,48,129,0.9)"
                : "rgba(13,13,12,0)",
              borderColor: ringed ? "rgba(122,102,225,0.9)" : "rgba(255,255,255,0)",
            }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="rounded-full border"
            style={{
              boxShadow: filled
                ? "0 0 24px rgba(251,48,129,0.5)"
                : "0 0 0 rgba(0,0,0,0)",
            }}
          />
        </div>
      </motion.div>
    </>
  );
}
