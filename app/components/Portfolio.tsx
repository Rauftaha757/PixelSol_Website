"use client"

import { motion } from "framer-motion"

const projects = [
  {
    title: "AI-Powered Real-Time Billing System",
    description:
      "Developed an AI-powered real-time billing system that uses a camera to detect products and automatically generate invoices. Leveraging YOLOv8 for object detection, it streamlines the checkout process by eliminating manual entry, ideal for retail automation solutions.",
    githubUrl: "https://github.com/Quttoshii/Automatic-Real-Time-Bill-Generation",
  },
  {
    title: "ScholarWatch – AI Study Assistant",
    description:
      "ScholarWatch is an AI-enhanced learning platform that generates personalized quizzes, provides lecture summaries, and uses posture and gaze tracking to improve focus. Ideal for modern classrooms and remote learning environments.",
    githubUrl: "https://github.com/Quttoshii/scholarwatch",
  },
  {
    title: "AutoTrade (Client)",
    description:
      "Frontend for an automated trading platform built with Flutter. Includes real-time crypto tracking, user dashboards, and smart trade execution features connected to a backend trading engine.",
    githubUrl: "https://github.com/Rauftaha757/AutoTrade_ClientSide",
  },
  {
    title: "AutoTrade (Server)",
    description:
      "Node.js backend for the AutoTrade platform. Handles secure authentication, live market data fetching, trade logic, and socket-based updates for real-time user experience.",
    githubUrl: "https://github.com/Rauftaha757/AutoTrade_ServerSide",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-[#0b0f19] px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-blue-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-green-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </motion.div>

      <div className="relative z-10">
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
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
            >
              Projects & Case Studies
            </motion.h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg text-gray-400 max-w-2xl mx-auto mb-6"
          >
            From full-stack builds to AI-powered apps — here's what we've created.
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "140px" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
          />
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { 
              transition: { 
                staggerChildren: 0.2, 
                delayChildren: 0.3,
                duration: 0.8
              } 
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
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
                    delay: idx * 0.15
                  } 
                }
              }}
              className="backdrop-blur bg-white/5 border border-white/10 rounded-xl shadow-2xl p-7 flex flex-col gap-4 hover:scale-105 hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300 group relative overflow-hidden min-h-[320px]"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                rotate: 1,
                boxShadow: "0 20px 40px rgba(59,130,246,0.15)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.h3 
                  className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {project.title}
                </motion.h3>
                
                <motion.p 
                  className="text-sm text-gray-400 mb-2 leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>
                
                <div className="flex gap-3 mt-auto">
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cool-blue to-accent-blue text-fog-white font-semibold shadow hover:from-accent-blue hover:to-cool-blue transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    aria-label="View on GitHub"
                    whileHover={{ 
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 8px 25px rgba(59,130,246,0.3)",
                      transition: { type: "spring", stiffness: 300, damping: 20 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24" 
                      aria-hidden="true"
                      whileHover={{ rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 15 }}
                    >
                      <path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.04 24 17.575 24 12.297 24 5.67 18.627 0.297 12 0.297z"/>
                    </motion.svg>
                    <span>GitHub</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Portfolio Info */}
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
            "Building the future, one project at a time"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

