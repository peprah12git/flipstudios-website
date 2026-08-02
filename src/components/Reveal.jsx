import { motion, useReducedMotion } from 'framer-motion'

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export function Reveal({ as: Tag = 'div', className, children, ...props }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[typeof Tag === 'string' ? Tag : 'div']

  if (reduce) {
    const Plain = Tag
    return (
      <Plain className={className} {...props}>
        {children}
      </Plain>
    )
  }

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
      {...props}
    >
      {children}
    </MotionTag>
  )
}

export function RevealItem({ as: Tag = 'div', className, children, ...props }) {
  const reduce = useReducedMotion()
  const MotionTag = motion[typeof Tag === 'string' ? Tag : 'div']

  if (reduce) {
    const Plain = Tag
    return (
      <Plain className={className} {...props}>
        {children}
      </Plain>
    )
  }

  return (
    <MotionTag className={className} variants={item} {...props}>
      {children}
    </MotionTag>
  )
}

export default Reveal
