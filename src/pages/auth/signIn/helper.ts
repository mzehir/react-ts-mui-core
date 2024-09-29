import * as yup from 'yup';
import {
  // numericString,
  passwordValidation,
  // phoneNumberValidation,
} from '../../../utils/validations/generalValidations';
// import { activeCountryPhoneFormat } from '../../../utils/locale/locale';

export interface FormValues {
  emailAddress: string;
  // phoneNumber: string;
  password: string;
}

export const defaultValues: FormValues = {
  emailAddress: '',
  // phoneNumber: '',
  password: '123456Aa.@',
};

export const schema = yup.object().shape({
  emailAddress: yup.string().required('validationWarnings.required').email('validationWarnings.email'),

  // phoneNumber: yup
  //   .string()
  //   .required('validationWarnings.required')
  //   .test('nonZeroFirstDigit', 'validationWarnings.nonZeroFirstDigit', (value) => {
  //     if (phoneNumberValidation.nonZeroFirstDigit && value) {
  //       return value[0] !== '0';
  //     } else {
  //       return true;
  //     }
  //   })
  //   .test('numericString', 'validationWarnings.numericString', (value) => {
  //     return numericString.test(value);
  //   })
  //   .test(
  //     'numberOfDigits',
  //     `_validationWarnings.numberOfDigits,{number:${activeCountryPhoneFormat.numberOfDigits}}`,
  //     (value) => {
  //       if (value) {
  //         return value.length === activeCountryPhoneFormat.numberOfDigits;
  //       } else {
  //         return true;
  //       }
  //     },
  //   ),

  password: yup
    .string()
    .required('validationWarnings.required')
    .min(passwordValidation.minCharacter, `_validationWarnings.min,{number:${passwordValidation.minCharacter}}`)
    .max(passwordValidation.maxCharacter, `_validationWarnings.max,{number:${passwordValidation.maxCharacter}}`)
    .matches(passwordValidation.isValid, 'validationWarnings.password'),
});
