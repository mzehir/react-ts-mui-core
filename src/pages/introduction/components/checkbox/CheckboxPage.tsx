import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import TextFieldComp from '../../../../components/base/textField/TextField';
import FormControlComp from '../../../../components/base/formControl/FormControl';
import FormControlLabelComp from '../../../../components/base/formControlLabel/FormControlLabel';
import InputLabelComp from '../../../../components/base/inputLabel/InputLabel';
import SelectComp from '../../../../components/base/select/Select';
import { Item as SelectItem } from '../../../../components/base/select/selectHelper';
import { SelectChangeEvent } from '@mui/material';
import CheckboxComp from '../../../../components/base/checkbox/Checkbox';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const CheckboxPage: React.FC = () => {
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
    { value: 'large', label: 'Large' },
  ];

  const labelPlacementOptions: SelectItem[] = [
    { value: 'bottom', label: 'Bottom' },
    { value: 'end', label: 'End' },
    { value: 'start', label: 'Start' },
    { value: 'top', label: 'Top' },
  ];

  const [text, setText] = useState('Lorem Ipsum...');
  const [checked, setChecked] = useState(true);
  const [selectedColor, setSelectedColor] = useState<(typeof colorOptions)[number]['value']>('error');
  const [selectedSize, setSelectedSize] = useState<(typeof sizeOptions)[number]['value']>('medium');
  const [selectedLabelPlacement, setSelectedLabelPlacement] =
    useState<(typeof labelPlacementOptions)[number]['value']>('end');

  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [customIcon, setCustomIcon] = useState(true);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.checkboxComponent
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
                <FormControlLabelComp
                  label={text}
                  // @ts-expect-error: props hataları görmezden gelinebilir.
                  labelPlacement={selectedLabelPlacement}
                  control={
                    <CheckboxComp
                      // @ts-expect-error: props hataları görmezden gelinebilir.
                      color={selectedColor}
                      // @ts-expect-error: props hataları görmezden gelinebilir.
                      size={selectedSize}
                      onChange={(e) => setChecked(e.target.checked)}
                      checked={!!checked}
                      required={required}
                      disabled={disabled}
                      {...(customIcon ? { icon: <FavoriteBorder /> } : {})}
                      {...(customIcon ? { checkedIcon: <Favorite /> } : {})}
                    />
                  }
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
              <TextFieldComp
                fullWidth
                label="introduction.enterTextForComponent"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </GridComp>

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
                  label={'introduction.useCustomIconForComponent'}
                  control={<CheckboxComp checked={!!customIcon} onChange={(e) => setCustomIcon(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default CheckboxPage;
