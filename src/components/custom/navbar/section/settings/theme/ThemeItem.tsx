import React from 'react';
import useThemeContext from '../../../../../../hooks/useThemeContext';
import { ThemeType } from '../../../../../../utils/enums/theme';
import GridComp from '../../../../../base/grid/Grid';
import TypographyComp from '../../../../../base/typography/Typography';
import BoxComp from '../../../../../base/box/Box';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { grey } from '@mui/material/colors';

interface ThemeItemProps {
  title: string;
  themeVariant: ThemeType;
}

const Button = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== 'active',
})<{ active: boolean }>`
  background: ${(props) => props.theme.palette.background.paper};
  height: 80px;
  border-radius: 0.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.825rem;
  position: relative;
  border: 1px solid
    ${(props) => (!props.active ? props.theme.palette.action.selected : props.theme.palette.action.active)};
`;

const ButtonInner = styled(BoxComp, {
  shouldForwardProp: (prop) => prop !== 'selectedTheme',
})<{ selectedTheme: ThemeType }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  box-shadow: 0 0 0 1px ${(props) => props.theme.palette.action.selected};

  ${(props) =>
    props.selectedTheme === ThemeType.light &&
    css`
      background: linear-gradient(-45deg, #23303f 50%, ${grey[100]} 0);
    `}
  ${(props) =>
    props.selectedTheme === ThemeType.dark &&
    css`
      background: #23303f;
    `}
`;

const ThemeItem: React.FC<ThemeItemProps> = ({ title, themeVariant }) => {
  const { theme, setTheme } = useThemeContext();

  return (
    <GridComp item xs={6}>
      <Button
        active={themeVariant === theme}
        onClick={() => {
          setTheme(themeVariant);
        }}
      >
        <ButtonInner selectedTheme={themeVariant} />
      </Button>
      <TypographyComp textAlign={'center'} variant="subtitle2" gutterBottom>
        {title}
      </TypographyComp>
    </GridComp>
  );
};

export default ThemeItem;
