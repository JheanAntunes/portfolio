import { Variants } from 'framer-motion'

const ease = [0.76, 0, 0.24, 1]
export const transition = { duration: 0.8, ease }

export const menuSlide: Variants = {
  initial: { x: 'calc(100% + 100px)' },
  enter: { x: '0%', transition },
  exit: { x: 'calc(100% + 100px)', transition }
}

export const slide = {
  initial: { x: '80px' },
  enter: (i: number) => ({
    x: '0px',
    transition: { ...transition, delay: 0.1 * i }
  }),
  exit: (i: number) => ({
    x: '80px',
    transition: { ...transition, delay: 0.1 * i }
  })
}
