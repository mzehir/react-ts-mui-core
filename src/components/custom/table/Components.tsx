import ButtonComp from '../../base/button/Button';
import AddIcon from '@mui/icons-material/Add';

export const TableAddButton = ({
  onClick,
  fullWidth = false,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  fullWidth?: boolean;
}) => {
  return (
    <ButtonComp
      fullWidth={fullWidth}
      variant="contained"
      color="success"
      startIcon={<AddIcon />}
      isTranslation={true}
      onClick={(event) => {
        onClick(event);
      }}
    >
      introduction.new
    </ButtonComp>
  );
};
