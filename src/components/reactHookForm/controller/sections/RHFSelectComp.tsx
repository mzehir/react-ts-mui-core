import React from 'react';
import FormControlComp from '../../../base/formControl/FormControl';
import FormHelperTextComp from '../../../base/formHelperText/FormHelperText';
import { Item as SelectItem } from '../../../base/select/selectHelper';
import SelectComp from '../../../base/select/Select';
import InputLabelComp from '../../../base/inputLabel/InputLabel';
import { SelectChangeEvent } from '@mui/material';

interface RHFSelectCompProps {
  // name: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  value: string | number;
  label?: string;
  helperText?: string;
  isLabelTranslation?: boolean;
  isHelperTextTranslation?: boolean;
  isItemTextTranslation?: boolean;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  items: SelectItem[];
}

const RHFSelectComp: React.FC<RHFSelectCompProps> = ({
  // name,
  onChange,
  value,
  label,
  helperText,
  isLabelTranslation,
  isHelperTextTranslation,
  isItemTextTranslation,
  error,
  disabled,
  required,
  items,
}) => {
  return (
    <FormControlComp error={error} disabled={disabled} required={required}>
      <InputLabelComp isTranslation={isLabelTranslation}>{label}</InputLabelComp>
      <SelectComp
        label={label}
        items={items}
        value={value}
        onChange={onChange}
        isLabelTranslation={isLabelTranslation}
        isItemTranslation={isItemTextTranslation}
      />
      {error && helperText && (
        <FormHelperTextComp isTranslation={isHelperTextTranslation} sx={{ m: 0 }}>
          {helperText}
        </FormHelperTextComp>
      )}
    </FormControlComp>
  );
};

export default RHFSelectComp;
