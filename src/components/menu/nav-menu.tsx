'use client'
import { useStoreHoveredCursor } from '@/hooks/stores/use-store-hovered-cursor'
import { MotionDiv } from '@/lib/framer-motion-components'
import Link from 'next/link'
import { dataLinks } from '../constants/data-links'
import { menuSlide } from './animation/variants'
import NavMenuCustomLink from './nav-menu-custom-link'
import SvgCurved from './svg-curved'

const NavMenu = () => {
  const setIsHoveredCursor = useStoreHoveredCursor(
    (state) => state.setIsHoveredCursor
  )
  return (
    <MotionDiv
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuSlide}
      className="fixed right-0 top-0 z-10 h-svh bg-neutral-900 text-neutral-50"
    >
      <div
        className="relative z-50 flex h-full w-80 flex-col gap-8 md:w-[420px]"
        onMouseOver={() => {
          setIsHoveredCursor(true)
        }}
        onMouseLeave={() => {
          setIsHoveredCursor(false)
        }}
      >
        <div className="mt-8 flex flex-col items-center gap-5 text-6xl">
          <div className="border-b border-b-neutral-500 text-xs uppercase">
            <p className="">Menu</p>
          </div>

          {dataLinks.map((data, index) => {
            return (
              <NavMenuCustomLink key={index} dataLink={{ ...data, index }} />
            )
          })}
        </div>

        <div className="flex w-full items-center justify-center gap-10 text-xs">
          <Link href="https://github.com/JheanAntunes">Github</Link>
          <Link href="https://www.linkedin.com/in/jhean-antunes-lopes/">
            LinkedIn
          </Link>
        </div>
      </div>
      <SvgCurved />
    </MotionDiv>
  )
}

export default NavMenu
