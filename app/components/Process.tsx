"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ArrowRight, Check, Sparkles, Cpu, Database } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description: "Understanding your AI opportunities and automation potential",
    detail: "Deep dive into your business processes to identify high-impact AI opportunities. We analyze workflows, data assets, and automation potential to create a roadmap that delivers real ROI.",
    gradient: "from-cyan-500 to-blue-500",
    accent: "#06b6d4",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Data Engineering",
    description: "Building robust data pipelines and vector stores",
    detail: "Setting up data infrastructure including vector databases (Pinecone, Weaviate), ETL pipelines, and knowledge bases that power your AI systems with clean, structured data.",
    gradient: "from-blue-500 to-indigo-500",
    accent: "#3b82f6",
    icon: Database,
  },
  {
    number: "03",
    title: "AI Agent Development",
    description: "Creating autonomous agents with reasoning capabilities",
    detail: "Building intelligent agents using LangChain, AutoGPT, and CrewAI that can autonomously plan, execute, and complete complex multi-step tasks with human-in-the-loop oversight.",
    gradient: "from-violet-500 to-purple-500",
    accent: "#8b5cf6",
    icon: Cpu,
  },
  {
    number: "04",
    title: "RAG & Fine-Tuning",
    description: "Training models on your proprietary data",
    detail: "Implementing Retrieval Augmented Generation (RAG) and fine-tuning LLMs on your domain knowledge. We ensure your AI understands your business, customers, and context accurately.",
    gradient: "from-purple-500 to-fuchsia-500",
    accent: "#a855f7",
    icon: Sparkles,
  },
  {
    number: "05",
    title: "Production Deployment",
    description: "Scaling AI with LLMOps and monitoring",
    detail: "Deploying with enterprise-grade infrastructure including rate limiting, caching, fallback models, and comprehensive monitoring. We ensure 99.9% uptime and sub-second response times.",
    gradient: "from-fuchsia-500 to-pink-500",
    accent: "#d946ef",
    icon: Cpu,
  },
  {
    number: "06",
    title: "Continuous Optimization",
    description: "Improving AI performance based on real usage",
    detail: "Monitoring user interactions, collecting feedback, and continuously improving model performance. We implement A/B testing, prompt optimization, and model retraining pipelines.",
    gradient: "from-pink-500 to-rose-500",
    accent: "#ec4899",
    icon: Check,
  },
]

function ProcessStep({
  step,
  index,
  isActive,
  onToggle
}: {
  step: typeof steps[0]
  index: number
  isActive: boolean
  onToggle: () => void
}) {
  const Icon = step.icon

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Connecting line */}
      {index < steps.length - 1 && (
        <motion.div
          className="absolute left-8 top-20 w-0.5 bg-gradient-to-b from-white/20 to-transparent"
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
        />
      )}

      {/* Step Card */}
      <motion.div
        onClick={onToggle}
        className={`relative cursor-pointer transition-all duration-500 ${
          isActive ? 'mb-8' : 'mb-4'
        }`}
      >
        {/* Number badge */}
        <motion.div
          className={`absolute -left-4 top-6 w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl z-10 transition-all duration-500 ${
            isActive
              ? 'bg-gradient-to-br shadow-2xl scale-110'
              : 'bg-white/5 border border-white/10'
          }`}
          style={{
            background: isActive ? undefined : undefined,
          }}
        >
          <span className={isActive ? 'text-white' : 'text-white/50'}>
            {step.number}
          </span>
        </motion.div>

        {/* Glow effect for active */}
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            className="absolute -inset-4 rounded-3xl blur-2xl -z-10"
            style={{ background: step.accent }}
          />
        )}

        {/* Card */}
        <div
          className={`ml-16 rounded-2xl border transition-all duration-500 overflow-hidden ${
            isActive
              ? 'bg-[#0f111a] border-opacity-100 shadow-xl'
              : 'bg-[#0a0c10] border-white/5'
          }`}
          style={{ borderColor: isActive ? step.accent : undefined }}
        >
          {/* Header - always visible */}
          <div className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? 'bg-gradient-to-br from-white/10 to-white/5' : 'bg-white/5'}`}>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/30'}`} />
                  </div>
                  <h3 className={`text-xl font-bold transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </h3>
                </div>
                <p className={`text-sm transition-colors ${
                  isActive ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {step.description}
                </p>
              </div>

              {/* Expand/collapse icon */}
              <motion.div
                animate={{ rotate: isActive ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                  isActive ? 'bg-white/10' : 'bg-white/5'
                }`}
              >
                <ChevronDown className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/30'}`} />
              </motion.div>
            </div>

            {/* Accent line */}
            <motion.div
              className={`h-0.5 mt-4 bg-gradient-to-r ${step.gradient} origin-left`}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: isActive ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Expanded content */}
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  {/* Detail text */}
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {step.detail}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {index === 0 && ["Strategy", "AI Assessment", "ROI Analysis"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
                    ))}
                    {index === 1 && ["Vector DB", "ETL Pipelines", "Data Lakes"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
                    ))}
                    {index === 2 && ["LangChain", "CrewAI", "Multi-Agent"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
                    ))}
                    {index === 3 && ["RAG", "Fine-tuning", "LlamaIndex"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
                    ))}
                    {index === 4 && ["LLMOps", "Monitoring", "Scaling"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
                    ))}
                    {index === 5 && ["A/B Testing", "Analytics", "Improvement"].map(tag => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">{tag}</span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    onClick={(e) => {
                      e.stopPropagation()
                      const element = document.getElementById("contact")
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" })
                      }
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 cursor-pointer"
                    style={{ background: `${step.accent}20`, color: step.accent }}
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section className="py-24 bg-gradient-to-b from-[#0a0c10] via-[#0b0f19] to-[#0f111a] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }}></div>
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
          <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-sm font-medium text-cyan-400 mb-6">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              How We Build
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Agentic AI Systems
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From discovery to deployment, we follow a proven methodology to build production-grade AI systems that deliver real business value.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep
              key={step.number}
              step={step}
              index={index}
              isActive={activeStep === index}
              onToggle={() => setActiveStep(activeStep === index ? -1 : index)}
            />
          ))}
        </div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-sm text-gray-400">Building intelligent systems that work</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
