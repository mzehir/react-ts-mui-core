import { BaseSelectProps } from '@mui/material/Select';

export interface Item {
  value: string | number;
  label: string;
}

export interface AsyncSelectCompProps extends BaseSelectProps {
  isLabelTranslation?: boolean;
  isItemTranslation?: boolean;
  shouldFetchOnEveryOpenMenu?: boolean;
  fetchItemsData: () => Promise<Item[]>;
  fetchValueItemsData: (value: unknown) => Promise<Item[]>;
  isSearhAndFilter?: boolean;
  menuContainerSelector?: string;
}

export const asyncSelectCompDefaultProps: AsyncSelectCompProps = {
  isLabelTranslation: true,
  isItemTranslation: false,
  shouldFetchOnEveryOpenMenu: false,
  fetchItemsData: async () => Promise.resolve([]),
  fetchValueItemsData: async () => Promise.resolve([]),
  isSearhAndFilter: false,
};
