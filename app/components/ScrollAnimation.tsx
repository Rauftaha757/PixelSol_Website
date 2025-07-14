"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  delay?: number
  duration?: number
  direction?: "left" | "right" | "up" | "down"
  distance?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  direction = "left",
  distance = 50,
}: ScrollAnimationProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, opacity: 0 }
      case "right":
        return { x: distance, opacity: 0 }
      case "up":
        return { y: distance, opacity: 0 }
      case "down":
        return { y: -distance, opacity: 0 }
      default:
        return { x: -distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case "left":
      case "right":
        return { x: 0, opacity: 1 }
      case "up":
      case "down":
        return { y: 0, opacity: 1 }
      default:
        return { x: 0, opacity: 1 }
    }
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={getInitialPosition()}
      animate={isInView ? getAnimatePosition() : getInitialPosition()}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  )
}

// Staggered animation for multiple items
export function StaggeredAnimation({
  children,
  className = "",
  staggerDelay = 0.1,
  duration = 0.6,
  direction = "left",
  distance = 50,
}: ScrollAnimationProps & { staggerDelay?: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const getInitialPosition = () => {
    switch (direction) {
      case "left":
        return { x: -distance, opacity: 0 }
      case "right":
        return { x: distance, opacity: 0 }
      case "up":
        return { y: distance, opacity: 0 }
      case "down":
        return { y: -distance, opacity: 0 }
      default:
        return { x: -distance, opacity: 0 }
    }
  }

  const getAnimatePosition = () => {
    switch (direction) {
      case "left":
      case "right":
        return { x: 0, opacity: 1 }
      case "up":
      case "down":
        return { y: 0, opacity: 1 }
      default:
        return { x: 0, opacity: 1 }
    }
  }

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div
            key={index}
            initial={getInitialPosition()}
            animate={isInView ? getAnimatePosition() : getInitialPosition()}
            transition={{
              duration,
              delay: index * staggerDelay,
              ease: "easeOut",
            }}
          >
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={getInitialPosition()}
          animate={isInView ? getAnimatePosition() : getInitialPosition()}
          transition={{
            duration,
            ease: "easeOut",
          }}
        >
          {children}
        </motion.div>
      )}
    </div>
  )
} 