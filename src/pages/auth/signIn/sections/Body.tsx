import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { AuthState, setAuthFields } from '../../../../redux/slices/authSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { prepareAllRoutes } from '../../../../router/routerConstant';
import { schema, defaultValues, FormValues } from '../helper';
import CustomController from '../../../../components/other/reactHookForm/controller/CustomController';
import BoxComp from '../../../../components/base/box/Box';
import ButtonComp from '../../../../components/base/button/Button';
import LoginIcon from '@mui/icons-material/Login';

import fakeUsersData from '../../../../db/users.json';

const BodySection: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allRoutes = prepareAllRoutes();

  const { handleSubmit, control, formState } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    const users = fakeUsersData as AuthState[];
    const authUser = users.find((user) => user.email === data.emailAddress);

    if (authUser) {
      dispatch(
        setAuthFields({
          userType: authUser?.userType,
          token: authUser?.token,
          name: authUser?.name,
          surname: authUser?.surname,
          phone: authUser?.phone,
          email: authUser?.email,
        }),
      );

      setTimeout(() => {
        navigate(allRoutes.DASHBOARD_PAGE.path);
      }, 100);
    }
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

        <CustomController<FormValues>
          name="password"
          control={control}
          componentFields={{
            componentType: 'passwordTextField',
            label: 'input.password',
            placeholder: 'input.passwordPlaceholder',
            helperText: formState.errors.password?.message,
            error: !!formState.errors.password,
            disabled: true,
          }}
        />

        <ButtonComp type="submit" variant="contained" color="primary" endIcon={<LoginIcon />}>
          button.signIn
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
