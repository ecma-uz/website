import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'
import { FadeIn } from '@/components/FadeIn'
import { hero } from '@/data/hero'

export function Hero() {
  const { language } = useLanguage();
  const t = translations[language as LanguageCode].hero;
  const currentLanguage = language as LanguageCode;

  return (
      <div className="relative py-20 sm:pt-36 sm:pb-24">
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <FadeIn>
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent opacity-20"></div>
                <div className="absolute -right-4 -top-4 h-8 w-8 rounded-full bg-gradient-to-br from-accent to-primary opacity-20"></div>
                <h1 className="font-display text-5xl font-bold tracking-tighter text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-7xl min-h-[4rem] sm:min-h-[5rem] flex items-center justify-center text-neutral-700 dark:text-neutral-300">
                  {t.title}
                </h1>
              </div>
              <div className="mt-6 space-y-6 font-display text-xl sm:text-2xl tracking-tight text-neutral-700 dark:text-neutral-300">
                <p className="leading-relaxed text-control-normal min-h-[3rem]">{t.subtitle1}</p>
                <p className="leading-relaxed text-control-normal min-h-[3rem]">{t.subtitle2}</p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Button href="#communities" className="mt-10 w-full sm:hidden text-control-nowrap min-h-button">
                {t.exploreCta}
              </Button>
            </FadeIn>

            <FadeIn delay={0.4}>
              <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-16 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                {[
                  [t.stats.communities, hero.stats.communities],
                  [t.stats.members, hero.stats.members],
                  [t.stats.location, hero.stats.location[currentLanguage]],
                  [t.stats.founded, hero.stats.founded],
                ].map(([name, value]) => (
                    <div key={name as string} className="relative group">
                      <dt className="font-mono text-sm text-primary text-control-nowrap min-h-[1.5rem]">{name}</dt>
                      <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 text-control-nowrap">
                        {value}
                      </dd>
                      <div className="absolute -bottom-3 left-0 h-1 w-12 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500" 
                           style={{ transitionDelay: '0.05s', transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)' }}></div>
                    </div>
                ))}
              </dl>
            </FadeIn>
          </div>
        </Container>

        {/* Decorative element connecting Hero to Communities */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-32 bg-gradient-to-b from-primary to-accent"></div>
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
        </div>
      </div>
  )
}