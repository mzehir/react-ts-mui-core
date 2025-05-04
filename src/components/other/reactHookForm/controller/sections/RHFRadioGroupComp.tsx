import React from 'react';
import FormControlComp from '../../../../base/formControl/FormControl';
import FormControlLabelComp from '../../../../base/formControlLabel/FormControlLabel';
import FormHelperTextComp from '../../../../base/formHelperText/FormHelperText';
import RadioGroupComp from '../../../../base/radioGroup/RadioGroup';
import RadioComp from '../../../../base/radio/Radio';
import FormLabelComp from '../../../../base/formLabel/FormLabel';

export interface RHFRadioGroupCompItemProp {
  label: string;
  value: string | number;
  disabled?: boolean;
}

interface RHFRadioGroupCompProps {
  // name: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  label: string;
  helperText?: string;
  isLabelTranslation?: boolean;
  isHelperTextTranslation?: boolean;
  isItemTextTranslation?: boolean;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  items: RHFRadioGroupCompItemProp[];
}

const RHFRadioGroupComp: React.FC<RHFRadioGroupCompProps> = ({
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
      <RadioGroupComp row value={value} onChange={onChange} sx={{ alignItems: 'center' }}>
        <FormLabelComp isTranslation={isLabelTranslation} sx={{ marginRight: '15px' }}>
          {label}
        </FormLabelComp>
        {items.map((item) => (
          <FormControlLabelComp
            isTranslation={isItemTextTranslation}
            key={item.value}
            label={item.label}
            value={item.value}
            disabled={item.disabled}
            control={<RadioComp />}
          />
        ))}
      </RadioGroupComp>

      {error && helperText && (
        <FormHelperTextComp isTranslation={isHelperTextTranslation} sx={{ m: 0 }}>
          {helperText}
        </FormHelperTextComp>
      )}
    </FormControlComp>
  );
};

export default RHFRadioGroupComp;
