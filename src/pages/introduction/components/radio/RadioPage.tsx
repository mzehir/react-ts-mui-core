import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import FormControlComp from '../../../../components/base/formControl/FormControl';
import FormControlLabelComp from '../../../../components/base/formControlLabel/FormControlLabel';
import InputLabelComp from '../../../../components/base/inputLabel/InputLabel';
import SelectComp from '../../../../components/base/select/Select';
import { Item as SelectItem } from '../../../../components/base/select/selectHelper';
import { SelectChangeEvent } from '@mui/material';
import CheckboxComp from '../../../../components/base/checkbox/Checkbox';
import RadioComp from '../../../../components/base/radio/Radio';
import RadioGroupComp from '../../../../components/base/radioGroup/RadioGroup';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const RadioPage: React.FC = () => {
  const colorOptions: SelectItem[] = [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'success', label: 'Success' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
  ];

  const sizeOptions: SelectItem[] = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
  ];

  const labelPlacementOptions: SelectItem[] = [
    { value: 'bottom', label: 'Bottom' },
    { value: 'end', label: 'End' },
    { value: 'start', label: 'Start' },
    { value: 'top', label: 'Top' },
  ];

  const [selectedValue, setSelectedValue] = React.useState('male');
  const [selectedColor, setSelectedColor] = useState<(typeof colorOptions)[number]['value']>('error');
  const [selectedSize, setSelectedSize] = useState<(typeof sizeOptions)[number]['value']>('medium');
  const [selectedLabelPlacement, setSelectedLabelPlacement] =
    useState<(typeof labelPlacementOptions)[number]['value']>('end');
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [row, setRow] = useState(true);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.radioComponent
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.observeComponent
          </TypographyComp>

          <BoxComp display={'flex'} justifyContent={'center'}>
            <CustomIconButton>
              <ArrowCircleDownIcon color="warning" />
              <ArrowCircleDownIcon color="primary" />
              <ArrowCircleDownIcon color="error" />
            </CustomIconButton>
          </BoxComp>

          <br />

          <GridComp container spacing={3}>
            <GridComp item xs={12}>
              <FormControlComp>
                <RadioGroupComp
                  row={row}
                  value={selectedValue}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setSelectedValue(event.target.value);
                  }}
                >
                  <FormControlLabelComp
                    label="Erkek"
                    // @ts-expect-error: Prop errors can be ignored.
                    labelPlacement={selectedLabelPlacement}
                    value="male"
                    control={
                      // @ts-expect-error: Prop errors can be ignored.
                      <RadioComp color={selectedColor} size={selectedSize} disabled={disabled} required={required} />
                    }
                  />
                  <FormControlLabelComp
                    label="Kadın"
                    // @ts-expect-error: Prop errors can be ignored.
                    labelPlacement={selectedLabelPlacement}
                    value="female"
                    control={
                      // @ts-expect-error: Prop errors can be ignored.
                      <RadioComp color={selectedColor} size={selectedSize} disabled={disabled} required={required} />
                    }
                  />
                </RadioGroupComp>
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.customizeComponent
          </TypographyComp>

          <BoxComp display={'flex'} justifyContent={'center'}>
            <CustomIconButton>
              <ArrowCircleDownIcon color="warning" />
              <ArrowCircleDownIcon color="primary" />
              <ArrowCircleDownIcon color="error" />
            </CustomIconButton>
          </BoxComp>

          <br />

          <GridComp container spacing={5} display={'flex'} alignItems={'center'}>
            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp fullWidth>
                <InputLabelComp>introduction.selectColorForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectColorForComponent"
                  items={colorOptions}
                  value={selectedColor}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedColor(e.target.value as (typeof colorOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp fullWidth>
                <InputLabelComp>introduction.selectSizeForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectSizeForComponent"
                  items={sizeOptions}
                  value={selectedSize}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedSize(e.target.value as (typeof sizeOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp fullWidth>
                <InputLabelComp>introduction.selectPositionForComponentText</InputLabelComp>
                <SelectComp
                  label="introduction.selectPositionForComponentText"
                  items={labelPlacementOptions}
                  value={selectedLabelPlacement}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedLabelPlacement(e.target.value as (typeof labelPlacementOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.markComponentAsRequired'}
                  control={<CheckboxComp checked={!!required} onChange={(e) => setRequired(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableDisabledStateForComponent'}
                  control={<CheckboxComp checked={!!disabled} onChange={(e) => setDisabled(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.makeComponentSingleLine'}
                  control={<CheckboxComp checked={!!row} onChange={(e) => setRow(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default RadioPage;
