import { ReactNode } from 'react';
import { Language } from '../utils/enums/languages';

export const initialLanguage = Language.EN;
export interface LanguageContextProps {
  language: string;
  changeLanguage: (language: Language) => void;
  translate: (key: string) => string;
}

//* Helper Methods

//! 1. Method
enum LangJsonSpecialKeys {
  _interpolations = '_interpolations.',
  _validationWarnings = '_validationWarnings.',
}

export function isTheStartKeyInterpolation(input: string): boolean {
  return Object.values(LangJsonSpecialKeys).some((prefix) => input.startsWith(prefix));
}

//! 2. Method
interface InterpolationResult {
  translateKey: string;
  translateProps: Record<string, string>;
}

export function prepareInterpolationTranslation(stringData: string): InterpolationResult {
  //* Örnek => let strinData = "_interpolations.interpolations_1,{name:Kenan,surname:Doe}"

  //* Verilen stringData'yı ',{' karakterine göre iki parçaya ayır => parts = ["_interpolations.interpolations_1", "name:Kenan,surname:Doe}"]
  const parts = stringData.split(',{');

  //* İlk parça, statik string kısmı olarak alınır => staticString "_interpolations.interpolations_1"
  const staticString = parts[0];

  //* İkinci parça, süslü parantezin son kısmını çıkararak dinamik parça olarak alınır => dynamicPart = "name:Kenan,surname:Doe"
  const dynamicPart = parts[1].slice(0, -1);

  //* Dinamik parçayı anahtar-değer çiftlerine dönüştürmek için boş bir nesne oluştur
  const dynamicObject: Record<string, string> = {};

  //* Dinamik parçayı ',' karakterine göre böl ve her bir anahtar-değer çiftini işleme al
  dynamicPart.split(',').forEach((item) => {
    const [key, value] = item.split(':'); //* Anahtar ve değeri ':' karakterine göre ayır
    dynamicObject[key.trim()] = value.trim(); //* // Anahtar ve değeri temizleyerek dinamik nesneye ekle
  });

  //* Sonucu, translateKey ve translateProps alanlarına sahip bir nesne olarak döndür
  return {
    translateKey: staticString,
    translateProps: dynamicObject,
  };
}

//! 3. Method
type TranslatePropType = (value: string) => string;

export const childrenTranslate = (children: ReactNode, translate: TranslatePropType): ReactNode => {
  const result: ReactNode[] = [];

  if (Array.isArray(children)) {
    for (let i = 0; i < children.length; i++) {
      if (typeof children[i] == 'string') {
        result.push(translate(children[i]));
      } else {
        result.push(children[i]);
      }
    }
  } else {
    if (typeof children == 'string') {
      result.push(translate(children));
    } else {
      result.push(children);
    }
  }

  return result;
};
