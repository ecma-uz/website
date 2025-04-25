import { StaticImageData } from 'next/image';
import { LanguageCode } from './translations';

import NodeJsImage from '@/images/communities/ecma-node-js.svg';
import NestJsImage from '@/images/communities/ecma-nest-js.svg';
import ReactJsImage from '@/images/communities/ecma-react-js.svg';

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
            en: 'ReactJS Uzbekistan',
            uz: 'ReactJS Uzbekistan',
            ru: 'ReactJS Узбекистан'
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
            en: 'NestJS Uzbekistan',
            uz: 'NestJS Uzbekistan',
            ru: 'NestJS Узбекистан'
        },
        description: {
            en: 'Uzbekistan NestJS Community',
            uz: 'O\'zbekiston NestJS hamjamiyati',
            ru: 'Сообщество NestJS Узбекистана'
        }
    }
]