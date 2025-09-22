"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export function AnimatedSection({ children, className = "", delay = 0, direction = "up" }: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  const getAnimationClass = () => {
    const base = "transition-all duration-1000 ease-out"
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${base} translate-y-12 opacity-0`
        case "down":
          return `${base} -translate-y-12 opacity-0`
        case "left":
          return `${base} -translate-x-12 opacity-0`
        case "right":
          return `${base} translate-x-12 opacity-0`
        case "fade":
          return `${base} opacity-0`
        default:
          return `${base} translate-y-12 opacity-0`
      }
    }
    return `${base} translate-y-0 translate-x-0 opacity-100`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
