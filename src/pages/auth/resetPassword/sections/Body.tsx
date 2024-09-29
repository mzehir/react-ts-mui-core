import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomController from '../../../../components/reactHookForm/controller/CustomController';
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

        <ButtonComp type="submit" variant="contained" color="success" endIcon={<UpdateIcon />}>
          common.update
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
