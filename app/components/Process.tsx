"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown, ArrowRight, Check } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Research",
    description: "Understanding requirements and exploring solutions",
    detail: "Deep dive into your business needs, target audience, and technical requirements. We analyze competitors and identify opportunities for innovation.",
    gradient: "from-cyan-500 to-blue-500",
    accent: "#06b6d4",
  },
  {
    number: "02",
    title: "Data Collection",
    description: "Gathering and preparing quality datasets",
    detail: "Collecting, cleaning, and structuring data. We ensure data quality and prepare pipelines for training robust models.",
    gradient: "from-blue-500 to-indigo-500",
    accent: "#3b82f6",
  },
  {
    number: "03",
    title: "Model Training",
    description: "Building and optimizing intelligent systems",
    detail: "Training models with state-of-the-art techniques. Fine-tuning hyperparameters for optimal performance and accuracy.",
    gradient: "from-violet-500 to-purple-500",
    accent: "#8b5cf6",
  },
  {
    number: "04",
    title: "Evaluation",
    description: "Testing and validating performance metrics",
    detail: "Rigorous testing against real-world scenarios. We measure accuracy, efficiency, and user experience.",
    gradient: "from-purple-500 to-fuchsia-500",
    accent: "#a855f7",
  },
  {
    number: "05",
    title: "Deployment",
    description: "Launching scalable production solutions",
    detail: "Seamless deployment to cloud infrastructure. We ensure scalability, security, and monitoring are in place.",
    gradient: "from-fuchsia-500 to-pink-500",
    accent: "#d946ef",
  },
  {
    number: "06",
    title: "Continuous Improvement",
    description: "Monitoring and enhancing over time",
    detail: "Ongoing monitoring and optimization. We iterate based on feedback and evolving business needs.",
    gradient: "from-pink-500 to-rose-500",
    accent: "#ec4899",
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
                <h3 className={`text-xl font-bold mb-2 transition-colors ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}>
                  {step.title}
                </h3>
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

                  {/* Features list */}
                  <div className="space-y-3">
                    {[
                      "Expert consultation and planning",
                      "Agile development methodology",
                      "Transparent communication",
                      "Quality assurance guaranteed"
                    ].map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-3 text-sm text-gray-500"
                      >
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center bg-gradient-to-br ${step.gradient}`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105"
                    style={{ background: `${step.accent}20`, color: step.accent }}
                  >
                    <span>Learn more</span>
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
              Intelligent Systems
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From concept to deployment, we follow a refined process to ensure accuracy, scalability, and real-world value.
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
            <span className="text-sm text-gray-400">Systematic approach to intelligent solutions</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
