import React from 'react';
import eventBus from '../../../../../../../../utils/eventBus/eventBusInstance';
import { EventBusAgGridOnFilterOpenedProps } from '../../../../../../../../utils/eventBus/eventBusTypes';

import type { CustomFilterProps } from 'ag-grid-react';
import SelectCustomFilterActionButtonComp from './SelectCustomFilterActionButton';
import { SelectCustomFilterParams } from '../../columnFilterTypeSections/selectCustomFilterType';

import BoxComp from '../../../../../../../base/box/Box';
import FormControlComp from '../../../../../../../base/formControl/FormControl';
import InputLabelComp from '../../../../../../../base/inputLabel/InputLabel';
import AsyncSelectComp from '../../../../../../../custom/selects/AsyncSelect';
import { Item } from '../../../../../../../custom/selects/asyncSelectHelper';
import { SelectChangeEvent, Stack } from '@mui/material';

const SelectCustomFilterComp: React.FC<CustomFilterProps> = (props) => {
  const [multipleValue, setMultipleValue] = React.useState<(string | number)[]>([]);
  const [initialMultipleValue, setInitialMultipleValue] = React.useState<(string | number)[]>([]);
  const multipleValueRef = React.useRef(multipleValue);
  const initialMultipleValueRef = React.useRef(initialMultipleValue);

  const isEmpty = (val: unknown): boolean => {
    return (
      val === undefined ||
      val === null ||
      (typeof val === 'string' && val.trim() === '') ||
      (Array.isArray(val) && val.length === 0)
    );
  };

  const closePopupIfNeeded = () => {
    if (props.colDef?.filterParams?.closeOnApply) props.api.hidePopupMenu();
  };

  const handleApply = () => {
    const filterModel = props.api.getFilterModel();
    const field = props.colDef.field ?? '';
    const currentFilter = filterModel[field]?.filter;

    // If both the current filter and selected value are empty, do nothing
    if (isEmpty(currentFilter) && isEmpty(multipleValue)) {
      closePopupIfNeeded();
      return;
    }

    // If the current filter and selected value are the same, do nothing
    if (Array.isArray(currentFilter) && Array.isArray(multipleValue)) {
      const same =
        currentFilter.length === multipleValue.length && currentFilter.every((val) => multipleValue.includes(val));
      if (same) {
        closePopupIfNeeded();
        return;
      }
    }

    // If the selected value is empty, clear the filter
    if (isEmpty(multipleValue)) {
      props.onModelChange(null);
      closePopupIfNeeded();
      return;
    }

    // Otherwise, apply the new filter
    props.onModelChange({
      type: 'in',
      filter: multipleValue,
      filterType: 'select',
    });
    closePopupIfNeeded();
  };

  React.useEffect(() => {
    multipleValueRef.current = multipleValue;
  }, [multipleValue]);

  React.useEffect(() => {
    initialMultipleValueRef.current = initialMultipleValue;
  }, [initialMultipleValue]);

  React.useEffect(() => {
    if (props.colDef?.filterParams?.initialFilterFields?.filter) {
      setMultipleValue(props.colDef?.filterParams?.initialFilterFields?.filter);
      setInitialMultipleValue(props.colDef?.filterParams?.initialFilterFields?.filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listen for the filter dialog open event and update state accordingly
  React.useEffect(() => {
    const handler = (_props: EventBusAgGridOnFilterOpenedProps) => {
      // Only handle the event if it matches this column and is the correct event type
      if (_props.field !== props.colDef.field || _props.type !== 'filterOpened') return;

      const filterModel = props.api.getFilterModel();
      const currentFilter = filterModel?.[_props.field]?.filter;

      // If there is a filter value in the model and it's different from the current state, update state
      if (currentFilter !== undefined && currentFilter !== multipleValueRef.current) {
        setMultipleValue(currentFilter);
      }
      // If there is no filter value in the model and the state is not empty, reset state
      else if ((currentFilter === undefined || currentFilter === '') && multipleValueRef.current.length > 0) {
        setMultipleValue([]);
      }
    };

    // Register the event listener
    eventBus.on('agGrid:onFilterOpened', handler);

    // Cleanup the event listener on unmount
    return () => {
      eventBus.off('agGrid:onFilterOpened', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BoxComp id="select-custom-filter-wrapper" padding={3}>
      <FormControlComp disabled={props.colDef?.filterParams?.disabled ?? false} fullWidth={true}>
        <InputLabelComp>{props.colDef?.filterParams?.label}</InputLabelComp>
        <AsyncSelectComp
          variant="outlined"
          size="small"
          label={props.colDef?.filterParams?.label}
          shouldFetchOnEveryOpenMenu={false}
          isSearhAndFilter={false}
          isItemTranslation={props.colDef?.filterParams?.isItemTextTranslation ?? false}
          fetchItemsData={() => {
            const items = props.colDef?.filterParams?.items ?? [];
            return items;
          }}
          multiple={true}
          value={multipleValue}
          fetchValueItemsData={async (value) => {
            const resultItems: Item[] = [];

            if (value && Array.isArray(value)) {
              const items: Item[] = props.colDef?.filterParams?.items ?? [];
              value.map((val) => {
                const matchingItem = items.find((item) => item.value === val);
                if (matchingItem) {
                  resultItems.push(matchingItem);
                }
              });
            }

            return resultItems;
          }}
          onChange={(event: SelectChangeEvent<unknown>) => {
            if (Array.isArray(event.target.value)) {
              setMultipleValue([...event.target.value]);
            }
          }}
          inputProps={{ readOnly: false }}
          menuContainerSelector="#select-custom-filter-wrapper"
        />
      </FormControlComp>

      <Stack direction="row" spacing={1} mt={2}>
        {(props.colDef?.filterParams as SelectCustomFilterParams)?.buttons?.includes('apply') && (
          <SelectCustomFilterActionButtonComp label="button.apply" onClick={handleApply} />
        )}

        {(props.colDef?.filterParams as SelectCustomFilterParams)?.buttons?.includes('clear') && (
          <SelectCustomFilterActionButtonComp
            label="button.clear"
            onClick={() => {
              setMultipleValue([]);
            }}
          />
        )}

        {(props.colDef?.filterParams as SelectCustomFilterParams)?.buttons?.includes('reset') && (
          <SelectCustomFilterActionButtonComp label="button.reset" onClick={() => {}} />
        )}

        {(props.colDef?.filterParams as SelectCustomFilterParams)?.buttons?.includes('cancel') && (
          <SelectCustomFilterActionButtonComp label="button.cancel2" onClick={() => {}} />
        )}
      </Stack>
    </BoxComp>
  );
};

export default SelectCustomFilterComp;
