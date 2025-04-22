'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';
import { LanguageCode } from '@/data/translations';

interface LanguageContextType {
    language: LanguageCode;
    setLanguage: (language: LanguageCode) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<LanguageCode>('en');

    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') as LanguageCode | null;
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('language', language);
    }, [language]);

    const value = {
        language,
        setLanguage,
    };

    return (
        <LanguageContext.Provider value={value}>
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