import { LinkProps } from '@mui/material/Link';

export interface LinkCompProps extends LinkProps {
  isTranslation?: boolean;
}

export const linkCompDefaultProps: LinkCompProps = {
  isTranslation: true,
};
