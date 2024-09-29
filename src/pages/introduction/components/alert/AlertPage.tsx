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
import AlertComp from '../../../../components/base/alert/Alert';
import AlertTitleComp from '../../../../components/base/alertTitle/AlertTitle';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const AlertPage: React.FC = () => {
  const severityOptions: SelectItem[] = [
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
  ];
  const [selectedSeverity, setSelectedSeverity] = useState<(typeof severityOptions)[number]['value']>('info');

  const variantOptions: SelectItem[] = [
    { value: 'filled', label: 'Filled' },
    { value: 'outlined', label: 'Outlined' },
    { value: 'standart', label: 'Standart' },
  ];
  const [selectedVariant, setSelectedVariant] = useState<(typeof variantOptions)[number]['value']>('filled');

  const colorOptions: SelectItem[] = [
    { value: 'error', label: 'Error' },
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warning', label: 'Warning' },
  ];
  const [selectedColor, setSelectedColor] = useState<(typeof colorOptions)[number]['value']>('info');

  const [iconVisible, setIconVisible] = useState(true);
  const [isCustomIcon, setIsCustomIcon] = useState(false);

  const [text, setText] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry');
  const [titleText, setTitleText] = useState('What is Lorem Ipsum?');

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.alertComponent
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
              <AlertComp
                // @ts-expect-error: props hataları görmezden gelinebilir.
                severity={selectedSeverity}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                variant={selectedVariant}
                // @ts-expect-error: props hataları görmezden gelinebilir.
                color={selectedColor}
                {...(iconVisible ? { ...(isCustomIcon ? { icon: <NewReleasesIcon /> } : {}) } : { icon: false })}
              >
                <AlertTitleComp>{titleText}</AlertTitleComp>
                {text}
              </AlertComp>
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
              <TextFieldComp
                fullWidth
                label="introduction.enterTitleForComponent"
                value={titleText}
                onChange={(e) => setTitleText(e.target.value)}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp fullWidth>
                <InputLabelComp>introduction.selectPriorityForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectPriorityForComponent"
                  items={severityOptions}
                  value={selectedSeverity}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedSeverity(e.target.value as (typeof severityOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
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
                  label={'introduction.enableIconForComponent'}
                  control={<CheckboxComp checked={!!iconVisible} onChange={(e) => setIconVisible(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp disabled={!iconVisible}>
                <FormControlLabelComp
                  label={'introduction.customizeIconForComponent'}
                  control={
                    <CheckboxComp checked={!!isCustomIcon} onChange={(e) => setIsCustomIcon(e.target.checked)} />
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

export default AlertPage;
