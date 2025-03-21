import { Controller, FieldValues } from 'react-hook-form';
import { CustomControllerProps } from './helper';
import TextFieldComp from '../../base/textField/TextField';
import PasswordTextField from '../../custom/textFields/PasswordTextField';
import NumericTextFieldComp from '../../custom/textFields/NumaricTextField';
import PhoneTextFieldComp from '../../custom/textFields/PhoneTextField';
import RHFCheckboxComp from './sections/RHFCheckboxComp';
import RHFRadioGroupComp from './sections/RHFRadioGroupComp';
import RHFSelectComp from './sections/RHFSelectComp';
import RHFAsyncSelectComp from './sections/RHFAsyncSelectComp';
import DatePickerComp from '../../base/datePicker/DatePicker';
import { dayjsDateToString, stringToDayjsDate } from '../../../utils/locale/dateFormats';

const CustomController = <T extends FieldValues>({ name, control, componentFields }: CustomControllerProps<T>) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { name, onBlur, onChange, value } }) => (
        <>
          {componentFields.componentType === 'textField' && (
            <TextFieldComp
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              //
              label={componentFields.label}
              placeholder={componentFields.placeholder}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isPlaceholderTranslation={
                typeof componentFields.isPlaceholderTranslation === 'boolean'
                  ? componentFields.isPlaceholderTranslation
                  : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              isValueTranslation={
                typeof componentFields.isValueTranslation === 'boolean' ? componentFields.isValueTranslation : false
              }
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
            />
          )}

          {componentFields.componentType === 'passwordTextField' && (
            <PasswordTextField
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              //
              label={componentFields.label}
              placeholder={componentFields.placeholder}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isPlaceholderTranslation={
                typeof componentFields.isPlaceholderTranslation === 'boolean'
                  ? componentFields.isPlaceholderTranslation
                  : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              isValueTranslation={
                typeof componentFields.isValueTranslation === 'boolean' ? componentFields.isValueTranslation : false
              }
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
            />
          )}

          {componentFields.componentType === 'numericTextField' && (
            <NumericTextFieldComp
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              //
              label={componentFields.label}
              placeholder={componentFields.placeholder}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isPlaceholderTranslation={
                typeof componentFields.isPlaceholderTranslation === 'boolean'
                  ? componentFields.isPlaceholderTranslation
                  : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              isPrefix={typeof componentFields.isPrefix === 'boolean' ? componentFields.isPrefix : false}
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
            />
          )}

          {componentFields.componentType === 'phoneTextField' && (
            <PhoneTextFieldComp
              name={name}
              onBlur={onBlur}
              onChange={onChange}
              value={value}
              //
              label={componentFields.label}
              placeholder={componentFields.placeholder}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isPlaceholderTranslation={
                typeof componentFields.isPlaceholderTranslation === 'boolean'
                  ? componentFields.isPlaceholderTranslation
                  : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
            />
          )}

          {componentFields.componentType === 'checkbox' && (
            <RHFCheckboxComp
              // name={name}
              onChange={onChange}
              value={value}
              //
              label={componentFields.label}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
            />
          )}

          {componentFields.componentType === 'radio' && (
            <RHFRadioGroupComp
              // name={name}
              onChange={onChange}
              value={value}
              //
              label={componentFields.label}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              isItemTextTranslation={
                typeof componentFields.isItemTextTranslation === 'boolean'
                  ? componentFields.isItemTextTranslation
                  : true
              }
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
              //
              items={componentFields.items}
            />
          )}

          {componentFields.componentType === 'select' && (
            <RHFSelectComp
              // name={name}
              onChange={onChange}
              value={value}
              //
              label={componentFields.label}
              multiple={componentFields.multiple}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              isItemTextTranslation={
                typeof componentFields.isItemTextTranslation === 'boolean'
                  ? componentFields.isItemTextTranslation
                  : true
              }
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
              //
              items={componentFields.items}
            />
          )}

          {componentFields.componentType === 'asyncSelect' && (
            <RHFAsyncSelectComp
              // name={name}
              shouldFetchOnEveryOpenMenu={componentFields.shouldFetchOnEveryOpenMenu}
              fetchItemsData={componentFields.fetchItemsData}
              fetchValueItemsData={componentFields.fetchValueItemsData}
              onChange={onChange}
              value={value}
              isSearhAndFilter={componentFields.isSearhAndFilter}
              //
              label={componentFields.label}
              multiple={componentFields.multiple}
              helperText={componentFields.helperText}
              //
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              //
              error={componentFields.error}
              disabled={componentFields.disabled}
              required={componentFields.required}
            />
          )}

          {componentFields.componentType === 'datePicker' && (
            <DatePickerComp
              name={name}
              onChange={(value) => {
                if (value) {
                  onChange(dayjsDateToString(value));
                } else {
                  onChange(null);
                }
              }}
              value={stringToDayjsDate(value)}
              //
              label={componentFields.label}
              slotProps={{
                textField: {
                  helperText: componentFields.helperText,
                  error: componentFields.error,
                  required: componentFields.required,
                },
              }}
              isLabelTranslation={
                typeof componentFields.isLabelTranslation === 'boolean' ? componentFields.isLabelTranslation : true
              }
              isHelperTextTranslation={
                typeof componentFields.isHelperTextTranslation === 'boolean'
                  ? componentFields.isHelperTextTranslation
                  : true
              }
              disabled={componentFields.disabled}
            />
          )}
        </>
      )}
    />
  );
};

export default CustomController;
