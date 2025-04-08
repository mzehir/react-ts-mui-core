import React from 'react';
import AgGridComp from '../../custom/agGrid/AgGrid';
import { AgGridCompColDef } from '../../custom/agGrid/agGridHelper';

const FullFeatureAgGrid: React.FC = () => {
  const [rowData] = React.useState([
    { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
    { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
    { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
    { make: 'Mercedes', model: 'EQA', price: 48890, electric: true },
    { make: 'Fiat', model: '500', price: 15774, electric: false },
    { make: 'Nissan', model: 'Juke', price: 20675, electric: false },
  ]);

  const [colDefs] = React.useState<AgGridCompColDef[]>([
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
    { field: 'electric' },
  ]);

  const defaultColDef: AgGridCompColDef = {
    flex: 1,
  };

  return <AgGridComp columnDefs={colDefs} rowData={rowData} defaultColDef={defaultColDef} />;
};

export default FullFeatureAgGrid;
