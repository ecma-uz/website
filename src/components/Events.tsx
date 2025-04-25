"use client"

import { Container } from '@/components/Container'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'
import { events } from '@/data/events'
import { FadeIn } from '@/components/FadeIn'
import { CalendarIcon, LocationIcon, ClockIcon, ArrowRightIcon } from '@/components/Icons'

export function Events() {
    const { language } = useLanguage();
    const t = translations[language as LanguageCode].events;

    return (
        <section id="events" aria-label="Events" className="py-20 sm:py-32 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
            <Container>
                <div className="mx-auto max-w-2xl text-center">
                    <FadeIn>
                        <h2 className="font-display text-4xl font-medium tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent sm:text-5xl">
                            {t.title}
                        </h2>
                        <p className="mt-4 font-display text-2xl tracking-tight text-neutral-700 dark:text-neutral-300">
                            {t.subtitle}
                        </p>
                    </FadeIn>
                </div>

                <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {events.map((event, index) => (
                        <FadeIn key={event.id} delay={0.1 * index}>
                            <div className="group relative h-full rounded-2xl bg-white dark:bg-neutral-800 p-8 shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50 hover:shadow-xl hover:shadow-neutral-200/70 dark:hover:shadow-neutral-900/70 transition-all duration-300">
                                <div className="absolute -top-4 left-8 h-12 w-12 rounded-full bg-gradient-to-br from-primary to-accent p-0.5">
                                    <div className="h-full w-full rounded-full bg-white dark:bg-neutral-800 flex items-center justify-center text-primary smooth-scale-hover">
                                        <CalendarIcon className="h-6 w-6" />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="flex items-center gap-2">
                                        <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                                            {event.type[language as LanguageCode]}
                                        </span>
                                        {event.isComingSoon && (
                                            <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-sm font-medium text-accent">
                                                {t.comingSoon}
                                            </span>
                                        )}
                                    </div>
                                    <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                                        {event.title[language as LanguageCode]}
                                    </h3>
                                    <div className="mt-4 space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                                        {!event.isComingSoon && (
                                            <p className="flex items-center">
                                                <CalendarIcon className="mr-2 h-4 w-4" />
                                                {event.date[language as LanguageCode]} at {event.time}
                                            </p>
                                        )}
                                        <p className="flex items-center">
                                            <LocationIcon className="mr-2 h-4 w-4" />
                                            {event.location[language as LanguageCode]}
                                        </p>
                                        {event.isComingSoon && (
                                            <p className="flex items-center text-accent">
                                                <ClockIcon className="mr-2 h-4 w-4" />
                                                {t.registrationOpens} {event.registrationOpens[language as LanguageCode]}
                                            </p>
                                        )}
                                    </div>
                                    <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {event.description[language as LanguageCode]}
                                    </p>
                                    {event.isComingSoon ? (
                                        <button
                                            disabled
                                            className="mt-6 inline-flex items-center text-neutral-400 cursor-not-allowed"
                                        >
                                            {t.registrationComingSoon}
                                            <ClockIcon className="ml-2 h-4 w-4" />
                                        </button>
                                    ) : (
                                        <a
                                            href={event.url}
                                            className="mt-6 inline-flex items-center text-primary hover:text-accent transition-colors duration-300 group/link"
                                        >
                                            {t.registerNow}
                                            <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                                        </a>
                                    )}
                                </div>
                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-500 transition-delay-100"></div>
                            </div>
                        </FadeIn>
                    ))}
                </div>

                <FadeIn delay={0.5}>
                    <div className="mt-16 text-center">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-primary to-accent px-8 py-4 text-base font-semibold text-white hover:from-primary-dark hover:to-accent-dark focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300"
                        >
                            {t.viewAllEvents}
                        </a>
                    </div>
                </FadeIn>
            </Container>
        </section>
    )
} 