import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomController from '../../../../components/reactHookForm/controller/CustomController';
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
            label: 'common.name',
            placeholder: 'common.enterFirstName',
            helperText: formState.errors.name?.message,
            error: !!formState.errors.name,
          }}
        />

        <CustomController<FormValues>
          name="surname"
          control={control}
          componentFields={{
            componentType: 'textField',
            label: 'common.surname',
            placeholder: 'common.enterLastName',
            helperText: formState.errors.surname?.message,
            error: !!formState.errors.surname,
          }}
        />

        <CustomController<FormValues>
          name="emailAddress"
          control={control}
          componentFields={{
            componentType: 'textField',
            label: 'common.emailAddress',
            placeholder: 'common.enterEmail',
            helperText: formState.errors.emailAddress?.message,
            error: !!formState.errors.emailAddress,
          }}
        />

        <CustomController<FormValues>
          name="phoneNumber"
          control={control}
          componentFields={{
            componentType: 'phoneTextField',
            label: 'common.phoneNumber',
            placeholder: 'common.enterPhoneNumber',
            helperText: formState.errors.phoneNumber?.message,
            error: !!formState.errors.phoneNumber,
          }}
        />

        <CustomController<FormValues>
          name="password"
          control={control}
          componentFields={{
            componentType: 'passwordTextField',
            label: 'common.password',
            placeholder: 'common.enterPassword',
            helperText: formState.errors.password?.message,
            error: !!formState.errors.password,
          }}
        />

        <CustomController<FormValues>
          name="confirmPassword"
          control={control}
          componentFields={{
            componentType: 'passwordTextField',
            label: 'common.confirmPassword',
            placeholder: 'common.enterconfirmPassword',
            helperText: formState.errors.confirmPassword?.message,
            error: !!formState.errors.confirmPassword,
          }}
        />

        <ButtonComp type="submit" variant="contained" color="primary" endIcon={<HowToRegIcon />}>
          common.signUp
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
