import React from 'react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';
import TextFieldComp from '../../base/textField/TextField';
import { activeCountryNumberFormat } from '../../../utils/locale/locale';

interface NumericTextFieldCompProps {
  isPrefix?: boolean;
  value: number;
  onChange?: (value: number) => void;
  [key: string]: unknown;
}

const NumericTextFieldComp: React.FC<NumericTextFieldCompProps> = ({ isPrefix = true, value, onChange, ...rest }) => {
  const [requiredProps, setRequiredProps] = React.useState<Partial<NumericFormatProps> | null>(null);

  React.useEffect(() => {
    const _requiredProps: Partial<NumericFormatProps> = {
      decimalSeparator: activeCountryNumberFormat.decimalSeparator,
      thousandSeparator: activeCountryNumberFormat.thousandSeparator,
      decimalScale: activeCountryNumberFormat.decimalScale,
      fixedDecimalScale: activeCountryNumberFormat.fixedDecimalScale,
    };

    if (isPrefix) {
      _requiredProps.prefix = activeCountryNumberFormat.prefix;
    }

    setRequiredProps(_requiredProps);
  }, [isPrefix]);

  return (
    <NumericFormat
      customInput={TextFieldComp as React.ComponentType}
      value={value}
      {...requiredProps}
      {...rest}
      onValueChange={(values) => {
        const { floatValue } = values;
        onChange && onChange(floatValue || 0);
      }}
    />
  );
};

export default NumericTextFieldComp;
