import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomController from '../../../../components/other/reactHookForm/controller/CustomController';
import { schema, defaultValues, FormValues } from '../helper';
import BoxComp from '../../../../components/base/box/Box';
import ButtonComp from '../../../../components/base/button/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';

const BodySection: React.FC = () => {
  const { handleSubmit, control, formState } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(formHandleSubmit)}>
      <BoxComp display={'flex'} flexDirection={'column'} gap={'15px'}>
        <CustomController<FormValues>
          name="name"
          control={control}
          componentFields={{
            componentType: 'textField',
            label: 'input.name',
            placeholder: 'input.namePlaceholder',
            helperText: formState.errors.name?.message,
            error: !!formState.errors.name,
          }}
        />

        <CustomController<FormValues>
          name="surname"
          control={control}
          componentFields={{
            componentType: 'textField',
            label: 'input.surname',
            placeholder: 'input.surnamePlaceholder',
            helperText: formState.errors.surname?.message,
            error: !!formState.errors.surname,
          }}
        />

        <CustomController<FormValues>
          name="emailAddress"
          control={control}
          componentFields={{
            componentType: 'textField',
            label: 'input.email',
            placeholder: 'input.emailPlaceholder',
            helperText: formState.errors.emailAddress?.message,
            error: !!formState.errors.emailAddress,
          }}
        />

        <CustomController<FormValues>
          name="phoneNumber"
          control={control}
          componentFields={{
            componentType: 'phoneTextField',
            label: 'input.phone',
            placeholder: 'input.phonePlaceholder',
            helperText: formState.errors.phoneNumber?.message,
            error: !!formState.errors.phoneNumber,
          }}
        />

        <CustomController<FormValues>
          name="password"
          control={control}
          componentFields={{
            componentType: 'passwordTextField',
            label: 'input.password',
            placeholder: 'input.passwordPlaceholder',
            helperText: formState.errors.password?.message,
            error: !!formState.errors.password,
          }}
        />

        <CustomController<FormValues>
          name="confirmPassword"
          control={control}
          componentFields={{
            componentType: 'passwordTextField',
            label: 'input.confirmPassword',
            placeholder: 'input.confirmPasswordPlaceholder',
            helperText: formState.errors.confirmPassword?.message,
            error: !!formState.errors.confirmPassword,
          }}
        />

        <ButtonComp type="submit" variant="contained" color="primary" endIcon={<HowToRegIcon />}>
          button.signUp
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
