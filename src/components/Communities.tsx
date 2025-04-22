"use client"

import Image from 'next/image'
import { Container } from '@/components/Container'
import { DiamondIcon } from '@/components/DiamondIcon'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'

import nodeJsUzImage from '@/images/communities/node-js-uz.jpg'
import reactJsUzImage from '@/images/communities/react-js-uz.jpg'

const communities = [
    {
        name: 'Node.js Uzbekistan',
        image: nodeJsUzImage,
        description: 'Uzbekistan Node.js Community',
        verified: true,
        url: 'https://t.me/nodejs_uz'
    },
    {
        name: 'ReactJS Uzbekistan',
        image: reactJsUzImage,
        description: 'Uzbekistan ReactJS Community',
        verified: true,
        url: 'https://t.me/react_uz'
    },
]

export function Communities() {
    const { language } = useLanguage();
    const t = translations[language as LanguageCode].communities;

    return (
        <section id="communities" aria-label="Communities" className="py-20 sm:py-32">
            <Container>
                <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                    {t.title}
                </h2>
                <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
                    {t.subtitle}
                </p>

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
                    {communities.map((community) => (
                        <div key={community.name} className="group relative flex flex-col items-start">
                            <div className="relative h-16 w-16 flex items-center justify-center rounded-full bg-white shadow-md shadow-blue-800/5 dark:bg-gray-600/20">
                                {community.image ? (
                                    <Image
                                        src={community.image}
                                        alt={community.name}
                                        width={56}
                                        height={48}
                                        className="rounded-full object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="text-blue-600 text-xl font-bold">{community.name.charAt(0)}</div>
                                )}
                            </div>
                            <h3 className="mt-6 text-xl font-semibold text-blue-900 flex items-center">
                                {community.name}
                                {community.verified && (
                                    <span className="ml-2 flex items-center text-emerald-600 dark:text-emerald-400">
                                        <DiamondIcon className="h-4 w-4 fill-current" />
                                        <span className="ml-1 text-sm">{t.verified}</span>
                                    </span>
                                                )}
                            </h3>
                            <p className="mt-2 text-base text-slate-600">{community.description}</p>
                            <a
                                href={community.url}
                                className="mt-4 text-blue-600 hover:text-blue-800 dark:hover:text-blue-300"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {t.joinButton}
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}