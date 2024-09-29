import React from 'react';
import ButtonComp from '../../base/button/Button';
import { ButtonCompProps } from '../../base/button/buttonHelper';
import RestartAltIcon from '@mui/icons-material/Delete';

interface DeleteButtonProps extends Omit<ButtonCompProps, 'startIcon' | 'endIcon' | 'color' | 'children'> {
  label?: string;
  iconVisible?: boolean;
  iconPosition?: 'left' | 'right';
}

const DeleteButton: React.FC<DeleteButtonProps> = (props) => {
  const { type = 'button', label = 'component.delete', iconVisible = true, iconPosition = 'left', ...rest } = props;

  const startIcon = iconPosition === 'left' && iconVisible ? <RestartAltIcon /> : undefined;
  const endIcon = iconPosition === 'right' && iconVisible ? <RestartAltIcon /> : undefined;

  return (
    <ButtonComp type={type} variant="contained" color="error" startIcon={startIcon} endIcon={endIcon} {...rest}>
      {label}
    </ButtonComp>
  );
};

export default DeleteButton;
