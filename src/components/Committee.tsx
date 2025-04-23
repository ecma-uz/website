import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from "@/components/FadeIn";
import {useLanguage} from "@/context/LanguageContext";
import {LanguageCode, translations} from "@/data/translations";
import { committeeMembers } from '@/data/committee-members';


export function Committee() {
    const { language } = useLanguage();
    const t = translations[language as LanguageCode].committee;
    const currentLanguage = language as LanguageCode;

    return (
        <section id="committee" aria-label="Committee Members" className="py-20 sm:py-32 bg-gradient-to-b from-white to-neutral-50 dark:from-neutral-800 dark:to-neutral-900">
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

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
                    {committeeMembers.map((member) => (
                        <FadeIn key={member.id}>
                            <a href={member.url} target="_blank" rel="noopener noreferrer" className="group block h-full">
                                <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 p-0.5 shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:from-primary/30 group-hover:to-accent/30 h-full">
                                    <div className="relative overflow-hidden rounded-[22px] bg-white dark:bg-neutral-800 h-full">
                                        <div className="relative aspect-[3/4] overflow-hidden">
                                            <Image
                                                alt={member.name[currentLanguage]}
                                                {...member.image}
                                                className="h-full w-full object-cover transition duration-700 ease-in-out motion-safe:group-hover:scale-110"
                                                priority
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
                                        </div>
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 transition-transform duration-300 ease-in-out">
                                            <div className="transform transition-all duration-300 ease-in-out group-hover:translate-y-[-8px]">
                                                <h3 className="font-display text-2xl font-bold tracking-wide text-white">
                                                    {member.name[currentLanguage]}
                                                </h3>
                                                <p className="mt-2 text-sm font-medium text-neutral-100">
                                                    {member.roles[currentLanguage].title}
                                                </p>
                                                <div className="mt-4 flex flex-wrap gap-2">
                                                    {member.roles[currentLanguage].communities.map((community: string) => (
                                                        <span
                                                            key={community}
                                                            className="inline-flex items-center rounded-full bg-primary/30 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white shadow-sm transition-all duration-300 ease-in-out group-hover:bg-primary/40"
                                                        >
                                                            {community}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="mt-5 pt-3 border-t border-white/20">
                                                    <span className="text-xs text-neutral-200 inline-flex items-center">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                        </svg>
                                                        {t.githubProfile}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </FadeIn>
                    ))}
                </div>
            </Container>
        </section>
    )
}