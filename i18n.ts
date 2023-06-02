"use client";

import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "./i18n/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: ["en"],
    ns: ["translation"],
    debug: false,
    detection: {
      order: [
        "cookie",
        "navigator",
        "localStorage",
        "querystring",
        "sessionStorage",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
    interpolation: {
      escapeValue: true,
      formatSeparator: ",",
    },
  });

export default i18n;
