"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { ExternalLink, Github, ArrowRight, Play } from "lucide-react"

const projects = [
  {
    title: "ScholarWatch",
    shortDesc: "AI Study Assistant",
    description: "Intelligent learning platform with personalized quizzes, lecture summaries, and focus tracking.",
    tags: ["AI", "Education", "Python"],
    githubUrl: "https://github.com/Quttoshii/scholarwatch",
    demoUrl: "https://barbiesuccessstudio.my.canva.site/scholarwatch",
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    glow: "rgba(6, 182, 212, 0.4)",
  },
  {
    title: "PharmaCare",
    shortDesc: "Health Management",
    description: "Medication tracking, prescription management, and health reminders in one app.",
    tags: ["Mobile", "Healthcare", "UI/UX"],
    demoUrl: "https://barbiesuccessstudio.my.canva.site/pharmacare",
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    glow: "rgba(16, 185, 129, 0.4)",
  },
  {
    title: "AutoTrade",
    shortDesc: "Trading Platform",
    description: "Flutter trading platform with real-time crypto tracking and smart execution.",
    tags: ["Flutter", "Trading", "Real-time"],
    githubUrl: "https://github.com/Rauftaha757/AutoTrade_ClientSide",
    gradient: "from-violet-500 via-purple-500 to-fuchsia-500",
    glow: "rgba(139, 92, 246, 0.4)",
  },
  {
    title: "AI Billing",
    shortDesc: "Computer Vision",
    description: "Automated checkout using YOLOv8 for retail environments.",
    tags: ["YOLOv8", "Python", "AI"],
    githubUrl: "https://github.com/Quttoshii/Automatic-Real-Time-Bill-Generation",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    glow: "rgba(249, 115, 22, 0.4)",
  },
]

// Card component with 3D tilt effect
function ProjectCard({ project, index, isActive, onClick }: {
  project: typeof projects[0]
  index: number
  isActive: boolean
  onClick: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left - rect.width / 2) / 20
    const y = (e.clientY - rect.top - rect.height / 2) / 20
    setMousePosition({ x, y })
  }

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setIsHovered(true)}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: isActive ? 1.02 : 1,
        rotateX: -mousePosition.y,
        rotateY: mousePosition.x,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        rotateX: { type: "spring", stiffness: 200, damping: 20 },
        rotateY: { type: "spring", stiffness: 200, damping: 20 },
      }}
      className={`relative cursor-pointer ${isActive ? 'z-10' : 'z-0'}`}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Glow effect */}
      {isActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          exit={{ opacity: 0 }}
          className="absolute -inset-4 rounded-3xl blur-2xl"
          style={{ background: project.glow }}
          transition={{ duration: 0.3 }}
        />
      )}

      {/* Card */}
      <div
        className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${
          isActive
            ? 'bg-[#0f111a] border-2 shadow-2xl'
            : 'bg-[#0a0c10] border border-white/5'
        }`}
        style={{
          borderColor: isActive ? project.glow : undefined,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Animated gradient border */}
        {isActive && (
          <motion.div
            className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-20`}
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ backgroundSize: "200% 200%" }}
          />
        )}

        {/* Content */}
        <div className="relative p-6">
          {/* Tags */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-2xl font-bold text-white mb-1">{project.title}</h3>
          <p className={`text-sm font-medium mb-3 ${isActive ? 'text-gray-300' : 'text-gray-500'}`}>
            {project.shortDesc}
          </p>

          {/* Description - only show when active */}
          <AnimatePresence>
            {isActive && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="text-gray-400 text-sm leading-relaxed mb-4"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Links */}
          <div className="flex gap-3 mt-4">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-gradient-to-r from-white to-gray-200 text-[#0a0c10]'
                    : 'bg-white/10 text-white/70 hover:bg-white/20'
                }`}
              >
                <Play className="w-3 h-3" />
                Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-white/10 border border-white/20 text-white hover:bg-white/20'
                    : 'bg-white/5 border border-white/10 text-white/50 hover:bg-white/10'
                }`}
              >
                <Github className="w-3 h-3" />
                Code
              </a>
            )}
          </div>

          {/* Expand indicator */}
          <motion.div
            className="absolute bottom-4 right-4"
            animate={{ rotate: isActive ? 45 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight className={`w-5 h-5 ${isActive ? 'text-white' : 'text-white/30'}`} />
          </motion.div>
        </div>

        {/* Accent line */}
        <div className={`h-1 bg-gradient-to-r ${project.gradient} origin-left transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section id="portfolio" ref={sectionRef} className="py-24 bg-gradient-to-b from-[#0b0f19] via-[#0f111a] to-[#0a0c10] relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <motion.div
        style={{ opacity }}
        className="container mx-auto px-6 relative z-10"
      >
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-sm font-medium text-purple-400 mb-6">
            Our Work
          </span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From AI-powered automation to modern mobile apps, we build solutions that make an impact.
          </p>
        </motion.div>

        {/* Interactive Card Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>

          {/* Detail Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <div className="flex flex-col md:flex-row gap-6 items-center">
                {/* Project preview placeholder */}
                <div className="w-full md:w-1/3 aspect-video rounded-xl bg-gradient-to-br from-[#1a1d2d] to-[#0f111a] border border-white/10 flex items-center justify-center overflow-hidden">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${projects[activeIndex].gradient} flex items-center justify-center`}
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Play className="w-8 h-8 text-white" />
                  </motion.div>
                </div>

                {/* Details */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">{projects[activeIndex].title}</h3>
                  <p className="text-gray-400 mb-4">{projects[activeIndex].description}</p>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {projects[activeIndex].tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-row md:flex-col gap-3">
                  {projects[activeIndex].demoUrl && (
                    <a
                      href={projects[activeIndex].demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-white to-gray-200 text-[#0a0c10] font-semibold hover:scale-105 transition-transform"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {projects[activeIndex].githubUrl && (
                    <a
                      href={projects[activeIndex].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:scale-105 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* More Projects Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://github.com/Rauftaha757"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:scale-105"
            >
              <Github className="w-5 h-5" />
              View All on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
