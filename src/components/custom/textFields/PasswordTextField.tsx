import React from 'react';
import TextFieldComp from '../../base/textField/TextField';
import { TextFieldCompProps } from '../../base/textField/textFieldHelper';
import IconButtonComp from '../../base/iconButton/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface PasswordTextFieldProps extends TextFieldCompProps {}
const PasswordTextFieldDefaultProps: PasswordTextFieldProps = {};

const PasswordTextField: React.FC<PasswordTextFieldProps> = (props) => {
  const { ...passwordTextFieldProps } = { ...PasswordTextFieldDefaultProps, ...props };

  const [showPassword, setShowPassword] = React.useState(false);
  return (
    <TextFieldComp
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButtonComp onClick={() => setShowPassword(!showPassword)} edge="end">
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButtonComp>
          </InputAdornment>
        ),
      }}
      {...passwordTextFieldProps}
    />
  );
};

export default PasswordTextField;
