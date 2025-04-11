import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import enComponent from './locales/en/component.json';
import enInput from './locales/en/input.json';
import enButton from './locales/en/button.json';
import enValidationWarnings from './locales/en/validationWarnings.json';
import _enValidationWarnings from './locales/en/_validationWarnings.json';
import enRoutes from './locales/en/routes.json';
// introduction
import enIntroductionRoutes from './locales/en/introduction/routes.json';

import tr from './locales/tr.json';
import trComponent from './locales/tr/component.json';
import trInput from './locales/tr/input.json';
import trButton from './locales/tr/button.json';
import trValidationWarnings from './locales/tr/validationWarnings.json';
import _trValidationWarnings from './locales/tr/_validationWarnings.json';
import trRoutes from './locales/tr/routes.json';
// introduction
import trIntroductionRoutes from './locales/tr/introduction/routes.json';

import de from './locales/de.json';

const resources = {
  en: {
    translation: {
      ...en,
      component: enComponent,
      input: enInput,
      button: enButton,
      validationWarnings: enValidationWarnings,
      _validationWarnings: _enValidationWarnings,
      routes: enRoutes,
      // introduction
      introductionRoutes: enIntroductionRoutes,
    },
  },
  tr: {
    translation: {
      ...tr,
      component: trComponent,
      input: trInput,
      button: trButton,
      validationWarnings: trValidationWarnings,
      _validationWarnings: _trValidationWarnings,
      routes: trRoutes,
      // introduction
      introductionRoutes: trIntroductionRoutes,
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
