'use client'
import { MotionDiv } from '@/lib/framer-motion-components'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Button, buttonVariants } from '../ui/button'
import NavMenu from './nav-menu'
const Menu = () => {
  const [isMenu, setIsMenu] = useState(false)
  const handleToggleMenu = () => {
    setIsMenu((prevStateMenu) => !prevStateMenu)
  }
  return (
    <div>
      <Button
        size="icon"
        onClick={handleToggleMenu}
        className="border-none bg-transparent shadow-none hover:bg-transparent"
        aria-expanded={isMenu}
      >
        {isMenu ? (
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className={buttonVariants({
              size: 'icon',
              className:
                'fixed right-8 top-2 z-20 rounded-full border-none bg-transparent shadow-none hover:bg-transparent'
            })}
          >
            <span className="sr-only">Fechar menu</span>
            <Cross2Icon className="text-neutral-50" width={20} height={20} />
          </MotionDiv>
        ) : (
          <div
            className={buttonVariants({
              size: 'icon',
              className:
                'border-none bg-transparent shadow-none hover:bg-transparent'
            })}
          >
            <span className="sr-only">Abrir Menu</span>
            <HamburgerMenuIcon className="text-neutral-500 dark:text-neutral-100" />
          </div>
        )}
      </Button>
      <AnimatePresence mode="wait">{isMenu && <NavMenu />}</AnimatePresence>
    </div>
  )
}

export default Menu
