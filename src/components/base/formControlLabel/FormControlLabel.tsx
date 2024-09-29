import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import FormControlLabel from '@mui/material/FormControlLabel';
import { FormControlLabelCompProps, formControlLabelCompDefaultProps } from './formControlLabelHelper';

const FormControlLabelComp: React.FC<FormControlLabelCompProps> = (props) => {
  const { label, isTranslation, ...formControlLabelProps } = { ...formControlLabelCompDefaultProps, ...props };
  const { translate } = useLanguageContext();

  return (
    <FormControlLabel
      label={isTranslation && typeof label === 'string' ? translate(label) : label}
      {...formControlLabelProps}
    />
  );
};

export default FormControlLabelComp;
