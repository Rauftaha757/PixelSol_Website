"use client";

import { motion } from "framer-motion";
import Marks from "./ui/Marks";
import Reveal, { Line } from "./ui/Reveal";

const SETTLE = [0.625, 0.05, 0, 1] as const;

const channels = [
  { label: "Email", value: "connect@pixelsolve.co", href: "mailto:connect@pixelsolve.co" },
  { label: "GitHub", value: "@Rauftaha757", href: "https://github.com/Rauftaha757" },
  { label: "LinkedIn", value: "/in/pixelsolve-inc", href: "https://www.linkedin.com/in/pixelsolve-inc" },
  { label: "Instagram", value: "@pixelsolve.co", href: "https://www.instagram.com/pixelsolve.co/" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-rule bg-bone-deep"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Left: the close */}
          <div className="md:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-vermilion">
              § 06 — Start something
            </span>
            <Reveal stagger={0.09} className="mt-5">
              <h2 className="text-[clamp(2.25rem,6vw,5rem)] font-semibold leading-[0.98] tracking-[-0.03em]">
                <Line>Have an idea?</Line>
                <Line>
                  Or something <span className="italic font-light">half-built</span>?
                </Line>
              </h2>
            </Reveal>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: SETTLE, delay: 0.4 }}
              className="mt-8 max-w-[44ch] text-lg leading-relaxed text-ink-60"
            >
              We'll ask what you're trying to do. We'll tell you if it makes
              sense. And if it does, we'll build it like it was ours.
            </motion.p>

            <motion.a
              href="mailto:connect@pixelsolve.co"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: SETTLE, delay: 0.55 }}
              className="group mt-10 inline-flex items-center gap-3 rounded-sharp bg-vermilion px-8 py-4 text-base font-medium text-bone transition-colors duration-300 hover:bg-vermilion-dim"
            >
              Start a project
              <Marks.Arrow className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </motion.a>
          </div>

          {/* Right: channels */}
          <div className="md:col-span-5">
            <div className="border-t border-rule">
              {channels.map((c, i) => (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6, ease: SETTLE, delay: 0.2 + i * 0.06 }}
                  className="group flex items-baseline justify-between border-b border-rule py-5 transition-colors duration-300 hover:bg-bone"
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-42">
                    {c.label}
                  </span>
                  <span className="font-display text-lg font-medium tracking-[-0.01em] text-ink transition-colors duration-300 group-hover:text-vermilion">
                    {c.value}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-24 flex flex-col items-start justify-between gap-4 border-t border-rule pt-8 md:flex-row md:items-center">
          <p className="font-display text-lg italic text-ink-60">
            In quiet and in chaos, we build.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-42">
            © {new Date().getFullYear()} PixelSolve · Karachi · Build / Fix / Rescue
          </p>
        </div>
      </div>
    </section>
  );
}
