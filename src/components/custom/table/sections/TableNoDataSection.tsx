import React from 'react';
import BoxComp from '../../../base/box/Box';
import AlertComp from '../../../base/alert/Alert';
import AlertTitleComp from '../../../base/alertTitle/AlertTitle';
import { TableAddButton } from '../Components';

interface TableNoDataSectionProps {
  onAddClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const TableNoDataSection: React.FC<TableNoDataSectionProps> = ({ onAddClick }) => {
  return (
    <BoxComp
      display={'flex'}
      flexDirection={'column'}
      justifyContent={'center'}
      alignItems={'center'}
      style={{
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)',
        padding: '50px',
      }}
    >
      <AlertComp severity="info" variant="filled" color="info">
        <AlertTitleComp>component.information</AlertTitleComp>
        component.noDataNoShow
        {onAddClick && (
          <BoxComp display={'flex'} justifyContent={'end'} marginTop={'15px'}>
            <TableAddButton
              fullWidth={true}
              onClick={(event) => {
                onAddClick(event);
              }}
            />
          </BoxComp>
        )}
      </AlertComp>
    </BoxComp>
  );
};

export default TableNoDataSection;
