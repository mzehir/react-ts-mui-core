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
import { InputAdornment, SelectChangeEvent } from '@mui/material';
import CheckboxComp from '../../../../components/base/checkbox/Checkbox';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import BuildIcon from '@mui/icons-material/Build';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const TextFieldPage: React.FC = () => {
  const variantOptions: SelectItem[] = [
    { value: 'filled', label: 'Filled' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'standard', label: 'Standard' },
  ];

  const sizeOptions: SelectItem[] = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
  ];

  const colorOptions: SelectItem[] = [
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'success', label: 'Success' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
  ];

  const [selectedVariant, setSelectedVariant] = useState<(typeof variantOptions)[number]['value']>('outlined');
  const [selectedSize, setSelectedSize] = useState<(typeof sizeOptions)[number]['value']>('medium');
  const [selectedColor, setSelectedColor] = useState<(typeof colorOptions)[number]['value']>('success');

  const [value, setValue] = useState('');
  const [label, setLabel] = useState('Kullanıcı Adı');
  const [placeholder, setPlaceholder] = useState('Kullanıcı adını gir');
  const [helperText, setHelperText] = useState('Bu alana bileşen için yadımcı metin girilebilir.');
  const [disabled, setDisabled] = useState(false);
  const [required, setRequired] = useState(false);
  const [error, setError] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [multiline, setMultiline] = useState(false);
  const [minRows, setMinRows] = useState(1);
  const [maxRows, setMaxRows] = useState(3);
  const [startIconOpen, setStartIconOpen] = useState(false);
  const [endIconOpen, setEndIconOpen] = useState(false);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.textfieldComponent
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
              <TextFieldComp
                // @ts-expect-error: props hataları görmezden gelinebilir.
                variant={selectedVariant}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                size={selectedSize}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                color={selectedColor}
                value={value}
                label={label}
                placeholder={placeholder}
                helperText={helperText}
                disabled={disabled}
                required={required}
                error={error}
                fullWidth={fullWidth}
                onChange={(e) => setValue(e.target.value)}
                multiline={multiline}
                minRows={minRows}
                maxRows={maxRows}
                InputProps={{
                  ...(startIconOpen
                    ? {
                        startAdornment: (
                          <InputAdornment position="start">
                            <BuildIcon />
                          </InputAdornment>
                        ),
                      }
                    : {}),
                  ...(endIconOpen
                    ? {
                        endAdornment: (
                          <InputAdornment position="end">
                            <BuildIcon />
                          </InputAdornment>
                        ),
                      }
                    : {}),
                }}
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
                label="introduction.enterPlaceholderForComponent"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
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
                  label={'introduction.enableDisabledStateForComponent'}
                  control={<CheckboxComp checked={!!disabled} onChange={(e) => setDisabled(e.target.checked)} />}
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
                  label={'introduction.markComponentAsError'}
                  control={<CheckboxComp checked={!!error} onChange={(e) => setError(e.target.checked)} />}
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

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableMultilineForComponent'}
                  control={<CheckboxComp checked={!!multiline} onChange={(e) => setMultiline(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                disabled={!multiline}
                type="number"
                fullWidth
                label="introduction.enterMinRowsForComponent"
                value={minRows}
                onChange={(e) => setMinRows(Number(e.target.value))}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                disabled={!multiline}
                type="number"
                fullWidth
                label="introduction.enterMaxRowsForComponent"
                value={maxRows}
                onChange={(e) => setMaxRows(Number(e.target.value))}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.iconBeforeComponentText'}
                  control={
                    <CheckboxComp checked={!!startIconOpen} onChange={(e) => setStartIconOpen(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.iconAfterComponentText'}
                  control={<CheckboxComp checked={!!endIconOpen} onChange={(e) => setEndIconOpen(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default TextFieldPage;
