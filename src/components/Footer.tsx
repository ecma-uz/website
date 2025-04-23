'use client'

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'

export function Footer() {
  const { language } = useLanguage();
  const t = translations[language as LanguageCode];

  return (
    <footer className="bg-neutral-50 dark:bg-neutral-900">
      <Container>
        <div className="py-16">
          <Logo className="mx-auto h-16 w-auto text-neutral-900 dark:text-neutral-100 sm:h-20 lg:h-25" />
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a
                href="#communities"
                className="rounded-lg px-3 py-1 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 text-control-nowrap min-w-[100px] text-center transition-all duration-300"
              >
                {t.nav.communities}
              </a>
              <a
                href="#committee"
                className="rounded-lg px-3 py-1 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 text-control-nowrap min-w-[100px] text-center transition-all duration-300"
              >
                {t.nav.committee}
              </a>
              <a
                href="#about"
                className="rounded-lg px-3 py-1 text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800 text-control-nowrap min-w-[100px] text-center transition-all duration-300"
              >
                {t.nav.about}
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-none items-center justify-center border-t border-neutral-200 dark:border-neutral-800 py-12">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 text-control-normal">
            &copy; {new Date().getFullYear()} Ecma Uzbekistan. {t.footer.allRightsReserved}.
          </p>
        </div>
      </Container>
    </footer>
  )
}
