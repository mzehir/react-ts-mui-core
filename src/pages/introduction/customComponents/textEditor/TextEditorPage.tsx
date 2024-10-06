import React from 'react';
import { styled } from '@mui/material/styles';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import TinymceComp from '../../../../components/custom/tinymce/Tinymce';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const TextEditorPage: React.FC = () => {
  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.textEditor
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.playWithComponent
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
              <TinymceComp />
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default TextEditorPage;
