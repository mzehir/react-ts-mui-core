import React from 'react';
import type { CustomFilterProps } from 'ag-grid-react';
import BoxComp from '../../../base/box/Box';
import FormControlComp from '../../../base/formControl/FormControl';
import RadioGroupComp from '../../../base/radioGroup/RadioGroup';
import FormControlLabelComp from '../../../base/formControlLabel/FormControlLabel';
import RadioComp from '../../../base/radio/Radio';
import TypographyComp from '../../../base/typography/Typography';
import { AgGridRadioCustomFilterCompItemProp } from '../types/columnFilterTypes/agGridRadioCustomFilterType';

const AgGridRadioCustomFilterComp: React.FC<CustomFilterProps> = (props) => {
  console.log('props.model => ', props.model);
  console.log('props.onModelChange => ', props.onModelChange);
  console.log('props.onUiChange => ', props.onUiChange);
  console.log('props.column => ', props.column);
  console.log('props.colDef => ', props.colDef);
  console.log('props.getValue => ', props.getValue);
  console.log('props.doesRowPassOtherFilter => ', props.doesRowPassOtherFilter);
  console.log('props.api => ', props.api);
  console.log('props.context => ', props.context);

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
          value={'true'}
          onChange={(event) => {
            console.log(event);
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
    </BoxComp>
  );
};

export default AgGridRadioCustomFilterComp;
