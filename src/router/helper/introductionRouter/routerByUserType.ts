import { RouterItem, RouterWrapper } from '../../routerConstant';
import GroupsIcon from '@mui/icons-material/Groups';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';

type routerByUserTypeItems = {
  INTRODUCTION_GUEST_PAGE: RouterItem;
  INTRODUCTION_TEACHER_PAGE: RouterItem;
  INTRODUCTION_STUDENT_PAGE: RouterItem;
  [key: string]: RouterItem;
};

const ROUTER_BY_USER_TYPE_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin', 'teacher', 'student'],
  key: 'ROUTER_BY_USER_TYPE_WRAPPER',
  label: 'introductionRoutes.pagesByUserType',
  icon: GroupsIcon,
};

export const ROUTER_BY_USER_TYPE_ITEMS: routerByUserTypeItems = {
  INTRODUCTION_GUEST_PAGE: {
    whoCanSeeForSidebar: ['admin', 'guest'],
    whoCanSeeForPage: ['admin', 'guest'],
    parentKey: 'ROUTER_BY_USER_TYPE_ITEMS',
    key: 'INTRODUCTION_GUEST_PAGE',
    label: 'introductionRoutes.guestType',
    path: '/introduction-guest-page',
    icon: WavingHandIcon,
  },

  INTRODUCTION_TEACHER_PAGE: {
    whoCanSeeForSidebar: ['admin', 'teacher'],
    whoCanSeeForPage: ['admin', 'teacher'],
    parentKey: 'ROUTER_BY_USER_TYPE_ITEMS',
    key: 'INTRODUCTION_TEACHER_PAGE',
    label: 'introductionRoutes.teacherType',
    path: '/introduction-teacher-page',
    icon: VolunteerActivismIcon,
  },

  INTRODUCTION_STUDENT_PAGE: {
    whoCanSeeForSidebar: ['admin', 'student'],
    whoCanSeeForPage: ['admin', 'student'],
    parentKey: 'ROUTER_BY_USER_TYPE_ITEMS',
    key: 'INTRODUCTION_STUDENT_PAGE',
    label: 'introductionRoutes.studentType',
    path: '/introduction-student-page',
    icon: FamilyRestroomIcon,
  },
};

export const ROUTER_BY_USER_TYPE: RouterWrapper = {
  ...ROUTER_BY_USER_TYPE_WRAPPER,
  children: Object.values(ROUTER_BY_USER_TYPE_ITEMS),
};
