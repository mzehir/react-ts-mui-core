import { Countries } from './locale';

interface CountryNumberFormat {
  decimalSeparator: string; //* Ondalık ayracı simgesini belirler. Türkiye için bu değer , (virgül) olarak kullanılır.

  thousandSeparator: string; //* Binlik ayracı simgesini belirler. Türkiye için bu değer . (nokta) olarak kullanılır.

  prefix: string; //* Para birimi simgesini veya ön ekini belirler. Türkiye için bu değer ₺ (Türk Lirası sembolü) olarak kullanılır.

  decimalScale: number; //* Ondalık basamak sayısını belirler. Türkiye'de genellikle iki ondalık basamak kullanılır, bu nedenle değer 2 olarak belirlenmiştir.

  fixedDecimalScale: boolean; //* Ondalık basamak sayısının sabit olup olmadığını belirler. true değeri, her zaman belirlenen sayıda ondalık basamak olacağını ifade eder.

  locale: string; //* Dil ve bölgeyi belirten yerel ayar kodunu ifade eder. Türkiye için bu değer tr-TR (Türkçe, Türkiye) olarak kullanılır.

  currency: string; //* Kullanılan para birimini belirler. Türkiye için bu değer TRY (Türk Lirası) olarak kullanılır.
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
