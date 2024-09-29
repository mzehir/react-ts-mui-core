import { BaseSelectProps } from '@mui/material/Select';

export interface Item {
  value: string | number;
  label: string;
}

export interface SelectCompProps extends BaseSelectProps {
  isLabelTranslation?: boolean;
  isItemTranslation?: boolean;
  items: Item[];
}

export const selectCompDefaultProps: SelectCompProps = {
  isLabelTranslation: true,
  isItemTranslation: false,
  items: [],
};
