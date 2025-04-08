import { useTheme } from '@mui/material/styles';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { Language } from '../../../utils/enums/languages';
import { getAgGridLocaleText } from '../../../utils/locale/agGridLocales';
import { AgGridCompProps, agGridCompDefaultProps } from './agGridHelper';
import { AgGridReact } from 'ag-grid-react';

const AgGridComp = (props: AgGridCompProps) => {
  const { ...agGridProps } = { ...agGridCompDefaultProps, ...props };

  const theme = useTheme();
  const { language } = useLanguageContext();

  return (
    <AgGridReact {...agGridProps} theme={theme.agGrid?.theme} localeText={getAgGridLocaleText(language as Language)} />
  );
};

AgGridComp.displayName = 'AgGridComp';

export default AgGridComp;
