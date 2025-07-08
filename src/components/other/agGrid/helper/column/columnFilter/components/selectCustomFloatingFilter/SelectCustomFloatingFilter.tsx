import React from 'react';
import type { CustomFloatingFilterProps } from 'ag-grid-react';
import { SelectCustomFilterItemParams } from '../../columnFilterTypeSections/selectCustomFilterType';
import useLanguageContext from '../../../../../../../../hooks/useLanguageContext';
import BoxComp from '../../../../../../../base/box/Box';

const SelectCustomFloatingFilterComp: React.FC<CustomFloatingFilterProps> = (props) => {
  const { translate } = useLanguageContext();

  const prepareValue = (propsParams: CustomFloatingFilterProps) => {
    const value = propsParams?.model?.filter;
    const items = (propsParams?.filterParams?.colDef?.filterParams?.items as SelectCustomFilterItemParams[]) ?? [];

    let inputValue: string | number = '';

    if (value) {
      const findItem = items.find((item) => item.value === value);
      if (findItem) {
        inputValue =
          propsParams?.filterParams?.colDef?.filterParams.isItemTextTranslation !== false
            ? translate(findItem.label)
            : findItem.label;
        return inputValue;
      }
    } else {
      return '';
    }
  };

  return (
    <BoxComp>
      <input
        className="ag-input-field-input ag-text-field-input"
        type="text"
        readOnly
        disabled
        value={prepareValue(props)}
      />
    </BoxComp>
  );
};

export default SelectCustomFloatingFilterComp;
