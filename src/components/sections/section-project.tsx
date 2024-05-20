'use client'
import { useStoreHoveredCursor } from '@/hooks/stores/use-store-hovered-cursor'
import useMediaQuery from '@/hooks/use-media-query'
import { MotionDiv } from '@/lib/framer-motion-components'
import { useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import { dataProjects } from '../constants/data-projects'
import { buttonVariants } from '../ui/button'
import { GridBackground } from '../ui/grid-background'

const SectionProject = () => {
  const setIsHoveredCursor = useStoreHoveredCursor(
    (state) => state.setIsHoveredCursor
  )
  const targetRef = useRef<HTMLDivElement>(null)
  const mediaMatches = useMediaQuery('(min-width: 768px)')
  const { scrollYProgress } = useScroll({
    target: targetRef
  })

  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-95%'])
  return (
    <section
      id="projects"
      ref={targetRef}
      className="md:relative md:h-[300svh]"
    >
      <div className="md:sticky md:inset-0 md:flex md:h-svh md:items-center md:overflow-hidden">
        <GridBackground>
          <MotionDiv
            style={mediaMatches ? { x, y: '-40px' } : {}}
            className="flex flex-col gap-8 sm:container md:flex-row"
          >
            {dataProjects.map(
              ({ image, title, description, linkToGithub, linkToProject }) => (
                <div
                  key={title}
                  className="h-fit flex-shrink-0 space-y-5 rounded-xl border-none sm:border sm:border-solid sm:border-neutral-500 md:h-fit md:w-[450px]"
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
                    <div className="space-y-1">
                      <h2 className="text-gradient-title font-serif text-2xl xl:text-3xl">
                        {title}
                      </h2>
                      <p className="text-gradient relative font-medium">
                        {description}
                      </p>
                      {/* <p className="font-sans text-base"></p> */}
                    </div>
                    <div className="flex gap-5">
                      <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={linkToProject}
                        className={buttonVariants({
                          className: 'flex-grow uppercase'
                        })}
                        onMouseOver={() => {
                          setIsHoveredCursor(true)
                        }}
                        onMouseLeave={() => {
                          setIsHoveredCursor(false)
                        }}
                      >
                        Projeto
                      </Link>
                      <Link
                        target="_blank"
                        referrerPolicy="no-referrer"
                        href={linkToGithub}
                        className={buttonVariants({ variant: 'secondary' })}
                        onMouseOver={() => {
                          setIsHoveredCursor(true)
                        }}
                        onMouseLeave={() => {
                          setIsHoveredCursor(false)
                        }}
                      >
                        Código
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </MotionDiv>
        </GridBackground>
      </div>
    </section>
  )
}

export default SectionProject
