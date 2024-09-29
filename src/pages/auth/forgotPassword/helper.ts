import * as yup from 'yup';

export interface FormValues {
  emailAddress: string;
}

export const defaultValues: FormValues = {
  emailAddress: '',
};

export const schema = yup.object().shape({
  emailAddress: yup.string().required('validationWarnings.required').email('validationWarnings.email'),
});
