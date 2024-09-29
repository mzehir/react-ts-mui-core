import { prepareCountryNumberFormat } from './numberFormats';
import { prepareCountryPhoneFormat } from './phoneFormats';

export type Countries = 'tr' | 'en';
export const activeCountryCode: Countries = 'tr';

export const activeCountryNumberFormat = prepareCountryNumberFormat(activeCountryCode);
export const activeCountryPhoneFormat = prepareCountryPhoneFormat(activeCountryCode);
