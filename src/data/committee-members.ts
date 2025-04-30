import { StaticImageData } from 'next/image';

import { LanguageCode } from './translations';

import rustamMamadaminovImage from "@/images/committee-members/rustam-mamadaminov.jpeg"
import diyorbekRustamjonovImage from "@/images/committee-members/diyorbek-rustamjonov.jpg"
import husniddinQurbonboyevImage from "@/images/committee-members/husniddin-qurbonboyev.jpeg"
import alisherOrtiqovImage from "@/images/committee-members/alisher-ortiqov.jpg"
import yusufAbdurakhimovImage from "@/images/committee-members/yusuf-abdurakhimov.jpg"

export type CommitteeRole = {
    title: string;
    communities: string[];
};

export type CommitteeMember = {
    id: string;
    name: Record<LanguageCode, string>;
    roles: Record<LanguageCode, CommitteeRole>;
    image: { src: StaticImageData };
    url: string;
    github?: string;
    twitter?: string;
    linkedin?: string;
}

export const committeeMembers: CommitteeMember[] = [
    {
        id: 'rustam-mamadaminov',
        name: {
            en: 'Rustam Mamadaminov',
            uz: 'Rustam Mamadaminov',
            ru: 'Рустам Мамадаминов'
        },
        roles: {
            en: {
                title: `'Uzbek ECMA' Community Lead / Organizer`,
                communities: [],
            },
            uz: {
                title: `'O'zbek ECMA' Rais / Yetakchi`,
                communities: [],
            },
            ru: {
                title: `'Узбек ECMA' Руководитель / Организатор`,
                communities: [],
            }
        },
        image: { src: rustamMamadaminovImage },
        url: 'https://github.com/rustamwin',
        github: 'rustamwin'
    },
    {
        id: 'diyorbek-rustamjonov',
        name: {
            en: 'Diyorbek Rustamjonov',
            uz: 'Diyorbek Rustamjonov',
            ru: 'Диёрбек Рустамжонов'
        },
        roles: {
            en: {
                title: `'Uzbek ECMA' Community Lead / Organizer`,
                communities: [],
            },
            uz: {
                title: `'O'zbek ECMA' Rais / Yetakchi`,
                communities: [],
            },
            ru: {
                title: `'Узбек ECMA' Руководитель / Организатор`,
                communities: [],
            }
        },
        image: { src: diyorbekRustamjonovImage },
        url: 'https://github.com/diyorbekrustamjonov',
        github: 'diyorbekrustamjonov'
    },
    {
        id: 'husniddin-qurbonboyev',
        name: {
            en: 'Husniddin Qurbonboyev',
            uz: 'Husniddin Qurbonboyev',
            ru: 'Хусниддин Курбонбоев'
        },
        roles: {
            en: {
                title: `'Uzbek ECMA' Moderator`,
                communities: [],
            },
            uz: {
                title: `'O'zbek ECMA' Moderator`,
                communities: [],
            },
            ru: {
                title: `'Узбек ECMA' Модератор`,
                communities: [],
            }
        },
        image: { src: husniddinQurbonboyevImage },
        url: 'https://github.com/husniddin96',
        github: 'husniddin96'
    },
    {
        id: 'alisher-ortiqov',
        name: {
            en: 'Alisher Ortiqov',
            uz: 'Alisher Ortiqov',
            ru: 'Алишер Ортиков'
        },
        roles: {
            en: {
                title: `'Nest.js Uzbekistan' Community Lead / Organizer`,
                communities: [],
            },
            uz: {
                title: `'Nest.js Uzbekistan' Yetakchi`,
                communities: [],
            },
            ru: {
                title: `'Nest.js Узбекиста' Руководитель / Организатор`,
                communities: [],
            }
        },
        image: { src: alisherOrtiqovImage },
        url: 'https://github.com/mcpeblocker',
        github: 'mcpeblocker'
    },
    {
        id: 'yusuf-abdurakhimov',
        name: {
            en: 'Mukhammadyusuf Abdurakhimov',
            uz: 'Mukhammadyusuf Abdurakhimov',
            ru: 'Muхаммадусуф Абдурахимов'
        },
        roles: {
            en: {
                title: `'O'zbek ECMA' Rais / Yetakchi`,
                communities: [],
            },
            uz: {
                title: `'O'zbek ECMA' Rais / Yetakchi`,
                communities: [],
            },
            ru: {
                title: `'Узбек ECMA' Руководитель / Организатор`,
                communities: [],
            }
        },
        image: { src: yusufAbdurakhimovImage },
        url: 'https://github.com/uwussimo',
        github: 'uwussimo'
    }
]
