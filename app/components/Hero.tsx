"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0c10] via-[#0d0f14] to-[#0a0c10]"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(59,130,246,0.05),transparent_60%)]" />
      </motion.div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm">
            PixelSolve
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          Building Digital Products
          <br />
          <span className="text-gray-400">That People Love to Use</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto"
        >
          From AI-powered platforms to scalable mobile applications, we help startups and enterprises ship products faster.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0a0c10] rounded-lg font-semibold hover:bg-gray-200 transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap justify-center gap-8 mt-16 text-sm text-gray-600"
        >
          <span>Vercel Partner</span>
          <span>•</span>
          <span>Next.js Expert</span>
          <span>•</span>
          <span>AI Solutions</span>
        </motion.div>
      </div>
    </section>
  )
}
