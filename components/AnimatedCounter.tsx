'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export default function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef(null)
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, { duration: duration * 1000 })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0
      motionValue.set(numericValue)
    }
  }, [motionValue, isInView, value])

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) {
        const numericValue = parseInt(value.replace(/[^\d]/g, '')) || 0
        if (numericValue > 0) {
          const formatted = Math.floor(latest).toLocaleString()
          const suffix = value.replace(/[\d,]/g, '')
          ref.current.textContent = formatted + suffix
        } else {
          ref.current.textContent = value
        }
      }
    })
  }, [springValue, value])

  return <span ref={ref}>{value}</span>
}