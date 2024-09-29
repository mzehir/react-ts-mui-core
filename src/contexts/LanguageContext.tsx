import React from 'react';
import { useTranslation } from 'react-i18next';
//* sections
import i18n from '../i18n/i18n';
import {
  LanguageContextProps,
  initialLanguage,
  isTheStartKeyInterpolation,
  prepareInterpolationTranslation,
} from './languageContextHelper';
//* utils
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
    localStorageSetItem('activeLanguage', newLanguage); // DB'ye kayıt
    setLanguage(newLanguage); // Context'e kayıt
    i18n.changeLanguage(newLanguage); // i18n'ye kayıt
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
      const defaultLanguage = initialLanguage; // Varsayılan değer
      const storedLanguage = localStorageGetItem<Language>('activeLanguage'); // Kullanıcının kaydettiği değer

      if (storedLanguage) {
        // Kullanıcının kayıtlı bir değeri varsa kayıtlı değeri kullan
        changeLanguage(storedLanguage);
      } else {
        // Kullanıcının kayıtlı bir değeri yoksa varsayılan değeri kullan
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
