import React from 'react';
import FormControlComp from '../../../base/formControl/FormControl';
import FormControlLabelComp from '../../../base/formControlLabel/FormControlLabel';
import FormHelperTextComp from '../../../base/formHelperText/FormHelperText';
import CheckboxComp from '../../../base/checkbox/Checkbox';

interface RHFCheckboxCompProps {
  // name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  label: string;
  helperText?: string;
  isLabelTranslation?: boolean;
  isHelperTextTranslation?: boolean;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
}

const RHFCheckboxComp: React.FC<RHFCheckboxCompProps> = ({
  // name,
  onChange,
  value,
  label,
  helperText,
  isLabelTranslation,
  isHelperTextTranslation,
  error,
  disabled,
  required,
}) => {
  return (
    <FormControlComp error={error}>
      <FormControlLabelComp
        // name={name}
        label={label}
        isTranslation={isLabelTranslation}
        disabled={disabled}
        required={required}
        control={<CheckboxComp checked={!!value} onChange={onChange} />}
      />

      {error && helperText && (
        <FormHelperTextComp isTranslation={isHelperTextTranslation} sx={{ m: 0 }}>
          {helperText}
        </FormHelperTextComp>
      )}
    </FormControlComp>
  );
};

export default RHFCheckboxComp;
