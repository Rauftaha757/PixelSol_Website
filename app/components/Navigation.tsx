"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SETTLE = [0.625, 0.05, 0, 1] as const;

interface NavigationProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "process", label: "Process" },
  { id: "portfolio", label: "Work" },
  { id: "about", label: "Team" },
  { id: "contact", label: "Contact" },
];

export default function Navigation({ activeSection }: NavigationProps) {
  const [open, setOpen] = useState(false);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: SETTLE, delay: 0.15 }}
      className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-bone/85 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4 md:px-12">
        {/* Wordmark */}
        <button
          onClick={() => go("home")}
          className="group flex items-center gap-2.5"
          aria-label="PixelSolve — home"
        >
          <span className="grid h-8 w-8 place-items-center rounded-sharp bg-ink text-bone transition-transform duration-300 group-hover:-rotate-6">
            <span className="font-display text-[15px] font-semibold leading-none">P</span>
          </span>
          <span className="font-display text-xl font-semibold tracking-[-0.02em]">
            PixelSolve
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => {
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => go(item.id)}
                className={`group relative rounded-sharp px-3.5 py-2 text-sm tracking-[-0.01em] transition-colors duration-200 ${
                  active ? "text-ink" : "text-ink-60 hover:text-ink"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-bead"
                    className="absolute inset-x-3 -bottom-px h-[2px] bg-vermilion"
                    transition={{ duration: 0.4, ease: SETTLE }}
                  />
                )}
                <span className="font-mono text-[10px] text-ink-42 mr-1.5 align-middle transition-colors group-hover:text-ink-60">
                  0{i + 1}
                </span>
                <span className="align-middle">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => go("contact")}
            className="hidden rounded-sharp bg-ink px-4 py-2 font-mono text-[12px] uppercase tracking-[0.12em] text-bone transition-colors duration-300 hover:bg-vermilion md:inline-flex"
          >
            Start →
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            className="grid h-9 w-9 place-items-center rounded-sharp border border-rule-strong text-ink md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-px w-4 bg-ink transition-all duration-300 ${
                  open ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 h-px w-4 bg-ink transition-all duration-300 ${
                  open ? "top-1.5 -rotate-45" : "top-3"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile command overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: SETTLE }}
            className="overflow-hidden border-t border-rule bg-bone md:hidden"
          >
            <nav className="flex flex-col px-6 py-2">
              {navItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => go(item.id)}
                  className="flex items-baseline justify-between border-b border-rule py-4 text-left last:border-0"
                >
                  <span className="font-display text-2xl font-semibold">
                    {item.label}
                  </span>
                  <span className="font-mono text-[11px] tracking-[0.16em] text-ink-42">
                    0{i + 1}
                  </span>
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
