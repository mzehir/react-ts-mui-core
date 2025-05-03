import { RouterItem, RouterWrapper } from '../../routerConstant';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import FilterListIcon from '@mui/icons-material/FilterList';
import TableChartIcon from '@mui/icons-material/TableChart';
import Grid4x4Icon from '@mui/icons-material/Grid4x4';
import NotesIcon from '@mui/icons-material/Notes';

type CustomComponentRouterItems = {
  INTRODUCTION_CUSTOM_FILTER_PAGE: RouterItem;
  INTRODUCTION_CUSTOM_TABLE_PAGE: RouterItem;
  INTRODUCTION_FULL_FEATURE_AG_GRID_PAGE: RouterItem;
  INTRODUCTION_AG_LIST_GRID_PAGE: RouterItem;
  INTRODUCTION_TEXT_EDITOR_PAGE: RouterItem;
  [key: string]: RouterItem;
};

const CUSTOM_COMPONENT_ROUTER_WRAPPER: Omit<RouterWrapper, 'children'> = {
  whoCanSeeForSidebar: ['admin'],
  key: 'CUSTOM_COMPONENT_ROUTER_WRAPPER',
  label: 'introductionRoutes.customizedComponents',
  icon: StarPurple500Icon,
};

export const CUSTOM_COMPONENT_ROUTER_ITEMS: CustomComponentRouterItems = {
  INTRODUCTION_CUSTOM_FILTER_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'CUSTOM_COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_CUSTOM_FILTER_PAGE',
    label: 'introductionRoutes.customFilter',
    path: '/introduction-custom-filter-component',
    icon: FilterListIcon,
  },
  INTRODUCTION_CUSTOM_TABLE_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'CUSTOM_COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_CUSTOM_TABLE_PAGE',
    label: 'introductionRoutes.customTable',
    path: '/introduction-custom-table-component',
    icon: TableChartIcon,
  },
  INTRODUCTION_FULL_FEATURE_AG_GRID_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'CUSTOM_COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_FULL_FEATURE_AG_GRID_PAGE',
    label: 'introductionRoutes.fullFeatureAgGrid',
    path: '/introduction-full-feature-ag-grid-component',
    icon: Grid4x4Icon,
  },
  INTRODUCTION_AG_LIST_GRID_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'CUSTOM_COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_AG_LIST_GRID_PAGE',
    label: 'introductionRoutes.agGridListGrid',
    path: '/introduction-ag-list-grid-component',
    icon: Grid4x4Icon,
  },
  INTRODUCTION_TEXT_EDITOR_PAGE: {
    whoCanSeeForPage: ['admin'],
    parentKey: 'CUSTOM_COMPONENT_ROUTER_ITEMS',
    key: 'INTRODUCTION_TEXT_EDITOR_PAGE',
    label: 'introductionRoutes.textEditor',
    path: '/introduction-text-editor-component',
    icon: NotesIcon,
  },
};

export const CUSTOM_COMPONENT_ROUTER: RouterWrapper = {
  ...CUSTOM_COMPONENT_ROUTER_WRAPPER,
  children: Object.values(CUSTOM_COMPONENT_ROUTER_ITEMS),
};
