import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector'
import th_json from "./locales/th.json"
import en_json from "./locales/en.json"
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: en_json,
  th: th_json
};
const options = {
  order: ['localStorage', 'querystring', 'navigator'],
  lookupQuerystring: 'lng'
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  
  .init({
    detection: options,
    resources,
    fallbackLng: 'en',
    supportedLngs: ['th', 'en'],
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;