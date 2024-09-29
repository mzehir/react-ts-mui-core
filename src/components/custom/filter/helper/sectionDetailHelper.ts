import { FilterItemComponent, HandleValueChangeParams, ValuesValue } from '../helper';

export interface DetailSectionProps {
  filterItems: FilterItemComponent[];
  values: { [key: string]: ValuesValue };
  handleValueChange: (params: HandleValueChangeParams) => void;
}
