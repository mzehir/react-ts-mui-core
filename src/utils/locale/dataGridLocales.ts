import { enUS, trTR, deDE } from '@mui/x-data-grid/locales';
import { Language } from '../enums/languages';
import { GridLocaleText } from '@mui/x-data-grid';

export const getLocaleText = (lang: Language): Partial<GridLocaleText> => {
  if (lang === Language.TR) {
    return trTR.components.MuiDataGrid.defaultProps.localeText;
  } else if (lang === Language.EN) {
    return enUS.components.MuiDataGrid.defaultProps.localeText;
  } else if (lang === Language.DE) {
    return deDE.components.MuiDataGrid.defaultProps.localeText;
  } else {
    return enUS.components.MuiDataGrid.defaultProps.localeText;
  }
};
