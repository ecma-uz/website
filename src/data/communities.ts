import { StaticImageData } from 'next/image';
import { LanguageCode } from './translations';

import NodeJsImage from '@/images/communities/ecma-node-js.svg';
import ReactJsImage from '@/images/communities/ecma-react-js.svg';
import NestJsImage from '@/images/communities/ecma-nest-js.svg';
import NuxtJsImage from '@/images/communities/ecma-nuxt-js.svg';
import NextJsImage from '@/images/communities/ecma-next-js.svg';

export type CommunityType = {
    id: string;
    image: { src: StaticImageData };
    verified: boolean;
    isNew: boolean;
    url: string;
    bgGradient: string;
    borderColor: string;
    hoverBorderColor: string;
    name: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
};

export const communities: CommunityType[] = [
    {
        id: 'nodejs_uz',
        image: { src: NodeJsImage },
        verified: true,
        isNew: false,
        url: 'https://t.me/nodejs_uz',
        bgGradient: 'from-[#00FF88]/5 via-[#00FF88]/10 to-[#00CC6A]/5',
        borderColor: 'border-[#00FF88]/30',
        hoverBorderColor: 'hover:border-[#00FF88]/50',
        name: {
            en: 'Node.js Uzbekistan',
            uz: 'Node.js Uzbekistan',
            ru: 'Node.js Узбекистан'
        },
        description: {
            en: 'Uzbekistan Node.js Community',
            uz: 'O\'zbekiston Node.js hamjamiyati',
            ru: 'Сообщество Node.js Узбекистана'
        }
    },
    {
        id: 'react_uz',
        image: { src: ReactJsImage },
        verified: true,
        isNew: false,
        url: 'https://t.me/react_uz',
        bgGradient: 'from-[#00FF88]/5 via-[#00FF88]/10 to-[#00CC6A]/5',
        borderColor: 'border-[#00FF88]/30',
        hoverBorderColor: 'hover:border-[#00FF88]/50',
        name: {
            en: 'React.js Uzbekistan',
            uz: 'React.js Uzbekistan',
            ru: 'React.js Узбекистан'
        },
        description: {
            en: 'Uzbekistan ReactJS Community',
            uz: 'O\'zbekiston ReactJS hamjamiyati',
            ru: 'Сообщество ReactJS Узбекистана'
        }
    },
    {
        id: 'nestjs_uz',
        image: { src: NestJsImage },
        verified: true,
        isNew: true,
        url: 'https://t.me/nestjs_uz',
        bgGradient: 'from-[#00FF88]/5 via-[#00FF88]/10 to-[#00CC6A]/5',
        borderColor: 'border-[#00FF88]/30',
        hoverBorderColor: 'hover:border-[#00FF88]/50',
        name: {
            en: 'Nest.js Uzbekistan',
            uz: 'Nest.js Uzbekistan',
            ru: 'Nest.js Узбекистан'
        },
        description: {
            en: 'Uzbekistan NestJS Community',
            uz: 'O\'zbekiston NestJS hamjamiyati',
            ru: 'Сообщество NestJS Узбекистана'
        }
    },
    {
        id: 'nuxtjsuzc',
        image: { src: NuxtJsImage },
        verified: true,
        isNew: true,
        url: 'https://t.me/nuxtjsuzc',
        bgGradient: 'from-[#00FF88]/5 via-[#00FF88]/10 to-[#00CC6A]/5',
        borderColor: 'border-[#00FF88]/30',
        hoverBorderColor: 'hover:border-[#00FF88]/50',
        name: {
            en: 'Nuxt.js Uzbekistan',
            uz: 'Nuxt.js Uzbekistan',
            ru: 'Nuxt.js Узбекистан'
        },
        description: {
            en: 'Uzbekistan Nuxt.js Community',
            uz: 'O\'zbekiston Nuxt.js hamjamiyati',
            ru: 'Сообщество Nuxt.js Узбекистана'
        }
    },
    {
        id: 'nextjs_uzbekistan',
        image: { src: NextJsImage },
        verified: true,
        isNew: true,
        url: 'https://t.me/nextjs_uzbekistan',
        bgGradient: 'from-[#00FF88]/5 via-[#00FF88]/10 to-[#00CC6A]/5',
        borderColor: 'border-[#00FF88]/30',
        hoverBorderColor: 'hover:border-[#00FF88]/50',
        name: {
            en: 'Next.js Uzbekistan',
            uz: 'Next.js Uzbekistan',
            ru: 'Next.js Узбекистан'
        },
        description: {
            en: 'Uzbekistan Nextjs Community',
            uz: 'O\'zbekiston Nextjs hamjamiyati',
            ru: 'Сообщество Nextjs Узбекистана'
        }
    }
]