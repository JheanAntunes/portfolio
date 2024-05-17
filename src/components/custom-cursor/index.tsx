'use client'
import { MotionDiv } from '@/lib/framer-motion-components'
import useCustomCursor from './use-custom-cursor'

const CustomCursor = () => {
  const { sizeCursor, x, y } = useCustomCursor()

  return (
    <MotionDiv
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full bg-neutral-50 mix-blend-difference lg:block"
      style={{
        height: sizeCursor,
        width: sizeCursor,
        x,
        y,
        transition: 'height 0.3s, width 0.3s'
      }}
    />
  )
}

export default CustomCursor
