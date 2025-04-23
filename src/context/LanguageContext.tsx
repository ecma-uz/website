'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, LanguageCode } from '@/data/translations';

type LanguageContextType = {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<LanguageCode>('uz');

    useEffect(() => {
        // Проверяем сохраненный язык в localStorage
        const savedLanguage = localStorage.getItem('language') as LanguageCode | null;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ru' || savedLanguage === 'uz')) {
            setLanguage(savedLanguage);
        } else {
            // Если нет сохраненного языка, устанавливаем узбекский
            setLanguage('uz');
            localStorage.setItem('language', 'uz');
        }
    }, []);

    const handleSetLanguage = (lang: LanguageCode) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}