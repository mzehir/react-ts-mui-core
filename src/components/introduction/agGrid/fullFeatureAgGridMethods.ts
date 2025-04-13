import { AgGridColDef } from '../../custom/agGrid/helper/colDef/agGridColDef';

export const fullFeatureAgGridPropsPrepareColumn = (
  column: AgGridColDef,
  translate: (value: string) => string,
): AgGridColDef => {
  const result: AgGridColDef = {
    field: column.field,
    cellDataType: column.cellDataType ?? 'text',
    hide: column.hide,
    editable: column.editable ?? false,
    headerName: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    headerTooltip: column.isTranslation === false ? column.headerName : translate(column.headerName as string),
    width: column.width,
  };

  return result;
};
