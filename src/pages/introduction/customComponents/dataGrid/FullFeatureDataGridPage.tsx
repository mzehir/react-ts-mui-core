import React, { useRef } from 'react';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import BoxComp from '../../../../components/base/box/Box';
import FullFeatureDataGrid from '../../../../components/introduction/dataGrid/fullFeatureDataGrid/FullFeatureDataGrid';
import {
  FullFeatureDataGridProps,
  FullFeatureDataGridRef,
} from '../../../../components/introduction/dataGrid/fullFeatureDataGrid/fullFeatureDataGridTypes';
import { employeeColumns, employeeRows } from './fullFeatureDataGridPageTypes';

const FullFeatureDataGridPage: React.FC = () => {
  const fullFeatureDataGridRef = useRef<FullFeatureDataGridRef>(null);

  const handleSomeAction = () => {
    const dataGrid = fullFeatureDataGridRef.current?.getDataGrid();
    if (dataGrid) {
      console.log(dataGrid);
      console.log(dataGrid.getSelectedRows());
    }
  };

  const onCellClick: FullFeatureDataGridProps['onCellClick'] = (_params, _event, _details) => {
    // Burası doldurulacak
  };
  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.fullFeatureDataGridComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <button
        onClick={() => {
          handleSomeAction();
        }}
      >
        Göster
      </button>

      <BoxComp sx={{ height: 400, width: '100%' }}>
        <FullFeatureDataGrid
          rows={employeeRows}
          columns={employeeColumns}
          ref={fullFeatureDataGridRef}
          onCellClick={onCellClick}
        />
      </BoxComp>
    </>
  );
};

export default FullFeatureDataGridPage;
