import { activeCountryCode } from './locale';
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
