"use client"

import { useEffect, useState } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Portfolio from "./components/Portfolio"
import OurApproach from "./components/OurApproach"
import About from "./components/About"
import Contact from "./components/Contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "portfolio", "about", "contact"]
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

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <main className="min-h-screen">
      <Navigation activeSection={activeSection} />
      <Hero />
      <Services />
      <OurApproach />
      <Portfolio />
      <About />
      <Contact />
    </main>
  )
}
