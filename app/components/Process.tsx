"use client";

import { motion } from "framer-motion";
import Marks from "./ui/Marks";
import Reveal, { Line } from "./ui/Reveal";

const SETTLE = [0.625, 0.05, 0, 1] as const;

const steps = [
  {
    n: "01",
    mark: Marks.Compass,
    title: "Make sense of it",
    body: "We sit with the half-finished doc, the legacy codebase, the vague idea — and turn it into a sharp plan. No work starts until we agree on what 'done' means.",
    meta: "Discovery · 1 wk",
  },
  {
    n: "02",
    mark: Marks.Bracket,
    title: "Build it right",
    body: "Design-led development with infra-aware UI. Everything versioned, reviewed, and tested — the version that actually makes sense, not the first one that compiles.",
    meta: "Build · 4–8 wk",
  },
  {
    n: "03",
    mark: Marks.Fuse,
    title: "Run it under stress",
    body: "We load-test, observe, and harden. Auth, billing, caching, fallbacks, monitoring — the unglamorous work that keeps a platform up at 3am.",
    meta: "Harden · 1–2 wk",
  },
  {
    n: "04",
    mark: Marks.Layers,
    title: "Ship & improve",
    body: "Blue-green deploy, then iterate on real usage. Analytics wired in from day one so every release is a decision, not a guess.",
    meta: "Launch · ongoing",
  },
];

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-6 border-b border-rule pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
            § 04 — How we work
          </span>
          <Reveal as="h2" stagger={0.08} className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-semibold tracking-[-0.03em]">
            <Line>Four steps.</Line>
            <Line>No theatre.</Line>
          </Reveal>
        </div>
        <p className="max-w-[34ch] text-base leading-relaxed text-ink-60">
          A method small enough to actually follow, serious enough to ship
          product-grade systems. Every project moves through the same four beats.
        </p>
      </div>

      {/* Steps as editorial hairline rows with a vertical rail */}
      <div className="relative border-t border-rule">
        {/* rail */}
        <span className="absolute left-[27px] top-0 hidden h-full w-px bg-rule md:block" />
        {steps.map((s, i) => {
          const Mark = s.mark;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: SETTLE, delay: i * 0.06 }}
              className="group relative grid grid-cols-1 gap-6 border-b border-rule py-10 md:grid-cols-12 md:items-start md:gap-10 md:py-12"
            >
              {/* node on the rail */}
              <div className="relative flex items-center gap-5 md:col-span-3">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-rule-strong bg-bone text-ink transition-all duration-500 group-hover:border-vermilion group-hover:text-vermilion">
                  <Mark className="h-6 w-6" />
                </span>
                <div className="md:hidden">
                  <span className="font-mono text-xs text-ink-42">{s.n}</span>
                </div>
              </div>

              {/* title + meta */}
              <div className="md:col-span-6">
                <div className="mb-2 hidden items-center gap-3 md:flex">
                  <span className="font-mono text-sm text-ink-42">{s.n}</span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-vermilion">
                    {s.meta}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-ink-60">
                  {s.body}
                </p>
              </div>

              {/* spacer for asymmetric balance */}
              <div className="hidden md:col-span-3 md:block" />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
