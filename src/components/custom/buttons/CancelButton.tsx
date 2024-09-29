import React from 'react';
import ButtonComp from '../../base/button/Button';
import { ButtonCompProps } from '../../base/button/buttonHelper';
import RestartAltIcon from '@mui/icons-material/RestartAlt';

interface CancelButtonProps extends Omit<ButtonCompProps, 'startIcon' | 'endIcon' | 'color' | 'children'> {
  label?: string;
  iconVisible?: boolean;
  iconPosition?: 'left' | 'right';
}

const CancelButton: React.FC<CancelButtonProps> = (props) => {
  const { type = 'reset', label = 'component.cancel', iconVisible = true, iconPosition = 'left', ...rest } = props;

  const startIcon = iconPosition === 'left' && iconVisible ? <RestartAltIcon /> : undefined;
  const endIcon = iconPosition === 'right' && iconVisible ? <RestartAltIcon /> : undefined;

  return (
    <ButtonComp type={type} variant="contained" color="warning" startIcon={startIcon} endIcon={endIcon} {...rest}>
      {label}
    </ButtonComp>
  );
};

export default CancelButton;
