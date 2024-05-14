import { MotionDiv } from '@/lib/framer-motion-components'
import { useLenis } from '@studio-freight/react-lenis'
import Link from 'next/link'
import { DataLink } from '../constants/data-links'
import { slide } from './animation/variants'

type Props = {
  dataLink: DataLink & { index: number }
}

export default function NavMenuCustomLink({ dataLink }: Props) {
  const lenis = useLenis()
  const { label, href, index } = dataLink

  return (
    <MotionDiv
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link
        onClick={(e) => {
          e.preventDefault()
          lenis?.scrollTo(href)
        }}
        href={href}
        className="font-serif text-6xl font-medium"
      >
        {label}
      </Link>
    </MotionDiv>
  )
}
