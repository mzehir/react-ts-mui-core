import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// en translation
import en from './locales/en.json';
import enComponent from './locales/en/component.json';
import enInput from './locales/en/input.json';
import enButton from './locales/en/button.json';
import enValidationWarnings from './locales/en/validationWarnings.json';
import _enValidationWarnings from './locales/en/_validationWarnings.json';
import enRoutes from './locales/en/routes.json';

//! 001DeletedStart
import enIntroductionRoutes from './locales/en/introduction/routes.json';
import enIntroductionAGGrid from './locales/en/introduction/agGrid.json';
import enIntroduction from './locales/en/introduction/other.json';
//! 001DeletedFinish

// tr translation
import tr from './locales/tr.json';
import trComponent from './locales/tr/component.json';
import trInput from './locales/tr/input.json';
import trButton from './locales/tr/button.json';
import trValidationWarnings from './locales/tr/validationWarnings.json';
import _trValidationWarnings from './locales/tr/_validationWarnings.json';
import trRoutes from './locales/tr/routes.json';

//! 002DeletedStart
import trIntroductionRoutes from './locales/tr/introduction/routes.json';
import trIntroductionAGGrid from './locales/tr/introduction/agGrid.json';
import trIntroduction from './locales/tr/introduction/other.json';
//! 002DeletedFinish

// de translation
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

      //! 003DeletedStart
      introductionRoutes: enIntroductionRoutes,
      introductionAgGrid: enIntroductionAGGrid,
      introduction: enIntroduction,
      //! 003DeletedFinish
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

      //! 004DeletedStart
      introductionRoutes: trIntroductionRoutes,
      introductionAgGrid: trIntroductionAGGrid,
      introduction: trIntroduction,
      //! 004DeletedFinish
    },
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
