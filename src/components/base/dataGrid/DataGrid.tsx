import useLanguageContext from '../../../hooks/useLanguageContext';
import { getLocaleText } from '../../../utils/locale/dataGridLocales';
import { Language } from '../../../utils/enums/languages';
import { DataGridCompProps, dataGridCompDefaultProps } from './dataGridHelper';
import { DataGrid } from '@mui/x-data-grid';

const DataGridComp = (props: DataGridCompProps) => {
  const { ...dataGridProps } = { ...dataGridCompDefaultProps, ...props };
  const { language } = useLanguageContext();

  return <DataGrid {...dataGridProps} localeText={getLocaleText(language as Language)} />;
};

DataGridComp.displayName = 'DataGridComp';

export default DataGridComp;
