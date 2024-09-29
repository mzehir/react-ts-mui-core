import React from 'react';
import { CustomTableProps } from './customTableHelper';
import TableContainerComp from '../../base/tableContainer/TableContainer';
import TableComp from '../../base/table/Table';
import TableHeadComp from '../../base/tableHead/TableHead';
import TableBodyComp from '../../base/tableBody/TableBody';
import TableRowComp from '../../base/tableRow/TableRow';
import TableCellComp from '../../base/tableCell/TableCell';
import PaperComp from '../../base/paper/Paper';
import BoxComp from '../../base/box/Box';
import ButtonComp from '../../base/button/Button';
import IconButtonComp from '../../base/iconButton/IconButton';
import AlertComp from '../../base/alert/Alert';
import AlertTitleComp from '../../base/alertTitle/AlertTitle';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import DeleteIcon from '@mui/icons-material/Delete';
import { styled } from '@mui/material/styles';
import './customTable.css';

const StyledTableHeadComp = styled(TableHeadComp)(({ theme }) => ({
  borderTop: `1px dotted ${theme.palette.divider}`,
}));

const StyledTableRow = styled(TableRowComp)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StickyTableColumn = styled(TableCellComp, {
  shouldForwardProp: (prop) => prop !== 'rowIndex',
})<{ rowIndex: number }>(({ theme, rowIndex }) => ({
  background:
    rowIndex % 2 === 1
      ? theme.customTable?.stickyColumn?.backgroundSecondary
      : theme.customTable?.stickyColumn?.backgroundPrimary,
  position: 'sticky',
  left: 0,
  zIndex: 1,
  '&::after': {
    content: '""',
    position: 'absolute',
    right: 0,
    top: 0,
    bottom: 0,
    width: '1px',
    backgroundColor: theme.palette.divider,
  },
}));

const CustomTable = <T extends object>({
  cells,
  rows,
  onEditClick,
  onViewClick,
  onDeleteClick,
  onAddClick,
}: CustomTableProps<T>): JSX.Element => {
  const [stickyColumnVisible] = React.useState(onEditClick || onViewClick || onAddClick ? true : false);

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
          <ButtonComp
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            isTranslation={true}
            onClick={(event) => {
              onAddClick(event);
            }}
          >
            introduction.new
          </ButtonComp>
        </BoxComp>
      )}

      <TableContainerComp component={PaperComp} className="custom-scrollbar">
        <TableComp>
          <StyledTableHeadComp>
            <TableRowComp>
              {stickyColumnVisible && (
                <StickyTableColumn
                  align="center"
                  style={{
                    minWidth: 150,
                  }}
                  rowIndex={1}
                />
              )}

              {cells.map((cell, index) => (
                <TableCellComp
                  key={index.toString()}
                  align={cell.settings?.head?.tableCell?.align}
                  style={{
                    minWidth: cell.settings?.head?.tableCell?.minWidth ? cell.settings.head.tableCell.minWidth : 200,
                  }}
                  isTranslation={true}
                >
                  {cell.label}
                </TableCellComp>
              ))}
            </TableRowComp>
          </StyledTableHeadComp>

          <TableBodyComp>
            {rows.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex.toString()}>
                {stickyColumnVisible && (
                  <StickyTableColumn align="center" rowIndex={rowIndex}>
                    {onEditClick && (
                      <IconButtonComp
                        color="success"
                        size="small"
                        onClick={(event) => {
                          onEditClick(event, row);
                        }}
                      >
                        <EditIcon />
                      </IconButtonComp>
                    )}

                    {onViewClick && (
                      <IconButtonComp
                        color="primary"
                        size="small"
                        onClick={(event) => {
                          onViewClick(event, row);
                        }}
                      >
                        <RemoveRedEyeIcon />
                      </IconButtonComp>
                    )}

                    {onDeleteClick && (
                      <IconButtonComp
                        color="error"
                        size="small"
                        onClick={(event) => {
                          onDeleteClick(event, row);
                        }}
                      >
                        <DeleteIcon />
                      </IconButtonComp>
                    )}
                  </StickyTableColumn>
                )}

                {cells.map((cell, cellIndex) => (
                  <TableCellComp key={cellIndex.toString()} align={cell.settings?.head?.tableCell?.align}>
                    {cell.settings?.body?.tableCell?.prepareCellTextMethod
                      ? cell.settings?.body?.tableCell?.prepareCellTextMethod(row[cell.key as keyof T] as string)
                      : (row[cell.key as keyof T] as React.ReactNode)}
                  </TableCellComp>
                ))}
              </StyledTableRow>
            ))}
          </TableBodyComp>
        </TableComp>
      </TableContainerComp>
    </BoxComp>
  ) : (
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
            <ButtonComp
              fullWidth
              variant="contained"
              color="success"
              startIcon={<AddIcon />}
              isTranslation={true}
              onClick={(event) => {
                onAddClick(event);
              }}
            >
              introduction.new
            </ButtonComp>
          </BoxComp>
        )}
      </AlertComp>
    </BoxComp>
  );
};

export default CustomTable;
