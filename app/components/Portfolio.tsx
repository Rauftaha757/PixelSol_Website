"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"

const projects = [
  {
    title: "ScholarWatch",
    description: "AI-powered learning platform with personalized quizzes, lecture summaries, and focus tracking for students.",
    tags: ["AI", "Education", "Python"],
    githubUrl: "https://github.com/Quttoshii/scholarwatch",
    demoUrl: "https://barbiesuccessstudio.my.canva.site/scholarwatch",
  },
  {
    title: "PharmaCare",
    description: "Healthcare application for medication management, prescription tracking, and health reminders.",
    tags: ["Mobile", "Healthcare", "UI/UX"],
    demoUrl: "https://barbiesuccessstudio.my.canva.site/pharmacare",
  },
  {
    title: "AutoTrade",
    description: "Flutter trading platform with real-time crypto tracking and smart trade execution.",
    tags: ["Flutter", "Trading", "Real-time"],
    githubUrl: "https://github.com/Rauftaha757/AutoTrade_ClientSide",
  },
  {
    title: "AI Billing System",
    description: "Automated checkout using YOLOv8 computer vision for retail environments.",
    tags: ["Computer Vision", "Python", "AI"],
    githubUrl: "https://github.com/Quttoshii/Automatic-Real-Time-Bill-Generation",
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0a0c10]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Selected Projects</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            A showcase of our recent work across AI, mobile apps, and automation.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {projects.slice(0, 2).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group"
            >
              <div className="h-full bg-[#0d0f14] rounded-xl border border-white/5 hover:border-white/10 transition-all p-6 flex flex-col">
                <div className="flex-1">
                  <div className="flex gap-2 mb-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 rounded bg-white/5 border border-white/10 text-xs text-gray-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">{project.description}</p>
                </div>
                <div className="flex gap-3 mt-auto">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#0a0c10] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 rounded-lg text-sm font-medium transition-all"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {projects.slice(2).map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group"
            >
              <div className="bg-[#0d0f14] rounded-xl border border-white/5 hover:border-white/10 transition-all p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h4 className="text-white font-medium mb-1">{project.title}</h4>
                    <p className="text-gray-500 text-sm line-clamp-2">{project.description}</p>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                    style={{ pointerEvents: 'auto' }}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
