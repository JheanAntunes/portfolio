import { MotionDiv } from '@/lib/framer-motion-components'
import Link from 'next/link'
import { DataLink } from '../constants/data-links'
import { slide } from './animation/variants'

type Props = {
  dataLink: DataLink & { index: number }
}

export default function NavMenuCustomLink({ dataLink }: Props) {
  const { label, href, index } = dataLink

  return (
    <MotionDiv
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Link href={href}>{label}</Link>
    </MotionDiv>
  )
}
