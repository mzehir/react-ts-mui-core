import { TypographyProps } from '@mui/material/Typography';

export interface TypographyCompProps extends TypographyProps {
  isTranslation?: boolean;
}

export const typographyCompDefaultProps: TypographyCompProps = {
  isTranslation: true,
};
