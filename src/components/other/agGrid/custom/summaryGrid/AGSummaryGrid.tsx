import React from 'react';
import useLanguageContext from '../../../../../hooks/useLanguageContext';
import { AgSummaryGridProps, summaryGridColumnsDefs } from './agSummaryGridTypes';
import { prepareColumns } from './agSummaryGridHelper';
import { AgGridReact } from 'ag-grid-react';
import AgGridComp from '../../base/AgGrid';
import BoxComp from '../../../../base/box/Box';
import {
  BootstrapDialog,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../../custom/dialogs/BootstrapDialog';

const AGSummaryGrid = React.forwardRef<AgGridReact, AgSummaryGridProps>(
  ({ open, setOpen, listGridColumnDefs, filters, triggerGetReport }, ref) => {
    const { translate } = useLanguageContext();

    const columnDefs = React.useMemo(
      () => prepareColumns(summaryGridColumnsDefs, listGridColumnDefs, translate),
      [listGridColumnDefs, translate],
    );

    const [rowData, setRowData] = React.useState<unknown[]>([]);

    React.useEffect(() => {
      const fetchData = async () => {
        const response = await triggerGetReport({ filterParams: filters ?? [] });
        const items = response?.data?.data?.items ?? [];

        console.log(items);

        setRowData([
          {
            id: 1001,
            columnName: 'salary',
            minValue: 50000,
            maxValue: 120000,
            averageValue: 65.4,
            sumValue: 123325435.8,
            rowCount: 45,
          },
        ]);
      };

      fetchData();
    }, [triggerGetReport, filters]);

    return (
      <BootstrapDialog maxWidth="lg" fullWidth open={open} onClose={() => setOpen(false)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>component.summary</BootstrapDialogTitle>
        <BootstrapDialogContent>
          <BoxComp
            display={'flex'}
            flexDirection={'column'}
            flexGrow={'1'}
            overflow={'hidden'}
            gap={'5px'}
            style={{
              width: '100%',
              height: '500px',
            }}
          >
            <AgGridComp ref={ref} columnDefs={columnDefs} rowData={rowData ?? []} />
          </BoxComp>
        </BootstrapDialogContent>
      </BootstrapDialog>
    );
  },
);

AGSummaryGrid.displayName = 'AGSummaryGrid';

export default AGSummaryGrid;
