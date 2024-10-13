import React from 'react';
import BoxComp from '../../../../../base/box/Box';
import AlertComp from '../../../../../base/alert/Alert';
import GridComp from '../../../../../base/grid/Grid';
import ThemeItem from './ThemeItem';
import { ThemeType } from '../../../../../../utils/enums/theme';

const ThemeSettings: React.FC = () => {
  return (
    <React.Fragment>
      <BoxComp px={4} my={3}>
        <AlertComp icon={false} severity="info">
          component.chooseTheme
        </AlertComp>
      </BoxComp>

      <BoxComp px={4} my={3}>
        <GridComp container spacing={3}>
          <ThemeItem title="Default" themeVariant={ThemeType.light} />
          <ThemeItem title="Dark" themeVariant={ThemeType.dark} />
        </GridComp>
      </BoxComp>
    </React.Fragment>
  );
};

export default ThemeSettings;
