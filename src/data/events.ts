import { LanguageCode } from './translations';

export type EventType = {
  id: string;
  type: Record<LanguageCode, string>;
  title: Record<LanguageCode, string>;
  date: Record<LanguageCode, string>;
  time: string;
  location: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  url: string;
  isComingSoon: boolean;
  registrationOpens: Record<LanguageCode, string>;
};

export const events: EventType[] = [
  {
    id: 'nodejs-meetup-tashkent',
    type: {
      en: 'Meetup',
      uz: 'Uchrashuv',
      ru: 'Митап'
    },
    title: {
      en: 'Node.js Meetup Tashkent',
      uz: 'Node.js Toshkent Uchrashuvi',
      ru: 'Node.js Митап Ташкент'
    },
    date: {
      en: 'June 15, 2099',
      uz: '15 iyun, 2099',
      ru: '15 июня, 2099'
    },
    time: '18:00',
    location: {
      en: 'Tashkent, Uzbekistan',
      uz: 'Toshkent, O\'zbekiston',
      ru: 'Ташкент, Узбекистан'
    },
    description: {
      en: 'Join us for an evening of JavaScript talks, networking, and community building.',
      uz: 'JavaScript ma\'ruzalari, networking va hamjamiyat qurilishi kechasi uchun bizga qo\'shiling.',
      ru: 'Присоединяйтесь к нам на вечер JavaScript-докладов, нетворкинга и построения сообщества.'
    },
    url: '#',
    isComingSoon: true,
    registrationOpens: {
      en: 'June 1, 2025',
      uz: '1 iyun, 2025',
      ru: '1 июня, 2025'
    }
  }
]; 