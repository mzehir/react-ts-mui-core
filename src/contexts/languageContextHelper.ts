import { ReactNode } from 'react';
import { Language } from '../utils/enums/languages';

export const initialLanguage = Language.EN;
export interface LanguageContextProps {
  language: string;
  changeLanguage: (language: Language) => void;
  translate: (key: string) => string;
}

//!
enum LangJsonSpecialKeys {
  _interpolations = '_interpolations.',
  _validationWarnings = '_validationWarnings.',
}

export function isTheStartKeyInterpolation(input: string): boolean {
  return Object.values(LangJsonSpecialKeys).some((prefix) => input.startsWith(prefix));
}

//!
interface InterpolationResult {
  translateKey: string;
  translateProps: Record<string, string>;
}

export function prepareInterpolationTranslation(stringData: string): InterpolationResult {
  //* Example => let strinData = "_interpolations.interpolations_1,{name:Kenan,surname:Doe}"

  const parts = stringData.split(',{');
  const staticString = parts[0];
  const dynamicPart = parts[1].slice(0, -1);
  const dynamicObject: Record<string, string> = {};

  dynamicPart.split(',').forEach((item) => {
    const [key, value] = item.split(':');
    dynamicObject[key.trim()] = value.trim();
  });

  return {
    translateKey: staticString,
    translateProps: dynamicObject,
  };
}

//!
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
