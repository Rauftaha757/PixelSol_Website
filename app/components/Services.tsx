"use client";

import { motion } from "framer-motion";
import Marks from "./ui/Marks";
import Reveal, { Line } from "./ui/Reveal";

const SETTLE = [0.625, 0.05, 0, 1] as const;

const services = [
  {
    n: "01",
    mark: Marks.Bracket,
    title: "Web & App Development",
    body: "Full-stack builds in React, Next.js and Flutter — interfaces that prioritize the user from day one, wired to infrastructure that doesn't buckle under load.",
    tags: ["Next.js", "React Native", "Flutter", "TypeScript"],
  },
  {
    n: "02",
    mark: Marks.Fuse,
    title: "AI Systems & Automation",
    body: "Agentic workflows, RAG, OCR and custom model integrations. We turn repetitive work into systems that run themselves — and explain what they did.",
    tags: ["LLMs", "RAG", "OCR", "Automation"],
  },
  {
    n: "03",
    mark: Marks.Layers,
    title: "SaaS & Product Platforms",
    body: "Enterprise-grade platforms built for regulated industries — secure, observable, and scalable. Guided by Material 3, Apple HIG and WCAG.",
    tags: ["SaaS", "Auth", "Billing", "Cloud"],
  },
  {
    n: "04",
    mark: Marks.Compass,
    title: "Strategy & Infrastructure",
    body: "Analytics wired into every layer, DevOps with CI/CD and blue-green releases, and the product thinking to make it all compound over time.",
    tags: ["Analytics", "DevOps", "AWS", "SEO"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32"
    >
      {/* Section header */}
      <div className="mb-16 flex flex-col gap-6 border-b border-rule pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
            § 02 — Things we build
          </span>
          <Reveal as="h2" stagger={0.08} className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-semibold tracking-[-0.03em]">
            <Line>A small studio,</Line>
            <Line>building the whole stack.</Line>
          </Reveal>
        </div>
        <p className="max-w-[34ch] text-base leading-relaxed text-ink-60">
          Four practices, one team. We don't hand off between agencies — design,
          engineering, AI and infrastructure are built by the same hands.
        </p>
      </div>

      {/* Editorial rows — hairline-divided, not card grids */}
      <div className="border-t border-rule">
        {services.map((s, i) => {
          const Mark = s.mark;
          return (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.7, ease: SETTLE, delay: i * 0.05 }}
              className="group grid grid-cols-1 gap-6 border-b border-rule py-10 transition-colors duration-500 hover:bg-bone-deep/40 md:grid-cols-12 md:items-start md:gap-10 md:py-12"
            >
              {/* Index + mark */}
              <div className="flex items-center gap-5 md:col-span-3">
                <span className="font-mono text-sm text-ink-42">{s.n}</span>
                <span className="grid h-11 w-11 place-items-center rounded-sharp border border-rule-strong text-ink transition-all duration-500 group-hover:border-vermilion group-hover:text-vermilion">
                  <Mark className="h-6 w-6" />
                </span>
              </div>

              {/* Title + body */}
              <div className="md:col-span-6">
                <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] md:text-3xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-[52ch] text-base leading-relaxed text-ink-60">
                  {s.body}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap content-start gap-2 md:col-span-3">
                {s.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-sharp border border-rule px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
