export interface TranslationSchema {
    nav: {
      communities: string;
      committee: string;
      about: string;
    };
    hero: {
      title: string;
      subtitle1: string;
      subtitle2: string;
      exploreCta: string;
      stats: {
        communities: string;
        members: string;
        location: string;
        founded: string;
      };
    };
    communities: {
      title: string;
      subtitle: string;
      verified: string;
      joinButton: string;
    };
    committee: {
      title: string;
      subtitle: string;
      githubProfile: string;
    };
    events: {
      title: string;
      subtitle: string;
      comingSoon: string;
      registrationOpens: string;
      registerNow: string;
      registrationComingSoon: string;
      viewAllEvents: string;
    };
    about: {
      title: string;
      subtitle: string;
      joinMission: string;
      missionDescription: string;
      exploreCommunities: string;
      meetTeam: string;
    };
    footer: {
      allRightsReserved: string;
    };
    notFound: {
      errorCode: string;
      title: string;
      message: string;
      jsJoke: string;
      codeSnippet: string;
      buttonText: string;
    };
  }


export const translations = {
    en: {
        nav: {
          communities: "Communities",
          committee: "Committee",
          about: "About",
        },
        hero: {
          title: "JavaScript Community Representation",
          subtitle1: "Website of Uzbek Ecma for representation. Connecting JavaScript communities across Uzbekistan to collaborate, share knowledge, and grow together.",
          subtitle2: "We represent various JavaScript communities while maintaining their individual identities, helping them coordinate efforts and resources.",
          exploreCta: "Explore Communities",
          stats: {
            communities: "Communities",
            members: "Members",
            location: "Location",
            founded: "Founded"
          }
        },
        communities: {
          title: "JavaScript Communities",
          subtitle: "Join the vibrant JavaScript communities across Uzbekistan",
          verified: "Verified",
          joinButton: "Join"
        },
        committee: {
          title: "Committee Members",
          subtitle: "Meet the people leading Ecma Uzbekistan initiatives",
          githubProfile: "GitHub Profile"
        },
        events: {
          title: "Upcoming Events",
          subtitle: "Join our community events and grow together",
          comingSoon: "Coming Soon",
          registrationOpens: "Registration opens",
          registerNow: "Register Now",
          registrationComingSoon: "Registration Coming Soon",
          viewAllEvents: "View All Events"
        },
        about: {
          title: "About JavaScript Communities",
          subtitle: "Empowering JavaScript communities across Uzbekistan",
          joinMission: "Join Our Mission",
          missionDescription: "Together, we're building a stronger JavaScript ecosystem in Uzbekistan. Join us in shaping the future of web development in our region.",
          exploreCommunities: "Explore Communities",
          meetTeam: "Meet the Team"
        },
        footer: {
          allRightsReserved: "All rights reserved"
        },
        notFound: {
          errorCode: "404",
          title: "Page Not Found",
          message: "Looks like this route wasn't defined in our JavaScript router.",
          jsJoke: "Maybe it's just undefined or null?",
          codeSnippet: "if (page === undefined) {\n  return redirect('/home');\n}",
          buttonText: "Back to Home"
        }
      },
      uz: {
        nav: {
          communities: "Hamjamiyatlar",
          committee: "Qo'mita",
          about: "Biz haqimizda",
        },
        hero: {
          title: "JavaScript Hamjamiyatlari Vakilligi",
          subtitle1: "O'zbek Ecma vakilligi uchun sayt. O'zbekistondagi JavaScript hamjamiyatlarini hamkorlik qilish, bilim almashish va birga o'sish uchun bog'lab turadi.",
          subtitle2: "Turli JavaScript hamjamiyatlarini o'z shaxsiyatlarini saqlab qolgan holda ifoda etamiz, ularning harakatlarini va resurslarini muvofiqlashtirish yordam beramiz.",
          exploreCta: "Hamjamiyatlarni ko'rish",
          stats: {
            communities: "Hamjamiyatlar",
            members: "A'zolar",
            location: "Joylashuv",
            founded: "Asos solingan"
          }
        },
        communities: {
          title: "JavaScript Hamjamiyatlari",
          subtitle: "O'zbekistondagi faol JavaScript hamjamiyatlariga qo'shiling",
          verified: "Tasdiqlangan",
          joinButton: "Qo'shilish"
        },
        committee: {
          title: "Qo'mita a'zolari",
          subtitle: "Ecma O'zbekiston tashabbuslariga rahbarlik qiluvchi shaxslar bilan tanishing",
          githubProfile: "GitHub Profili"
        },
        events: {
          title: "Kutilayotgan Tadbirlar",
          subtitle: "Hamjamiyat tadbirlarimizga qo'shiling va birga o'sing",
          comingSoon: "Tez orada",
          registrationOpens: "Ro'yxatdan o'tish ochiladi",
          registerNow: "Hoziroq ro'yxatdan o'ting",
          registrationComingSoon: "Ro'yxatdan o'tish tez orada ochiladi",
          viewAllEvents: "Barcha Tadbirlarni Ko'rish"
        },
        about: {
          title: "JavaScript Hamjamiyatlari Haqida",
          subtitle: "O'zbekistondagi JavaScript hamjamiyatlarini qo'llab-quvvatlash",
          joinMission: "Bizning Maqsadimizga Qo'shiling",
          missionDescription: "Birgalikda O'zbekistonda kuchli JavaScript ekotizimini yaratmoqdamiz. Mintaqamizda veb-ishlab chiqarishning kelajagini shakllantirishga qatnashing.",
          exploreCommunities: "Hamjamiyatlarni Ko'rish",
          meetTeam: "Jamoa bilan Tanishing"
        },
        footer: {
          allRightsReserved: "Barcha huquqlar himoyalangan"
        },
        notFound: {
          errorCode: "404",
          title: "Sahifa topilmadi",
          message: "Afsuski, ushbu yo'nalish bizning JavaScript routerimizda aniqlanmagan.",
          jsJoke: "Balki u shunchaki undefined yoki null?",
          codeSnippet: "if (sahifa === undefined) {\n  return redirect('/home');\n}",
          buttonText: "Bosh sahifaga qaytish"
        }
      },
      ru: {
        nav: {
          communities: "Сообщества",
          committee: "Комитет",
          about: "О нас",
        },
        hero: {
          title: "Представительство JavaScript-сообществ",
          subtitle1: "Сайт Узбекского представительства Ecma. Объединяет JavaScript-сообщества по всему Узбекистану для сотрудничества, обмена знаниями и совместного роста.",
          subtitle2: "Мы представляем различные JavaScript-сообщества, сохраняя их индивидуальность и помогая координировать усилия и ресурсы.",
          exploreCta: "Изучить сообщества",
          stats: {
            communities: "Сообщества",
            members: "Участники",
            location: "Местоположение",
            founded: "Основано"
          }
        },
        communities: {
          title: "JavaScript-сообщества",
          subtitle: "Присоединяйтесь к активным JavaScript-сообществам по всему Узбекистану",
          verified: "Проверено",
          joinButton: "Присоединиться"
        },
        committee: {
          title: "Члены комитета",
          subtitle: "Познакомьтесь с людьми, возглавляющими инициативы Ecma Узбекистан",
          githubProfile: "Профиль GitHub"
        },
        events: {
          title: "Предстоящие мероприятия",
          subtitle: "Присоединяйтесь к нашим мероприятиям и развивайтесь вместе",
          comingSoon: "Скоро",
          registrationOpens: "Регистрация откроется",
          registerNow: "Зарегистрироваться",
          registrationComingSoon: "Регистрация скоро откроется",
          viewAllEvents: "Все мероприятия"
        },
        about: {
          title: "О JavaScript-сообществах",
          subtitle: "Поддержка JavaScript-сообществ по всему Узбекистану",
          joinMission: "Присоединяйтесь к нашей миссии",
          missionDescription: "Вместе мы создаем более сильную экосистему JavaScript в Узбекистане. Присоединяйтесь к нам в формировании будущего веб-разработки в нашем регионе.",
          exploreCommunities: "Изучить сообщества",
          meetTeam: "Познакомиться с командой"
        },
        footer: {
          allRightsReserved: "Все права защищены"
        },
        notFound: {
          errorCode: "404",
          title: "Страница не найдена",
          message: "Похоже, этот маршрут не определен в нашем JavaScript роутере.",
          jsJoke: "Может быть, он просто undefined или null?",
          codeSnippet: "if (страница === undefined) {\n  return redirect('/home');\n}",
          buttonText: "Вернуться на главную"
        }
      }
};

export type LanguageCode = keyof typeof translations;