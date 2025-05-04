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
import AgListGridPage from '../pages/introduction/customComponents/agGrid/listAgGrid/AgListGridPage';
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
import AuthenticatedLayout from '../layouts/authenticatedLayout/AuthenticatedLayout';
import UnauthenticatedLayout from '../layouts/unauthenticatedLayout/UnauthenticatedLayout';

const allRoutes = prepareAllRoutes();

const componentsIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_TYPOGRAPHY_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TYPOGRAPHY_PAGE.key}>
        <AuthenticatedLayout>
          <TypographyPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_BUTTON_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_BUTTON_PAGE.key}>
        <AuthenticatedLayout>
          <ButtonPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_CHECKBOX_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_CHECKBOX_PAGE.key}>
        <AuthenticatedLayout>
          <CheckboxPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_RADIO_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_RADIO_PAGE.key}>
        <AuthenticatedLayout>
          <RadioPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_ICON_BUTTON_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ICON_BUTTON_PAGE.key}>
        <AuthenticatedLayout>
          <IconButtonPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_TEXTFIELD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TEXTFIELD_PAGE.key}>
        <AuthenticatedLayout>
          <TextFieldPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_DATEPICKER_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_DATEPICKER_PAGE.key}>
        <AuthenticatedLayout>
          <DatePickerPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_SELECT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_SELECT_PAGE.key}>
        <AuthenticatedLayout>
          <SelectPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_ASYNC_SELECT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ASYNC_SELECT_PAGE.key}>
        <AuthenticatedLayout>
          <AsyncSelectPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_ALERT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ALERT_PAGE.key}>
        <AuthenticatedLayout>
          <AlertPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_TOASTIFY_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TOASTIFY_PAGE.key}>
        <AuthenticatedLayout>
          <ToastifyPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },

  {
    path: allRoutes.INTRODUCTION_DIALOG_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_DIALOG_PAGE.key}>
        <AuthenticatedLayout>
          <DialogPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
];

const customComponentsIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_CUSTOM_FILTER_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_CUSTOM_FILTER_PAGE.key}>
        <AuthenticatedLayout>
          <CustomFilterPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_CUSTOM_TABLE_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_CUSTOM_TABLE_PAGE.key}>
        <AuthenticatedLayout>
          <CustomTablePage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_AG_LIST_GRID_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_AG_LIST_GRID_PAGE.key}>
        <AuthenticatedLayout>
          <AgListGridPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_TEXT_EDITOR_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TEXT_EDITOR_PAGE.key}>
        <AuthenticatedLayout>
          <TextEditorPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
];

const simpleProjectsIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_ORDER_PROJECT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_ORDER_PROJECT_PAGE.key}>
        <AuthenticatedLayout>
          <OrderProjectPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
];

const reduxIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_REDUX_STANDARD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_REDUX_STANDARD_PAGE.key}>
        <AuthenticatedLayout>
          <ReduxStandardExamp />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_REDUX_QUERY_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_REDUX_QUERY_PAGE.key}>
        <AuthenticatedLayout>
          <RTKApiExamp />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
];

const rhfIntroductionRouter = [
  {
    path: allRoutes.INTRODUCTION_RHF_STANDARD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_RHF_STANDARD_PAGE.key}>
        <AuthenticatedLayout>
          <RhfStandardExamp />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
];

const authRouter = [
  {
    path: allRoutes.SIGN_UP.path,
    element: (
      <Guard routeKey={allRoutes.SIGN_UP.key}>
        <UnauthenticatedLayout>
          <SignUpPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.SIGN_IN.path,
    element: (
      <Guard routeKey={allRoutes.SIGN_IN.key}>
        <UnauthenticatedLayout>
          <SignInPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.VERIFY_SIGN_IN.path,
    element: (
      <Guard routeKey={allRoutes.VERIFY_SIGN_IN.key}>
        <UnauthenticatedLayout>
          <VerifySignInPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.FORGOT_PASSWORD.path,
    element: (
      <Guard routeKey={allRoutes.FORGOT_PASSWORD.key}>
        <UnauthenticatedLayout>
          <ForgotPasswordPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.RESET_PASSWORD.path,
    element: (
      <Guard routeKey={allRoutes.RESET_PASSWORD.key}>
        <UnauthenticatedLayout>
          <ResetPasswordPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
];

const accessErrorRouter = [
  {
    path: allRoutes.NOT_FOUND.path,
    element: (
      <Guard routeKey={allRoutes.NOT_FOUND.key}>
        <UnauthenticatedLayout>
          <NotFoundPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.SERVER_ERROR.path,
    element: (
      <Guard routeKey={allRoutes.SERVER_ERROR.key}>
        <UnauthenticatedLayout>
          <ServerErrorPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.FORBIDDEN.path,
    element: (
      <Guard routeKey={allRoutes.FORBIDDEN.key}>
        <UnauthenticatedLayout>
          <ForbiddenPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
];

const routerByUserType = [
  {
    path: allRoutes.INTRODUCTION_TEACHER_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_TEACHER_PAGE.key}>
        <AuthenticatedLayout>
          <TeacherPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_STUDENT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_STUDENT_PAGE.key}>
        <AuthenticatedLayout>
          <StudentPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.INTRODUCTION_GUEST_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.INTRODUCTION_GUEST_PAGE.key}>
        <UnauthenticatedLayout>
          <GuestPage />
        </UnauthenticatedLayout>
      </Guard>
    ),
  },
];

const otherRouter = [
  {
    path: allRoutes.DASHBOARD_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.DASHBOARD_PAGE.key}>
        <AuthenticatedLayout>
          <IntroDashboardPage />
        </AuthenticatedLayout>
      </Guard>
    ),
    // errorElement: <ErrorPage />,
    errorElement: (
      <UnauthenticatedLayout>
        <NotFoundPage />
      </UnauthenticatedLayout>
    ),
  },
  {
    path: allRoutes.PRICING_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.PRICING_PAGE.key}>
        <AuthenticatedLayout>
          <IntroPricingPage />
        </AuthenticatedLayout>
      </Guard>
    ),
  },
  {
    path: allRoutes.CONTACT_PAGE.path,
    element: (
      <Guard routeKey={allRoutes.CONTACT_PAGE.key}>
        <AuthenticatedLayout>
          <IntroContactPage />
        </AuthenticatedLayout>
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
