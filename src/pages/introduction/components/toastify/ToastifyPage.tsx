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
import { Toastify } from '../../../../components/custom/toastify/Toastify';
import { ToastCompProps } from '../../../../components/custom/toastify/toastifyHelper';

const runToast = (props: ToastCompProps) => {
  Toastify({
    ...props,
  });
};

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const ToastifyPage: React.FC = () => {
  const themeOptions: SelectItem[] = [
    { value: 'colored', label: 'Colored' },
    { value: 'dark', label: 'Dark' },
    { value: 'light', label: 'Light' },
  ];
  const [selectedTheme, setSelectedTheme] = useState<(typeof typeOptions)[number]['value']>('dark');

  const typeOptions: SelectItem[] = [
    { value: 'info', label: 'Info' },
    { value: 'success', label: 'Success' },
    { value: 'warn', label: 'Warn' },
    { value: 'error', label: 'Error' },
  ];
  const [selectedType, setSelectedType] = useState<(typeof typeOptions)[number]['value']>('info');

  const positionOptions: SelectItem[] = [
    { value: 'top-right', label: 'Top-Right' },
    { value: 'top-center', label: 'Top-Center' },
    { value: 'top-left', label: 'Top-Left' },
    { value: 'bottom-right', label: 'Bottom-Right' },
    { value: 'bottom-center', label: 'Bottom-Center' },
    { value: 'bottom-left', label: 'Bottom-Left' },
  ];
  const [selectedPosition, setSelectedPosition] = useState<(typeof positionOptions)[number]['value']>('top-right');
  const [text, setText] = useState('Lorem Ipsum is simply dummy text of the printing and typesetting industry');
  const [toastifyVisible, setToastifyVisible] = useState(false);
  const [autoClose, setAutoClose] = useState<number>(5000);
  const [hideProgressBar, setHideProgressBar] = useState(false);
  const [closeOnClick, setCloseOnClick] = useState(true);
  const [pauseOnHover, setPauseOnHover] = useState(true);
  const [draggable, setDraggable] = useState(true);

  React.useEffect(() => {
    if (toastifyVisible) {
      runToast({
        // @ts-expect-error: props hataları görmezden gelinebilir.
        theme: selectedTheme,
        // @ts-expect-error: props hataları görmezden gelinebilir.
        type: selectedType,
        // @ts-expect-error: props hataları görmezden gelinebilir.
        position: selectedPosition,
        message: text,
        autoClose: autoClose,
        hideProgressBar: hideProgressBar,
        closeOnClick: closeOnClick,
        pauseOnHover: pauseOnHover,
        draggable: draggable,
      });
    }
  }, [
    toastifyVisible,
    selectedTheme,
    selectedType,
    selectedPosition,
    text,
    autoClose,
    hideProgressBar,
    closeOnClick,
    pauseOnHover,
    draggable,
  ]);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.toastifyComponent
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
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.showComponent'}
                  control={
                    <CheckboxComp checked={!!toastifyVisible} onChange={(e) => setToastifyVisible(e.target.checked)} />
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
                <InputLabelComp>introduction.selectThemeForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectThemeForComponent"
                  items={themeOptions}
                  value={selectedTheme}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedTheme(e.target.value as (typeof themeOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp fullWidth>
                <InputLabelComp>introduction.selectTypeForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectTypeForComponent"
                  items={typeOptions}
                  value={selectedType}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedType(e.target.value as (typeof typeOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp fullWidth>
                <InputLabelComp>introduction.selectPositionForComponent2</InputLabelComp>
                <SelectComp
                  label="introduction.selectPositionForComponent2"
                  items={positionOptions}
                  value={selectedPosition}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedPosition(e.target.value as (typeof positionOptions)[number]['value']);
                  }}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <TextFieldComp
                fullWidth
                label="introduction.changeCloseTimeForComponent"
                type="number"
                value={autoClose}
                onChange={(e) => {
                  if (e.target.value && typeof e.target.value === 'string') {
                    setAutoClose(+e.target.value);
                  } else if (typeof e.target.value === 'number' && e.target.value > 0) {
                    setAutoClose(e.target.value);
                  }
                }}
              />
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.hideProgressBarForComponent'}
                  control={
                    <CheckboxComp checked={!!hideProgressBar} onChange={(e) => setHideProgressBar(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.closeComponentOnClickAnywhere'}
                  control={
                    <CheckboxComp checked={!!closeOnClick} onChange={(e) => setCloseOnClick(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.pauseCloseOnHoverForComponent'}
                  control={
                    <CheckboxComp checked={!!pauseOnHover} onChange={(e) => setPauseOnHover(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.closeComponentByDragging'}
                  control={<CheckboxComp checked={!!draggable} onChange={(e) => setDraggable(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default ToastifyPage;
