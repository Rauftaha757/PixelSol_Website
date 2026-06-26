"use client";

import { motion } from "framer-motion";
import Marks from "./ui/Marks";
import Reveal, { Line } from "./ui/Reveal";

const SETTLE = [0.625, 0.05, 0, 1] as const;

type Status = "Built" | "Fixed" | "Rescued";

const projects: {
  title: string;
  client: string;
  year: string;
  status: Status;
  blurb: string;
  stack: string[];
  link?: string;
}[] = [
  {
    title: "ScholarWatch",
    client: "Education",
    year: "2025",
    status: "Built",
    blurb:
      "An AI study companion — personalized quizzes, lecture summaries and focus tracking, shipped end to end across web and mobile.",
    stack: ["Python", "AI", "Next.js"],
    link: "https://github.com/Quttoshii/scholarwatch",
  },
  {
    title: "PharmaCare",
    client: "Healthcare",
    year: "2025",
    status: "Built",
    blurb:
      "Medication tracking, prescription management and health reminders unified into a single, calm mobile experience.",
    stack: ["Mobile", "UI/UX", "Healthcare"],
  },
  {
    title: "AutoTrade",
    client: "Fintech",
    year: "2024",
    status: "Built",
    blurb:
      "A Flutter trading platform with real-time crypto tracking and execution — built for speed under volatile load.",
    stack: ["Flutter", "Real-time", "Trading"],
    link: "https://github.com/Rauftaha757/AutoTrade_ClientSide",
  },
  {
    title: "AI Billing",
    client: "Retail",
    year: "2024",
    status: "Built",
    blurb:
      "Automated checkout using YOLOv8 computer vision — turning a camera feed into a generated bill in real time.",
    stack: ["YOLOv8", "Python", "CV"],
    link: "https://github.com/Quttoshii/Automatic-Real-Time-Bill-Generation",
  },
];

const statusStyle: Record<Status, string> = {
  Built: "text-bone bg-evidence-raised",
  Fixed: "text-evidence bg-marker",
  Rescued: "text-bone bg-vermilion",
};

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="bg-evidence text-bone"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        {/* Header */}
        <div className="mb-16 flex flex-col gap-6 border-b border-evidence-hair pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
              § 03 — Evidence room
            </span>
            <Reveal as="h2" stagger={0.08} className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-semibold tracking-[-0.03em] text-bone">
              <Line>Work we've built,</Line>
              <Line>
                fixed &amp; <span className="italic font-light">rescued</span>.
              </Line>
            </Reveal>
          </div>
          <p className="max-w-[34ch] text-base leading-relaxed text-bone/60">
            Real clients, real constraints, real systems that launched. Not
            case studies with fake testimonials.
          </p>
        </div>

        {/* Asymmetric project grid */}
        <div className="grid grid-cols-1 gap-px overflow-hidden bg-evidence-hair md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link ?? undefined}
              target={p.link ? "_blank" : undefined}
              rel={p.link ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: SETTLE, delay: (i % 2) * 0.08 }}
              className={`group relative flex flex-col justify-between bg-evidence p-8 transition-colors duration-500 hover:bg-evidence-raised md:p-10 ${
                p.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              {/* top row: meta + status */}
              <div className="flex items-start justify-between">
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-bone/45">
                  {p.client} — {p.year}
                </div>
                <span
                  className={`rounded-sharp px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] ${statusStyle[p.status]}`}
                >
                  {p.status}
                </span>
              </div>

              {/* title + blurb */}
              <div className="mt-16 md:mt-24">
                <h3 className="flex items-center gap-2 font-display text-3xl font-semibold tracking-[-0.02em] md:text-4xl">
                  {p.title}
                  {p.link && (
                    <Marks.Arrow className="h-5 w-5 text-bone/40 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-vermilion" />
                  )}
                </h3>
                <p className="mt-3 max-w-[42ch] text-base leading-relaxed text-bone/65">
                  {p.blurb}
                </p>
              </div>

              {/* stack */}
              <div className="mt-8 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-sharp border border-evidence-hair px-2.5 py-1 font-mono text-[11px] tracking-wide text-bone/55"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

        {/* More work */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Rauftaha757"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-bone/60 transition-colors duration-300 hover:text-vermilion"
          >
            <Marks.Asterisk className="h-4 w-4" />
            View all on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
