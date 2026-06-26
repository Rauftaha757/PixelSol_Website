"use client";

import { motion } from "framer-motion";
import Marks from "./ui/Marks";
import Reveal, { Line } from "./ui/Reveal";

const SETTLE = [0.625, 0.05, 0, 1] as const;

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-between px-6 pb-12 pt-32 md:px-12 md:pt-40"
    >
      {/* Top metadata strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: SETTLE, delay: 0.1 }}
        className="flex items-center justify-between border-b border-rule pb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-60"
      >
        <span className="flex items-center gap-2">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-vermilion" />
          Studio Dossier — Issue 01
        </span>
        <span className="hidden sm:inline">Karachi · Remote · Est. 2024</span>
        <span>Build / Fix / Rescue</span>
      </motion.div>

      {/* Manifesto headline */}
      <div className="py-10 md:py-12">
        <Reveal stagger={0.09} className="w-full">
          <h1 className="text-[clamp(2.5rem,7.5vw,6.5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
            <Line>We build the</Line>
            <Line>
              <span className="italic font-light">software</span> that
            </Line>
            <Line>
              <span className="marker-highlight">runs your</span>
            </Line>
            <Line>business.</Line>
          </h1>
        </Reveal>

        {/* Sub + CTAs */}
        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SETTLE, delay: 0.6 }}
            className="col-span-12 max-w-[44ch] text-base leading-relaxed text-ink-80 md:col-span-7 md:text-lg"
          >
            PixelSolve is a small studio that ships{" "}
            <span className="text-ink">product-grade web &amp; AI systems</span>.
            Whether you have an MVP, a half-finished codebase, or a platform
            that needs rescuing — we make sense of it, build it right, and get
            it out the door.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: SETTLE, delay: 0.75 }}
            className="col-span-12 flex flex-col gap-3 md:col-span-5 md:items-end md:justify-end"
          >
            <button
              onClick={() => scrollToId("contact")}
              className="group inline-flex items-center justify-center gap-3 rounded-sharp bg-vermilion px-7 py-4 text-sm font-medium tracking-wide text-bone transition-colors duration-300 hover:bg-vermilion-dim"
            >
              Start a project
              <Marks.Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollToId("portfolio")}
              className="inline-flex items-center justify-center gap-2 rounded-sharp border border-rule-strong px-7 py-4 text-sm font-medium text-ink transition-colors duration-300 hover:border-ink"
            >
              See the work
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom: pillars + scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: SETTLE, delay: 0.9 }}
        className="grid grid-cols-2 gap-px overflow-hidden border-t border-rule bg-rule md:grid-cols-3"
      >
        {[
          { mark: Marks.Build, label: "Build", note: "From a blank doc" },
          { mark: Marks.Fix, label: "Fix", note: "Half-finished work" },
          { mark: Marks.Rescue, label: "Rescue", note: "Systems on fire" },
        ].map(({ mark: Mark, label, note }) => (
          <div
            key={label}
            className="flex items-center gap-4 bg-bone px-5 py-6 transition-colors duration-300 hover:bg-bone-deep"
          >
            <Mark className="h-7 w-7 shrink-0 text-vermilion" />
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-60">
                {note}
              </div>
              <div className="font-display text-2xl font-semibold leading-tight">
                {label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
