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

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const TypographyPage: React.FC = () => {
  const alignOptions: SelectItem[] = [
    { value: 'center', label: 'Center' },
    { value: 'inherit', label: 'Inherit' },
    { value: 'justify', label: 'Justify' },
    { value: 'left', label: 'Left' },
    { value: 'right', label: 'Right' },
  ];

  const variantOptions: SelectItem[] = [
    { value: 'body1', label: 'Body 1' },
    { value: 'body2', label: 'Body 2' },
    { value: 'button', label: 'Button' },
    { value: 'caption', label: 'Caption' },
    { value: 'h1', label: 'h1' },
    { value: 'h2', label: 'h2' },
    { value: 'h3', label: 'h3' },
    { value: 'h4', label: 'h4' },
    { value: 'h5', label: 'h5' },
    { value: 'h6', label: 'h6' },
    { value: 'inherit', label: 'Inherit' },
    { value: 'overline', label: 'Overline' },
    { value: 'subtitle1', label: 'Subtitle 1' },
    { value: 'subtitle2', label: 'Subtitle 2' },
  ];

  const [text, setText] = useState(
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  );
  const [selectedAlign, setSelectedAlign] = useState<(typeof alignOptions)[number]['value']>('center');
  const [selectedVariant, setSelectedVariant] = useState<(typeof variantOptions)[number]['value']>('h3');
  const [noWrap, setNoWrap] = useState(false);
  const [gutterBottom, setGutterBottom] = useState(false);
  const [paragraph, setParagraph] = useState(false);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.typographyComponent
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
              <TypographyComp
                // @ts-expect-error: Prop errors can be ignored.
                align={selectedAlign}
                // @ts-expect-error: Prop errors can be ignored.
                variant={selectedVariant}
                noWrap={noWrap}
                gutterBottom={gutterBottom}
                paragraph={paragraph}
              >
                {text}
              </TypographyComp>
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
                <InputLabelComp>introduction.selectAlignmentForComponent</InputLabelComp>
                <SelectComp
                  label="introduction.selectAlignmentForComponent"
                  items={alignOptions}
                  value={selectedAlign}
                  onChange={(e: SelectChangeEvent<unknown>) => {
                    setSelectedAlign(e.target.value as (typeof alignOptions)[number]['value']);
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
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableNoWrapForComponent'}
                  control={<CheckboxComp checked={!!noWrap} onChange={(e) => setNoWrap(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableBottomSpacingForComponent'}
                  control={
                    <CheckboxComp checked={!!gutterBottom} onChange={(e) => setGutterBottom(e.target.checked)} />
                  }
                />
              </FormControlComp>
            </GridComp>

            <GridComp item xs={12} md={6} lg={3}>
              <FormControlComp>
                <FormControlLabelComp
                  label={'introduction.enableParagraphForComponent'}
                  control={<CheckboxComp checked={!!paragraph} onChange={(e) => setParagraph(e.target.checked)} />}
                />
              </FormControlComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default TypographyPage;
