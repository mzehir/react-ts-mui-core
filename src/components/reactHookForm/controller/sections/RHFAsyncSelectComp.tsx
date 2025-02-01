import React from 'react';
import FormControlComp from '../../../base/formControl/FormControl';
import FormHelperTextComp from '../../../base/formHelperText/FormHelperText';
import { Item as SelectItem } from '../../../custom/selects/asyncSelectHelper';
import AsyncSelectComp from '../../../custom/selects/AsyncSelect';
import InputLabelComp from '../../../base/inputLabel/InputLabel';
import { SelectChangeEvent } from '@mui/material';

interface RHFAsyncSelectCompProps {
  // name: string;
  onChange: (event: SelectChangeEvent<unknown>, child: React.ReactNode) => void;
  value: string | number;
  label?: string;
  multiple?: boolean;
  helperText?: string;
  isLabelTranslation?: boolean;
  isHelperTextTranslation?: boolean;
  error?: boolean;
  disabled?: boolean;
  required?: boolean;
  shouldFetchOnEveryOpenMenu?: boolean;
  fetchItemsData: () => Promise<SelectItem[]>;
  fetchValueItemsData: (value: unknown, multiple: boolean) => Promise<SelectItem[]>;
}

const RHFAsyncSelectComp: React.FC<RHFAsyncSelectCompProps> = ({
  onChange,
  value,
  label,
  multiple,
  helperText,
  isLabelTranslation,
  isHelperTextTranslation,
  error,
  disabled,
  required,
  shouldFetchOnEveryOpenMenu,
  fetchItemsData,
  fetchValueItemsData,
}) => {
  return (
    <FormControlComp error={error} disabled={disabled} required={required}>
      <InputLabelComp isTranslation={isLabelTranslation}>{label}</InputLabelComp>
      <AsyncSelectComp
        label={label}
        shouldFetchOnEveryOpenMenu={shouldFetchOnEveryOpenMenu}
        fetchItemsData={fetchItemsData}
        multiple={multiple}
        value={value}
        fetchValueItemsData={(value) => fetchValueItemsData(value, multiple ?? false)}
        onChange={onChange}
        isLabelTranslation={isLabelTranslation}
      />
      {error && helperText && (
        <FormHelperTextComp isTranslation={isHelperTextTranslation} sx={{ m: 0 }}>
          {helperText}
        </FormHelperTextComp>
      )}
    </FormControlComp>
  );
};

export default RHFAsyncSelectComp;
