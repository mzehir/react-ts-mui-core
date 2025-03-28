import { DataGrid } from '@mui/x-data-grid';
import { DataGridCompProps, dataGridCompDefaultProps } from './dataGridHelper';

const DataGridComp = (props: DataGridCompProps) => {
  const { ...dataGridProps } = { ...dataGridCompDefaultProps, ...props };

  return <DataGrid disableDensitySelector {...dataGridProps} />;
};

DataGridComp.displayName = 'DataGridComp';

export default DataGridComp;
