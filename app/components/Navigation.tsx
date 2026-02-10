"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface NavigationProps {
  activeSection: string
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "process", label: "Process" },
    { id: "portfolio", label: "Portfolio" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0f111a]/80 backdrop-blur-md border-b border-[#373c4e]/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            PixelSolve
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id ? "text-cool-blue" : "text-soft-gray hover:text-fog-white"
                }`}
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}

                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cool-blue to-accent-blue"
                    initial={false}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}

                {/* Hover underline */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-cool-blue/50"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.div
            className="md:hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              className="text-fog-white hover:text-cool-blue transition-colors p-2"
              aria-label="Open menu"
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile menu dropdown with AnimatePresence */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-4 pb-2 bg-[#131521]/95 backdrop-blur-sm rounded-lg shadow-lg border border-white/5">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setMobileOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${
                      activeSection === item.id
                        ? "text-cool-blue bg-white/5"
                        : "text-soft-gray hover:text-fog-white hover:bg-white/5"
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
