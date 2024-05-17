import { Roboto, Roboto_Serif } from 'next/font/google'

export const fontIbmSerif = Roboto_Serif({
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-serif'
})
export const fontRoboto = Roboto({
  weight: ['400', '500'],
  display: 'swap',
  style: 'normal',
  subsets: ['latin'],
  variable: '--font-sans'
})
