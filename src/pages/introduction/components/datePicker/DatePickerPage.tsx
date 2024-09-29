import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import BoxComp from '../../../../components/base/box/Box';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import FormControlComp from '../../../../components/base/formControl/FormControl';
import FormControlLabelComp from '../../../../components/base/formControlLabel/FormControlLabel';
import InputLabelComp from '../../../../components/base/inputLabel/InputLabel';
import DatePickerComp from '../../../../components/base/datePicker/DatePicker';
import TextFieldComp from '../../../../components/base/textField/TextField';
import SelectComp from '../../../../components/base/select/Select';
import { Item as SelectItem } from '../../../../components/base/select/selectHelper';
import CheckboxComp from '../../../../components/base/checkbox/Checkbox';
import { SelectChangeEvent } from '@mui/material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import dayjs, { Dayjs } from 'dayjs';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const DatePickerPage: React.FC = () => {
  const variantOptions: SelectItem[] = [
    { value: 'filled', label: 'Filled' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'standard', label: 'Standard' },
  ];

  const openToOptions: SelectItem[] = [
    { value: 'day', label: 'Day' },
    { value: 'year', label: 'Year' },
  ];

  const [selectedVariant, setSelectedVariant] = useState<(typeof variantOptions)[number]['value']>('outlined');
  const [selectedOpenTo, setSelectedOpenTo] = useState<(typeof openToOptions)[number]['value']>('day');

  const [value, setValue] = useState<Dayjs | null>(dayjs('2022-04-17'));
  const [maxValue] = useState<Dayjs>(dayjs('2022-04-27'));
  const [minValue] = useState<Dayjs>(dayjs('2022-04-10'));
  const [label, setLabel] = useState('Bir tarih seç');
  const [helperText, setHelperText] = useState('Bu alana bileşen için yardımcı metin girilebilir.');
  const [error, setError] = useState(false);
  const [required, setRequired] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [readOnly, setReadOnly] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [autoFocus, setAutoFocus] = useState(false);
  const [closeOnSelect, setCloseOnSelect] = useState(true);
  const [maxDateActive, setMaxDateActive] = useState(false);
  const [minDateActive, setMinDateActive] = useState(false);
  const [clearableActive, setClearableActive] = useState(true);
  const [cleared, setCleared] = useState<boolean>(false);

  useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }

    return () => {};
  }, [cleared]);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.datePickerComponent
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
              <DatePickerComp
                label={label}
                slotProps={{
                  textField: {
                    helperText: helperText,
                    fullWidth: fullWidth,
                    // @ts-expect-error: props hataları görmezden gelinebilir.
                    variant: selectedVariant,
                    error: error,
                    required: required,
                  },
                  field: {
                    clearable: clearableActive,
                    onClear: () => {
                      setValue(null);
                      setCleared(true);
                    },
                  },
                }}
                autoFocus={autoFocus}
                closeOnSelect={closeOnSelect}
                disabled={disabled}
                readOnly={readOnly}
                value={value}
                {...(maxDateActive ? { maxDate: maxValue } : {})}
                {...(minDateActive ? { minDate: minValue } : {})}
                onChange={(newValue, other) => {
                  console.log(newValue, other);
                  if (newValue) {
                    setValue(newValue);
                  }
                }}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                openTo={selectedOpenTo}
              />
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
              <FormControlComp fullWidth>
                <InputLabelComp>introduction.selectFirstStepForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectFirstStepForComponent"
                  items={openToOptions}
                  value={selectedOpenTo}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedOpenTo(e.target.value as (typeof openToOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                fullWidth
                label="introduction.enterLabelForComponent"
                value={label}
                onChange={(e) => setLabel(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                fullWidth
                label="introduction.enterHelperTextForComponent"
                value={helperText}
                onChange={(e) => setHelperText(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableClearableWithIconForComponent'}
                  control={
                    <CheckboxComp checked={!!clearableActive} onChange={(e) => setClearableActive(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableDateUpperLimitForComponent'}
                  control={
                    <CheckboxComp checked={!!maxDateActive} onChange={(e) => setMaxDateActive(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableDateLowerLimitForComponent'}
                  control={
                    <CheckboxComp checked={!!minDateActive} onChange={(e) => setMinDateActive(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableAutoFocusForComponent'}
                  control={<CheckboxComp checked={!!autoFocus} onChange={(e) => setAutoFocus(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.closeComponentPanelOnNewSelection'}
                  control={
                    <CheckboxComp checked={!!closeOnSelect} onChange={(e) => setCloseOnSelect(e.target.checked)} />
                  }
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
                  label={'introduction.enableDisabledStateForComponent'}
                  control={<CheckboxComp checked={!!disabled} onChange={(e) => setDisabled(e.target.checked)} />}
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

export default DatePickerPage;
