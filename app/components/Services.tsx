"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Mobile Development",
    description: "Flutter and React Native applications for iOS and Android with native performance and modern UI.",
  },
  {
    title: "Web Applications",
    description: "React, Next.js, and Node.js solutions built for speed, SEO, and user experience.",
  },
  {
    title: "AI & Automation",
    description: "Custom AI tools, automation scripts, and intelligent systems using Python and modern frameworks.",
  },
  {
    title: "Product Design",
    description: "UI/UX design, prototyping, and frontend development with attention to every detail.",
  },
  {
    title: "Cloud Infrastructure",
    description: "AWS, DevOps, and scalable architecture for growing applications and platforms.",
  },
  {
    title: "Technical Consulting",
    description: "Architecture reviews, code audits, and strategic guidance for technical decisions.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#0d0f14]">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">What We Do</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Services</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            End-to-end development services from concept to deployment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="h-full p-6 bg-[#0a0c10] rounded-xl border border-white/5 hover:border-white/10 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-white/40 mt-2" />
                  <h3 className="text-white font-semibold text-lg">{service.title}</h3>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
