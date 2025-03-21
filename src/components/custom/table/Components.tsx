import { ReactNode } from 'react';
import ButtonComp from '../../base/button/Button';
import AddIcon from '@mui/icons-material/Add';

export const TableAddButton = ({
  onClick,
  fullWidth = false,
  text = 'introduction.new',
  icon = <AddIcon />,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
  text?: string;
  icon?: ReactNode;
}) => {
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
