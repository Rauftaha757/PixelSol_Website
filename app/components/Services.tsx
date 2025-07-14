"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Smartphone, Globe, Brain, Palette, Cloud, Zap } from "lucide-react"
import { StaggeredAnimation } from "./ScrollAnimation"

const services = [
  {
    icon: Smartphone,
    title: "Flutter & React Native App Development",
    description: "Cross-platform mobile apps for iOS and Android using modern UI frameworks.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Globe,
    title: "Web Development (React + Tailwind + Next.js)",
    description: "Performance-focused websites and SPAs using modern stacks.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Brain,
    title: "AI & Automation Tools (Python, LangChain, RAG)",
    description: "Smart AI assistants, business logic automation, and custom model integrations.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "UI/UX Design + Frontend Animation",
    description: "Smooth, high-fidelity UIs with Framer Motion, GSAP, and Tailwind transitions.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Cloud,
    title: "SaaS Product Development",
    description: "MVPs to scalable SaaS platforms with modern architecture and UI-first thinking.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "AI-Powered Business Automations",
    description: "Data pipelines, chatbots, automation scripts, and internal tools built using AI APIs.",
    color: "from-yellow-500 to-orange-500",
  },
]

export default function Services() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-charcoal-black to-deep-slate relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-cool-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            animate={{ 
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          >
            Our Services
          </motion.h2>
          <motion.p 
            className="text-xl text-soft-gray max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We deliver cutting-edge digital solutions that transform ideas into reality
          </motion.p>
        </motion.div>

        <StaggeredAnimation
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          staggerDelay={0.1}
          duration={0.6}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group glass-card p-8 rounded-2xl hover:glow-effect transition-all duration-300 cursor-pointer relative overflow-hidden"
              whileHover={{ 
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(119, 127, 153, 0.2)",
              }}
              whileTap={{ scale: 0.98 }}
              data-cursor-text="Learn More"
            >
              {/* Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cool-blue/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{ rotate: 5 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-8 h-8 text-fog-white" />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold mb-3 text-fog-white group-hover:text-cool-blue transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-soft-gray leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {service.description}
                </motion.p>

                {/* Hover indicator */}
                <motion.div
                  className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: 20, opacity: 0 }}
                  whileHover={{ x: 0, opacity: 1 }}
                >
                  <motion.div
                    className="w-2 h-2 bg-cool-blue rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
}
