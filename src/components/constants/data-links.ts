export type DataLink = {
  href: string
  label: string
  icon?: JSX.Element
}

export const dataLinks: DataLink[] = [
  { href: '#projects', label: 'Projetos' },
  { href: '#trajectory', label: 'Trajetória' }
]

export const dataLinksFloatingNavbar: DataLink[] = [
  { href: '#im', label: 'Eu' },
  ...dataLinks
]
