import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomController from '../../../../components/reactHookForm/controller/CustomController';
import { schema, defaultValues, FormValues } from '../helper';
import BoxComp from '../../../../components/base/box/Box';
import ButtonComp from '../../../../components/base/button/Button';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

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
          name="code"
          control={control}
          componentFields={{
            componentType: 'textField',
            label: 'input.code',
            helperText: formState.errors.code?.message,
            error: !!formState.errors.code,
          }}
        />

        <ButtonComp type="submit" variant="contained" color="success" endIcon={<VerifiedUserIcon />}>
          button.verify
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
