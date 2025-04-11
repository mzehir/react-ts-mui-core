import { RouterItem, RouterWrapper } from '../routerConstant';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import LinkOffIcon from '@mui/icons-material/LinkOff';
import BugReportIcon from '@mui/icons-material/BugReport';
import BlockIcon from '@mui/icons-material/Block';

type AuthRouterItems = {
  NOT_FOUND: RouterItem;
  SERVER_ERROR: RouterItem;
  FORBIDDEN: RouterItem;
  [key: string]: RouterItem;
};

const ACCESS_ERRORS_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'ACCESS_ERRORS_WRAPPER',
  label: 'introductionRoutes.errorAndPermissionManagementPages',
  icon: ReportProblemIcon,
};

export const ACCESS_ERRORS_ROUTER_ITEMS: AuthRouterItems = {
  NOT_FOUND: {
    whoCanSeeForPage: ['admin', 'teacher', 'student', 'guest'],
    parentKey: 'ACCESS_ERRORS_WRAPPER',
    key: 'NOT_FOUND',
    label: 'introductionRoutes.notFoundPage',
    path: '/404',
    icon: LinkOffIcon,
  },

  SERVER_ERROR: {
    whoCanSeeForPage: ['admin', 'teacher', 'student', 'guest'],
    parentKey: 'ACCESS_ERRORS_WRAPPER',
    key: 'SERVER_ERROR',
    label: 'introductionRoutes.serverErrorPage',
    path: '/500',
    icon: BugReportIcon,
  },

  FORBIDDEN: {
    whoCanSeeForPage: ['admin', 'teacher', 'student', 'guest'],
    parentKey: 'ACCESS_ERRORS_WRAPPER',
    key: 'FORBIDDEN',
    label: 'introductionRoutes.forbiddenPage',
    path: '/403',
    icon: BlockIcon,
  },
};

export const ACCESS_ERRORS_ROUTER: RouterWrapper = {
  ...ACCESS_ERRORS_WRAPPER,
  children: Object.values(ACCESS_ERRORS_ROUTER_ITEMS),
};
