import React from 'react';
import ButtonComp from '../../base/button/Button';
import { ButtonCompProps } from '../../base/button/buttonHelper';
import SaveIcon from '@mui/icons-material/Save';

interface SaveButtonProps extends Omit<ButtonCompProps, 'startIcon' | 'endIcon' | 'color' | 'children'> {
  label?: string;
  iconVisible?: boolean;
  iconPosition?: 'left' | 'right';
}

const SaveButton: React.FC<SaveButtonProps> = (props) => {
  const { type = 'submit', label = 'component.save', iconVisible = true, iconPosition = 'left', ...rest } = props;

  const startIcon = iconPosition === 'left' && iconVisible ? <SaveIcon /> : undefined;
  const endIcon = iconPosition === 'right' && iconVisible ? <SaveIcon /> : undefined;

  return (
    <ButtonComp type={type} variant="contained" color="success" startIcon={startIcon} endIcon={endIcon} {...rest}>
      {label}
    </ButtonComp>
  );
};

export default SaveButton;
