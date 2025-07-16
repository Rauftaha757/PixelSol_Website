"use client"

import { motion } from "framer-motion"
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
      {/* Enhanced Background Animation */}
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
        {/* Enhanced Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mb-4"
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="block text-sm font-semibold uppercase tracking-widest text-green-400 mb-4"
            >
              OUR AI DEVELOPMENT PROCESS
            </motion.span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Our Approach to Building Intelligent Systems
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg text-gray-300 max-w-2xl mx-auto mb-6"
          >
            From data collection to deployment, we follow a refined process to ensure accuracy, scalability, and real-world value.
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "160px" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"
          />
        </motion.div>

        {/* Enhanced Steps Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { 
              transition: { 
                staggerChildren: 0.15, 
                delayChildren: 0.3,
                duration: 0.8
              } 
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 50, 
                  scale: 0.9,
                  rotate: -2
                },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  rotate: 0,
                  transition: { 
                    type: 'spring', 
                    stiffness: 100, 
                    damping: 15, 
                    duration: 0.8,
                    delay: idx * 0.1
                  } 
                }
              }}
              className="group flex flex-col items-center text-center bg-[#101624] rounded-2xl p-8 shadow-lg hover:shadow-green-400/20 transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-sm border border-white/10 hover:border-green-500/30"
              whileHover={{ 
                scale: 1.06, 
                y: -8, 
                rotate: 1,
                boxShadow: "0 20px 40px rgba(34,197,94,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div
                  className={`w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br ${step.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ 
                    rotate: 8,
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <step.icon className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {step.title}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Approach Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-center mt-16"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-gray-400 text-sm italic"
          >
            "Systematic approach to intelligent solutions"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 