"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [cursorText, setCursorText] = useState("")
  const [isTouch, setIsTouch] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Touch device detection
    const handleTouch = () => setIsTouch(true)
    window.addEventListener("touchstart", handleTouch, { once: true })
    return () => window.removeEventListener("touchstart", handleTouch)
  }, [])

  useEffect(() => {
    if (isTouch) return
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      setIsVisible(true)
    }
    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("cursor-hovered")
      ) {
        setIsHovering(true)
        setCursorText(target.getAttribute("data-cursor-text") || "")
      } else if (target.closest("[data-cursor-text]")) {
        setIsHovering(true)
        const text = target.closest("[data-cursor-text]")?.getAttribute("data-cursor-text") || ""
        setCursorText(text)
      } else {
        setIsHovering(false)
        setCursorText("")
      }
    }
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)
    document.addEventListener("mousedown", handleMouseDown)
    document.addEventListener("mouseup", handleMouseUp)
    document.addEventListener("mouseover", handleMouseOver)
    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      document.removeEventListener("mousedown", handleMouseDown)
      document.removeEventListener("mouseup", handleMouseUp)
      document.removeEventListener("mouseover", handleMouseOver)
    }
  }, [mouseX, mouseY, isTouch])

  if (isTouch) return null // fallback to default pointer on mobile

  return (
    <>
      {/* Outer circle */}
      <motion.div
        className={`fixed top-0 left-0 pointer-events-none z-[9999] w-12 h-12 rounded-full border border-blue-400/60 bg-white/5 backdrop-blur transition-colors duration-200 ${isHovering ? 'shadow-[0_0_16px_4px_rgba(59,130,246,0.25)]' : ''}`}
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.4 : 1,
          opacity: isVisible ? (isHovering ? 0.5 : 0.3) : 0,
          borderColor: isHovering ? '#60a5fa' : 'rgba(96,165,250,0.4)',
        }}
        animate={{
          boxShadow: isHovering ? "0 0 32px 8px #60a5fa55" : "0 0 0 0 transparent",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 18,
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[10000] w-3 h-3 rounded-full bg-blue-400"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      {/* Cursor text (optional) */}
      {cursorText && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[10001] text-xs text-white bg-blue-500/80 px-2 py-1 rounded-full"
          style={{
            x: cursorX,
            y: cursorY,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
        >
          {cursorText}
        </motion.div>
      )}
      {/* Click ripple effect */}
      {isClicking && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 border border-blue-400 rounded-full pointer-events-none z-[9998]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ scale: 2, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  )
} 