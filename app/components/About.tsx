"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const founders = [
  {
    name: "Taha Rauf",
    role: "Full Stack Dev / Product Architect",
    emoji: "💻",
    blurb: "I bring ideas to life with clean code and intuitive design — merging frontend elegance with backend strength.",
    image: "/taha.jpeg",
  },
  {
    name: "Hammad Sikandar",
    role: "AI/ML Engineer",
    emoji: "🤖",
    blurb: "I build intelligent systems that learn, adapt, and solve real-world problems.",
    image: "/hammad.jpeg",
  },
  {
    name: "Babar Shaheen",
    role: "DevOps & Backend Engineer",
    emoji: "🛠️",
    blurb: "I ensure everything runs like clockwork — from APIs to servers to cloud infra.",
    image: "/babar.jpg",
  },
]

export default function WhoWeAre() {
  return (
    <section id="about" className="py-20 bg-[#0b0f19] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
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
            className="block text-sm font-semibold uppercase tracking-widest text-green-400 mb-4"
          >
            WHO WE ARE
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Friends. Founders. Builders.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            We're three close friends who founded a startup to build next-gen AI and software experiences. We code, learn, and grow together — and we love what we do.
          </motion.p>
        </motion.div>
        
        {/* Founders Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.18 } },
          }}
          className="flex flex-col sm:flex-row justify-center items-center gap-10 md:gap-16 mb-16"
        >
          {founders.map((founder, idx) => (
            <motion.div
              key={founder.name}
              variants={{
                hidden: { opacity: 0, y: 40, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(59,130,246,0.18)" }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="group flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-4 border-[#3B82F6] shadow-lg object-cover transition duration-300 hover:scale-105 hover:shadow-xl">
                <Image src={founder.image} alt={founder.name} width={128} height={128} className="object-cover w-full h-full rounded-full transition duration-300 group-hover:scale-105 group-hover:shadow-xl" />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">{founder.name}</h3>
              <p className="text-green-400 font-medium mb-2">{founder.role}</p>
              <p className="text-gray-300 text-base mb-2">{founder.blurb}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center max-w-2xl mx-auto mt-8"
        >
          <blockquote className="italic text-lg text-gray-400 border-l-4 border-green-400 pl-6">
            "We're not just building software — we're building a future, together."
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
