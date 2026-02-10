"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Code, Bot, Server, Briefcase, User, Building2, Coffee, Zap, Sparkles } from "lucide-react"

const team = [
  {
    name: "Taha Rauf",
    role: "Full Stack Developer & Product Architect",
    emoji: "💻",
    blurb: "I bring ideas to life with clean code and intuitive design. Merging frontend elegance with backend strength to create seamless digital experiences.",
    image: "/taha.jpeg",
    fallbackIcon: Code,
    icon: Code,
    color: "from-blue-500 to-cyan-500",
    borderColor: "#3B82F6",
  },
  {
    name: "Hammad Sikandar",
    role: "AI/ML Engineer",
    emoji: "🤖",
    blurb: "I build intelligent systems that learn, adapt, and solve real-world problems using cutting-edge artificial intelligence and machine learning technologies.",
    image: "/hammad.jpeg",
    fallbackIcon: Bot,
    icon: Bot,
    color: "from-purple-500 to-pink-500",
    borderColor: "#A855F7",
  },
  {
    name: "Babar Shaheen",
    role: "DevOps & Backend Engineer",
    emoji: "🛠️",
    blurb: "I ensure everything runs smoothly and securely. From APIs to servers to cloud infrastructure, I keep our systems reliable and scalable.",
    image: "/babar.jpg",
    fallbackIcon: Server,
    icon: Server,
    color: "from-green-500 to-emerald-500",
    borderColor: "#22C55E",
  },
  {
    name: "Syed Saad Kamal",
    role: "Business Developer",
    emoji: "🚀",
    blurb: "I bridge the gap between technology and business. Turning innovative ideas into successful ventures and building strategic partnerships that drive growth.",
    image: "/saad.jpeg",
    fallbackIcon: Briefcase,
    icon: Briefcase,
    color: "from-orange-500 to-amber-500",
    borderColor: "#F97316",
  },
  {
    name: "Abdullah Shoaib",
    role: "Solutions Architect",
    emoji: "🏗️",
    blurb: "I design robust, scalable technical solutions that align with business goals. From system architecture to technology strategy, I ensure our solutions are built to last.",
    image: "/mehdi.jpeg",
    fallbackIcon: Building2,
    icon: Building2,
    color: "from-red-500 to-rose-500",
    borderColor: "#EF4444",
  },
  {
    name: "Ali Lashari",
    role: "Chief Chai Officer",
    emoji: "☕",
    blurb: "I fuel our team with unlimited chai and good vibes. The master of morale who keeps the creativity flowing one cup at a time.",
    image: "/ali.jpeg",
    fallbackIcon: Coffee,
    icon: Coffee,
    color: "from-amber-500 to-yellow-500",
    borderColor: "#F59E0B",
    special: true,
  },
  {
    name: "Arham Nasir",
    role: "Engineering Team Lead",
    emoji: "⚡",
    blurb: "I manage and mentor our development teams, ensuring projects are delivered efficiently while maintaining high-quality standards and innovation.",
    image: "/arham.jpeg",
    fallbackIcon: Zap,
    icon: Zap,
    color: "from-indigo-500 to-violet-500",
    borderColor: "#8B5CF6",
  },
]

// Separate component for team member with image error handling
function TeamMemberCard({ member, idx }: { member: typeof team[0], idx: number }) {
  const [imageError, setImageError] = useState(false)
  const FallbackIcon = member.fallbackIcon || User

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: idx * 0.08, ease: "easeOut" }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group"
    >
      <div className="glass-card rounded-3xl p-5 h-full flex flex-col items-center text-center relative overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300">
        {/* Hover gradient effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

        {/* Icon badge */}
        <motion.div
          className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${member.color} flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.6 }}
        >
          <member.icon className="w-5 h-5 text-white" />
        </motion.div>

        {/* Special badge for CCO */}
        {member.special && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.1 + 0.4, type: "spring", stiffness: 200 }}
            className="absolute -top-2 -right-2 z-20"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 rounded-full blur-md"
              />
              <div className="relative w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
            </div>
          </motion.div>
        )}

        {/* Image container */}
        <div className="relative mb-4">
          {/* Rotating dashed ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed opacity-20"
            style={{
              borderColor: member.borderColor,
              transform: "scale(1.15)",
            }}
          />

          {/* Pulsing ring */}
          <motion.div
            animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute inset-0 rounded-full border-2"
            style={{ borderColor: member.borderColor }}
          />

          <motion.div
            className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 shadow-xl relative flex items-center justify-center bg-[#1a1d2d]"
            style={{ borderColor: member.borderColor }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {imageError || !member.image ? (
              <div className={`w-full h-full bg-gradient-to-br ${member.color} flex items-center justify-center`}>
                <FallbackIcon className="w-10 h-10 text-white/80" />
              </div>
            ) : (
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full"
                onError={() => setImageError(true)}
              />
            )}
          </motion.div>

          {/* Emoji badge */}
          <motion.div
            className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-[#1a1d2d] border-2 border-white/10 flex items-center justify-center text-lg shadow-lg"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            {member.emoji}
          </motion.div>
        </div>

        {/* Member info */}
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300 transition-all duration-300">
          {member.name}
        </h3>
        <p className={`text-xs font-semibold mb-2 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
          {member.role}
        </p>
        <p className="text-gray-400 text-xs leading-relaxed flex-grow line-clamp-3">
          {member.blurb}
        </p>
      </div>
    </motion.div>
  )
}

export default function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-[#0b0f19] to-[#0f111a] relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
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
            className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 text-sm font-semibold uppercase tracking-widest text-green-400 mb-6"
          >
            WHO WE ARE
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Friends. Founders. Builders.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We are a passionate team of innovators who founded PixelSolve to build next generation AI and software experiences. We combine our expertise to deliver exceptional results.
          </motion.p>
        </motion.div>

        {/* Team Section - Grid Layout for 7 Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {team.map((member, idx) => (
            <TeamMemberCard key={member.name} member={member} idx={idx} />
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12"
        >
          {[
            { number: "7", label: "Team Members" },
            { number: "20+", label: "Projects Delivered" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cool-blue to-accent-blue bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center max-w-3xl mx-auto"
        >
          <blockquote className="relative">
            <svg className="w-12 h-12 text-green-500/20 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="text-xl md:text-2xl text-gray-300 italic leading-relaxed mb-4">
              We are not just building software. We are building a future together.
            </p>
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-green-500 to-transparent mx-auto"></div>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
