import * as yup from 'yup';
import { passwordValidation } from '../../../utils/validations/generalValidations';

export interface FormValues {
  emailAddress: string;
  password: string;
}

export const defaultValues: FormValues = {
  emailAddress: '',
  password: '123456Aa.@',
};

export const schema = yup.object().shape({
  emailAddress: yup.string().required('validationWarnings.required').email('validationWarnings.email'),
  password: yup
    .string()
    .required('validationWarnings.required')
    .min(passwordValidation.minCharacter, `_validationWarnings.min,{number:${passwordValidation.minCharacter}}`)
    .max(passwordValidation.maxCharacter, `_validationWarnings.max,{number:${passwordValidation.maxCharacter}}`)
    .matches(passwordValidation.isValid, 'validationWarnings.password'),
});
