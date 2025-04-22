import { type Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'

import '@/styles/tailwind.css'

import clsx from "clsx";
import {LanguageProvider} from "@/context/LanguageContext";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-dm-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Ecma Uzbekistan',
    default: 'Ecma Uzbekistan - JavaScript Communities in Uzbekistan',
  },
  description:
      'Ecma Uzbekistan represents and connects JavaScript communities across Uzbekistan, helping them collaborate, share knowledge, and grow together.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html
          lang="en"
          className={clsx(
              'h-full bg-white antialiased',
              inter.variable,
              dmSans.variable,
          )}
      >
      <body className="flex min-h-full">
        <LanguageProvider>
            <div className="flex w-full flex-col">{children}</div>
        </LanguageProvider>
      </body>
      </html>
  )
}