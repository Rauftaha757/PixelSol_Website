"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight, Bot } from "lucide-react"

const services = [
  {
    title: "Agentic AI Systems",
    subtitle: "Autonomous AI Agents",
    description: "Building intelligent agents that autonomously plan, execute, and complete complex tasks using LangChain, AutoGPT, and cutting-edge LLM frameworks.",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    accent: "#8b5cf6",
    tags: ["LangChain", "AutoGPT", "CrewAI", "LlamaIndex"],
  },
  {
    title: "Business Automation",
    subtitle: "RPA + AI Workflows",
    description: "End-to-end automation solutions using n8n, Make, and custom AI workflows that eliminate repetitive tasks and supercharge productivity.",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    accent: "#06b6d4",
    tags: ["n8n", "Make", "Zapier", "Custom APIs"],
  },
  {
    title: "AI-Powered SaaS",
    subtitle: "Next-Gen Applications",
    description: "Building AI-native SaaS products with embedded chatbots, semantic search, RAG systems, and intelligent features users love.",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    accent: "#10b981",
    tags: ["OpenAI", "Claude", "Pinecone", "Vector DB"],
  },
  {
    title: "Custom LLM Solutions",
    subtitle: "Fine-Tuning & RAG",
    description: "Deploying fine-tuned language models and RAG systems trained on your data for domain-specific expertise and competitive advantage.",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    accent: "#f97316",
    tags: ["GPT-4", "Llama 3", "Mistral", "Fine-tuning"],
  },
  {
    title: "Intelligent Apps",
    subtitle: "React + Next.js + AI",
    description: "Modern web applications with AI copilots, smart recommendations, and real-time personalization powered by edge computing.",
    gradient: "from-pink-500 via-rose-500 to-red-500",
    accent: "#ec4899",
    tags: ["Next.js", "Vercel AI SDK", "Edge Runtime", "Streaming"],
  },
  {
    title: "Enterprise AI Strategy",
    subtitle: "Consulting & Implementation",
    description: "Guiding enterprises through AI transformation with responsible AI practices, governance frameworks, and scalable infrastructure design.",
    gradient: "from-indigo-500 via-blue-500 to-violet-500",
    accent: "#6366f1",
    tags: ["AI Governance", "LLMOps", "Security", "Scaling"],
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

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 5000)
    return () => clearInterval(timer)
  }, [])

  const currentService = services[currentIndex]

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-charcoal-black via-deep-slate to-[#0b0f19] relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-400 mb-6"
          >
            <Bot className="w-4 h-4 text-purple-400" />
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
              AI-Native Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Leading the next wave of intelligent software with Agentic AI, Automation, and Enterprise AI solutions
          </motion.p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
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
                <div className="glass-card rounded-3xl p-1 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-r ${currentService.gradient} opacity-20 blur-xl`}></div>
                  <div className="relative bg-gradient-to-br from-[#0f111a] to-[#1a1d2d] rounded-3xl overflow-hidden">
                    <div className={`h-1 bg-gradient-to-r ${currentService.gradient}`}></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${currentService.gradient} opacity-5`}></div>

                    <div className="relative p-8 md:p-12">
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-3">
                          <span className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white/20 to-white/5 bg-clip-text text-transparent">
                            0{currentIndex + 1}
                          </span>
                          <div className="h-12 w-px bg-white/10"></div>
                          <span className="text-gray-500 text-sm uppercase tracking-widest">
                            0{services.length}
                          </span>
                        </div>
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

                      <motion.h3
                        key={`title-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
                      >
                        {currentService.title}
                      </motion.h3>

                      <motion.p
                        key={`desc-${currentIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8"
                      >
                        {currentService.description}
                      </motion.p>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2 mb-8"
                      >
                        {currentService.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <button className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300">
                          <span className="font-medium">Explore This Service</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>
                      </motion.div>

                      <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10">
                        <div className={`w-full h-full bg-gradient-to-br ${currentService.gradient} rounded-tl-full`}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => paginate(-1)}
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Previous service"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

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

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-500 text-sm italic">
            Building the future of intelligent software
          </p>
        </motion.div>
      </div>
    </section>
  )
}
