'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useLanguage } from '@/context/LanguageContext'

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const languageNames = {
        uz: "O'zbekcha",
        ru: "Русский",
        en: "English"
    };

    return (
        <Menu as="div" className="relative inline-block text-left">
            <Menu.Button className="inline-flex items-center justify-center rounded-md border border-blue-200 bg-white px-3 py-2 text-sm font-medium text-blue-700 hover:bg-blue-50 focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-blue-900 dark:text-blue-100 dark:border-blue-700 dark:hover:bg-blue-800">
                {languageNames[language as keyof typeof languageNames]}
            </Menu.Button>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-hidden dark:bg-blue-800">
                    <div className="py-1">
                        {Object.entries(languageNames).map(([code, name]) => (
                            <Menu.Item key={code}>
                                {({ active }) => (
                                    <button
                                        onClick={() => setLanguage(code as "uz" | "ru" | "en")}
                                        className={`${
                                            active ? 'bg-blue-100 text-blue-900 dark:bg-blue-700 dark:text-white' : 'text-gray-700 dark:text-blue-100'
                                        } ${
                                            language === code ? 'font-medium' : ''
                                        } block w-full px-4 py-2 text-left text-sm`}
                                    >
                                        {name}
                                    </button>
                                )}
                            </Menu.Item>
                        ))}
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    );
}