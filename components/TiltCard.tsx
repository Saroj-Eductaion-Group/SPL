'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ReactNode, useRef } from 'react'

interface ParallaxCardProps {
  children: ReactNode
  className?: string
  index: number
}

export default function ParallaxCard({ children, className = '', index }: ParallaxCardProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        y: index % 2 === 0 ? y : useTransform(scrollYProgress, [0, 1], [-50, 50]),
        rotateX,
        opacity,
        scale,
        transformStyle: "preserve-3d",
        transformOrigin: "center center"
      }}
    >
      {children}
    </motion.div>
  )
}