import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from './locales/en.js';
import vi from './locales/vi.js';

let lang = localStorage.getItem('language');
if( !lang ){
    lang = "en";
    localStorage.setItem('language', lang);
}

i18n
.use(initReactI18next) // passes i18n down to react-i18next
.init({
    resources: {
        "vn": { translation: vi },
        "en": { translation: en },
    },
    lng: lang,
    fallbackLng: lang, // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
    escapeValue: false // react already safes from xss
    }
});


export default i18n;


