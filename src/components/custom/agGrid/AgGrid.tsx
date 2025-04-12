import React from 'react';

import { useTheme } from '@mui/material/styles';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { Language } from '../../../utils/enums/languages';
import { getAgGridLocaleText } from '../../../utils/locale/agGridLocales';
import { AgGridCompProps, agGridCompDefaultProps } from './agGridHelper';
import { AgGridReact } from 'ag-grid-react';

interface GridThemeParams {
  rowBorder?: { style: string; width: number };
  columnBorder?: { style: string; width: number };
  borderColor?: string;
}

const AgGridComp = (props: AgGridCompProps) => {
  const { verticalLine, horizontalLine, ...agGridProps } = { ...agGridCompDefaultProps, ...props };

  const theme = useTheme();
  const { language } = useLanguageContext();

  const gridTheme = React.useMemo(() => {
    const borderColor = theme.palette.divider;

    const params: GridThemeParams = {};

    if (horizontalLine) {
      params.rowBorder = { style: 'solid', width: 1 };
    }

    if (verticalLine) {
      params.columnBorder = { style: 'solid', width: 1 };
    }

    if (horizontalLine || verticalLine) {
      params.borderColor = borderColor;
    }

    return theme.agGrid?.theme.withParams(params);
  }, [theme, verticalLine, horizontalLine]);

  return <AgGridReact {...agGridProps} theme={gridTheme} localeText={getAgGridLocaleText(language as Language)} />;
};

AgGridComp.displayName = 'AgGridComp';

export default AgGridComp;
