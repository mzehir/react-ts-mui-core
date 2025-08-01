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
    //! 001DeletedStart
    whoCanSeeForPage: ['admin', 'teacher', 'student', 'guest'],
    //! 001DeletedFinish
    //! 002ActivatedStart
    // whoCanSeeForPage: ['admin', 'guest'],
    //! 002ActivatedFinish
    parentKey: 'ACCESS_ERRORS_WRAPPER',
    key: 'NOT_FOUND',
    label: 'introductionRoutes.notFoundPage',
    path: '/404',
    icon: LinkOffIcon,
  },

  SERVER_ERROR: {
    //! 003DeletedStart
    whoCanSeeForPage: ['admin', 'teacher', 'student', 'guest'],
    //! 003DeletedFinish
    //! 004ActivatedStart
    // whoCanSeeForPage: ['admin', 'guest'],
    //! 004ActivatedFinish
    parentKey: 'ACCESS_ERRORS_WRAPPER',
    key: 'SERVER_ERROR',
    label: 'introductionRoutes.serverErrorPage',
    path: '/500',
    icon: BugReportIcon,
  },

  FORBIDDEN: {
    //! 005DeletedStart
    whoCanSeeForPage: ['admin', 'teacher', 'student', 'guest'],
    //! 005DeletedFinish
    //! 006ActivatedStart
    // whoCanSeeForPage: ['admin', 'guest'],
    //! 006ActivatedFinish
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
