// import { tellaApiUrl } from "app/utilities";
import i18next from "i18next";
//import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

const tellaApiUrl = "https://localhost:5001/api";

export const i18n = i18next
  .use(Backend)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  //.use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    lng: "en",
    backend: {
      loadPath: `${tellaApiUrl}/tella/config-localization?startsWith=Mortgage`,
    },
    fallbackLng: "en",
    debug: false,
    keySeparator: false,
    nsSeparator: false,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
