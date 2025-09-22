"use client"

import type React from "react"
import { useGSAPFadeUp, useGSAPStagger, useGSAPScale, useGSAPSlideIn } from "@/hooks/use-gsap-animations"

interface GSAPAnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeUp" | "stagger" | "scale" | "slideLeft" | "slideRight"
  delay?: number
}

export function GSAPAnimatedSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
}: GSAPAnimatedSectionProps) {
  const fadeUpRef = useGSAPFadeUp(delay)
  const staggerRef = useGSAPStagger()
  const scaleRef = useGSAPScale()
  const slideLeftRef = useGSAPSlideIn("left")
  const slideRightRef = useGSAPSlideIn("right")

  const getRef = () => {
    switch (animation) {
      case "fadeUp":
        return fadeUpRef
      case "stagger":
        return staggerRef
      case "scale":
        return scaleRef
      case "slideLeft":
        return slideLeftRef
      case "slideRight":
        return slideRightRef
      default:
        return fadeUpRef
    }
  }

  return (
    <div ref={getRef()} className={className}>
      {children}
    </div>
  )
}
