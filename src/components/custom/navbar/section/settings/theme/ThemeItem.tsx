import React from 'react';
import useThemeContext from '../../../../../../hooks/useThemeContext';
import { ThemeType } from '../../../../../../utils/enums/theme';
import GridComp from '../../../../../base/grid/Grid';
import TypographyComp from '../../../../../base/typography/Typography';
import BoxComp from '../../../../../base/box/Box';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import styled from '@emotion/styled';

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
        {themeVariant === ThemeType.light && <LightModeIcon fontSize="large" />}
        {themeVariant === ThemeType.dark && <DarkModeIcon fontSize="large" />}
      </Button>
      <TypographyComp textAlign={'center'} variant="subtitle2" gutterBottom>
        {title}
      </TypographyComp>
    </GridComp>
  );
};

export default ThemeItem;
