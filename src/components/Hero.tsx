import { BackgroundImage } from '@/components/BackgroundImage'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language as LanguageCode].hero;

  return (
      <div className="relative py-20 sm:pt-36 sm:pb-24">
        <BackgroundImage className="-top-36 -bottom-14" />
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <h1 className="font-display text-5xl font-bold tracking-tighter text-blue-600 sm:text-7xl">
              <span className="sr-only">Ecma Uzbekistan - </span>
              {t.title}
            </h1>
            <div className="mt-6 space-y-6 font-display text-2xl tracking-tight text-blue-900">
              <p>{t.subtitle1}</p>
              <p>{t.subtitle2}</p>
            </div>
            <Button href="#communities" className="mt-10 w-full sm:hidden">
              {t.exploreCta}
            </Button>
            <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
              {[
                [t.stats.communities, '4+'],
                [t.stats.members, '2000+'],
                [t.stats.location, 'Uzbekistan'],
                [t.stats.founded, '2025'],
              ].map(([name, value]) => (
                  <div key={name as string}>
                    <dt className="font-mono text-sm text-blue-600">{name}</dt>
                    <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                      {value}
                    </dd>
                  </div>
              ))}
            </dl>
          </div>
        </Container>
      </div>
  )
}