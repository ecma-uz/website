"use client"

import { Container } from '@/components/Container'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'
import { FadeIn } from '@/components/FadeIn'
import { aboutData } from '@/data/about'

export function About() {
    const { language } = useLanguage();
    const t = translations[language as LanguageCode].about;
    const currentLanguage = language as LanguageCode;
    const { features, mission } = aboutData;

    return (
        <section id="about" aria-label="About" className="py-20 sm:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl font-medium tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-5xl min-h-title flex items-center justify-center text-control-tight">
                            {t.title}
                        </h2>
                        <p className="mt-4 font-display text-xl sm:text-2xl tracking-tight text-neutral-700 dark:text-neutral-300 min-h-subtitle flex items-center justify-center text-control-normal">
                            {t.subtitle}
                        </p>
                    </FadeIn>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature, index) => (
                        <FadeIn key={feature.id} delay={0.1 * index}>
                            <div className="group relative h-full rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 hover:shadow-xl hover:shadow-neutral-200/70 dark:hover:shadow-neutral-900/70 transition-all duration-300 min-h-[16rem] flex flex-col">
                                <div className="absolute -top-4 left-8 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                                    <div className="h-full w-full rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                                        <feature.icon className="h-full w-full" />
                                    </div>
                                </div>
                                <h3 className="mt-8 text-lg font-semibold text-neutral-900 dark:text-neutral-100 min-h-[3rem] flex items-center text-control-tight">
                                    {feature.title[currentLanguage]}
                                </h3>
                                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed text-control-normal flex-grow">
                                    {feature.description[currentLanguage]}
                                </p>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300"></div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5}>
                    <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 p-8 sm:p-12">
                        <div className="mx-auto max-w-2xl text-center">
                            <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-neutral-100 min-h-[3rem] flex items-center justify-center text-control-tight">
                                {mission.title[currentLanguage]}
                            </h3>
                            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed min-h-[4rem] flex items-center justify-center text-control-normal">
                                {mission.description[currentLanguage]}
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                                <a
                                    href="#communities"
                                    className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white hover:from-primary-dark hover:to-accent-dark focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 min-h-button text-control-nowrap min-w-[200px]"
                                >
                                    {mission.exploreCta[currentLanguage]}
                                </a>
                                <a
                                    href="#committee"
                                    className="inline-flex items-center justify-center rounded-2xl bg-white dark:bg-neutral-800 px-8 py-4 text-base font-semibold text-primary hover:bg-neutral-100 dark:hover:bg-neutral-700 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 min-h-button text-control-nowrap min-w-[200px]"
                                >
                                    {mission.meetTeamCta[currentLanguage]}
                                </a>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </Container>
        </section>
    )
} 