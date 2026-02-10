"use client"

import { motion } from "framer-motion"
import { Mail, Github, Linkedin, Instagram, Send } from "lucide-react"

const contacts = [
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=connect@pixelsolve.co",
    icon: Mail,
    description: "connect@pixelsolve.co",
  },
  {
    name: "GitHub",
    href: "https://github.com/Rauftaha757",
    icon: Github,
    description: "@pixelsolve",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pixelsolve-inc",
    icon: Linkedin,
    description: "PixelSolve Inc",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/pixelsolve.co/",
    icon: Instagram,
    description: "@pixelsolve.co",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[#0a0c10] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to chat? Reach out to us.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="flex flex-wrap gap-4 justify-center max-w-3xl mx-auto mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon
            return (
              <motion.a
                key={contact.name}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -2 }}
                className="group flex items-center gap-4 px-6 py-4 bg-[#0d0f14] rounded-xl border border-white/10 hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{contact.name}</p>
                  <p className="text-gray-500 text-xs">{contact.description}</p>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Direct Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-[#0d0f14] rounded-2xl p-8 border border-white/10 text-center">
            <h3 className="text-white text-lg mb-2">Start a Conversation</h3>
            <p className="text-gray-500 mb-6 text-sm">We typically respond within 24 hours.</p>
            <a
              href="mailto:connect@pixelsolve.co"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-[#0a0c10] rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              <Send className="w-4 h-4" />
              Send Message
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
