"use client";

import { motion } from "framer-motion";
import type { ComponentType, SVGProps } from "react";
import Marks from "./ui/Marks";
import Reveal, { Line } from "./ui/Reveal";

const SETTLE = [0.625, 0.05, 0, 1] as const;

type MarkCmp = ComponentType<SVGProps<SVGSVGElement>>;

const team: {
  name: string;
  role: string;
  blurb: string;
  image?: string;
  mark: MarkCmp;
}[] = [
  {
    name: "Taha Rauf",
    role: "Mobile App Developer",
    blurb: "Brings ideas to life with clean code and intuitive design — merging frontend elegance with backend strength.",
    image: "/taha.jpeg",
    mark: Marks.Bracket,
  },
  {
    name: "Hammad Sikandar",
    role: "AI / ML Engineer",
    blurb: "Builds intelligent systems that learn, adapt and solve real-world problems with cutting-edge ML.",
    image: "/hammad.jpeg",
    mark: Marks.Fuse,
  },
  {
    name: "Babar Shaheen",
    role: "Full Stack Developer",
    blurb: "Keeps everything running smoothly and securely — APIs, servers and cloud infrastructure that scale.",
    image: "/babar.jpg",
    mark: Marks.Layers,
  },
  {
    name: "Masroor",
    role: "AI Automation Engineer",
    blurb: "Designs intelligent automation with AI agents, workflows and LLMs that streamline real business processes.",
    image: "/masroor.jpeg",
    mark: Marks.Fuse,
  },
  {
    name: "Syed Saad Kamal",
    role: "Business Developer",
    blurb: "Bridges technology and business — turning ideas into ventures and partnerships that drive growth.",
    image: "/saad.jpeg",
    mark: Marks.Compass,
  },
  {
    name: "Abdullah Shoaib",
    role: "Solutions Architect",
    blurb: "Designs robust, scalable technical solutions aligned with business goals — built to last.",
    image: "/mehdi.jpeg",
    mark: Marks.Layers,
  },
  {
    name: "Arham Nasir",
    role: "Engineering Team Lead",
    blurb: "Mentors the team and ships projects efficiently while holding the line on quality and innovation.",
    image: "/arham.jpeg",
    mark: Marks.Build,
  },
];

const stats = [
  { value: "7+", label: "Operators" },
  { value: "10+", label: "Systems shipped" },
  { value: "100%", label: "Client retention" },
  { value: "24/7", label: "On call" },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
      {/* Header */}
      <div className="mb-16 flex flex-col gap-6 border-b border-rule pb-10 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
            § 05 — The operators
          </span>
          <Reveal as="h2" stagger={0.08} className="mt-4 text-[clamp(2rem,5vw,3.75rem)] font-semibold tracking-[-0.03em]">
            <Line>Friends. Founders.</Line>
            <Line>
              <span className="italic font-light">Builders</span>.
            </Line>
          </Reveal>
        </div>
        <p className="max-w-[34ch] text-base leading-relaxed text-ink-60">
          A small team of operators who founded PixelSolve to build the next
          generation of AI and software — and to do it without the agency
          hand-offs.
        </p>
      </div>

      {/* Team as editorial roster — hairline rows */}
      <div className="border-t border-rule">
        {team.map((m, i) => {
          const Mark = m.mark;
          return (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: SETTLE, delay: (i % 4) * 0.05 }}
              className="group grid grid-cols-12 items-center gap-4 border-b border-rule py-6 transition-colors duration-500 hover:bg-bone-deep/40 md:gap-6 md:py-7"
            >
              {/* index */}
              <span className="col-span-2 font-mono text-xs text-ink-42 md:col-span-1">
                0{i + 1}
              </span>

              {/* avatar (photo or bespoke mark) */}
              <span className="col-span-2 flex justify-center md:col-span-1">
                {m.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={m.image}
                    alt={m.name}
                    loading="lazy"
                    className="h-12 w-12 rounded-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 md:h-14 md:w-14"
                  />
                ) : (
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-rule-strong text-ink md:h-14 md:w-14">
                    <Mark className="h-6 w-6" />
                  </span>
                )}
              </span>

              {/* name */}
              <span className="col-span-8 font-display text-lg font-semibold tracking-[-0.01em] md:col-span-3 md:text-xl">
                {m.name}
              </span>

              {/* role */}
              <span className="col-span-12 col-start-3 text-sm text-ink-60 md:col-span-3 md:col-start-auto">
                {m.role}
              </span>

              {/* blurb */}
              <span className="col-span-12 col-start-3 text-sm leading-relaxed text-ink-42 md:col-span-4 md:col-start-auto">
                {m.blurb}
              </span>
            </motion.div>
          );
        })}
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: SETTLE }}
        className="mt-16 grid grid-cols-2 gap-px overflow-hidden border-y border-rule bg-rule md:grid-cols-4"
      >
        {stats.map((s) => (
          <div key={s.label} className="bg-bone px-6 py-8 text-center md:py-10">
            <div className="font-display text-4xl font-semibold tracking-[-0.02em] md:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-60">
              {s.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
