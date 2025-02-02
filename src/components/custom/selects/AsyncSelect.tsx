import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import Select from '@mui/material/Select';
import { MenuProps } from '@mui/material';
import { AsyncSelectCompProps, Item, asyncSelectCompDefaultProps } from './asyncSelectHelper';
import MenuItemComp from '../../base/menuItem/MenuItem';
import CheckboxComp from '../../base/checkbox/Checkbox';
import SkeletonComp from '../../base/skeleton/Skeleton';

const AsyncSelectComp: React.FC<AsyncSelectCompProps> = (props) => {
  const {
    isLabelTranslation,
    label,
    multiple,
    shouldFetchOnEveryOpenMenu,
    fetchItemsData,
    fetchValueItemsData,
    ...selectProps
  } = {
    ...asyncSelectCompDefaultProps,
    ...props,
  };

  const { translate } = useLanguageContext();

  const [items, setItems] = React.useState<Item[]>([]);
  const [fistOnOpenedMenu, setFistOnOpenedMenu] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

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

  const getItemsData = async () => {
    if (fistOnOpenedMenu && !shouldFetchOnEveryOpenMenu) {
      return;
    } else {
      setLoading(true);

      try {
        const data = await fetchItemsData();
        setItems(data || []);
      } catch (error) {
        console.error(error);
      } finally {
        setFistOnOpenedMenu(true);
        setLoading(false);
      }
    }
  };

  const getValueItemData = async () => {
    try {
      const data = await fetchValueItemsData(props.value);
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    if (props.value && items.length === 0) {
      getValueItemData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value]);

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
      onOpen={getItemsData}
      renderValue={(selected) => {
        if (multiple && selected && Array.isArray(selected)) {
          const selectedItemsDisplayValue = selected
            .map((value: string | number) => {
              const matchingItem = items.find((item) => item.value === value);
              return matchingItem ? matchingItem.label : value;
            })
            .join(', ');
          return selectedItemsDisplayValue;
        } else {
          const selectedItem = items.find((item) => item.value === selected);
          return selectedItem?.label;
        }
      }}
      {...selectProps}
    >
      {loading
        ? Array.from(new Array(3)).map((_, index) => (
            <MenuItemComp key={index.toString()} disabled>
              <SkeletonComp variant="text" width="100%" height={32} />
            </MenuItemComp>
          ))
        : items.map((item, index) => (
            <MenuItemComp key={index.toString()} value={item.value}>
              {isRenderCheckboxElement(selectProps.value) && (
                <CheckboxComp checked={prepareCheckboxCompChecked(selectProps.value, item.value)} />
              )}
              {item.label}
            </MenuItemComp>
          ))}
    </Select>
  );
};

export default AsyncSelectComp;
