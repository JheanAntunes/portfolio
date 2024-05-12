'use client'
import useMediaQuery from '@/hooks/use-media-query'
import { MotionDiv } from '@/lib/framer-motion-components'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { dataProjects } from '../constants/data-projects'
import { buttonVariants } from '../ui/button'

const SectionProject = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const mediaMatches = useMediaQuery('(min-width: 768px)')
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])
  return (
    <section ref={targetRef} className="sm:container md:relative md:h-[300svh]">
      <div className="md:sticky md:inset-0 md:flex md:h-svh md:items-center md:overflow-hidden">
        <MotionDiv
          style={mediaMatches ? { x, y: '-40px' } : {}}
          className="flex flex-col gap-8 md:flex-row"
        >
          {dataProjects.map(
            ({ image, title, description, linkToGithub, linkToProject }) => (
              <div
                key={title}
                className="h-fit flex-shrink-0 space-y-5 rounded-xl border border-solid border-neutral-500 md:h-[460px] md:w-[450px]"
              >
                {/* Card */}
                <div className="relative m-5 h-52 overflow-hidden rounded-xl">
                  <Image
                    src={image}
                    alt={description}
                    fill
                    className="object-cover"
                    sizes="100vh"
                  />
                </div>
                <div className="flex h-fit flex-col justify-between gap-5 overflow-hidden px-5 pb-5 sm:h-52">
                  <div>
                    <h2 className="text-2xl">{title}</h2>
                    <p className="text-base">{description}</p>
                  </div>
                  <div className="flex gap-5">
                    <Link
                      target="_blank"
                      referrerPolicy="no-referrer"
                      href={linkToProject}
                      className={buttonVariants({
                        className: 'flex-grow uppercase'
                      })}
                    >
                      Projeto
                    </Link>
                    <Link
                      target="_blank"
                      referrerPolicy="no-referrer"
                      href={linkToGithub}
                      className={buttonVariants({ variant: 'secondary' })}
                    >
                      Código
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </MotionDiv>
      </div>
    </section>
  )
}

export default SectionProject
