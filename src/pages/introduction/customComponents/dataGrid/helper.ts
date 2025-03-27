import styled from '@emotion/styled';
import { css } from '@emotion/react';
import CardComp from '../../../../components/base/card/Card';

export const hexToRgba = (hex: string, alpha: number) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

export const EventHandlerCard = styled(CardComp)`
  padding: ${(props) => props.theme.spacing(3)};

  ${(props) =>
    props.theme.palette.mode !== 'dark' &&
    css`
      background: ${hexToRgba(props.theme.palette.primary.main, 0.125)};
      color: ${props.theme.palette.primary.main};
    `}
`;
