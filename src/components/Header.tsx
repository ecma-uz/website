"use client"

import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { LanguageSwitcher } from '@/components/LanguageSwitcher'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export function Header() {
  const { language } = useLanguage();
  const t = translations[language as LanguageCode];
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <Container className="flex flex-wrap items-center justify-between py-4 lg:py-6">
          <div className="flex items-center">
            <Logo className="h-8 w-auto text-neutral-900 dark:text-neutral-100 sm:h-10 lg:h-14 transition-transform duration-300 hover:scale-105" />
          </div>
          <div className="hidden lg:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              <Link 
                href="#communities" 
                className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 whitespace-nowrap min-w-[100px] text-center truncate"
              >
                {t.nav.communities}
              </Link>
              <Link 
                href="#committee" 
                className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 whitespace-nowrap min-w-[100px] text-center truncate"
              >
                {t.nav.committee}
              </Link>
              <Link 
                href="#about" 
                className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 whitespace-nowrap min-w-[100px] text-center truncate"
              >
                {t.nav.about}
              </Link>
            </nav>
            <div className="ml-8 flex items-center space-x-4">
              <LanguageSwitcher />
            </div>
          </div>
          <div className="lg:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button 
              className="p-2 text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </Container>

        {/* Мобильное меню */}
        <div 
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? 'max-h-48' : 'max-h-0'
          } ${
            isScrolled || isMobileMenuOpen ? 'bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
          }`}
        >
          <Container className="py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                href="#communities" 
                className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 whitespace-nowrap truncate"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.communities}
              </Link>
              <Link 
                href="#committee" 
                className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 whitespace-nowrap truncate"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.committee}
              </Link>
              <Link 
                href="#about" 
                className="text-base font-medium text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary transition-colors duration-300 whitespace-nowrap truncate"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.nav.about}
              </Link>
            </nav>
          </Container>
        </div>
      </header>
  )
}