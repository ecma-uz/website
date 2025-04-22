import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn } from "@/components/FadeIn";
import {useLanguage} from "@/context/LanguageContext";
import {LanguageCode, translations} from "@/data/translations";


import rustamMamadaminovImage from "@/images/commities/rustam-mamadaminov.jpeg"
import diyorbekRustamjonovImage from "@/images/commities/diyorbek-rustamjonov.jpg"

const committeeMembers = [
    {
        id: 1,
        name: 'Rustam Mamadaminov',
        role: '`O\'zbek Ecma` rais / Yetakchi',
        image: { src: rustamMamadaminovImage },
        communities: ['JavaScript Uzbekistan'],
        url: 'https://github.com/rustam'
    },
    {
        id: 2,
        name: 'Diyorbek Rustamjonov',
        role: 'Committee Lead & Maintainer',
        image: { src: diyorbekRustamjonovImage },
        communities: ['UzJS'],
        url: 'https://github.com/diyorbekrustamjonov'
    }
]

export function Committee() {
    const { language } = useLanguage();
    const t = translations[language as LanguageCode].committee;

    return (
        <section id="committee" aria-label="Committee Members" className="py-20 sm:py-32 bg-blue-50">
            <Container>
                <h2 className="font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl">
                    {t.title}
                </h2>
                <p className="mt-4 font-display text-2xl tracking-tight text-blue-900">
                    {t.subtitle}
                </p>

                <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
                    {committeeMembers.map((member) => (
                        <li key={member.name}>
                            <a href={member.url}>
                                <FadeIn>
                                    <div className="group relative overflow-hidden rounded-3xl bg-blue-100">
                                        <Image
                                            alt=""
                                            {...member.image}
                                            className="h-96 w-full object-cover scale transition duration-500 motion-safe:group-hover:scale-105"
                                        />
                                        <div className="absolute inset-0 flex flex-col justify-end bg-linear-to-t from-blue-300 to-blue-500/0 to-30% p-6">
                                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                {member.name}
                                            </p>
                                            <p className="mt-2 text-sm text-white">
                                                {member.role}
                                            </p>
                                        </div>
                                    </div>
                                </FadeIn>
                            </a>
                        </li>
                    ))}
                </div>
            </Container>
        </section>
    )
}