import { Item as AsyncSelectItem } from '../../../../components/custom/selects/asyncSelectHelper';
import { Item as SelectItem } from '../../../../components/base/select/selectHelper';

export const variantOptions: SelectItem[] = [
  { value: 'outlined', label: 'Outlined' },
  { value: 'filled', label: 'Filled' },
  { value: 'standard', label: 'Standard' },
];

export const items: AsyncSelectItem[] = [
  { value: 'hazelnut', label: 'Fındık' },
  { value: 'peanut', label: 'Fıstık' },
  { value: 'walnut', label: 'Ceviz' },
];

export const fetchItemsData = async (): Promise<AsyncSelectItem[]> => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return items;
};

export const fetchValueItemsData = async (value: unknown, multiple: boolean): Promise<AsyncSelectItem[]> => {
  const resultItems: AsyncSelectItem[] = [];

  if (multiple) {
    if (value && Array.isArray(value)) {
      value.map((val) => {
        const matchingItem = items.find((item) => item.value === val);
        if (matchingItem) {
          resultItems.push(matchingItem);
        }
      });
    }
  } else {
    const getValueItem = items.find((item) => item.value === value) as AsyncSelectItem;
    resultItems.push(getValueItem);
  }

  return resultItems;
};
