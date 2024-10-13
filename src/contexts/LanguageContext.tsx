import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n/i18n';
import {
  LanguageContextProps,
  initialLanguage,
  isTheStartKeyInterpolation,
  prepareInterpolationTranslation,
} from './languageContextHelper';
import { Language } from '../utils/enums/languages';
import { localStorageGetItem, localStorageSetItem } from '../utils/methods/localStorage';

const LanguageContext = React.createContext<LanguageContextProps>({
  language: initialLanguage,
  changeLanguage: () => {},
  translate: (key: string) => key,
});

function LanguageProvider({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation();
  const [language, setLanguage] = React.useState<Language>(Language.EN);

  const changeLanguage = (newLanguage: Language) => {
    localStorageSetItem('activeLanguage', newLanguage); // Save to DB
    setLanguage(newLanguage); // Save to Context
    i18n.changeLanguage(newLanguage); // Save to i18n
  };

  const translate = (key: string): string => {
    if (isTheStartKeyInterpolation(key)) {
      const { translateKey, translateProps } = prepareInterpolationTranslation(key);
      return t(translateKey, { ...translateProps });
    } else {
      return t(key);
    }
  };

  React.useEffect(() => {
    const languageInitialSetting = async () => {
      const defaultLanguage = initialLanguage; // Default value
      const storedLanguage = localStorageGetItem<Language>('activeLanguage'); // Value saved by the user

      if (storedLanguage) {
        // If the user has a saved value, use the saved value
        changeLanguage(storedLanguage);
      } else {
        // If the user does not have a saved value, use the default value
        changeLanguage(defaultLanguage);
      }
    };

    languageInitialSetting();
  }, []);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translate }}>{children}</LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
