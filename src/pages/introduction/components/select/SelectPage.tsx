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
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const SelectPage: React.FC = () => {
  const [items] = React.useState<SelectItem[]>([
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' },
  ]);

  const variantOptions: SelectItem[] = [
    { value: 'outlined', label: 'Outlined' },
    { value: 'filled', label: 'Filled' },
    { value: 'standard', label: 'Standard' },
  ];

  const [value, setValue] = React.useState<string>('');
  const [selectedVariant, setSelectedVariant] = useState<(typeof variantOptions)[number]['value']>('outlined');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [required, setRequired] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.selectComponent
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
            <GridComp item xs={12} display={'flex'} justifyContent={'center'}>
              <FormControlComp fullWidth={fullWidth} disabled={disabled} error={error} required={required}>
                <InputLabelComp>introduction.selectItem</InputLabelComp>
                <SelectComp
                  label="introduction.selectItem"
                  // @ts-expect-error: Prop errors can be ignored.
                  variant={selectedVariant}
                  items={items}
                  value={value}
                  onChange={(event: SelectChangeEvent<unknown>) => {
                    setValue(event.target.value as string);
                  }}
                  inputProps={{ readOnly: readOnly }}
                />
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
                <InputLabelComp>introduction.selectVariantForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectVariantForComponent"
                  items={variantOptions}
                  value={selectedVariant}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedVariant(e.target.value as (typeof variantOptions)[number]['value']);
                  }}
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
                  label={'introduction.markComponentAsError'}
                  control={<CheckboxComp checked={!!error} onChange={(e) => setError(e.target.checked)} />}
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
                  label={'introduction.markComponentAsReadOnly'}
                  control={<CheckboxComp checked={!!readOnly} onChange={(e) => setReadOnly(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.makeComponentFullWidth'}
                  control={<CheckboxComp checked={!!fullWidth} onChange={(e) => setFullWidth(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default SelectPage;
