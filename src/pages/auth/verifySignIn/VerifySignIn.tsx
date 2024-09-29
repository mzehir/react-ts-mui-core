// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import { useForm, SubmitHandler } from 'react-hook-form';
// import { useVerifySignInMutation } from '../../../redux/slices/services/defaultApiSlices';
// import CustomController from '../../../components/reactHookForm/controller/CustomController';
// import { prepareAllRoutes } from '../../../router/routerConstant';
// import BoxComp from '../../../components/base/box/Box';
// import SaveButton from '../../../components/custom/buttons/SaveButton';

// interface FormValues {
//   code: string;
//   token: string;
// }

// const defaultValues: FormValues = {
//   code: '',
//   token: '',
// };

// const VerifySignInPage: React.FC = () => {
//   const location = useLocation();
//   const searchParams = new URLSearchParams(location.search);
//   const token = searchParams.get('token');

//   const navigate = useNavigate();
//   const allRoutes = prepareAllRoutes();

//   const [verifySignIn, { isLoading }] = useVerifySignInMutation();
//   const { handleSubmit, control } = useForm<FormValues>({ defaultValues });

//   const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
//     verifySignIn({
//       code: data.code,
//       token: token || '',
//       callback: () => navigate(allRoutes.DASHBOARD_PAGE.path),
//     }).unwrap();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(formHandleSubmit)}>
//         <BoxComp display={'flex'} flexDirection={'column'} gap={'15px'}>
//           <CustomController<FormValues>
//             name="code"
//             control={control}
//             componentFields={{
//               componentType: 'textField',
//               label: 'common.code',
//             }}
//           />

//           <SaveButton disabled={isLoading} />
//         </BoxComp>
//       </form>
//     </div>
//   );
// };

// export default VerifySignInPage;

import React from 'react';
import styled from '@emotion/styled';
import LogoSection from './sections/Logo';
import HeaderSection from './sections/Header';
import BodySection from './sections/Body';
import PaperComp from '../../../components/base/paper/Paper';

const Wrapper = styled(PaperComp)`
  width: 100%;
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const VerifySignInPage: React.FC = () => {
  return (
    <React.Fragment>
      <LogoSection />

      <Wrapper>
        <HeaderSection />

        <br />

        <BodySection />
      </Wrapper>
    </React.Fragment>
  );
};

export default VerifySignInPage;
