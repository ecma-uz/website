"use client"

import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'
import { communities, CommunityType } from '@/data/communities'
import { FadeIn } from '@/components/FadeIn'

export function Communities() {
    const { language } = useLanguage();
    const t = translations[language as LanguageCode].communities;

    return (
        <section id="communities" aria-label="Communities" className="relative py-20 sm:py-32 bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl font-medium tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-5xl text-neutral-700 dark:text-neutral-300">
                            {t.title}
                        </h2>
                        <p className="mt-4 font-display text-2xl tracking-tight text-neutral-700 dark:text-neutral-300">
                            {t.subtitle}
                        </p>
                    </FadeIn>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {communities.map((community) => (
                        <FadeIn key={community.id}>
                            <div className="group relative flex flex-col h-full items-start p-8 rounded-3xl bg-white dark:bg-neutral-800/50 shadow-xl shadow-neutral-200/50 dark:shadow-neutral-900/50 hover:shadow-2xl hover:shadow-neutral-200/70 dark:hover:shadow-neutral-900/70 transition-all duration-500 border-2 border-neutral-200/50 dark:border-neutral-700/50 hover:border-primary/30 dark:hover:border-primary/30 hover:-translate-y-1 overflow-hidden">
                                {community.isNew && (
                                    <div className="absolute top-[22px] -right-[40px] bg-gradient-to-r from-accent to-primary text-white px-12 py-1.5 text-sm font-semibold shadow-lg transform rotate-45 select-none">
                                        NEW
                                    </div>
                                )}
                                <div className="relative h-24 w-24 flex items-center justify-center rounded-2xl bg-gradient-to-br from-neutral-50 to-white dark:from-neutral-800 dark:to-neutral-700 shadow-md group-hover:shadow-lg transition-all duration-500">
                                    <div className="flex items-center justify-center p-4">
                                        <community.icon className="h-full w-full group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                </div>
                                <h3 className="mt-6 text-xl font-semibold text-neutral-900 dark:text-neutral-100 flex items-center">
                                    {community.name[language as LanguageCode]}
                                    {community.verified && (
                                        <span className="ml-2 flex items-center text-success">
                                            <DiamondIcon className="h-4 w-4 fill-current" />
                                            <span className="ml-1 text-sm">{t.verified}</span>
                                        </span>
                                    )}
                                </h3>
                                <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed flex-grow">
                                    {community.description[language as LanguageCode]}
                                </p>
                                <a
                                    href={community.url}
                                    className="mt-6 inline-flex items-center justify-center w-full px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-medium hover:from-accent hover:to-primary transition-all duration-500 group/link shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:brightness-110"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {t.joinButton}
                                    <svg className="ml-2 h-5 w-5 transition-transform duration-500 group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </a>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    )
}