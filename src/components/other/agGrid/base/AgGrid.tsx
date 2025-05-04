import React from 'react';
import useLanguageContext from '../../../../hooks/useLanguageContext';
import { Language } from '../../../../utils/enums/languages';
import eventBus from '../../../../utils/eventBus/eventBusInstance';
import { getAgGridLocaleText } from '../../../../utils/locale/agGridLocales';
import { AgGridCompProps, agGridCompDefaultProps } from './agGridHelper';
import { AgGridReact } from 'ag-grid-react';
import { FilterOpenedEvent } from 'ag-grid-community';
import { useTheme } from '@mui/material/styles';

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

  const onFilterOpened = (event: FilterOpenedEvent) => {
    eventBus.emit('agGrid:onFilterOpened', {
      type: event.type,
      source: event.source,
      field: event.column.getId() ?? '',
    });
  };

  return (
    <AgGridReact
      {...agGridProps}
      theme={gridTheme}
      localeText={getAgGridLocaleText(language as Language)}
      onFilterOpened={onFilterOpened}
    />
  );
};

AgGridComp.displayName = 'AgGridComp';

export default AgGridComp;
