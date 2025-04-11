import { RouterItem, RouterWrapper } from '../routerConstant';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import PasswordIcon from '@mui/icons-material/Password';
import UpdateIcon from '@mui/icons-material/Update';

type AuthRouterItems = {
  SIGN_UP: RouterItem;
  SIGN_IN: RouterItem;
  VERIFY_SIGN_IN: RouterItem;
  FORGOT_PASSWORD: RouterItem;
  RESET_PASSWORD: RouterItem;
  [key: string]: RouterItem;
};

const AUTH_ROUTER_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'AUTH_ROUTER_WRAPPER',
  label: 'introductionRoutes.sessionPages',
  icon: AccountCircleIcon,
};

export const AUTH_ROUTER_ITEMS: AuthRouterItems = {
  SIGN_UP: {
    whoCanSeeForPage: ['admin', 'guest'],
    parentKey: 'AUTH_ROUTER_WRAPPER',
    key: 'SIGN_UP',
    label: 'introductionRoutes.signUpPage',
    path: '/sign-up',
    icon: HowToRegIcon,
  },
  SIGN_IN: {
    whoCanSeeForPage: ['admin', 'guest'],
    parentKey: 'AUTH_ROUTER_WRAPPER',
    key: 'SIGN_IN',
    label: 'introductionRoutes.signInPage',
    path: '/sign-in',
    icon: LoginIcon,
  },
  VERIFY_SIGN_IN: {
    whoCanSeeForPage: ['admin', 'guest'],
    parentKey: 'AUTH_ROUTER_WRAPPER',
    key: 'VERIFY_SIGN_IN',
    label: 'introductionRoutes.verifySignInPage',
    path: '/verify-sign-in',
    icon: VerifiedUserIcon,
  },
  FORGOT_PASSWORD: {
    whoCanSeeForPage: ['admin', 'guest'],
    parentKey: 'AUTH_ROUTER_WRAPPER',
    key: 'FORGOT_PASSWORD',
    label: 'introductionRoutes.forgotPasswordPage',
    path: '/forgot-password',
    icon: PasswordIcon,
  },
  RESET_PASSWORD: {
    whoCanSeeForPage: ['admin', 'guest'],
    parentKey: 'AUTH_ROUTER_WRAPPER',
    key: 'RESET_PASSWORD',
    label: 'introductionRoutes.resetPasswordPage',
    path: '/reset-password',
    icon: UpdateIcon,
  },
};

export const AUTH_ROUTER: RouterWrapper = {
  ...AUTH_ROUTER_WRAPPER,
  children: Object.values(AUTH_ROUTER_ITEMS),
};
