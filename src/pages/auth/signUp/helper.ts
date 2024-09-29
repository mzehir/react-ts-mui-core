import * as yup from 'yup';
import {
  nameValidation,
  numericString,
  passwordValidation,
  phoneNumberValidation,
  surnameValidation,
} from '../../../utils/validations/generalValidations';
import { activeCountryPhoneFormat } from '../../../utils/locale/locale';

export interface FormValues {
  name: string;
  surname: string;
  emailAddress: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
}

export const defaultValues: FormValues = {
  name: '',
  surname: '',
  emailAddress: '',
  phoneNumber: '',
  password: '',
  confirmPassword: '',
};

export const schema = yup.object().shape({
  name: yup
    .string()
    .required('validationWarnings.required')
    .min(nameValidation.minCharacter, `_validationWarnings.min,{number:${nameValidation.minCharacter}}`)
    .max(nameValidation.maxCharacter, `_validationWarnings.max,{number:${nameValidation.maxCharacter}}`),

  surname: yup
    .string()
    .required('validationWarnings.required')
    .min(surnameValidation.minCharacter, `_validationWarnings.min,{number:${surnameValidation.minCharacter}}`)
    .max(surnameValidation.maxCharacter, `_validationWarnings.max,{number:${surnameValidation.maxCharacter}}`),

  emailAddress: yup.string().required('validationWarnings.required').email('validationWarnings.email'),

  phoneNumber: yup
    .string()
    .required('validationWarnings.required')
    .test('nonZeroFirstDigit', 'validationWarnings.nonZeroFirstDigit', (value) => {
      if (phoneNumberValidation.nonZeroFirstDigit && value) {
        return value[0] !== '0';
      } else {
        return true;
      }
    })
    .test('numericString', 'validationWarnings.numericString', (value) => {
      return numericString.test(value);
    })
    .test(
      'numberOfDigits',
      `_validationWarnings.numberOfDigits,{number:${activeCountryPhoneFormat.numberOfDigits}}`,
      (value) => {
        if (value) {
          return value.length === activeCountryPhoneFormat.numberOfDigits;
        } else {
          return true;
        }
      },
    ),

  password: yup
    .string()
    .required('validationWarnings.required')
    .min(passwordValidation.minCharacter, `_validationWarnings.min,{number:${passwordValidation.minCharacter}}`)
    .max(passwordValidation.maxCharacter, `_validationWarnings.max,{number:${passwordValidation.maxCharacter}}`)
    .matches(passwordValidation.isValid, 'validationWarnings.password'),

  confirmPassword: yup
    .string()
    .required('validationWarnings.required')
    .oneOf([yup.ref('password')], 'validationWarnings.equalsPassword'),
});
