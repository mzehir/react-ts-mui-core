import * as yup from 'yup';

export interface FormValues {
  code: string;
}

export const defaultValues: FormValues = {
  code: '',
};

export const schema = yup.object().shape({
  code: yup.string().required('validationWarnings.required'),
});
