'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    // Decide whether to enable heavy animations
    const isSmallScreen = window.matchMedia('(max-width: 1023px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // @ts-expect-error - navigator.connection is not in standard TS lib
    const saveData = typeof navigator !== 'undefined' && navigator.connection?.saveData === true
    const shouldEnable = !isSmallScreen && !prefersReducedMotion && !saveData
    setEnabled(shouldEnable)

    if (!shouldEnable) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      const parent = canvas.parentElement
      if (parent) {
        canvas.width = parent.clientWidth
        canvas.height = parent.clientHeight
      }
    }
    setCanvasSize()
    window.addEventListener('resize', setCanvasSize)

    // Grid configuration
    const gridSize = 50
    const dots: { x: number; y: number; baseAlpha: number; alpha: number; radius: number }[] = []
    
    // Create grid of dots
    for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
      for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
        dots.push({
          x,
          y,
          baseAlpha: Math.random() * 0.5 + 0.1,
          alpha: 0,
          radius: Math.random() * 2 + 1
        })
      }
    }

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines
      ctx.strokeStyle = 'rgba(59, 130, 246, 0.03)'
      ctx.lineWidth = 1

      // Vertical lines
      for (let x = 0; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }

      // Horizontal lines
      for (let y = 0; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw and animate dots
      dots.forEach((dot, index) => {
        const distance = Math.sqrt(
          Math.pow(mouseX - dot.x, 2) + Math.pow(mouseY - dot.y, 2)
        )
        
        // Shimmer effect
        const shimmer = Math.sin(Date.now() * 0.001 + index * 0.1) * 0.5 + 0.5
        
        // Interactive glow
        const maxDistance = 150
        const glow = Math.max(0, 1 - distance / maxDistance)
        
        // Update alpha with smooth transition
        dot.alpha += (dot.baseAlpha + glow * 0.8 + shimmer * 0.2 - dot.alpha) * 0.1

        // Draw dot with glow
        ctx.shadowBlur = 10 + glow * 20
        ctx.shadowColor = `rgba(59, 130, 246, ${dot.alpha})`
        
        ctx.fillStyle = `rgba(59, 130, 246, ${dot.alpha})`
        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius + glow * 2, 0, Math.PI * 2)
        ctx.fill()
        
        // Reset shadow
        ctx.shadowBlur = 0
      })

      // Draw connections between nearby bright dots
      dots.forEach((dot1, i) => {
        dots.slice(i + 1).forEach(dot2 => {
          const distance = Math.sqrt(
            Math.pow(dot1.x - dot2.x, 2) + Math.pow(dot1.y - dot2.y, 2)
          )
          
          if (distance < 100 && (dot1.alpha > 0.5 || dot2.alpha > 0.5)) {
            ctx.strokeStyle = `rgba(59, 130, 246, ${Math.min(dot1.alpha, dot2.alpha) * 0.3})`
            ctx.lineWidth = 0.5
            ctx.beginPath()
            ctx.moveTo(dot1.x, dot1.y)
            ctx.lineTo(dot2.x, dot2.y)
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', setCanvasSize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {enabled ? (
        <>
          {/* Canvas for grid animation */}
          <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ zIndex: 1 }}
          />

          {/* Gradient overlays */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
            <div className="absolute inset-x-0 top-0 h-96 bg-gradient-to-b from-white/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-white/90 to-transparent" />
            <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-white/20" />
          </div>

          {/* Background and subtle floating orbs (desktop only) */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100/50 to-primary-100/30" />
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute top-20 left-20 w-32 h-32 bg-blue-200/20 rounded-full blur-3xl"
                animate={{ x: [0, 20, 0], y: [0, -15, 0], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute top-40 right-32 w-24 h-24 bg-purple-200/15 rounded-full blur-2xl"
                animate={{ x: [0, -15, 0], y: [0, 20, 0], opacity: [0.15, 0.25, 0.15] }}
                transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute bottom-32 left-1/3 w-28 h-28 bg-cyan-200/20 rounded-full blur-2xl"
                animate={{ x: [0, 25, 0], y: [0, -20, 0], opacity: [0.2, 0.3, 0.2] }}
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </div>

          {/* Subtle gradient mesh */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.05 }}>
                  <animate attributeName="stop-opacity" values="0.05;0.12;0.05" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="50%" style={{ stopColor: '#1d4ed8', stopOpacity: 0.08 }}>
                  <animate attributeName="stop-opacity" values="0.08;0.15;0.08" dur="6s" repeatCount="indefinite" />
                </stop>
                <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 0.06 }}>
                  <animate attributeName="stop-opacity" values="0.06;0.1;0.06" dur="6s" repeatCount="indefinite" />
                </stop>
              </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#grad1)" />
          </svg>
        </>
      ) : (
        <>
          {/* Lightweight static background for mobile / reduced motion */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-blue-200/40 to-cyan-100" />
            {/* Soft radial accents */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(600px 400px at 20% 25%, rgba(59,130,246,0.12), transparent 60%), radial-gradient(500px 350px at 80% 75%, rgba(99,102,241,0.12), transparent 60%)',
              }}
            />
          </div>
          {/* Gentle fade overlays to keep content legible */}
          <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
            <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/85 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-white/85 to-transparent" />
          </div>
        </>
      )}
    </>
  )
}
