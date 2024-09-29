import * as yup from 'yup';
import { passwordValidation } from '../../../utils/validations/generalValidations';

export interface FormValues {
  password: string;
  confirmPassword: string;
}

export const defaultValues: FormValues = {
  password: '',
  confirmPassword: '',
};

export const schema = yup.object().shape({
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
