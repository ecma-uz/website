import { LanguageCode } from './translations';

export type HeroDataType = {
	stats: {
		communities: string;
		members: string;
		location: Record<LanguageCode, string>;
		founded: string;
	}
};

export const hero: HeroDataType = {
	stats: {
		communities: '3+',
		members: '2000+',
		location: {
			en: 'Uzbekistan',
			uz: 'O\'zbekiston',
			ru: 'Узбекистан'
		},
		founded: '2025'
	}
};