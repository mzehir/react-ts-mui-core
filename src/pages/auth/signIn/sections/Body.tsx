import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAuthFields, setAuthFieldsPayload } from '../../../../redux/slices/authSlice';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { prepareAllRoutes } from '../../../../router/routerConstant';
import fakeUsersData from '../../../../db/users.json';
import CustomController from '../../../../components/reactHookForm/controller/CustomController';
import { schema, defaultValues, FormValues } from '../helper';
import BoxComp from '../../../../components/base/box/Box';
import ButtonComp from '../../../../components/base/button/Button';
import LoginIcon from '@mui/icons-material/Login';

const BodySection: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allRoutes = prepareAllRoutes();

  const { handleSubmit, control, formState } = useForm<FormValues>({
    defaultValues,
    resolver: yupResolver(schema),
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    const users = fakeUsersData as setAuthFieldsPayload[];
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
            label: 'common.emailAddress',
            placeholder: 'common.enterEmail',
            helperText: formState.errors.emailAddress?.message,
            error: !!formState.errors.emailAddress,
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
            disabled: true,
          }}
        />

        <ButtonComp type="submit" variant="contained" color="primary" endIcon={<LoginIcon />}>
          common.signIn
        </ButtonComp>
      </BoxComp>
    </form>
  );
};

export default BodySection;
