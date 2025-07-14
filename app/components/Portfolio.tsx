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
    <section id="portfolio" className="py-20 bg-[#0b0f19] px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-2 text-white">Projects & Case Studies</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">From full-stack builds to AI-powered apps — here’s what we’ve created.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: idx * 0.12 }}
            className="backdrop-blur bg-white/5 border border-white/10 rounded-xl shadow-2xl p-7 flex flex-col gap-4 hover:scale-105 hover:border-blue-400 hover:shadow-blue-500/20 transition-all duration-300 group"
          >
            <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
            <p className="text-sm text-gray-400 mb-2">{project.description}</p>
            <div className="flex gap-3 mt-auto">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="backdrop-blur bg-white/10 border border-white/10 rounded-full px-4 py-2 text-sm text-white font-semibold flex items-center gap-2 hover:border-blue-400 hover:shadow-blue-500/20 hover:text-blue-300 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                {/* GitHub Icon */}
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0.297C5.373 0.297 0 5.67 0 12.297c0 5.282 3.438 9.747 8.205 11.325.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.625-5.475 5.921.43.372.823 1.104.823 2.226 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 22.04 24 17.575 24 12.297 24 5.67 18.627 0.297 12 0.297z"/></svg>
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

