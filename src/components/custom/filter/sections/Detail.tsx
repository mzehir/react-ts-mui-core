import React from 'react';
import styled from '@emotion/styled';
import { DetailSectionProps } from '../helper/sectionDetailHelper';
import AccordionDetailsComp from '../../../base/accordionDetails/AccordionDetails';
import GridComp from '../../../base/grid/Grid';
import FormControlComp from '../../../base/formControl/FormControl';
import FormLabelComp from '../../../base/formLabel/FormLabel';
import FormControlLabelComp from '../../../base/formControlLabel/FormControlLabel';
import { SelectChangeEvent } from '@mui/material';
import SelectComp from '../../../base/select/Select';
import TextFieldComp from '../../../base/textField/TextField';
import CheckboxComp from '../../../base/checkbox/Checkbox';
import RadioGroupComp from '../../../base/radioGroup/RadioGroup';
import RadioComp from '../../../base/radio/Radio';
import InputLabelComp from '../../../base/inputLabel/InputLabel';
import NumericTextFieldComp from '../../textFields/NumaricTextField';
import DatePickerComp from '../../../base/datePicker/DatePicker';
import { Dayjs } from 'dayjs';

const CustomAccordionDetailsComp = styled(AccordionDetailsComp)`
  padding: ${({ theme }) => theme.spacing(2)};
  padding-top: ${({ theme }) => theme.spacing(5)};
  padding-bottom: ${({ theme }) => theme.spacing(5)};
  border-top: 1px solid rgba(0, 0, 0, 0.125);
`;

const DetailSection: React.FC<DetailSectionProps> = ({ filterItems, values, handleValueChange }) => {
  return (
    <CustomAccordionDetailsComp>
      <GridComp container spacing={5} alignItems={'center'}>
        {filterItems?.map((item, index) => {
          return (
            <React.Fragment key={index.toString()}>
              {item.componentType === 'textField' && (
                <GridComp item xs={12} md={6} lg={3}>
                  <TextFieldComp
                    fullWidth={true}
                    label={item.componentProps.label}
                    placeholder={item.componentProps.placeholder}
                    value={values[item.name]?.value || ''}
                    onChange={(e) => {
                      handleValueChange({ key: item.name, newValue: e.target.value });
                    }}
                    isLabelTranslation={!!item.componentProps.isLabelTranslation}
                    isPlaceholderTranslation={!!item.componentProps.isPlaceholderTranslation}
                  />
                </GridComp>
              )}

              {item.componentType === 'numericTextField' && (
                <GridComp item xs={12} md={6} lg={3}>
                  <NumericTextFieldComp
                    fullWidth={true}
                    label={item.componentProps.label}
                    placeholder={item.componentProps.placeholder}
                    isPrefix={!!item.componentProps.isPrefix}
                    value={values[item.name]?.value as number}
                    onChange={(e) => {
                      handleValueChange({ key: item.name, newValue: e });
                    }}
                    isLabelTranslation={!!item.componentProps.isLabelTranslation}
                    isPlaceholderTranslation={!!item.componentProps.isPlaceholderTranslation}
                  />
                </GridComp>
              )}

              {item.componentType === 'datePicker' && (
                <GridComp item xs={12} md={6} lg={3}>
                  <DatePickerComp
                    label={item.componentProps.label}
                    isLabelTranslation={!!item.componentProps.isLabelTranslation}
                    value={(values[item.name]?.value as Dayjs | null) ?? null}
                    onChange={(newValue) => {
                      if (newValue) {
                        handleValueChange({ key: item.name, newValue: newValue });
                      }
                    }}
                    slotProps={{
                      textField: {
                        fullWidth: true,
                      },
                    }}
                  />
                </GridComp>
              )}

              {item.componentType === 'checkbox' && (
                <GridComp item xs={12} md={6} lg={3}>
                  <FormControlComp>
                    <FormControlLabelComp
                      label={item.componentProps.label}
                      isTranslation={!!item.componentProps.isLabelTranslation}
                      control={
                        <CheckboxComp
                          checked={(!!values[item.name]?.value as boolean) || false}
                          onChange={(e) => {
                            handleValueChange({ key: item.name, newValue: e.target.checked });
                          }}
                        />
                      }
                    />
                  </FormControlComp>
                </GridComp>
              )}

              {item.componentType === 'radio' && (
                <GridComp item xs={12} md={6} lg={3}>
                  <FormControlComp>
                    <FormLabelComp isTranslation={!!item.componentProps.isLabelTranslation}>
                      {item.componentProps.label}
                    </FormLabelComp>
                    <RadioGroupComp
                      row={true}
                      value={values[item.name]?.value || ''}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        handleValueChange({ key: item.name, newValue: e.target.value });
                      }}
                    >
                      {item.componentProps.items.map((componentItem, componentIndex) => (
                        <FormControlLabelComp
                          key={componentIndex.toString()}
                          label={componentItem.label}
                          value={componentItem.value}
                          control={<RadioComp />}
                          isTranslation={!!item.componentProps.isItemTranslation}
                        />
                      ))}
                    </RadioGroupComp>
                  </FormControlComp>
                </GridComp>
              )}

              {item.componentType === 'select' && (
                <GridComp item xs={12} md={6} lg={3}>
                  <FormControlComp fullWidth={true}>
                    <InputLabelComp isTranslation={!!item.componentProps.isLabelTranslation}>
                      {item.componentProps.label}
                    </InputLabelComp>

                    <SelectComp
                      label={item.componentProps.label}
                      isLabelTranslation={!!item.componentProps.isLabelTranslation}
                      items={item.componentProps.items}
                      isItemTranslation={!!item.componentProps.isItemTranslation}
                      value={values[item.name]?.value || ''}
                      onChange={(e: SelectChangeEvent<unknown>) => {
                        handleValueChange({ key: item.name, newValue: e.target.value as string | number });
                      }}
                    />
                  </FormControlComp>
                </GridComp>
              )}
            </React.Fragment>
          );
        })}
      </GridComp>
    </CustomAccordionDetailsComp>
  );
};

export default DetailSection;
