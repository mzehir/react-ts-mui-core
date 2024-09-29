import { FilterItemComponent, HandleValueChangeParams, ValuesValue } from '../helper';

export interface SummarySectionProps {
  filterItems: FilterItemComponent[];
  values: { [key: string]: ValuesValue };
  handleValueChange: (params: HandleValueChangeParams) => void;
  onFilter: () => void;
}
