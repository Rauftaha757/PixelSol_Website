"use client"

import { motion } from "framer-motion"
import { Brain, BarChart3, Cog, FlaskConical, Rocket, RefreshCw } from "lucide-react"

const steps = [
  {
    icon: Brain,
    title: "Research",
    description: "Understanding requirements and exploring solutions",
    color: "from-green-500 to-emerald-500",
    number: "01",
  },
  {
    icon: BarChart3,
    title: "Data Collection",
    description: "Gathering and preparing quality datasets",
    color: "from-blue-500 to-cyan-500",
    number: "02",
  },
  {
    icon: Cog,
    title: "Model Training",
    description: "Building and optimizing intelligent systems",
    color: "from-purple-500 to-pink-500",
    number: "03",
  },
  {
    icon: FlaskConical,
    title: "Evaluation",
    description: "Testing and validating performance metrics",
    color: "from-orange-500 to-red-500",
    number: "04",
  },
  {
    icon: Rocket,
    title: "Deployment",
    description: "Launching scalable production solutions",
    color: "from-indigo-500 to-purple-500",
    number: "05",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description: "Monitoring and enhancing over time",
    color: "from-yellow-500 to-orange-500",
    number: "06",
  },
]

export default function OurApproach() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0b0f19] to-deep-slate relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-green-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-orange-400/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-sm font-semibold uppercase tracking-widest text-green-400 mb-6"
          >
            Our Process
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            How We Build Intelligent Systems
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto"
          >
            From concept to deployment, we follow a refined process to ensure accuracy, scalability, and real-world value.
          </motion.p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full flex flex-col items-center text-center relative overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300">
                {/* Number badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-xs text-gray-500 font-mono">
                  {step.number}
                </div>

                {/* Hover background effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg flex-shrink-0`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Approach Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto mt-12"
        >
          <p className="text-gray-400 text-sm italic">
            Systematic approach to intelligent solutions
          </p>
        </motion.div>
      </div>
    </section>
  )
}
