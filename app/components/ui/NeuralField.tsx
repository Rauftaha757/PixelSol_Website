"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

/**
 * NeuralField — the living background of "The Thinking System".
 *
 * A 2D <canvas> network of drifting nodes connected by hairline links.
 * - Cursor within `pullRadius` attracts nodes and brightens their edges.
 * - Scroll velocity scales connection alpha + node brightness ("thinking harder").
 * - Connection colour is sampled across the energy spectrum (indigo -> pink -> coral)
 *   by horizontal position, so the field reads as one continuous energy.
 *
 * Perf: O(n^2) link check on ~58 desktop / 26 mobile nodes; DPR capped at 2;
 * transform-only cursor updates; pauses on tab-hide. Under reduced-motion a single
 * static frame is drawn (no rAF, no listeners) — the motif stays, the motion goes.
 *
 * Deliberately NOT @react-three/fiber: a background doesn't justify a WebGL context.
 */
export default function NeuralField({
  density = 1,
  interactive = true,
  className = "",
}: {
  density?: number;
  interactive?: boolean;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const baseCount = isMobile ? 26 : 58;
    const linkDist = isMobile ? 110 : 140;
    const pullRadius = interactive && !isMobile ? 180 : 0;

    type Node = { x: number; y: number; vx: number; vy: number };
    let width = 0;
    let height = 0;
    let nodes: Node[] = [];

    const mouse = { x: -9999, y: -9999, active: false };
    let scrollVel = 0;
    let lastScrollY = window.scrollY;

    // Sample a colour across the energy gradient by horizontal position t (0..1).
    // indigo #7a66e1 -> pink #fb3081 -> coral #f8805f
    const SPECTRUM = [
      [122, 102, 225],
      [251, 48, 129],
      [248, 128, 95],
    ];
    const spectrum = (t: number) => {
      const seg = Math.max(0, Math.min(1, t)) * 2;
      const i = Math.min(1, Math.floor(seg));
      const f = seg - i;
      const a = SPECTRUM[i];
      const b = SPECTRUM[i + 1] ?? SPECTRUM[i];
      return `${Math.round(a[0] + (b[0] - a[0]) * f)},${Math.round(
        a[1] + (b[1] - a[1]) * f
      )},${Math.round(a[2] + (b[2] - a[2]) * f)}`;
    };

    const init = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(baseCount * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const intensity = 0.5 + scrollVel * 1.5;

      // connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d >= linkDist) continue;
          const t = 1 - d / linkDist;
          const midX = (a.x + b.x) / 2;
          let nearMouse = 0;
          if (pullRadius > 0 && mouse.active) {
            const mdx = midX - mouse.x;
            const mdy = (a.y + b.y) / 2 - mouse.y;
            nearMouse = Math.max(0, 1 - Math.hypot(mdx, mdy) / pullRadius);
          }
          const alpha = Math.min(
            0.6,
            (0.04 + t * 0.12) * intensity + nearMouse * 0.35
          );
          ctx.strokeStyle = `rgba(${spectrum(midX / width)},${alpha})`;
          ctx.lineWidth = 0.6 + nearMouse * 0.8;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        let nearMouse = 0;
        if (pullRadius > 0 && mouse.active) {
          nearMouse = Math.max(0, 1 - Math.hypot(n.x - mouse.x, n.y - mouse.y) / pullRadius);
        }
        const ct = n.x / width;
        const r = 1 + nearMouse * 1.6;
        const alpha = 0.22 + nearMouse * 0.6;
        ctx.fillStyle =
          nearMouse > 0.1
            ? `rgba(${spectrum(ct)},${alpha})`
            : `rgba(255,255,255,${0.16 + nearMouse * 0.3})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    let raf = 0;
    let running = true;

    const step = () => {
      if (!running) return;
      scrollVel *= 0.92;
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        // wrap around the viewport
        if (n.x < -20) n.x = width + 20;
        if (n.x > width + 20) n.x = -20;
        if (n.y < -20) n.y = height + 20;
        if (n.y > height + 20) n.y = -20;
        // cursor attraction
        if (pullRadius > 0 && mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < pullRadius * pullRadius) {
            const d = Math.sqrt(d2) || 1;
            const f = (1 - d / pullRadius) * 0.6;
            n.vx += (dx / d) * f * 0.05;
            n.vy += (dy / d) * f * 0.05;
          }
        }
        // damping + speed clamp
        n.vx *= 0.99;
        n.vy *= 0.99;
        const sp = Math.hypot(n.vx, n.vy);
        if (sp > 0.6) {
          n.vx = (n.vx / sp) * 0.6;
          n.vy = (n.vy / sp) * 0.6;
        }
      }
      draw();
      raf = requestAnimationFrame(step);
    };

    const onMove = (e: PointerEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const onScroll = () => {
      const dy = Math.abs(window.scrollY - lastScrollY);
      scrollVel = Math.min(1, scrollVel + dy * 0.01);
      lastScrollY = window.scrollY;
    };
    const onResize = () => init();
    const onVisibility = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(step);
      else cancelAnimationFrame(raf);
    };

    init();

    // Reduced motion: draw a single static frame, no animation, no listeners.
    if (reduce) {
      draw();
      return;
    }

    step();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerout", onLeave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerout", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, [reduce, density, interactive]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
    />
  );
}
