import { ColumnType } from '../../helper/column/columnType';
import { ApiSliceGetReportMethodRequestDto } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getReport/getReportRequestType';
import { ApiSliceGetReportMethodResponseDto } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getReport/getReportResponseType';
import { ApiSliceGetListMethodRequestFilterParams } from '../../../../../redux/slices/apiSliceHelper/getMethodsAndTypes/getList/getListRequestType';

export interface AgSummaryGridProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  listGridColumnDefs: ColumnType[];
  filters?: ApiSliceGetListMethodRequestFilterParams[];
  triggerGetReport: (
    params: ApiSliceGetReportMethodRequestDto,
  ) => Promise<{ data?: ApiSliceGetReportMethodResponseDto }>;
}

export const summaryGridColumnsDefs: ColumnType[] = [
  { field: 'columnName', cellDataType: 'text', headerName: 'component.columnName' },
  { field: 'minValue', cellDataType: 'number', headerName: 'component.minValue' },
  { field: 'maxValue', cellDataType: 'number', headerName: 'component.maxValue' },
  { field: 'averageValue', cellDataType: 'number', headerName: 'component.averageValue' },
  { field: 'sumValue', cellDataType: 'number', headerName: 'component.sumValue' },
  { field: 'rowCount', cellDataType: 'number', headerName: 'component.rowCount' },
];
