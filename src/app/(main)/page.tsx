"use client"

import { Hero } from '@/components/Hero'
import { Communities } from '@/components/Communities'
import { Committee } from '@/components/Committee'
import { About } from '@/components/About'
import { Events } from '@/components/Events'
import { useLanguage } from '@/context/LanguageContext'
import { translations, LanguageCode } from '@/data/translations'

export default function Home() {
    const { language } = useLanguage();
    const t = translations[language as LanguageCode];

    return (
        <>
            <Hero />
            <Communities />
            <Committee />
            <About />
            <Events />
        </>
    )
}