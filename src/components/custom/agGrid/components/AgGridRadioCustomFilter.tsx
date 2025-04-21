import React from 'react';
import type { CustomFilterProps } from 'ag-grid-react';
import BoxComp from '../../../base/box/Box';
import FormControlComp from '../../../base/formControl/FormControl';
import RadioGroupComp from '../../../base/radioGroup/RadioGroup';
import FormControlLabelComp from '../../../base/formControlLabel/FormControlLabel';
import RadioComp from '../../../base/radio/Radio';
import TypographyComp from '../../../base/typography/Typography';
import { AgGridRadioCustomFilterCompItemProp } from '../types/columnFilterTypes/agGridRadioCustomFilterType';
import AgGridCustomFilterActionButtonComp from './AgGridCustomFilterActionButton';
import { FilterParamsAgTextColumnFilter } from '../types/columnFilterTypes/agTextColumnFilterType';
import { Stack } from '@mui/material';

const AgGridRadioCustomFilterComp: React.FC<CustomFilterProps> = (props) => {
  // console.log('props.model => ', props.model);
  // console.log('props.onModelChange => ', props.onModelChange);
  // console.log('props.onUiChange => ', props.onUiChange);
  // console.log('props.column => ', props.column);
  // console.log('props.colDef => ', props.colDef);
  // console.log('props.getValue => ', props.getValue);
  // console.log('props.doesRowPassOtherFilter => ', props.doesRowPassOtherFilter);
  // console.log('props.api => ', props.api);
  // console.log('props.context => ', props.context);

  const [selectedValue, setSelectedValue] = React.useState<string>('');
  const [initialValue, setInitialValue] = React.useState<string>('');

  React.useEffect(() => {
    // Initial value'yu sakla
    if (props.model) {
      setInitialValue(props.model.value);
      setSelectedValue(props.model.value);
    }
  }, []);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedValue(value);
    // UI değişikliğini bildir
    props.onUiChange();
  };

  const handleApply = () => {
    // Filtre modelini güncelle
    props.onModelChange({
      type: 'equals',
      value: selectedValue,
    });
  };

  const handleClear = () => {
    setSelectedValue('');
    props.onModelChange(null);
  };

  const handleReset = () => {
    setSelectedValue(initialValue);
    props.onModelChange({
      type: 'equals',
      value: initialValue,
    });
  };

  const handleCancel = () => {
    setSelectedValue(props.model?.value || '');
    props.onUiChange();
  };

  return (
    <BoxComp padding={3}>
      {props.colDef?.filterParams?.label && (
        <TypographyComp variant="button" isTranslation={props.colDef?.filterParams?.isLabelTranslation ?? true}>
          {props.colDef?.filterParams?.label}
        </TypographyComp>
      )}

      {props.colDef?.filterParams?.label && <br />}

      <FormControlComp disabled={props.colDef?.filterParams?.disabled ?? false}>
        <RadioGroupComp row value={selectedValue} onChange={handleRadioChange} sx={{ alignItems: 'center' }}>
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
          <AgGridCustomFilterActionButtonComp label="button.clear" onClick={handleClear} />
        )}

        {(props.colDef?.filterParams as FilterParamsAgTextColumnFilter)?.buttons?.includes('reset') && (
          <AgGridCustomFilterActionButtonComp label="button.reset" onClick={handleReset} />
        )}

        {(props.colDef?.filterParams as FilterParamsAgTextColumnFilter)?.buttons?.includes('cancel') && (
          <AgGridCustomFilterActionButtonComp label="button.cancel2" onClick={handleCancel} />
        )}
      </Stack>
    </BoxComp>
  );
};

export default AgGridRadioCustomFilterComp;
