"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail as MailIcon } from "lucide-react"

const team = [
  {
    name: "Taha Rauf",
    role: "Co-Founder & CTO",
    expertise: "Product Architecture, Full Stack Development",
    blurb: "Architecting scalable solutions and leading technical innovation. 5+ years building production systems.",
    image: "/taha.jpeg",
    initials: "TR",
  },
  {
    name: "Hammad Sikandar",
    role: "Co-Founder & Head of AI",
    expertise: "Machine Learning, AI Engineering, Python",
    blurb: "Building intelligent systems that solve real problems. Expert in LLMs, computer vision, and data science.",
    image: "/hammad.jpeg",
    initials: "HS",
  },
  {
    name: "Babar Shaheen",
    role: "VP of Infrastructure",
    expertise: "DevOps, Cloud Architecture, Security",
    blurb: "Ensuring 99.9% uptime and scalable infrastructure. AWS certified with expertise in microservices.",
    image: "/babar.jpg",
    initials: "BS",
  },
  {
    name: "Syed Saad Kamal",
    role: "Head of Growth",
    expertise: "Business Strategy, Partnerships, Product",
    blurb: "Driving business development and strategic partnerships. MBA with track record of scaling tech startups.",
    image: "/saad.jpeg",
    initials: "SK",
  },
  {
    name: "Abdullah Shoaib",
    role: "Chief Architect",
    expertise: "System Design, Technical Strategy",
    blurb: "Designing enterprise-grade solutions. Former tech lead with experience in fintech and healthcare systems.",
    image: "/mehdi.jpeg",
    initials: "AS",
  },
  {
    name: "Arham Nasir",
    role: "Engineering Lead",
    expertise: "Team Management, Agile, Delivery",
    blurb: "Leading engineering teams to deliver quality software on time. Certified Scrum Master with 10+ years experience.",
    image: "/arham.jpeg",
    initials: "AN",
  },
  {
    name: "Ali Lashari",
    role: "Chief Chai Officer",
    expertise: "Team Culture, Morale, Beverages",
    blurb: "Keeping the team energized and focused. Ensuring the chai never runs dry and morale stays high.",
    image: "/ali.jpeg",
    initials: "AL",
  },
]

function TeamMember({ member, idx }: { member: typeof team[0], idx: number }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.4, delay: idx * 0.05 }}
      className="group"
    >
      <div className="relative bg-[#0d0f14] rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300">
        {/* Top accent line */}
        <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex gap-5">
          {/* Photo/Initials */}
          <div className="flex-shrink-0">
            {imageError || !member.image ? (
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-[#1a1d2d] to-[#0d0f14] border border-white/10 flex items-center justify-center">
                <span className="text-xl font-bold text-white/60">{member.initials}</span>
              </div>
            ) : (
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 rounded-xl object-cover"
                onError={() => setImageError(true)}
              />
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white font-semibold text-base mb-0.5">{member.name}</h3>
                <p className="text-white/60 text-xs uppercase tracking-wide mb-2">{member.role}</p>
                <p className="text-white/40 text-xs mb-3">{member.expertise}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{member.blurb}</p>
          </div>
        </div>

        {/* Bottom accent line */}
        <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </motion.div>
  )
}

export default function WhoWeAre() {
  return (
    <section id="about" className="py-24 bg-[#0a0c10] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-white/40 text-sm uppercase tracking-widest mb-4">Leadership</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Built by Experts, Driven by Excellence</h2>
          <p className="text-gray-400 max-w-2xl text-lg">
            Our team brings together decades of combined experience from top tech companies and startups.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-16">
          {team.map((member, idx) => (
            <TeamMember key={member.name} member={member} idx={idx} />
          ))}
        </div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { title: "Innovation First", desc: "We push boundaries and explore new technologies." },
            { title: "Quality Code", desc: "Clean, maintainable, and well-tested solutions." },
            { title: "Client Focus", desc: "Your success is our primary metric." },
          ].map((value, idx) => (
            <div key={value.title} className="text-center p-6">
              <h4 className="text-white font-semibold mb-2">{value.title}</h4>
              <p className="text-gray-500 text-sm">{value.desc}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
