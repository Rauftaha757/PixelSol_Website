"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import ClientWork from "./components/ClientWork"
import OurApproach from "./components/OurApproach"
import About from "./components/About"
import Contact from "./components/Contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "clients", "about", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0f111a]"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.2, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] 
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4"
              >
                PixelSolve
              </motion.div>
              <motion.div
                className="w-16 h-16 border-2 border-blue-500 border-t-transparent rounded-full mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-gray-400 mt-4"
              >
                Loading amazing experiences...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!isLoading && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="min-h-screen"
          >
            <Navigation activeSection={activeSection} />
            <Hero />
            <Services />
            <OurApproach />
            <Portfolio />
            <ClientWork />
            <About />
            <Contact />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
