import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomController from '../../../../components/other/reactHookForm/controller/CustomController';
import { schema, defaultValues, FormValues } from '../helper';
import BoxComp from '../../../../components/base/box/Box';
import ButtonComp from '../../../../components/base/button/Button';
import UpdateIcon from '@mui/icons-material/Update';

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

        <ButtonComp type="submit" variant="contained" color="success" endIcon={<UpdateIcon />}>
          button.update
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
