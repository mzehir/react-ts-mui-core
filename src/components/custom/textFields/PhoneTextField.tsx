import React from 'react';
import { PatternFormat } from 'react-number-format';
import TextFieldComp from '../../base/textField/TextField';
import { activeCountryPhoneFormat } from '../../../utils/locale/locale';

interface PhoneTextFieldCompProps {
  format?: string;
  mask?: string;
  value: string;
  onChange?: (value: string) => void;
  [key: string]: unknown;
}

const PhoneTextFieldComp: React.FC<PhoneTextFieldCompProps> = ({
  format = activeCountryPhoneFormat.format,
  mask = activeCountryPhoneFormat.mask,
  value,
  onChange,
  ...rest
}) => {
  return (
    <PatternFormat
      format={format}
      mask={mask}
      value={value}
      customInput={TextFieldComp as React.ComponentType}
      onValueChange={(values) => {
        onChange && onChange(values.value || '');
      }}
      {...rest}
    />
  );
};

export default PhoneTextFieldComp;
