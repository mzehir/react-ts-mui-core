import { ListItemTextProps } from '@mui/material/ListItemText';

export interface ListItemTextCompProps extends ListItemTextProps {
  isTranslation?: boolean;
  isPrimaryTranslation?: boolean;
}

export const listItemTextCompDefaultProps: ListItemTextCompProps = {
  isTranslation: true,
  isPrimaryTranslation: false,
};
