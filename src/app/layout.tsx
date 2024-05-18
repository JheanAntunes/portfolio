import { fontIbmSerif, fontRoboto } from '@/assets/font'
import { dataLinksFloatingNavbar } from '@/components/constants/data-links'
import CustomCursor from '@/components/custom-cursor'
import Header from '@/components/header'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { FloatingNav } from '@/components/ui/floating-navbar'
import SmoothScrolling from '@/lib/SmoothScrolling'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'
import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Jhean Antunes Lopes',
  description:
    'Olá, pessoal! Eu sou o Jhean, um entusiasta de computadores que se interessou pela área de programação. Apresento a vocês o meu portfólio simples, mas criado com muito carinho.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={cn('', fontIbmSerif.variable)}
    >
      <body className={cn('', fontRoboto.variable)}>
        <SmoothScrolling>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <FloatingNav navItems={dataLinksFloatingNavbar} />
            <CustomCursor />
          </ThemeProvider>
        </SmoothScrolling>
      </body>
    </html>
  )
}
