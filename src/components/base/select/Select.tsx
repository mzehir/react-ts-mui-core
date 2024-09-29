import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import Select from '@mui/material/Select';
import { SelectCompProps, selectCompDefaultProps } from './selectHelper';
import MenuItemComp from '../menuItem/MenuItem';

const SelectComp: React.FC<SelectCompProps> = (props) => {
  const { isLabelTranslation, isItemTranslation, label, items, ...selectProps } = {
    ...selectCompDefaultProps,
    ...props,
  };

  const { translate } = useLanguageContext();

  return (
    <Select
      {...(label ? { label: isLabelTranslation ? childrenTranslate(label, translate) : label } : {})}
      renderValue={(selected) => {
        const selectedItem = items.find((item) => item.value === selected);
        return isItemTranslation && selectedItem ? translate(selectedItem.label) : selectedItem?.label;
      }}
      {...selectProps}
    >
      {items.map((item, index) => (
        <MenuItemComp key={index.toString()} value={item.value} isTranslation={!!isItemTranslation}>
          {item.label}
        </MenuItemComp>
      ))}
    </Select>
  );
};

export default SelectComp;
