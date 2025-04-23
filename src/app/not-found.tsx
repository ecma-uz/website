'use client'

import { Container } from '@/components/Container'
import { Layout } from '@/components/Layout'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'
import { FadeIn } from '@/components/FadeIn'
import Link from 'next/link'

export default function NotFound() {
  const { language } = useLanguage();
  const t = translations[language as LanguageCode].notFound;

  return (
    <Layout showFooter={true}>
      <div className="relative flex min-h-[60vh] items-center py-20 sm:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <Container className="relative flex w-full flex-col items-center">
          <FadeIn>
            <div className="w-full max-w-3xl mx-auto text-center">
              <p className="font-mono text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-7xl">
                {t.errorCode}
              </p>
              <h1 className="mt-4 font-display text-4xl font-medium tracking-tighter text-neutral-900 dark:text-neutral-100 sm:text-5xl">
                {t.title}
              </h1>
              <p className="mt-6 text-xl text-neutral-700 dark:text-neutral-300">
                {t.message}
              </p>
              <p className="mt-2 text-lg font-mono text-accent dark:text-accent/90 italic">
                {t.jsJoke}
              </p>
              
              <div className="mt-8 bg-neutral-900 dark:bg-black rounded-xl p-4 font-mono text-sm text-white overflow-x-auto max-w-md mx-auto text-left shadow-xl">
                <pre className="whitespace-pre-wrap"><code>{t.codeSnippet}</code></pre>
              </div>
              
              <div className="mt-10">
                <Link 
                  href="/" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:from-accent hover:to-primary transition-all duration-500 group shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110"
                >
                  {t.buttonText}
                  <svg className="ml-2 h-5 w-5 transition-transform duration-500 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </FadeIn>
          
          <div className="absolute -z-10 transform-gpu blur-3xl opacity-20" aria-hidden="true">
            <div
              className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-accent opacity-30"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </Container>
      </div>
    </Layout>
  )
}
