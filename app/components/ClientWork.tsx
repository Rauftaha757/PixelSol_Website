"use client"

import { motion } from "framer-motion"
import { ExternalLink, CheckCircle2, Globe, Shield, Award, Users, Zap, Code2, Smartphone, ChevronRight } from "lucide-react"

const clientWork = {
  client: {
    name: "Citrix Consulting Services",
    location: "United Kingdom",
    industry: "Compliance & Safety Consulting",
    tagline: "Your Compliance Partner",
    website: "https://www.citrixconsultancy.com",
  },
  project: {
    title: "Professional Business Website",
    duration: "2 Weeks",
    technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
  },
  review: {
    quote: "PixelSolve delivered an exceptional website that perfectly represents our brand. Their attention to detail, modern design approach, and technical expertise exceeded our expectations. The team was professional, responsive, and truly understood our vision for a compliance consulting platform.",
    rating: 5,
    author: "Citrix Consulting Services",
  },
  challenge: {
    title: "The Challenge",
    description: "Citrix Consulting Services needed a professional, trustworthy online presence to showcase their compliance and safety consulting services to UK businesses. They required a website that would communicate expertise, build trust, and generate leads while maintaining a corporate yet modern aesthetic.",
  },
  solution: {
    title: "Our Solution",
    points: [
      {
        icon: Globe,
        title: "Modern Responsive Design",
        description: "Created a sleek, professional website that works flawlessly across all devices.",
      },
      {
        icon: Shield,
        title: "Trust-Building Elements",
        description: "Incorporated certifications, accreditations, and trust signals throughout the design.",
      },
      {
        icon: Zap,
        title: "Smooth Animations",
        description: "Added subtle animations that enhance user experience without compromising professionalism.",
      },
      {
        icon: Code2,
        title: "Performance Optimized",
        description: "Built with cutting-edge tech for lightning-fast load times and excellent SEO.",
      },
      {
        icon: Smartphone,
        title: "Mobile-First Approach",
        description: "Ensured perfect functionality on smartphones and tablets for on-the-go clients.",
      },
      {
        icon: Users,
        title: "Clear Call-to-Actions",
        description: "Strategically placed contact points to maximize consultation inquiries.",
      },
    ],
  },
  results: {
    title: "The Results",
    stats: [
      { value: "100%", label: "Client Satisfaction" },
      { value: "2 Weeks", label: "Delivery Time" },
      { value: "Modern", label: "Design Standards" },
      { value: "24/7", label: "Online Presence" },
    ],
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export default function ClientWork() {
  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-deep-slate to-[#0b0f19] relative overflow-hidden">
      {/* Background Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.8s' }}></div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
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
            className="inline-block px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-sm font-semibold uppercase tracking-widest text-blue-400 mb-6"
          >
            Client Success Stories
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
          >
            Work We're Proud Of
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real results for real businesses. See how we helped our clients transform their digital presence.
          </motion.p>
        </motion.div>

        {/* Main Client Card */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          {/* Client Overview Card */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/5 hover:border-white/10 transition-all duration-500 relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
                {/* Client Info */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-6 h-6 text-blue-400" />
                    <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Featured Project</span>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {clientWork.client.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-400 mb-6">
                    <span className="flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      {clientWork.client.location}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                    <span>{clientWork.client.industry}</span>
                  </div>
                  <p className="text-xl text-gray-300 italic mb-6">
                    "{clientWork.client.tagline}"
                  </p>
                  <motion.a
                    href={clientWork.client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cool-blue to-accent-blue text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                {/* Project Tech Stack */}
                <div className="glass-card rounded-2xl p-6 bg-white/5">
                  <h4 className="text-lg font-semibold text-white mb-4">Tech Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {clientWork.project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-400">Project Duration</span>
                      <span className="text-white font-semibold">{clientWork.project.duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Challenge & Solution Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Challenge */}
            <motion.div variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8 border border-white/5 hover:border-red-500/20 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center mb-6">
                  <Zap className="w-7 h-7 text-orange-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{clientWork.challenge.title}</h4>
                <p className="text-gray-400 leading-relaxed">
                  {clientWork.challenge.description}
                </p>
              </div>
            </motion.div>

            {/* Solution Preview */}
            <motion.div variants={itemVariants}>
              <div className="glass-card rounded-2xl p-8 border border-white/5 hover:border-green-500/20 transition-all duration-300 h-full">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-7 h-7 text-green-400" />
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{clientWork.solution.title}</h4>
                <p className="text-gray-400 leading-relaxed mb-6">
                  We delivered a comprehensive solution that addressed every challenge:
                </p>
                <div className="space-y-3">
                  {clientWork.solution.points.slice(0, 3).map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-white font-medium">{point.title}</span>
                        <span className="text-gray-500 mx-2">•</span>
                        <span className="text-gray-400 text-sm">{point.description}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Solution Details Grid */}
          <motion.div variants={itemVariants} className="mb-8">
            <h4 className="text-2xl font-bold text-white mb-6 text-center">What We Delivered</h4>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {clientWork.solution.points.map((point, idx) => {
                const Icon = point.icon
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="glass-card rounded-xl p-6 border border-white/5 hover:border-blue-500/20 transition-all duration-300 group"
                  >
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <h5 className="text-white font-semibold mb-2">{point.title}</h5>
                    <p className="text-gray-400 text-sm leading-relaxed">{point.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Results Stats */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 bg-gradient-to-br from-green-500/5 to-emerald-500/5">
              <h4 className="text-2xl font-bold text-white mb-8 text-center">{clientWork.results.title}</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {clientWork.results.stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -4 }}
                    className="text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Client Review */}
          <motion.div variants={itemVariants}>
            <div className="glass-card rounded-2xl p-8 md:p-10 border border-white/5 relative overflow-hidden">
              {/* Quote decoration */}
              <svg className="absolute top-6 left-6 w-16 h-16 text-white/5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  {[...Array(clientWork.review.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, type: "spring" }}
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </motion.svg>
                  ))}
                </div>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8 italic pl-8">
                  "{clientWork.review.quote}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold">{clientWork.review.author}</p>
                    <p className="text-gray-500 text-sm">UK-based Client</p>
                  </div>
                  <motion.a
                    href={clientWork.client.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>View Live Site</span>
                    <ChevronRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-gray-400 text-sm italic"
            >
              "Turning visions into digital reality, one client at a time"
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
