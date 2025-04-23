import React from 'react';

import { CommunityFocusIcon, GlobalConnectionIcon, IconProps, IndustryStandardsIcon, KnowledgeSharingIcon } from '@/components/Icons';
import { LanguageCode } from './translations';

export type FeatureType = {
  id: string;
  title: Record<LanguageCode, string>;
  description: Record<LanguageCode, string>;
  icon: React.ComponentType<IconProps>;
};

export type AboutSectionType = {
  features: FeatureType[];
  mission: {
    title: Record<LanguageCode, string>;
    description: Record<LanguageCode, string>;
    exploreCta: Record<LanguageCode, string>;
    meetTeamCta: Record<LanguageCode, string>;
  };
};

export const aboutData: AboutSectionType = {
  features: [
    {
      id: 'community-focus',
      title: {
        en: 'Community Focus',
        uz: 'Hamjamiyatga e\'tibor',
        ru: 'Фокус на сообщество'
      },
      description: {
        en: 'We bring together JavaScript communities across Uzbekistan, fostering collaboration and knowledge sharing.',
        uz: 'Biz O\'zbekiston bo\'ylab JavaScript hamjamiyatlarini birlashtiramiz, hamkorlik va bilim almashishni rivojlantiramiz.',
        ru: 'Мы объединяем JavaScript-сообщества по всему Узбекистану, способствуя сотрудничеству и обмену знаниями.'
      },
      icon: CommunityFocusIcon
    },
    {
      id: 'knowledge-sharing',
      title: {
        en: 'Knowledge Sharing',
        uz: 'Bilim almashish',
        ru: 'Обмен знаниями'
      },
      description: {
        en: 'We organize workshops, meetups, and conferences to share knowledge and best practices in JavaScript development.',
        uz: 'Biz JavaScript dasturlashida bilim va eng yaxshi amaliyotlarni baham ko\'rish uchun seminarlar, uchrashuvlar va konferentsiyalarni tashkil qilamiz.',
        ru: 'Мы организуем воркшопы, митапы и конференции для обмена знаниями и лучшими практиками в разработке на JavaScript.'
      },
      icon: KnowledgeSharingIcon
    },
    {
      id: 'industry-standards',
      title: {
        en: 'Industry Standards',
        uz: 'Sanoat standartlari',
        ru: 'Отраслевые стандарты'
      },
      description: {
        en: 'We promote modern JavaScript practices and standards, ensuring our communities stay up-to-date with the latest features and best practices.',
        uz: 'Biz zamonaviy JavaScript amaliyotlari va standartlarini targ\'ib qilamiz, hamjamiyatlarimiz eng so\'nggi xususiyatlar va eng yaxshi amaliyotlar bilan yangilanib turishini ta\'minlaymiz.',
        ru: 'Мы продвигаем современные практики и стандарты JavaScript, гарантируя, что наши сообщества всегда в курсе последних возможностей и лучших практик.'
      },
      icon: IndustryStandardsIcon
    },
    {
      id: 'global-connection',
      title: {
        en: 'Global Connection',
        uz: 'Global aloqa',
        ru: 'Глобальное сотрудничество'
      },
      description: {
        en: 'We connect Uzbek JavaScript developers with the global community, fostering international collaboration and opportunities.',
        uz: 'Biz O\'zbek JavaScript dasturchilari va global hamjamiyat o\'rtasida aloqa o\'rnatib, xalqaro hamkorlik va imkoniyatlarni yaratamiz.',
        ru: 'Мы связываем узбекских JavaScript-разработчиков с мировым сообществом, способствуя международному сотрудничеству и новым возможностям.'
      },
      icon: GlobalConnectionIcon
    },
  ],
  mission: {
    title: {
      en: 'Join Our Mission',
      uz: 'Bizning maqsadimizga qo\'shiling',
      ru: 'Присоединяйтесь к нашей миссии'
    },
    description: {
      en: 'Together, we\'re building a stronger JavaScript ecosystem in Uzbekistan. Join us in shaping the future of web development in our region.',
      uz: 'Birgalikda O\'zbekistonda kuchliroq JavaScript ekotizimini yaratmoqdamiz. Mintaqamizda veb-ishlab chiqarishning kelajagini shakllantirishda bizga qo\'shiling.',
      ru: 'Вместе мы создаем более сильную экосистему JavaScript в Узбекистане. Присоединяйтесь к нам в формировании будущего веб-разработки в нашем регионе.'
    },
    exploreCta: {
      en: 'Explore Communities',
      uz: 'Hamjamiyatlarni ko\'ring',
      ru: 'Изучить сообщества'
    },
    meetTeamCta: {
      en: 'Meet the Team',
      uz: 'Jamoa bilan tanishing',
      ru: 'Познакомиться с командой'
    }
  }
}; 