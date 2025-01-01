import { SummaryType } from './customTableTypes';

export function processSummary(summaryType: SummaryType, key: string, rows: Record<string, unknown>[]): number {
  // Map through rows and extract the key values
  const values = rows
    .map((row) => {
      const value = row[key];
      // Check if the value is a string or number
      if (typeof value === 'string') {
        const numericValue = Number(value);
        return isNaN(numericValue) ? null : numericValue;
      } else if (typeof value === 'number') {
        return value;
      }
      return null;
    })
    .filter((value): value is number => value !== null); // Filter valid numeric values

  // Perform the operation based on the summaryType
  switch (summaryType) {
    case 'sum':
      return values.reduce((acc, val) => acc + val, 0);
    case 'min':
      return values.length > 0 ? Math.min(...values) : 0;
    case 'max':
      return values.length > 0 ? Math.max(...values) : 0;
    case 'avg':
      return values.length > 0 ? values.reduce((acc, val) => acc + val, 0) / values.length : 0;
    case 'count':
    default:
      return rows.length;
  }
}