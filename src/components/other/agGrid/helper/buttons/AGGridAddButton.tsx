import { ReactNode } from 'react';
import ButtonComp from '../../../../base/button/Button';
import AddIcon from '@mui/icons-material/Add';
import SummarizeIcon from '@mui/icons-material/Summarize';

export interface IAGGridAddButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  text?: string;
  icon?: ReactNode;
}

export const AGGridAddButton = ({
  onClick,
  fullWidth = false,
  text = 'button.new',
  icon = <AddIcon />,
}: IAGGridAddButtonProps) => {
  return (
    <ButtonComp
      fullWidth={fullWidth}
      variant="contained"
      color="primary"
      startIcon={icon}
      isTranslation={true}
      onClick={(event) => {
        onClick(event);
      }}
    >
      {text}
    </ButtonComp>
  );
};

export interface IAGGridSummaryOpenButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  text?: string;
  icon?: ReactNode;
}

export const AGGridSummaryOpenButton = ({
  onClick,
  fullWidth = false,
  text = 'button.showSummary',
  icon = <SummarizeIcon />,
}: IAGGridSummaryOpenButtonProps) => {
  return (
    <ButtonComp
      fullWidth={fullWidth}
      variant="contained"
      color="success"
      startIcon={icon}
      isTranslation={true}
      onClick={(event) => {
        onClick(event);
      }}
    >
      {text}
    </ButtonComp>
  );
};
