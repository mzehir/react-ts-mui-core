import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import enComponent from './locales/en/component.json';
import enInput from './locales/en/input.json';
import enButton from './locales/en/button.json';

import tr from './locales/tr.json';
import trComponent from './locales/tr/component.json';
import trInput from './locales/tr/input.json';
import trButton from './locales/tr/button.json';

import de from './locales/de.json';

const resources = {
  en: {
    translation: {
      ...en,
      component: enComponent,
      input: enInput,
      button: enButton,
    },
  },
  tr: {
    translation: {
      ...tr,
      component: trComponent,
      input: trInput,
      button: trButton,
    },
  },
  de: {
    translation: de,
  },
};

console.log(resources.en.translation);

console.log(resources.tr.translation);

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
