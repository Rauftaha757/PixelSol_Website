"use client"

import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import OurApproach from './components/OurApproach'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import CustomCursor from './components/CustomCursor'
import ScrollAnimation from './components/ScrollAnimation'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'our-approach', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <CustomCursor />
      <Navigation activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Services />
        <OurApproach />
        <Portfolio />
        <Contact />
      </main>
      <ScrollAnimation />
    </>
  )
}
