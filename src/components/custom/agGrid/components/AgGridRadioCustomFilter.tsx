import React from 'react';
import eventBus from '../../../../utils/eventBus/eventBusInstance';
import { EventBusAgGridOnFilterOpenedProps } from '../../../../utils/eventBus/eventBusTypes';

import type { CustomFilterProps } from 'ag-grid-react';
import AgGridCustomFilterActionButtonComp from './AgGridCustomFilterActionButton';
import { AgGridRadioCustomFilterCompItemProp } from '../types/columnFilterTypes/agGridRadioCustomFilterType';
import { FilterParamsAgTextColumnFilter } from '../types/columnFilterTypes/agTextColumnFilterType';

import BoxComp from '../../../base/box/Box';
import FormControlComp from '../../../base/formControl/FormControl';
import RadioGroupComp from '../../../base/radioGroup/RadioGroup';
import FormControlLabelComp from '../../../base/formControlLabel/FormControlLabel';
import RadioComp from '../../../base/radio/Radio';
import TypographyComp from '../../../base/typography/Typography';
import { Stack } from '@mui/material';

const AgGridRadioCustomFilterComp: React.FC<CustomFilterProps> = (props) => {
  const [selectedValue, setSelectedValue] = React.useState<string>('');
  const [initialValue, setInitialValue] = React.useState<string>('');

  const selectedValueRef = React.useRef(selectedValue);
  const initialValueRef = React.useRef(initialValue);

  const isEmpty = (val: unknown) => val === undefined || val === null || val === '';

  const handleApply = () => {
    const filterModel = props.api.getFilterModel();
    const field = props.colDef.field ?? '';
    const currentFilter = filterModel[field]?.filter;

    // Eğer hem mevcut filter hem de seçili değer boşsa, işlem yapma
    if (isEmpty(currentFilter) && isEmpty(selectedValue)) return;

    // Eğer mevcut filter ile seçili değer aynıysa, işlem yapma
    if (currentFilter === selectedValue) return;

    // Eğer seçili değer boşsa, filtreyi kaldır
    if (isEmpty(selectedValue)) {
      props.onModelChange(null);
      return;
    }

    // Değilse, yeni filtreyi uygula
    props.onModelChange({
      type: 'equals',
      filter: selectedValue,
    });
  };

  React.useEffect(() => {
    selectedValueRef.current = selectedValue;
  }, [selectedValue]);

  React.useEffect(() => {
    initialValueRef.current = initialValue;
  }, [initialValue]);

  React.useEffect(() => {
    if (props.colDef?.filterParams?.initialFilterValue) {
      setInitialValue(props.colDef?.filterParams?.initialFilterValue);
      setSelectedValue(props.colDef?.filterParams?.initialFilterValue);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  React.useEffect(() => {
    // AG Grid filter dialog açıldığında, ilgili kolonun filter değerini güncelle
    const handler = (_props: EventBusAgGridOnFilterOpenedProps) => {
      if (_props.field !== props.colDef.field || _props.type !== 'filterOpened') return;

      const filterModel = props.api.getFilterModel();
      const currentFilter = filterModel?.[_props.field]?.filter;

      // Eğer modelde bir değer varsa ve bu değer güncel state'ten farklıysa güncelle
      if (currentFilter !== undefined && currentFilter !== selectedValueRef.current) {
        setSelectedValue(currentFilter);
      }
      // Eğer modelde değer yoksa ve state boş değilse, state'i sıfırla
      else if ((currentFilter === undefined || currentFilter === '') && selectedValueRef.current !== '') {
        setSelectedValue('');
      }
    };

    eventBus.on('agGrid:onFilterOpened', handler);

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
          {props.colDef?.filterParams?.items.map((item: AgGridRadioCustomFilterCompItemProp) => (
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
        {(props.colDef?.filterParams as FilterParamsAgTextColumnFilter)?.buttons?.includes('apply') && (
          <AgGridCustomFilterActionButtonComp label="button.apply" onClick={handleApply} />
        )}

        {(props.colDef?.filterParams as FilterParamsAgTextColumnFilter)?.buttons?.includes('clear') && (
          <AgGridCustomFilterActionButtonComp
            label="button.clear"
            onClick={() => {
              setSelectedValue('');
            }}
          />
        )}

        {(props.colDef?.filterParams as FilterParamsAgTextColumnFilter)?.buttons?.includes('reset') && (
          <AgGridCustomFilterActionButtonComp label="button.reset" onClick={() => {}} />
        )}

        {(props.colDef?.filterParams as FilterParamsAgTextColumnFilter)?.buttons?.includes('cancel') && (
          <AgGridCustomFilterActionButtonComp label="button.cancel2" onClick={() => {}} />
        )}
      </Stack>
    </BoxComp>
  );
};

export default AgGridRadioCustomFilterComp;
