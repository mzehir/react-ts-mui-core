import { activeCountryPhoneFormat, Countries } from './locale';

interface CountryPhoneFormat {
  mask: string;
  format: string;
  areaCode: string;
  numberOfDigits: number;
}

const COUNTRY_PHONE_FORMATS: { [key in Countries]: CountryPhoneFormat } = {
  tr: {
    mask: '_',
    format: '(###) ### ## ##',
    areaCode: '+90', // Lazım olabilir.
    numberOfDigits: 10,
  },
  en: {
    mask: '',
    format: '',
    areaCode: '',
    numberOfDigits: 0,
  },
};

export const prepareCountryPhoneFormat = (country: Countries): CountryPhoneFormat => {
  return COUNTRY_PHONE_FORMATS[country];
};

//

export const formatPhoneNumber = (phoneNumber: string): string => {
  const format = activeCountryPhoneFormat.format;

  try {
    if (!phoneNumber || phoneNumber.length !== activeCountryPhoneFormat.numberOfDigits) {
      throw new Error(
        `Invalid phone number: The phone number "${phoneNumber}" is not ${activeCountryPhoneFormat.numberOfDigits} digits.`,
      );
    }

    if (!format || !format.includes('#')) {
      throw new Error(`Invalid format string: "${format}".`);
    }

    let formattedText = '';
    let formatIndex = 0;

    for (let i = 0; i < phoneNumber.length; i++) {
      if (format[formatIndex] === '#') {
        formattedText += phoneNumber[i];
      } else {
        formattedText += format[formatIndex];
        i--;
      }
      formatIndex++;
    }

    return formattedText;
  } catch (error) {
    console.error(`Formatting failed`);
    return phoneNumber;
  }
};
