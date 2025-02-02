import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import Select from '@mui/material/Select';
import { MenuProps } from '@mui/material';
import { SelectCompProps, selectCompDefaultProps } from './selectHelper';
import MenuItemComp from '../menuItem/MenuItem';
import CheckboxComp from '../checkbox/Checkbox';

const SelectComp: React.FC<SelectCompProps> = (props) => {
  const { isLabelTranslation, isItemTranslation, label, items, multiple, ...selectProps } = {
    ...selectCompDefaultProps,
    ...props,
  };

  const { translate } = useLanguageContext();

  const isRenderCheckboxElement = (value: unknown): boolean => {
    if (multiple && value && Array.isArray(value)) {
      return value.every((item) => typeof item === 'string' || typeof item === 'number');
    } else {
      return false;
    }
  };

  const prepareCheckboxCompChecked = (value: unknown, itemValue: string | number): boolean => {
    if (Array.isArray(value)) {
      return value.includes(itemValue);
    } else {
      return false;
    }
  };

  const customMenuProps: Partial<MenuProps> = {
    PaperProps: {
      sx: {
        borderRight: (theme) => `2px solid ${theme.palette.primary.main}`,
        borderLeft: (theme) => `2px solid ${theme.palette.primary.main}`,
        borderBottom: (theme) => `2px solid ${theme.palette.primary.main}`,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
      },
    },
  };

  return (
    <Select
      MenuProps={customMenuProps}
      {...(label ? { label: isLabelTranslation ? childrenTranslate(label, translate) : label } : {})}
      multiple={multiple}
      renderValue={(selected) => {
        if (multiple && selected && Array.isArray(selected)) {
          const selectedItemsDisplayValue = selected
            .map((value: string | number) => {
              const matchingItem = items.find((item) => item.value === value);
              return matchingItem ? (isItemTranslation ? translate(matchingItem.label) : matchingItem.label) : value;
            })
            .join(', ');
          return selectedItemsDisplayValue;
        } else {
          const selectedItem = items.find((item) => item.value === selected);
          return isItemTranslation && selectedItem ? translate(selectedItem.label) : selectedItem?.label;
        }
      }}
      {...selectProps}
    >
      {items.map((item, index) => (
        <MenuItemComp key={index.toString()} value={item.value} isTranslation={!!isItemTranslation}>
          {isRenderCheckboxElement(selectProps.value) && (
            <CheckboxComp checked={prepareCheckboxCompChecked(selectProps.value, item.value)} />
          )}
          {item.label}
        </MenuItemComp>
      ))}
    </Select>
  );
};

export default SelectComp;
