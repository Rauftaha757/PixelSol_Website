"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Instagram } from "lucide-react"

const contacts = [
  {
    name: "GitHub",
    href: "https://github.com/Rauftaha757",
    icon: Github,
    color: "hover:shadow-black/40 hover:border-gray-500/40",
    gradient: "from-gray-600 to-gray-800",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pixelsolve-inc",
    icon: Linkedin,
    color: "hover:shadow-blue-500/40 hover:border-blue-500/40",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Gmail",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=connect@pixelsolve.co",
    icon: Mail,
    color: "hover:shadow-red-500/40 hover:border-red-500/40",
    gradient: "from-red-500 to-red-600",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pixelsolve.co/",
    icon: Instagram,
    color: "hover:shadow-pink-500/40 hover:border-pink-500/40",
    gradient: "from-pink-500 via-purple-500 to-orange-500",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-[#0b0f19] to-deep-slate text-white relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-green-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </motion.div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-semibold uppercase tracking-widest text-blue-400 mb-6"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
          >
            Let's Work Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Have a project in mind or just want to chat? Reach out to us on our social platforms.
          </motion.p>
        </motion.div>

        {/* Contact Icons */}
        <div className="flex flex-wrap gap-6 justify-center max-w-3xl mx-auto">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.1,
                  y: -8,
                  transition: { type: "spring", stiffness: 300, damping: 20 }
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={`flex flex-col items-center justify-center bg-white/5 rounded-2xl p-8 min-w-[160px] backdrop-blur-sm border border-white/10 ${contact.color} transition-all duration-300 cursor-pointer shadow-lg group`}
                aria-label={contact.name}
              >
                <motion.div
                  whileHover={{ rotate: 12, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300`}
                >
                  <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                </motion.div>
                <span className="text-white font-medium">{contact.name}</span>
              </motion.a>
            )
          })}
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto mt-12"
        >
          <p className="text-gray-400 text-sm italic">
            Build something amazing with us
          </p>
        </motion.div>
      </div>
    </section>
  )
}
