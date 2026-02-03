'use client'

import { motion } from 'framer-motion'

export default function CricketBallPhysics() {
  const ballVariants = {
    animate: {
      x: [0, 300, 600, 300, 0],
      y: [0, -200, -100, -150, 0],
      rotate: [0, 180, 360, 540, 720],
      scale: [1, 0.8, 1.2, 0.9, 1],
    }
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Ball 1 - Main trajectory */}
      <motion.div
        className="absolute w-6 h-6 bg-gradient-to-br from-red-500 to-red-700 rounded-full shadow-lg"
        style={{ 
          left: '10%', 
          top: '60%',
          background: 'radial-gradient(circle at 30% 30%, #ef4444, #dc2626)',
          boxShadow: '0 4px 8px rgba(0,0,0,0.3), inset -2px -2px 4px rgba(0,0,0,0.2)'
        }}
        variants={ballVariants}
        animate="animate"
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.25, 0.5, 0.75, 1]
        }}
      >
        {/* Cricket ball seam */}
        <div className="absolute inset-0 rounded-full">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-800 transform -translate-y-0.5 rounded-full"></div>
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-800 transform -translate-x-0.5 rounded-full"></div>
        </div>
      </motion.div>

      {/* Ball 2 - Slower arc */}
      <motion.div
        className="absolute w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full shadow-md opacity-60"
        style={{ 
          right: '15%', 
          top: '40%',
          background: 'radial-gradient(circle at 30% 30%, #f87171, #ef4444)'
        }}
        animate={{
          x: [-100, 200, -100],
          y: [0, -100, 0],
          rotate: [0, 360, 720],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Ball 3 - Fast bounce */}
      <motion.div
        className="absolute w-3 h-3 bg-gradient-to-br from-red-300 to-red-500 rounded-full shadow-sm opacity-40"
        style={{ 
          left: '70%', 
          bottom: '30%',
          background: 'radial-gradient(circle at 30% 30%, #fca5a5, #f87171)'
        }}
        animate={{
          y: [0, -80, 0, -40, 0],
          x: [0, 50, 100, 150, 200],
          rotate: [0, 180, 360, 540, 720],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </div>
  )
}