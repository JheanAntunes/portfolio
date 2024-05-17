'use client'
import { useStoreHoveredCursor } from '@/hooks/stores/use-store-hovered-cursor'
import useStoreMenu from '@/hooks/stores/use-store-menu'
import { cn } from '@/lib/utils'
import { useLenis } from '@studio-freight/react-lenis'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll
} from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'
import { DataLink } from '../constants/data-links'
import { ModeToggle } from '../mode-toggle'
import { Button } from './button'

type FloatingNavProps = {
  navItems: DataLink[]
  className?: string
}

export const FloatingNav = ({ navItems, className }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll()
  const hookLenis = useLenis()
  const setStateIsMenu = useStoreMenu((state) => state.setIsMenu)
  const setIsHoveredCursor = useStoreHoveredCursor(
    (state) => state.setIsHoveredCursor
  )
  const stateIsMenu = useStoreMenu((state) => state.isMenu)
  const handleClickMenu = () => {
    setStateIsMenu(!stateIsMenu)
  }
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollYProgress, 'change', () => {
    if (scrollYProgress.get() < 0.1) {
      if (visible && stateIsMenu) {
        setStateIsMenu(false)
      }
      setVisible(false)
      return //break function
    }
    setVisible(true)
  })

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 100
        }}
        animate={{
          y: visible ? 0 : 100,
          opacity: visible ? 1 : 0
        }}
        transition={{
          duration: 0.2
        }}
        className={cn(
          'fixed inset-x-0 bottom-5 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-0 space-x-4 rounded-full border border-transparent bg-white px-5 py-2 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] dark:border-white/[0.2] dark:bg-black',
          className
        )}
        onMouseOver={() => {
          setIsHoveredCursor(true)
        }}
        onMouseLeave={() => {
          setIsHoveredCursor(false)
        }}
      >
        {navItems.map((navItem, idx: number) => (
          <Link
            key={`link=${idx}`}
            onClick={(e) => {
              e.preventDefault()
              setStateIsMenu(false)
              hookLenis?.scrollTo(navItem.href)
            }}
            href={navItem.href}
            className={cn(
              'relative hidden items-center space-x-1 text-neutral-800 hover:text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-300 sm:flex'
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden text-sm sm:block">{navItem.label}</span>
          </Link>
        ))}
        <div className="!m-0 flex items-center justify-center gap-3 sm:!ml-3">
          <Button
            className="relative !ml-0 rounded-full border border-neutral-200 bg-background px-4 py-2 text-sm font-medium text-black hover:bg-background dark:border-white/[0.2] dark:bg-background dark:text-white"
            onClick={handleClickMenu}
            aria-expanded={stateIsMenu}
          >
            <span>Menu</span>
            <span className="absolute inset-x-0 -bottom-px mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-blue-500  to-transparent" />
          </Button>
          <ModeToggle />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
