import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import CustomController from '../../../../components/other/reactHookForm/controller/CustomController';
import { schema, defaultValues, FormValues } from '../helper';
import BoxComp from '../../../../components/base/box/Box';
import ButtonComp from '../../../../components/base/button/Button';
import SendIcon from '@mui/icons-material/Send';

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

        <ButtonComp type="submit" variant="contained" endIcon={<SendIcon />}>
          button.send
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
