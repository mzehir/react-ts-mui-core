import React, { useState } from 'react';
import { BasicsDialog } from './section/basicsDialog/BasicsDialog';
import { CustomizableDialog } from './section/customizableDialog/CustomizableDialog';
import { styled } from '@mui/material/styles';
import BoxComp from '../../../../components/base/box/Box';
import CardComp from '../../../../components/base/card/Card';
import CardContentComp from '../../../../components/base/cardContent/CardContent';
import GridComp from '../../../../components/base/grid/Grid';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';
import IconButtonComp from '../../../../components/base/iconButton/IconButton';
import ButtonComp from '../../../../components/base/button/Button';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const DialogPage: React.FC = () => {
  const [basicsDialogOpen, setBasicsDialogOpen] = useState(false);
  const [customizableDialogOpen, setCustomizableDialogOpen] = useState(false);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.dialogComponent
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
            <GridComp item xs={12} display={'flex'} justifyContent={'center'} gap={'15px'}>
              <ButtonComp
                variant="contained"
                color="primary"
                onClick={() => {
                  setBasicsDialogOpen(true);
                }}
              >
                Basics Dialog
              </ButtonComp>

              <ButtonComp
                variant="contained"
                color="primary"
                onClick={() => {
                  setCustomizableDialogOpen(true);
                }}
              >
                Customizable Dialog
              </ButtonComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>

      <BasicsDialog open={basicsDialogOpen} setOpen={setBasicsDialogOpen} />
      <CustomizableDialog open={customizableDialogOpen} setOpen={setCustomizableDialogOpen} />
    </>
  );
};

export default DialogPage;
