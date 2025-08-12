'use client'

import { motion } from 'framer-motion'
import React from 'react'

type WavyTextProps = {
  text: string
  className?: string
  delay?: number
  /** Duration of the per-letter wave animation */
  durationPerChar?: number
  /** If true, the wave continuously ripples (like Airbnb header). If false, plays once and stays black. */
  loop?: boolean
}

/**
 * WavyText animates each character with a subtle vertical wave once on mount,
 * similar to Airbnb's playful text reveals. It preserves spaces and works inline.
 */
export default function WavyText({
  text,
  className,
  delay = 0,
  // faster per your request
  durationPerChar = 0.6,
  loop = false,
}: WavyTextProps) {
  const letters = React.useMemo(() => Array.from(text), [text])

  const baseStagger = 0.05

  return (
    <span className={className} style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}>
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 0, opacity: 0, color: '#ec4899' }} // pink-500
          whileInView={{
            y: [0, -10, 0, 4, 0],
            opacity: 1,
            // color transitions pink -> black midway
            color: ['#ec4899', '#ec4899', '#111827', '#111827'],
          }}
          transition={{
            duration: durationPerChar,
            delay: delay + index * baseStagger,
            ease: 'easeInOut',
            repeat: loop ? Infinity : 0,
            repeatType: loop ? 'mirror' : undefined,
            repeatDelay: loop ? 1.2 : undefined,
          }}
          viewport={{ once: !loop, amount: 0.7 }}
          style={{ display: 'inline-block', willChange: 'transform, color' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  )
}


