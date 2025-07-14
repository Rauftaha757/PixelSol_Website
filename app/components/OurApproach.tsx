"use client"

import { motion } from "framer-motion"
import { StaggeredAnimation } from "./ScrollAnimation"
import { FaBrain, FaChartBar, FaCogs, FaFlask, FaRocket, FaSyncAlt } from "react-icons/fa"

const steps = [
  {
    icon: FaBrain,
    title: "Research",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: FaChartBar,
    title: "Data Collection",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: FaCogs,
    title: "Model Training",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: FaFlask,
    title: "Evaluation",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FaRocket,
    title: "Deployment",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: FaSyncAlt,
    title: "Continuous Improvement",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function OurApproach() {
  return (
    <section className="py-20 bg-[#0b0f19] relative overflow-hidden">
      {/* Background animation (optional) */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-green-400/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.6, 0.3, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="block text-sm font-semibold uppercase tracking-widest text-green-400 mb-4">OUR AI DEVELOPMENT PROCESS</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Approach to Building Intelligent Systems</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From data collection to deployment, we follow a refined process to ensure accuracy, scalability, and real-world value.
          </p>
        </motion.div>
        <StaggeredAnimation
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8"
          staggerDelay={0.15}
          duration={0.6}
          direction="up"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              className="group flex flex-col items-center text-center bg-[#101624] rounded-2xl p-8 shadow-lg hover:shadow-green-400/20 transition-all duration-300 cursor-pointer relative overflow-hidden"
              whileHover={{ scale: 1.06, y: -6, boxShadow: "0 12px 32px rgba(34,197,94,0.10)" }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform duration-300`}
                whileHover={{ rotate: 8 }}
              >
                <step.icon className="w-8 h-8 text-white drop-shadow-lg" />
              </motion.div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">{step.title}</h3>
            </motion.div>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
} 