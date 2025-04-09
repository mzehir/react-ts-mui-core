import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import tr from './locales/tr.json';
import de from './locales/de.json';
// import enIntroductionPart1 from './locales/en/introduction/part1.json';
// import enIntroductionPart2 from './locales/en/introduction/part2.json';
// import enIntroductionPart3 from './locales/en/introduction/part3.json';

const resources = {
  en: {
    translation: {
      ...en,
      // introduction: {
      //   part1: enIntroductionPart1,
      //   part2: enIntroductionPart2,
      //   part3: enIntroductionPart3,
      // },
    },
  },
  tr: {
    translation: tr,
  },
  de: {
    translation: de,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
