import React from 'react';
import ButtonComp from '../../../../../../components/base/button/Button';
import TypographyComp from '../../../../../../components/base/typography/Typography';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../../../../components/custom/dialog/BootstrapDialog';

interface BasicsDialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BasicsDialog: React.FC<BasicsDialogProps> = ({ open, setOpen }) => {
  return (
    <BootstrapDialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
      <BootstrapDialogTitle onClose={() => setOpen(false)}>What is Lorem Ipsum?</BootstrapDialogTitle>

      <BootstrapDialogContent>
        <TypographyComp>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </TypographyComp>

        <br />

        <TypographyComp>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </TypographyComp>
      </BootstrapDialogContent>

      <BootstrapDialogActions>
        <ButtonComp variant="contained" color="warning" onClick={() => setOpen(false)}>
          introduction.cancel
        </ButtonComp>
      </BootstrapDialogActions>
    </BootstrapDialog>
  );
};
