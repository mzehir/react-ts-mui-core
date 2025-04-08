import React from 'react';
import { useTheme } from '@mui/material/styles';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { Language } from '../../../utils/enums/languages';
import { getAgGridLocaleText } from '../../../utils/locale/agGridLocales';

import type { ColDef } from 'ag-grid-community';
import { AgGridReact } from 'ag-grid-react';

interface IRow {
  make: string;
  model: string;
  price: number;
  electric: boolean;
}

const AgGridComp: React.FC = () => {
  const theme = useTheme();
  const { language } = useLanguageContext();

  const [rowData] = React.useState<IRow[]>([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  const [colDefs] = React.useState<ColDef<IRow>[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ]);

  const defaultColDef: ColDef = {
    flex: 1,
  };

  return (
    <AgGridReact
      theme={theme.agGrid?.theme}
      localeText={getAgGridLocaleText(language as Language)}
      rowData={rowData}
      columnDefs={colDefs}
      defaultColDef={defaultColDef}
    />
  );
};

export default AgGridComp;
