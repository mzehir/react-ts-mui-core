import React from 'react';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { childrenTranslate } from '../../../contexts/languageContextHelper';
import LocalizationProviderComp from '../localizationProvider/LocalizationProvider';
import { datePickerCompDefaultProps, DatePickerCompProps } from './datePickerHelper';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const DatePickerComp: React.FC<DatePickerCompProps> = (props) => {
  const { isLabelTranslation, isHelperTextTranslation, label, slotProps, ...datePickerProps } = {
    ...datePickerCompDefaultProps,
    ...props,
  };
  const { translate } = useLanguageContext();

  return (
    <LocalizationProviderComp>
      <DatePicker
        {...(label ? { label: isLabelTranslation ? childrenTranslate(label, translate) : label } : {})}
        slotProps={{
          textField: {
            ...slotProps?.textField,
            // @ts-expect-error: helperText hatası görmezden gelinebilir.
            ...(slotProps?.textField?.helperText
              ? {
                  helperText: isHelperTextTranslation
                    ? // @ts-expect-error: helperText hatası görmezden gelinebilir.
                      childrenTranslate(slotProps?.textField?.helperText, translate)
                    : // @ts-expect-error: helperText hatası görmezden gelinebilir.
                      slotProps?.textField?.helperText,
                }
              : {}),
          },
          ...slotProps?.field,
        }}
        {...datePickerProps}
      />
    </LocalizationProviderComp>
  );
};

export default DatePickerComp;
