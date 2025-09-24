'use client'

import { useLanguage } from '@/context/LanguageContext'

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => setLanguage('en')}
                className={`rounded-lg px-3 py-1 text-sm font-medium transition-colors ${
                    language === 'en'
                        ? 'bg-primary text-black'
                        : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
                }`}
            >
                EN
            </button>
            <button
                onClick={() => setLanguage('ru')}
                className={`rounded-lg px-3 py-1 text-sm font-medium transition-colors ${
                    language === 'ru'
                        ? 'bg-primary text-black'
                        : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
                }`}
            >
                RU
            </button>
            <button
                onClick={() => setLanguage('uz')}
                className={`rounded-lg px-3 py-1 text-sm font-medium transition-colors ${
                    language === 'uz'
                        ? 'bg-primary text-black'
                        : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-800'
                }`}
            >
                UZ
            </button>
        </div>
    );
}