import { FilterRequestSource } from 'ag-grid-community';

export interface EventBusAgGridOnFilterOpenedProps {
  type: 'filterOpened';
  source: FilterRequestSource;
  field: string;
}
