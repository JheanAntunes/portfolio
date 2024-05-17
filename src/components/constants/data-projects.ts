import ImgEcommerce from '@/assets/images/image-ecommerce.png'
import ImgStorybook from '@/assets/images/image-storybook.png'
import ImgTanstackQuery from '@/assets/images/image-tanstack-query.png'
import ImgTipografia from '@/assets/images/image-tipografia.png'
import ImgZustand from '@/assets/images/image-zustand.png'
import { StaticImageData } from 'next/image'
export type DataProject = {
  image: StaticImageData
  title: string
  description: string
  linkToProject: string
  linkToGithub: string
}

export const dataProjects: DataProject[] = [
  {
    title: 'E-commerce',
    description:
      'O projeto combina funcionalidades essenciais de e-commerce com uma interface amigável, visando aumentar a satisfação do cliente e impulsionar as vendas.',
    image: ImgEcommerce,
    linkToProject:
      'https://ecommerce-7bv7u0yc3-jheanantunes-projects.vercel.app/',
    linkToGithub: 'https://github.com/JheanAntunes/ecommerce'
  },
  {
    title: 'Storybook Shadcn-ui',
    description:
      'Este projeto foi uma oportunidade de mergulhar profundamente na biblioteca Storybook, explorando e aplicando o vasto repositório de componentes do Shadcn-ui.',
    image: ImgStorybook,
    linkToProject:
      'https://65711ecf32bae758b457ae34-uryqbzvojc.chromatic.com/?path=/docs/shadcn-button--docs',
    linkToGithub: 'https://github.com/JheanAntunes/storybook-shadcn'
  },
  {
    title: 'Zustand: Refatoração',
    description:
      'Projeto Zustand, enfrentei o desafio de refatorar o componente "mails" do Shadcn-ui, substituindo a biblioteca Jotai pelo Zustand.',
    image: ImgZustand,
    linkToProject: 'e-mails-pearl.vercel.app',
    linkToGithub: 'https://github.com/JheanAntunes/zustand'
  },
  {
    title: 'Projeto Query',
    description:
      'Este projeto representa uma jornada de aprofundamento nos fundamentos teóricos e práticos da biblioteca tanstack/query',
    image: ImgTanstackQuery,
    linkToProject: 'queryposts.vercel.app',
    linkToGithub: 'https://github.com/JheanAntunes/react-query'
  },
  {
    title: 'Projeto Tipografia',
    description:
      'Inspirado pela arte e ciência da tipografia, este projeto é um reflexo da minha imersão em um blog especializado no assunto. Dediquei-me a explorar e praticar uma variedade de estilos tipográficos...',
    image: ImgTipografia,
    linkToProject: 'https://tipografia.vercel.app/',
    linkToGithub: 'https://github.com/JheanAntunes/tipografia'
  }
]
