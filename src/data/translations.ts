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
            joinButton: "Join Community"
        },
        committee: {
            title: "Committee Members",
            subtitle: "Meet the people leading Ecma Uzbekistan initiatives",
            githubProfile: "GitHub Profile"
        },
        themeToggle: {
            light: "Light Mode",
            dark: "Dark Mode"
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
            joinButton: "Hamjamiyatga qo'shilish"
        },
        committee: {
            title: "Qo'mita a'zolari",
            subtitle: "Ecma O'zbekiston tashabbuslariga rahbarlik qiluvchi shaxslar bilan tanishing",
            githubProfile: "GitHub Profili"
        },
        themeToggle: {
            light: "Yorug' rejim",
            dark: "Qorong'i rejim"
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
            joinButton: "Присоединиться к сообществу"
        },
        committee: {
            title: "Члены комитета",
            subtitle: "Познакомьтесь с людьми, возглавляющими инициативы Ecma Узбекистан",
            githubProfile: "Профиль GitHub"
        },
        themeToggle: {
            light: "Светлый режим",
            dark: "Темный режим"
        }
    }
};

export type LanguageCode = keyof typeof translations;