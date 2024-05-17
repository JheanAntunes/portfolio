import { useStoreHoveredCursor } from '@/hooks/stores/use-store-hovered-cursor'
import { useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

const useCustomCursor = () => {
  const isHoveredCursor = useStoreHoveredCursor(
    (state) => state.isHoveredCursor
  )

  const sizeCursor = isHoveredCursor ? 80 : 40
  const { x, y } = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  }

  const smoothOptions = {
    damping: 20,
    stiffness: 300,
    mass: 0.5
  }

  const { xSpring, ySpring } = {
    xSpring: useSpring(x, smoothOptions),
    ySpring: useSpring(y, smoothOptions)
  }
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      x.set(clientX - sizeCursor / 2)
      y.set(clientY - sizeCursor / 2)
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [x, y, isHoveredCursor])

  return { x: xSpring, y: ySpring, sizeCursor }
}

export default useCustomCursor
