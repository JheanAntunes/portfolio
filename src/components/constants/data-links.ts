export type DataLink = {
  href: string
  label: string
  icon?: JSX.Element
}

export const dataLinks: DataLink[] = [
  { href: '#', label: 'Projetos' },
  { href: '#', label: 'Trajetória' }
]

export const dataLinksFloatingNavbar: DataLink[] = [
  { href: '#', label: 'Eu' },
  ...dataLinks
]
