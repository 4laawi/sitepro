'use client'

import { motion } from 'framer-motion'

interface TextTickerProps {
  text: string
  speedSec?: number
  className?: string
}

export default function TextTicker({ text, speedSec = 18, className }: TextTickerProps) {
  return (
    <div className={className}>
      <div className="overflow-hidden">
        <motion.div
          initial={{ x: '0%' }}
          animate={{ x: '-100%' }}
          transition={{ duration: speedSec, repeat: Infinity, ease: 'linear' }}
          className="whitespace-nowrap py-2"
        >
          {[...Array(6)].map((_, i) => (
            <span key={i} className="mx-6 text-gray-700">
              {text}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}


