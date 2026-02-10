"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-midnight-navy via-charcoal-black to-deep-slate"
        style={{ y }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(119,127,153,0.1),transparent_70%)]" />

        {/* Enhanced animated gradient overlay */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-cool-blue/10 via-transparent to-accent-blue/10"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating background elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cool-blue rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.9, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute bottom-20 left-20 w-32 h-32 border border-cool-blue/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.2, 1],
        }}
        transition={{
          rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 border border-accent-blue/20 rounded-lg"
        animate={{
          rotate: -360,
          scale: [1, 0.8, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Enhanced Badge */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card"
            whileHover={{ scale: 1.05, y: -3 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-cool-blue" />
            </motion.div>
            <span className="text-sm text-soft-gray font-medium">Digital Innovation Experts</span>
          </motion.div>
        </motion.div>

        {/* Enhanced Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
          className="mb-8"
        >
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Elevating Digital Experiences with{" "}
            <motion.span
              className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              Pixel-Perfect
            </motion.span>{" "}
            Solutions
          </motion.h1>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="text-xl md:text-2xl text-soft-gray mb-12 max-w-3xl mx-auto"
        >
          From AI to Apps, We Build What Matters
        </motion.p>

        {/* Enhanced CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        >
          <motion.button
            onClick={scrollToContact}
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cool-blue to-accent-blue text-fog-white font-semibold rounded-full hover:shadow-lg hover:shadow-cool-blue/25 transition-all duration-300 backdrop-blur-sm border border-blue-500/20"
            whileHover={{
              scale: 1.05,
              y: -3,
              boxShadow: "0 25px 50px rgba(119, 127, 153, 0.3)",
              transition: { type: "spring", stiffness: 300, damping: 20 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Build With Us</span>
            <motion.div
              className="group-hover:translate-x-1 transition-transform"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Additional Hero Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="mt-16"
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="text-gray-400 text-sm italic"
          >
            Where innovation meets execution
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
