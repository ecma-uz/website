import { type Metadata } from 'next'
// import { DM_Sans, Inter } from 'next/font/google'
import { SmoothScroll } from '@/components/SmoothScroll'

import '@/styles/tailwind.css'

import clsx from "clsx";
import {LanguageProvider} from "@/context/LanguageContext";

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })
//
// const dmSans = DM_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '700'],
//   display: 'swap',
//   variable: '--font-dm-sans',
// })

export const metadata: Metadata = {
  title: {
    template: '%s | Ecma Uzbekistan',
    default: 'Ecma Uzbekistan - JavaScript Communities in Uzbekistan',
  },
  description:
    'Ecma Uzbekistan represents and connects JavaScript communities across Uzbekistan, helping them collaborate, share knowledge, and grow together.',
  keywords: [
    'JavaScript',
    'Ecma',
    'Uzbekistan',
    'Coding',
    'Programming',
    'Web Development',
    'Community',
    'Node.js',
    'React.js',
    'ECMAScript'
  ],
  authors: [
    { name: 'Ecma Uzbekistan Committee' }
  ],
  creator: 'Ecma Uzbekistan',
  publisher: 'Ecma Uzbekistan',
  formatDetection: {
    email: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      }
    ],
    apple: {
      url: '/icons/apple-touch-icon.png',
      sizes: '180x180',
      type: 'image/png',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ecma.uz/',
    title: 'Ecma Uzbekistan - JavaScript Communities in Uzbekistan',
    description: 'Connecting JavaScript communities across Uzbekistan, sharing knowledge and growing together.',
    siteName: 'Ecma Uzbekistan',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Ecma Uzbekistan - JavaScript Communities',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecma Uzbekistan - JavaScript Communities in Uzbekistan',
    description: 'Connecting JavaScript communities across Uzbekistan, sharing knowledge and growing together.',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://ecma.uz'),
  manifest: '/manifest.json',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-white antialiased',
        // inter.variable,
        // dmSans.variable,
      )}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#6366F1" />
      </head>
      <body className="flex min-h-full theme-transition bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100">
        <LanguageProvider>
          <SmoothScroll />
          <div className="flex w-full flex-col">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  )
}