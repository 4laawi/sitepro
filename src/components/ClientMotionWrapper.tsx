'use client'

import { motion, type MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

type MotionTag = 'div' | 'li' | 'section' | 'span'

interface ClientMotionWrapperProps extends MotionProps {
  children: ReactNode
  className?: string
  as?: MotionTag
}

export default function ClientMotionWrapper({
  children,
  className,
  as = 'div',
  ...motionProps
}: ClientMotionWrapperProps) {
  const components: Record<MotionTag, React.ComponentType<MotionProps & { className?: string }>> = {
    div: motion.div,
    li: motion.li,
    section: motion.section,
    span: motion.span,
  }

  const MotionComponent = components[as] || motion.div

  return (
    <MotionComponent className={className} {...motionProps}>
      {children}
    </MotionComponent>
  )
}
