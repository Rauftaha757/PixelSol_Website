"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Bot, Server, Briefcase, User, Building2, Coffee, Zap, Linkedin, Mail, Github } from "lucide-react"

const coreTeam = [
  {
    name: "Taha Rauf",
    role: "Full Stack Developer & Product Architect",
    blurb: "Bringing ideas to life with clean code and intuitive design. Merging frontend elegance with backend strength to create seamless digital experiences.",
    image: "/taha.jpeg",
    icon: Code,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Hammad Sikandar",
    role: "AI/ML Engineer",
    blurb: "Building intelligent systems that learn, adapt, and solve real-world problems using cutting-edge artificial intelligence and machine learning technologies.",
    image: "/hammad.jpeg",
    icon: Bot,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Babar Shaheen",
    role: "DevOps & Backend Engineer",
    blurb: "Ensuring everything runs smoothly and securely. From APIs to servers to cloud infrastructure, keeping systems reliable and scalable.",
    image: "/babar.jpg",
    icon: Server,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    name: "Syed Saad Kamal",
    role: "Business Developer",
    blurb: "Bridging the gap between technology and business. Turning innovative ideas into successful ventures and building strategic partnerships that drive growth.",
    image: "/saad.jpeg",
    icon: Briefcase,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Abdullah Shoaib",
    role: "Solutions Architect",
    blurb: "Designing robust, scalable technical solutions that align with business goals. From system architecture to technology strategy, ensuring solutions are built to last.",
    image: "/mehdi.jpeg",
    icon: Building2,
    gradient: "from-red-500 to-rose-500",
  },
  {
    name: "Arham Nasir",
    role: "Engineering Team Lead",
    blurb: "Managing and mentoring development teams, ensuring projects are delivered efficiently while maintaining high-quality standards and innovation.",
    image: "/arham.jpeg",
    icon: Zap,
    gradient: "from-indigo-500 to-violet-500",
  },
]

function TeamCard({ member, idx }: { member: typeof coreTeam[0], idx: number }) {
  const [imageError, setImageError] = useState(false)
  const Icon = member.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
      className="group"
    >
      <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 h-full flex flex-col">
        {/* Header with icon and name */}
        <div className="flex items-start gap-4 mb-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${member.gradient} flex items-center justify-center flex-shrink-0 shadow-lg`}>
            {imageError || !member.image ? (
              <Icon className="w-7 h-7 text-white" strokeWidth={2} />
            ) : (
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full rounded-xl object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-white font-semibold text-lg leading-tight">{member.name}</h3>
            <p className={`text-sm bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent font-medium`}>
              {member.role}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed flex-grow">
          {member.blurb}
        </p>

        {/* Social links placeholder */}
        <div className="flex gap-2 mt-4 pt-4 border-t border-white/10">
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <Github className="w-4 h-4 text-gray-500" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <Linkedin className="w-4 h-4 text-gray-500" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <Mail className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0b0f19] to-[#0f111a] relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
            The Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet the People Behind PixelSolve
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A small team of passionate individuals building meaningful software solutions.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {coreTeam.map((member, idx) => (
            <TeamCard key={member.name} member={member} idx={idx} />
          ))}
        </div>

        {/* Join Us CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-2">Join Our Team</h3>
            <p className="text-gray-400 text-sm mb-4">
              We're always looking for talented people who share our passion for building great products.
            </p>
            <a
              href="mailto:connect@pixelsolve.co"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl text-white text-sm font-medium transition-all duration-300"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
