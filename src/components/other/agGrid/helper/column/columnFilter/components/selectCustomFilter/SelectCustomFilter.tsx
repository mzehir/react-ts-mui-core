import React from 'react';
import eventBus from '../../../../../../../../utils/eventBus/eventBusInstance';
import { EventBusAgGridOnFilterOpenedProps } from '../../../../../../../../utils/eventBus/eventBusTypes';

import type { CustomFilterProps } from 'ag-grid-react';
import SelectCustomFilterActionButtonComp from './SelectCustomFilterActionButton';
import {
  SelectCustomFilterItemParams,
  SelectCustomFilterParams,
} from '../../columnFilterTypeSections/selectCustomFilterType';

import BoxComp from '../../../../../../../base/box/Box';
import FormControlComp from '../../../../../../../base/formControl/FormControl';
import RadioGroupComp from '../../../../../../../base/radioGroup/RadioGroup';
import FormControlLabelComp from '../../../../../../../base/formControlLabel/FormControlLabel';
import RadioComp from '../../../../../../../base/radio/Radio';
import TypographyComp from '../../../../../../../base/typography/Typography';
import { Stack } from '@mui/material';

const SelectCustomFilterComp: React.FC<CustomFilterProps> = (props) => {
  const [selectedValue, setSelectedValue] = React.useState<string>('');
  const [initialValue, setInitialValue] = React.useState<string>('');

  const selectedValueRef = React.useRef(selectedValue);
  const initialValueRef = React.useRef(initialValue);

  const isEmpty = (val: unknown) => val === undefined || val === null || val === '';

  const closePopupIfNeeded = () => {
    if (props.colDef?.filterParams?.closeOnApply) props.api.hidePopupMenu();
  };

  const handleApply = () => {
    const filterModel = props.api.getFilterModel();
    const field = props.colDef.field ?? '';
    const currentFilter = filterModel[field]?.filter;

    // If both the current filter and selected value are empty, do nothing
    if (isEmpty(currentFilter) && isEmpty(selectedValue)) {
      closePopupIfNeeded();
      return;
    }

    // If the current filter and selected value are the same, do nothing
    if (currentFilter === selectedValue) {
      closePopupIfNeeded();
      return;
    }

    // If the selected value is empty, clear the filter
    if (isEmpty(selectedValue)) {
      props.onModelChange(null);
      closePopupIfNeeded();
      return;
    }

    // Otherwise, apply the new filter
    props.onModelChange({
      type: 'equals',
      filter: selectedValue,
      filterType: 'radio',
    });
    closePopupIfNeeded();
  };

  React.useEffect(() => {
    selectedValueRef.current = selectedValue;
  }, [selectedValue]);

  React.useEffect(() => {
    initialValueRef.current = initialValue;
  }, [initialValue]);

  React.useEffect(() => {
    if (props.colDef?.filterParams?.initialFilterFields?.filter) {
      setInitialValue(props.colDef?.filterParams?.initialFilterFields?.filter);
      setSelectedValue(props.colDef?.filterParams?.initialFilterFields?.filter);
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
      if (currentFilter !== undefined && currentFilter !== selectedValueRef.current) {
        setSelectedValue(currentFilter);
      }
      // If there is no filter value in the model and the state is not empty, reset state
      else if ((currentFilter === undefined || currentFilter === '') && selectedValueRef.current !== '') {
        setSelectedValue('');
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
    <BoxComp padding={3}>
      {props.colDef?.filterParams?.label && (
        <TypographyComp variant="button" isTranslation={props.colDef?.filterParams?.isLabelTranslation ?? true}>
          {props.colDef?.filterParams?.label}
        </TypographyComp>
      )}

      {props.colDef?.filterParams?.label && <br />}

      <FormControlComp disabled={props.colDef?.filterParams?.disabled ?? false}>
        <RadioGroupComp
          row
          value={selectedValue}
          onChange={(event) => {
            const value = event.target.value;
            setSelectedValue(value);
          }}
          sx={{ alignItems: 'center' }}
        >
          {props.colDef?.filterParams?.items.map((item: SelectCustomFilterItemParams) => (
            <FormControlLabelComp
              isTranslation={props.colDef?.filterParams?.isItemTextTranslation ?? true}
              key={item.value}
              label={item.label}
              value={item.value}
              disabled={item.disabled}
              control={<RadioComp />}
            />
          ))}
        </RadioGroupComp>
      </FormControlComp>

      <Stack direction="row" spacing={1} mt={2}>
        {(props.colDef?.filterParams as SelectCustomFilterParams)?.buttons?.includes('apply') && (
          <SelectCustomFilterActionButtonComp label="button.apply" onClick={handleApply} />
        )}

        {(props.colDef?.filterParams as SelectCustomFilterParams)?.buttons?.includes('clear') && (
          <SelectCustomFilterActionButtonComp
            label="button.clear"
            onClick={() => {
              setSelectedValue('');
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
