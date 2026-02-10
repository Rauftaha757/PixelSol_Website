"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink, Bot, Smartphone, Pill, GraduationCap, Globe, ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "ScholarWatch AI Study Assistant",
    shortDesc: "AI-powered learning platform with focus tracking",
    description: "An intelligent study companion that generates personalized quizzes, summarizes lectures, and uses posture tracking to improve student focus and engagement. Built for modern classrooms and remote learning.",
    githubUrl: "https://github.com/Quttoshii/scholarwatch",
    demoUrl: "https://barbiesuccessstudio.my.canva.site/scholarwatch",
    tags: ["AI", "Education", "Tracking", "Quiz Gen"],
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-500",
    featured: true,
  },
  {
    title: "PharmaCare Health App",
    shortDesc: "Medicine management and health tracking demo",
    description: "A comprehensive health application designed for medication management, prescription tracking, and health monitoring. Features intuitive UI for managing daily doses and health reminders.",
    demoUrl: "https://barbiesuccessstudio.my.canva.site/pharmacare",
    tags: ["Health", "Mobile", "UI/UX", "Demo"],
    icon: Pill,
    gradient: "from-emerald-500 to-green-500",
    featured: true,
  },
  {
    title: "AutoTrade Trading Platform",
    shortDesc: "Flutter app for automated crypto trading",
    description: "A complete trading platform with real-time crypto tracking, interactive dashboards, and smart trade execution. Built with Flutter and connected to a powerful backend engine for seamless trading experience.",
    githubUrl: "https://github.com/Rauftaha757/AutoTrade_ClientSide",
    tags: ["Flutter", "Crypto", "Real-time", "Trading"],
    icon: Smartphone,
    gradient: "from-purple-500 to-pink-500",
    featured: false,
  },
  {
    title: "AI-Powered Billing System",
    shortDesc: "Automated checkout using YOLOv8 object detection",
    description: "An innovative billing system using computer vision to detect products and automatically generate invoices. Eliminates manual entry for faster retail checkout experiences.",
    githubUrl: "https://github.com/Quttoshii/Automatic-Real-Time-Bill-Generation",
    tags: ["YOLOv8", "OpenCV", "AI", "Vision"],
    icon: Bot,
    gradient: "from-orange-500 to-amber-500",
    featured: false,
  },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-deep-slate to-[#0b0f19] relative">
      <div className="container mx-auto px-6">
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
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-semibold uppercase tracking-widest text-purple-400 mb-6"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Featured Projects
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            From AI-powered automation to modern mobile apps, we build solutions that make an impact.
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-8"
          />
        </motion.div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {projects.filter(p => p.featured).map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <div className="glass-card rounded-3xl p-8 h-full flex flex-col border border-white/5 hover:border-white/10 transition-all duration-300 relative bg-[#0f111a]">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl`}>
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {project.title}
                  </h3>

                  <p className="text-sm font-medium text-gray-300 mb-3">
                    {project.shortDesc}
                  </p>

                  <p className="text-sm text-gray-400 leading-relaxed flex-grow mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
                      style={{ pointerEvents: 'auto' }}
                    >
                      <Globe className="w-4 h-4" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <Github className="w-4 h-4" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mb-8"
        >
          <h3 className="text-xl font-semibold text-gray-400">More Projects</h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          {projects.filter(p => !p.featured).map((project, idx) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 h-full flex flex-col border border-white/5 hover:border-white/10 transition-all duration-300 relative bg-[#0f111a]">
                  <div className="flex gap-4 flex-grow">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex flex-col flex-grow">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {project.title}
                      </h4>

                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs text-gray-500"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <p className="text-sm text-gray-400 leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <a
                        href={project.githubUrl || project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 w-fit relative z-10"
                        style={{ pointerEvents: 'auto' }}
                      >
                        <Github className="w-4 h-4" />
                        <span>View Project</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center mt-8"
        >
          <a
            href="https://github.com/Rauftaha757"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 relative z-10"
            style={{ pointerEvents: 'auto' }}
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
