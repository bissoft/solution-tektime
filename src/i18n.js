import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import fr from './locales/fr.json';
import en from './locales/en.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            fr: {
                translation: fr,
            },
            en: {
                translation: en,
            },
        },
        fallbackLng: 'fr',
        supportedLngs: ['fr', 'en'],
        load: 'languageOnly', // language codes only (en, fr)
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        detection: {
            // Order: check localStorage/cookie first. If not found, DO NOT check navigator.
            // This causes it to fall back to 'fallbackLng' (fr).
            order: ['localStorage', 'cookie'],
            caches: ['localStorage', 'cookie'],
            lookupLocalStorage: 'i18nextLng',
        },
    });

export default i18n;
