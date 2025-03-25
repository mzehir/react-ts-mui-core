import { createBrowserRouter } from 'react-router-dom';
import { prepareAllRoutes } from './routerConstant';
// Pages Introduction
import IntroDashboardPage from '../pages/introduction/pages/dashboard/IntroDashboard';
import IntroPricingPage from '../pages/introduction/pages/pricing/IntroPricing';
import IntroContactPage from '../pages/introduction/pages/contact/IntroContact';
// Components Introduction
import TypographyPage from '../pages/introduction/components/typography/TypographyPage';
import ButtonPage from '../pages/introduction/components/button/ButtonPage';
import CheckboxPage from '../pages/introduction/components/checkbox/CheckboxPage';
import RadioPage from '../pages/introduction/components/radio/RadioPage';
import IconButtonPage from '../pages/introduction/components/iconButton/IconButtonPage';
import SelectPage from '../pages/introduction/components/select/SelectPage';
import AsyncSelectPage from '../pages/introduction/components/asyncSelect/AsyncSelectPage';
import AlertPage from '../pages/introduction/components/alert/AlertPage';
import ToastifyPage from '../pages/introduction/components/toastify/ToastifyPage';
import TextFieldPage from '../pages/introduction/components/textField/TextFieldPage';
import DatePickerPage from '../pages/introduction/components/datePicker/DatePickerPage';
import DialogPage from '../pages/introduction/components/dialog/DialogPage';
// Custom Components Introduction
import CustomFilterPage from '../pages/introduction/customComponents/customFilter/CustomFilterPage';
import CustomTablePage from '../pages/introduction/customComponents/table/CustomTablePage';
import FullFeatureDataGridPage from '../pages/introduction/customComponents/dataGrid/FullFeatureDataGridPage';
import TextEditorPage from '../pages/introduction/customComponents/textEditor/TextEditorPage';
// Custom Components Introduction
import OrderProjectPage from '../pages/introduction/simpleProjects/orderProject/OrderProjectPage';
// Redux Introduction
import ReduxStandardExamp from '../pages/introduction/redux/ReduxStandardExamp';
import RTKApiExamp from '../pages/introduction/redux/RTKApiExamp';
// RHF Introduction
import RhfStandardExamp from '../pages/introduction/rhf/RhfStandardExamp';
// Auth
import SignUpPage from '../pages/auth/signUp/SignUp';
import SignInPage from '../pages/auth/signIn/SignIn';
import VerifySignInPage from '../pages/auth/verifySignIn/VerifySignIn';
import ForgotPasswordPage from '../pages/auth/forgotPassword/ForgotPassword';
import ResetPasswordPage from '../pages/auth/resetPassword/ResetPassword';
// Access & Errors
import NotFoundPage from '../pages/auth/NotFoundPage';
import ServerErrorPage from '../pages/auth/ServerErrorPage';
import ForbiddenPage from '../pages/auth/ForbiddenPage';
//// import ErrorPage from '../pages/auth/ErrorPage';
// Router By User Type
import TeacherPage from '../pages/introduction/routerByUserType/TeacherPage';
import StudentPage from '../pages/introduction/routerByUserType/StudentPage';
import GuestPage from '../pages/introduction/routerByUserType/GuestPage';
// Guard
import Guard from '../guards/Guard';
// Layout
import DefaultLayout from '../layouts/DefaultLayout';
import AuthLayout from '../layouts/AuthLayout';

const allRoutes = prepareAllRoutes();

const componentsIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_TYPOGRAPHY_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TYPOGRAPHY_PAGE.key}>
        <DefaultLayout>
          <TypographyPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_BUTTON_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_BUTTON_PAGE.key}>
        <DefaultLayout>
          <ButtonPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_CHECKBOX_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_CHECKBOX_PAGE.key}>
        <DefaultLayout>
          <CheckboxPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_RADIO_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_RADIO_PAGE.key}>
        <DefaultLayout>
          <RadioPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_ICON_BUTTON_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ICON_BUTTON_PAGE.key}>
        <DefaultLayout>
          <IconButtonPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_TEXTFIELD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TEXTFIELD_PAGE.key}>
        <DefaultLayout>
          <TextFieldPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_DATEPICKER_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_DATEPICKER_PAGE.key}>
        <DefaultLayout>
          <DatePickerPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_SELECT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_SELECT_PAGE.key}>
        <DefaultLayout>
          <SelectPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_ASYNC_SELECT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ASYNC_SELECT_PAGE.key}>
        <DefaultLayout>
          <AsyncSelectPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_ALERT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ALERT_PAGE.key}>
        <DefaultLayout>
          <AlertPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_TOASTIFY_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TOASTIFY_PAGE.key}>
        <DefaultLayout>
          <ToastifyPage />
        </DefaultLayout>
      </Guard>
    ),
  },

  {
    path: allRoutes.INTRODUCTION_DIALOG_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_DIALOG_PAGE.key}>
        <DefaultLayout>
          <DialogPage />
        </DefaultLayout>
      </Guard>
    ),
  },
];

const customComponentsIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_CUSTOM_FILTER_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_CUSTOM_FILTER_PAGE.key}>
        <DefaultLayout>
          <CustomFilterPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_CUSTOM_TABLE_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_CUSTOM_TABLE_PAGE.key}>
        <DefaultLayout>
          <CustomTablePage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_FULL_FEATURE_DATA_GRID_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_FULL_FEATURE_DATA_GRID_PAGE.key}>
        <DefaultLayout>
          <FullFeatureDataGridPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_TEXT_EDITOR_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TEXT_EDITOR_PAGE.key}>
        <DefaultLayout>
          <TextEditorPage />
        </DefaultLayout>
      </Guard>
    ),
  },
];

const simpleProjectsIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_ORDER_PROJECT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ORDER_PROJECT_PAGE.key}>
        <DefaultLayout>
          <OrderProjectPage />
        </DefaultLayout>
      </Guard>
    ),
  },
];

const reduxIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_REDUX_STANDARD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_REDUX_STANDARD_PAGE.key}>
        <DefaultLayout>
          <ReduxStandardExamp />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_REDUX_QUERY_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_REDUX_QUERY_PAGE.key}>
        <DefaultLayout>
          <RTKApiExamp />
        </DefaultLayout>
      </Guard>
    ),
  },
];

const rhfIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_RHF_STANDARD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_RHF_STANDARD_PAGE.key}>
        <DefaultLayout>
          <RhfStandardExamp />
        </DefaultLayout>
      </Guard>
    ),
  },
];

const authRouter = [
  {
    path: allRoutes.SIGN_UP.path,
    element: (
      <Guard routeKey={allRoutes.SIGN_UP.key}>
        <AuthLayout>
          <SignUpPage />
        </AuthLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.SIGN_IN.path,
    element: (
      <Guard routeKey={allRoutes.SIGN_IN.key}>
        <AuthLayout>
          <SignInPage />
        </AuthLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.VERIFY_SIGN_IN.path,
    element: (
      <Guard routeKey={allRoutes.VERIFY_SIGN_IN.key}>
        <AuthLayout>
          <VerifySignInPage />
        </AuthLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.FORGOT_PASSWORD.path,
    element: (
      <Guard routeKey={allRoutes.FORGOT_PASSWORD.key}>
        <AuthLayout>
          <ForgotPasswordPage />
        </AuthLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.RESET_PASSWORD.path,
    element: (
      <Guard routeKey={allRoutes.RESET_PASSWORD.key}>
        <AuthLayout>
          <ResetPasswordPage />
        </AuthLayout>
      </Guard>
    ),
  },
];

const accessErrorRouter = [
  {
    path: allRoutes.NOT_FOUND.path,
    element: (
      <Guard routeKey={allRoutes.NOT_FOUND.key}>
        <AuthLayout>
          <NotFoundPage />
        </AuthLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.SERVER_ERROR.path,
    element: (
      <Guard routeKey={allRoutes.SERVER_ERROR.key}>
        <AuthLayout>
          <ServerErrorPage />
        </AuthLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.FORBIDDEN.path,
    element: (
      <Guard routeKey={allRoutes.FORBIDDEN.key}>
        <AuthLayout>
          <ForbiddenPage />
        </AuthLayout>
      </Guard>
    ),
  },
];

const routerByUserType = [
  {
    path: allRoutes.INTRODUCTION_TEACHER_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TEACHER_PAGE.key}>
        <DefaultLayout>
          <TeacherPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_STUDENT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_STUDENT_PAGE.key}>
        <DefaultLayout>
          <StudentPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_GUEST_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_GUEST_PAGE.key}>
        <AuthLayout>
          <GuestPage />
        </AuthLayout>
      </Guard>
    ),
  },
];

const otherRouter = [
  {
    path: allRoutes.DASHBOARD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.DASHBOARD_PAGE.key}>
        <DefaultLayout>
          <IntroDashboardPage />
        </DefaultLayout>
      </Guard>
    ),
    // errorElement: <ErrorPage />,
    errorElement: (
      <AuthLayout>
        <NotFoundPage />
      </AuthLayout>
    ),
  },
  {
    path: allRoutes.PRICING_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.PRICING_PAGE.key}>
        <DefaultLayout>
          <IntroPricingPage />
        </DefaultLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.CONTACT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.CONTACT_PAGE.key}>
        <DefaultLayout>
          <IntroContactPage />
        </DefaultLayout>
      </Guard>
    ),
  },
];

export const router = createBrowserRouter([
  ...componentsIntroductionRouter,
  ...customComponentsIntroductionRouter,
  ...simpleProjectsIntroductionRouter,
  ...reduxIntroductionRouter,
  ...rhfIntroductionRouter,
  ...otherRouter,
  ...authRouter,
  ...accessErrorRouter,
  ...routerByUserType,
]);
