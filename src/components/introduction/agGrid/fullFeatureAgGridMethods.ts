import { AgGridCompColDef } from '../../custom/agGrid/agGridHelper';

export const fullFeatureAgGridPropsPrepareColumn = (
  column: AgGridCompColDef,
  translate: (value: string) => string,
): AgGridCompColDef => {
  const result: AgGridCompColDef = {
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
