import React from 'react';
import PaperComp from '../../base/paper/Paper';
import BoxComp from '../../base/box/Box';
import TableContainerComp from '../../base/tableContainer/TableContainer';
import TableComp from '../../base/table/Table';
import TableHeadSection from './sections/TableHeadSection';
import TableBodySection from './sections/TableBodySection';
import TableFooterSection from './sections/TableFooterSection';
import TableNoDataSection from './sections/TableNoDataSection';
import { TableAddButton } from './Components';
import { CustomTableProps } from './customTableTypes';
import './customTable.css';

const CustomTable = <T extends object>({
  cells,
  rows,
  stickyColumnWidth = 150,
  columnVerticalLinesVisible = true,
  summaryOpen = true,
  onEditClick,
  onViewClick,
  onDeleteClick,
  onAddClick,
}: CustomTableProps<T>): JSX.Element => {
  const [stickyColumnVisible] = React.useState(onEditClick || onViewClick || onDeleteClick ? true : false);

  return rows && rows.length > 0 ? (
    <BoxComp
      display={'flex'}
      flexDirection={'column'}
      gap={'5px'}
      style={{
        boxShadow: '0px -4px 10px rgba(0, 0, 0, 0.2)',
        paddingTop: '5px',
      }}
    >
      {onAddClick && (
        <BoxComp display={'flex'} justifyContent={'end'}>
          <TableAddButton
            onClick={(event) => {
              onAddClick(event);
            }}
          />
        </BoxComp>
      )}

      <TableContainerComp component={PaperComp} className="custom-scrollbar">
        <TableComp>
          <TableHeadSection
            cells={cells}
            columnVerticalLinesVisible={columnVerticalLinesVisible}
            stickyColumnVisible={stickyColumnVisible}
            stickyColumnWidth={stickyColumnWidth}
          />

          <TableBodySection
            cells={cells}
            rows={rows}
            columnVerticalLinesVisible={columnVerticalLinesVisible}
            stickyColumnVisible={stickyColumnVisible}
            onEditClick={onEditClick}
            onViewClick={onViewClick}
            onDeleteClick={onDeleteClick}
          />

          {summaryOpen && (
            <TableFooterSection
              cells={cells}
              rows={rows}
              columnVerticalLinesVisible={columnVerticalLinesVisible}
              stickyColumnVisible={stickyColumnVisible}
              stickyColumnWidth={stickyColumnWidth}
            />
          )}
        </TableComp>
      </TableContainerComp>
    </BoxComp>
  ) : (
    <TableNoDataSection onAddClick={onAddClick} />
  );
};

export default CustomTable;
