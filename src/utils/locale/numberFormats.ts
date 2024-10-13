import { Countries } from './locale';

interface CountryNumberFormat {
  decimalSeparator: string; // Specifies the symbol for the decimal separator. For Turkey, this value is used as "," (comma).

  thousandSeparator: string; // Specifies the symbol for the thousand separator. For Turkey, this value is used as "." (dot).

  prefix: string; // Specifies the currency symbol or prefix. For Turkey, this value is used as "₺" (Turkish Lira symbol).

  decimalScale: number; // Specifies the number of decimal places. In Turkey, two decimal places are generally used, so this value is set to 2.

  fixedDecimalScale: boolean; // Determines whether the number of decimal places is fixed. A value of true ensures that the number of decimal places remains constant.

  locale: string; // Represents the local language and region code. For Turkey, this value is "tr-TR" (Turkish, Turkey).

  currency: string; // Specifies the currency used. For Turkey, this value is set to "TRY" (Turkish Lira).
}

const COUNTRY_NUMBER_FORMATS: { [key in Countries]: CountryNumberFormat } = {
  tr: {
    decimalSeparator: ',',
    thousandSeparator: '.',
    decimalScale: 2,
    fixedDecimalScale: true,
    prefix: '₺',
    locale: 'tr-TR',
    currency: 'TRY',
  },
  en: {
    decimalSeparator: '.',
    thousandSeparator: ',',
    decimalScale: 2,
    fixedDecimalScale: true,
    prefix: '$',
    locale: 'en-US',
    currency: 'USD',
  },
};

export const prepareCountryNumberFormat = (country: Countries): CountryNumberFormat => {
  return COUNTRY_NUMBER_FORMATS[country];
};
