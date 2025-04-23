import { CustomCellRendererProps } from 'ag-grid-react';
import { AgGridColDefType } from '../../custom/agGrid/types/agGridColDefType';
import AgGridCellSkeletonComp from '../../custom/agGrid/components/AgGridCellSkeleton';
import { fullFeatureAgGridPropsPrepareColumn } from './fullFeatureAgGridMethods';

export const prepareColumns = (columns: AgGridColDefType[], translate: (key: string) => string): AgGridColDefType[] => {
  const baseColumns = columns.map((column: AgGridColDefType) => {
    return {
      ...fullFeatureAgGridPropsPrepareColumn(column, translate),
      cellRenderer: (props: CustomCellRendererProps) => {
        if (props.value !== undefined) {
          return props.value;
        } else {
          return <AgGridCellSkeletonComp />;
        }
      },
    };
  });

  return baseColumns;
};
