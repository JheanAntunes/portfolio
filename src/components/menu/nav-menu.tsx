'use client'
import { MotionDiv } from '@/lib/framer-motion-components'
import Link from 'next/link'
import { dataLinks } from '../constants/data-links'
import { menuSlide } from './animation/variants'
import NavMenuCustomLink from './nav-menu-custom-link'
import SvgCurved from './svg-curved'

const NavMenu = () => {
  return (
    <MotionDiv
      initial="initial"
      animate="enter"
      exit="exit"
      variants={menuSlide}
      className="fixed right-0 top-0 z-10 h-svh bg-neutral-900 text-neutral-50"
    >
      <div className="relative flex h-full flex-col justify-between p-28">
        <div className="mt-20 flex flex-col gap-3 text-6xl">
          <div className="mb-10 border-b border-b-neutral-500 text-xs uppercase">
            <p>Menu</p>
          </div>

          {dataLinks.map((data, index) => {
            return (
              <NavMenuCustomLink key={index} dataLink={{ ...data, index }} />
            )
          })}
        </div>

        <div className="flex w-full gap-10 text-xs">
          <Link href="#">Github</Link>
          <Link href="#">LinkedIn</Link>
        </div>
        <SvgCurved />
      </div>
    </MotionDiv>
  )
}

export default NavMenu
