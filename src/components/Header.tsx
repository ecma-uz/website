"use client"

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'
import Link from 'next/link'

export function Header() {
  const { language } = useLanguage();
  const t = translations[language as LanguageCode];

  return (
      <header className="relative z-50 flex-none lg:pt-11">
        <Container className="flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
          <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
            <Logo className="h-12 w-auto text-slate-900" />
          </div>
          <div className="order-first -mx-4 flex flex-auto basis-full overflow-x-auto border-b border-blue-600/10 py-4 font-mono text-sm whitespace-nowrap text-blue-600 dark:text-blue-400 sm:-mx-6 lg:order-none lg:mx-0 lg:basis-auto lg:border-0 lg:py-0">
            <div className="mx-auto flex items-center gap-4 px-4">
              <nav className="flex space-x-8">
                <Link href="#communities" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  {t.nav.communities}
                </Link>
                <Link href="#committee" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  {t.nav.committee}
                </Link>
                <Link href="#about" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
                  {t.nav.about}
                </Link>
              </nav>
            </div>
          </div>
          <div className="hidden sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end gap-4">
            <LanguageSwitcher />
          </div>
        </Container>
      </header>
  )
}