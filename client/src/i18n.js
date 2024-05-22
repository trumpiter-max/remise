import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import English from "./lang/english.json";
import Vietnamese from "./lang/vietnamese.json";

const resources = {
    en: {
        translation: English,
    },
    vi: {
        translation: Vietnamese,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "en",
        keySeparator: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
