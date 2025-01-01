import { activeCountryNumberFormat } from '../locale/locale';

export function formatNumber(value: number): string {
  const { decimalSeparator, thousandSeparator, decimalScale } = activeCountryNumberFormat;
  let formattedNumber = value.toFixed(decimalScale).replace('.', decimalSeparator);

  if (thousandSeparator) {
    const parts = formattedNumber.split(decimalSeparator);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    formattedNumber = parts.join(decimalSeparator);
  }

  return formattedNumber;
}

export function formatCurrency(value: number, isPrefix: boolean = true, customPrefix?: string): string {
  const { decimalSeparator, thousandSeparator, decimalScale, prefix } = activeCountryNumberFormat;
  let formattedAmount = value.toFixed(decimalScale).replace('.', decimalSeparator);

  if (thousandSeparator) {
    const parts = formattedAmount.split(decimalSeparator);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, thousandSeparator);
    formattedAmount = parts.join(decimalSeparator);
  }

  if (isPrefix) {
    const prefixAmount = customPrefix ? `${customPrefix}${formattedAmount}` : `${prefix}${formattedAmount}`;
    return prefixAmount;
  } else {
    return formattedAmount;
  }
}
