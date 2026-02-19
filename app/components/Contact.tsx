"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram, Send, ArrowRight } from "lucide-react"

const contacts = [
  {
    name: "GitHub",
    href: "https://github.com/Rauftaha757",
    icon: Github,
    gradient: "from-gray-500 to-gray-700",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pixelsolve-inc",
    icon: Linkedin,
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Email",
    href: "mailto:connect@pixelsolve.co",
    icon: Mail,
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pixelsolve.co/",
    icon: Instagram,
    gradient: "from-pink-500 to-purple-600",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "8s" }} />
        <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-blue-600/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: "10s", animationDelay: "2s" }} />
      </div>

      <div className="relative z-10 container mx-auto px-6 max-w-4xl">
        {/* Small label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-400 uppercase tracking-wider">
            Contact
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">Let's Build</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-lg mx-auto">
            Have a project in mind? Let's talk and bring your vision to life.
          </p>
        </motion.div>

        {/* Email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <a
            href="mailto:connect@pixelsolve.co"
            className="group relative block p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-500 mb-1">Email us</p>
                  <p className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    connect@pixelsolve.co
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-6 py-3.5 rounded-full bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:scale-105 transition-all">
                <span className="font-medium">Get in touch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {contacts.map((contact, idx) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-300`} />
                <div className="relative flex flex-col items-center gap-3">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                    {contact.name}
                  </span>
                </div>
              </motion.a>
            )
          })}
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20 pt-10 border-t border-white/5"
        >
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} PixelSolve. Building the future of intelligent software.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
