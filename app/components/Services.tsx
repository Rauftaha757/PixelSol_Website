"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const services = [
  {
    title: "Flutter & React Native",
    subtitle: "Mobile Development",
    description: "Cross-platform mobile apps for iOS and Android with native performance and fluid animations.",
    gradient: "from-cyan-500 via-blue-500 to-purple-500",
    accent: "#06b6d4",
  },
  {
    title: "React + Next.js + Tailwind",
    subtitle: "Web Development",
    description: "Performance-focused websites and SPAs with modern stacks, SEO optimization, and blazing fast load times.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    accent: "#8b5cf6",
  },
  {
    title: "AI & Automation",
    subtitle: "Python + LangChain + RAG",
    description: "Smart AI assistants, business logic automation, and custom model integrations that transform workflows.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "#10b981",
  },
  {
    title: "UI/UX + Animation",
    subtitle: "Design & Frontend",
    description: "Smooth, high-fidelity interfaces with Framer Motion, GSAP, and pixel-perfect transitions.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accent: "#f97316",
  },
  {
    title: "SaaS Products",
    subtitle: "End-to-End Development",
    description: "From MVP to scalable platforms with modern architecture, database design, and cloud deployment.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    accent: "#ec4899",
  },
  {
    title: "Business Automation",
    subtitle: "AI-Powered Solutions",
    description: "Data pipelines, chatbots, automation scripts, and intelligent internal tools built with cutting-edge AI.",
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    accent: "#6366f1",
  },
]

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0,
      scale: 0.9,
    }),
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrentIndex((prev) => {
      const newIndex = prev + newDirection
      if (newIndex < 0) return services.length - 1
      if (newIndex >= services.length) return 0
      return newIndex
    })
  }

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [])

  const currentService = services[currentIndex]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-charcoal-black via-deep-slate to-[#0b0f19] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-400 mb-6"
          >
            What We Do
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Our Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            We deliver cutting-edge digital solutions that transform ideas into reality
          </motion.p>
        </motion.div>

        {/* Slider */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Slider Card */}
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.3 },
                }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x)
                  if (swipe < -swipeConfidenceThreshold) {
                    paginate(1)
                  } else if (swipe > swipeConfidenceThreshold) {
                    paginate(-1)
                  }
                }}
                className="relative"
              >
                {/* Card */}
                <div className="glass-card rounded-3xl p-1 overflow-hidden">
                  {/* Gradient Border Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentService.gradient} opacity-20 blur-xl`}></div>

                  <div className="relative bg-gradient-to-br from-[#0f111a] to-[#1a1d2d] rounded-3xl overflow-hidden">
                    {/* Top accent line */}
                    <div className={`h-1 bg-gradient-to-r ${currentService.gradient}`}></div>

                    {/* Animated gradient background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentService.gradient} opacity-5`}></div>

                    {/* Content */}
                    <div className="relative p-8 md:p-12">
                      {/* Number indicator */}
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <span
                            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white/20 to-white/5 bg-clip-text text-transparent"
                          >
                            0{currentIndex + 1}
                          </span>
                          <div className="h-12 w-px bg-white/10"></div>
                          <span className="text-gray-500 text-sm uppercase tracking-widest">
                            0{services.length}
                          </span>
                        </div>

                        {/* Category badge */}
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                          className="px-4 py-2 rounded-full bg-white/5 border border-white/10"
                        >
                          <span className="text-sm font-medium" style={{ color: currentService.accent }}>
                            {currentService.subtitle}
                          </span>
                        </motion.div>
                      </div>

                      {/* Title */}
                      <motion.h3
                        key={`title-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                      >
                        {currentService.title}
                      </motion.h3>

                      {/* Description */}
                      <motion.p
                        key={`desc-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8"
                      >
                        {currentService.description}
                      </motion.p>

                      {/* CTA */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium">Learn More</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </motion.div>

                      {/* Decorative elements */}
                      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
                        <div className={`w-full h-full bg-gradient-to-br ${currentService.gradient} rounded-tl-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="hidden md:flex items-center gap-2">
                {services.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDirection(idx > currentIndex ? 1 : -1)
                      setCurrentIndex(idx)
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === currentIndex
                        ? "w-12 bg-gradient-to-r from-white to-gray-400"
                        : "w-2 bg-white/20 hover:bg-white/40"
                    }`}
                    aria-label={`Go to service ${idx + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => paginate(1)}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Next service"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Dots */}
            <div className="flex md:hidden items-center justify-center gap-2 mt-6">
              {services.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1)
                    setCurrentIndex(idx)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === currentIndex
                      ? "w-8 bg-gradient-to-r from-white to-gray-400"
                      : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm italic">
            Transforming ideas into digital reality
          </p>
        </motion.div>
      </div>
    </section>
  )
}
