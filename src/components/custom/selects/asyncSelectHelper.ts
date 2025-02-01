import { BaseSelectProps } from '@mui/material/Select';

export interface Item {
  value: string | number;
  label: string;
}

export interface AsyncSelectCompProps extends BaseSelectProps {
  isLabelTranslation?: boolean;
  shouldFetchOnEveryOpenMenu?: boolean;
  fetchItemsData: () => Promise<Item[]>;
  fetchValueItemsData: (value: unknown) => Promise<Item[]>;
}

export const asyncSelectCompDefaultProps: AsyncSelectCompProps = {
  isLabelTranslation: true,
  shouldFetchOnEveryOpenMenu: false,
  fetchItemsData: async () => Promise.resolve([]),
  fetchValueItemsData: async () => Promise.resolve([]),
};
