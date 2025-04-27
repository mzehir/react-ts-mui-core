import { activeCountryCode, Countries } from './locale';
import dayjs, { Dayjs } from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import 'dayjs/locale/tr';
import 'dayjs/locale/en';

dayjs.extend(customParseFormat);

if (activeCountryCode === 'tr') {
  dayjs.locale('tr');
} else {
  dayjs.locale('en');
}

export const configuredDayjs = dayjs;

export const getDateFormat = (countryCodeParams?: Countries) => {
  const countryCode = countryCodeParams ?? activeCountryCode;
  if (countryCode === 'tr') {
    return 'DD-MM-YYYY';
  } else if (countryCode === 'en') {
    return 'YYYY-MM-DD';
  }
};

export const stringToDayjsDate = (dateString: string) => {
  if (activeCountryCode === 'tr') {
    return dayjs(dateString, 'DD-MM-YYYY');
  } else {
    return dayjs(dateString, 'YYYY-MM-DD');
  }
};

export const dayjsDateToString = (dayjsDate: Dayjs) => {
  if (activeCountryCode === 'tr') {
    return dayjsDate.format('DD-MM-YYYY');
  } else {
    return dayjsDate.format('YYYY-MM-DD');
  }
};

export const getTodayDateAsString = () => {
  const today = dayjs();
  const stringToday = dayjsDateToString(today);
  return stringToday;
};

export const isDateInRange = (
  selectedDay: Dayjs,
  startDay: Dayjs | null | undefined,
  endDay: Dayjs | null | undefined,
): boolean => {
  const isAfterOrSameStart = !startDay || selectedDay.isSame(startDay, 'day') || selectedDay.isAfter(startDay, 'day');
  const isBeforeOrSameEnd = !endDay || selectedDay.isSame(endDay, 'day') || selectedDay.isBefore(endDay, 'day');

  return isAfterOrSameStart && isBeforeOrSameEnd;
};
