import { AG_GRID_LOCALE_TR, AG_GRID_LOCALE_DE } from '@ag-grid-community/locale';
import { Language } from '../enums/languages';

export const getAgGridLocaleText = (lang: Language) => {
  if (lang === Language.TR) {
    return AG_GRID_LOCALE_TR;
  } else if (lang === Language.EN) {
    return {}; // AG Grid uses English by default
  } else if (lang === Language.DE) {
    return AG_GRID_LOCALE_DE;
  } else {
    return {}; // Default to English
  }
};
