import { RouterItem, RouterWrapper } from '../../routerConstant';
import DynamicFormIcon from '@mui/icons-material/DynamicForm';
import AppsIcon from '@mui/icons-material/Apps';

type RHFRouterItems = {
  INTRODUCTION_RHF_STANDARD_PAGE: RouterItem;
  [key: string]: RouterItem;
};

const RHF_ROUTER_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'RHF_ROUTER_WRAPPER',
  label: 'introductionRoutes.reactHookForm',
  icon: DynamicFormIcon,
};

export const RHF_ROUTER_ITEMS: RHFRouterItems = {
  INTRODUCTION_RHF_STANDARD_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'RHF_ROUTER_ITEMS',
    key: 'INTRODUCTION_RHF_STANDARD_PAGE',
    label: 'introductionRoutes.simpleExample',
    path: '/introduction-rhf-standard-example',
    icon: AppsIcon,
  },
};

export const RHF_ROUTER: RouterWrapper = {
  ...RHF_ROUTER_WRAPPER,
  children: Object.values(RHF_ROUTER_ITEMS),
};
