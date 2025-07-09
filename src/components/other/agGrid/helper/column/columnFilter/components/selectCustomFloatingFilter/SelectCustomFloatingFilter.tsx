import React from 'react';
import type { CustomFloatingFilterProps } from 'ag-grid-react';
import { SelectCustomFilterItemParams } from '../../columnFilterTypeSections/selectCustomFilterType';
import useLanguageContext from '../../../../../../../../hooks/useLanguageContext';
import BoxComp from '../../../../../../../base/box/Box';

const SelectCustomFloatingFilterComp: React.FC<CustomFloatingFilterProps> = (props) => {
  const { translate } = useLanguageContext();

  const prepareValue = (propsParams: CustomFloatingFilterProps): string => {
    const values: (string | number)[] = propsParams?.model?.filter ?? [];
    const items = (propsParams?.filterParams?.colDef?.filterParams?.items as SelectCustomFilterItemParams[]) ?? [];

    if (values && values.length > 0) {
      const matchedItems = items.filter((item) => values.some((value) => value === item.value));

      if (matchedItems.length > 0) {
        const labelList = matchedItems.map((item) => {
          if (propsParams?.filterParams?.colDef?.filterParams.isItemTextTranslation !== false) {
            return translate(item.label);
          } else {
            return item.label;
          }
        });

        return labelList.join(', ');
      }
    }

    return '';
  };

  return (
    <BoxComp>
      <input
        className="ag-input-field-input ag-text-field-input"
        type="text"
        readOnly
        disabled
        value={prepareValue(props)}
        title={prepareValue(props)}
      />
    </BoxComp>
  );
};

export default SelectCustomFloatingFilterComp;
