import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import ButtonComp from '../../../../components/base/button/Button';
import TextFieldComp from '../../../../components/base/textField/TextField';
import FormControlComp from '../../../../components/base/formControl/FormControl';
import FormControlLabelComp from '../../../../components/base/formControlLabel/FormControlLabel';
import InputLabelComp from '../../../../components/base/inputLabel/InputLabel';
import SelectComp from '../../../../components/base/select/Select';
import { Item as SelectItem } from '../../../../components/base/select/selectHelper';
import { SelectChangeEvent } from '@mui/material';
import CheckboxComp from '../../../../components/base/checkbox/Checkbox';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import AddIcon from '@mui/icons-material/Add';
import BuildIcon from '@mui/icons-material/Build';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const ButtonPage: React.FC = () => {
  const variantOptions: SelectItem[] = [
    { value: 'contained', label: 'Contained' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'text', label: 'Text' },
  ];

  const sizeOptions: SelectItem[] = [
    { value: 'small', label: 'Small' },
    { value: 'medium', label: 'Medium' },
    { value: 'large', label: 'Large' },
  ];

  const colorOptions: SelectItem[] = [
    { value: 'inherit', label: 'Inherit' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'success', label: 'Success' },
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' },
    { value: 'warning', label: 'Warning' },
  ];

  const [selectedVariant, setSelectedVariant] = useState<(typeof variantOptions)[number]['value']>('contained');
  const [selectedSize, setSelectedSize] = useState<(typeof sizeOptions)[number]['value']>('medium');
  const [selectedColor, setSelectedColor] = useState<(typeof colorOptions)[number]['value']>('success');
  const [text, setText] = useState('Click');
  const [disabled, setDisabled] = useState(false);
  const [startIconOpen, setStartIconOpen] = useState(false);
  const [endIconOpen, setEndIconOpen] = useState(false);
  const [fullWidth, setFullWidth] = useState(true);
  const [uploadFileActive, setUploadFileActive] = useState(false);
  const [uploadText] = useState('Dosya Yükle');

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.buttonComponent
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
              <ButtonComp
                isTranslation={false}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                variant={selectedVariant}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                size={selectedSize}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                color={selectedColor}
                disabled={disabled}
                fullWidth={fullWidth}
                {...(startIconOpen ? { startIcon: <BuildIcon /> } : {})}
                {...(endIconOpen ? { endIcon: <AddIcon /> } : {})}
                {...(uploadFileActive ? { component: 'label', role: undefined, tabIndex: -1 } : {})}
              >
                {uploadFileActive ? uploadText : text}
                {uploadFileActive && <VisuallyHiddenInput type="file" />}
              </ButtonComp>
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
                disabled={uploadFileActive}
                fullWidth
                label="introduction.enterTextForComponent"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </GridComp>

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
                  label={'introduction.enableFileUploadForComponent'}
                  control={
                    <CheckboxComp
                      checked={!!uploadFileActive}
                      onChange={(e) => {
                        setUploadFileActive(e.target.checked);
                      }}
                    />
                  }
                />
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default ButtonPage;
