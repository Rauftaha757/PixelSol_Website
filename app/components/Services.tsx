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
      {/* Enhanced Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-20 left-10 w-64 h-64 bg-cool-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Title Section */}
        <motion.div
          ref={ref}
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
              Our Services
            </motion.h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-xl text-soft-gray max-w-3xl mx-auto mb-6"
          >
            We deliver cutting-edge digital solutions that transform ideas into reality
          </motion.p>

          {/* Animated Divider */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto"
          />
        </motion.div>

        {/* Enhanced Services Grid */}
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 50, 
                  scale: 0.9
                },
                visible: { 
                  opacity: 1, 
                  y: 0, 
                  scale: 1,
                  transition: { 
                    type: 'spring', 
                    stiffness: 100, 
                    damping: 15, 
                    duration: 0.8,
                    delay: index * 0.1
                  } 
                }
              }}
              className="group glass-card p-8 rounded-2xl hover:glow-effect transition-all duration-300 cursor-pointer relative overflow-hidden backdrop-blur-sm border border-white/10 hover:border-blue-500/30"
              whileHover={{ 
                y: -6,
                scale: 1.02,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              whileTap={{ scale: 0.98 }}
              data-cursor-text="Learn More"
            >
              {/* Enhanced Hover background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cool-blue/10 to-accent-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <div className="relative z-10">
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { type: "spring", stiffness: 400, damping: 15 }
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <service.icon className="w-8 h-8 text-fog-white" />
                  </motion.div>
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-semibold mb-3 text-fog-white group-hover:text-cool-blue transition-colors"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {service.title}
                </motion.h3>
                
                <motion.p 
                  className="text-soft-gray leading-relaxed"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.description}
                </motion.p>

                {/* Enhanced Hover indicator */}
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
        </motion.div>

        {/* Additional Services Info */}
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
            "Transforming ideas into digital reality"
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
