'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

interface TypewriterProps {
  words: string[]
  typingSpeedMs?: number
  pauseMs?: number
  className?: string
}

export default function Typewriter({
  words,
  typingSpeedMs = 60,
  pauseMs = 1000,
  className,
}: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [deleting, setDeleting] = useState(false)
  const prefersReducedMotion = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )
  const word = words[index % words.length]
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplay(word)
      return
    }

    const step = () => {
      if (!deleting) {
        const next = word.slice(0, display.length + 1)
        setDisplay(next)
        if (next === word) {
          window.setTimeout(() => setDeleting(true), pauseMs)
          return
        }
      } else {
        const next = word.slice(0, Math.max(0, display.length - 1))
        setDisplay(next)
        if (next.length === 0) {
          setDeleting(false)
          setIndex((i) => (i + 1) % words.length)
        }
      }
      timerRef.current = window.setTimeout(step, typingSpeedMs)
    }

    timerRef.current = window.setTimeout(step, typingSpeedMs)
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current)
    }
  }, [display, deleting, word, typingSpeedMs, pauseMs, words.length, prefersReducedMotion])

  return (
    <span className={className}>
      {display}
      {!prefersReducedMotion && <span className="inline-block w-[2px] h-[1em] align-[-0.1em] bg-current ml-0.5 animate-pulse" />}
    </span>
  )
}


