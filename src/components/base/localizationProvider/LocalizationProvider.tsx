import React from 'react';
import { LocalizationProvider, LocalizationProviderProps } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { configuredDayjs } from '../../../utils/locale/dateFormats';

interface LocalizationProviderCompProps extends LocalizationProviderProps<Dayjs, unknown> {
  children: React.ReactNode;
}

const LocalizationProviderComp: React.FC<LocalizationProviderCompProps> = (props) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={configuredDayjs.locale()}>
      {props.children}
    </LocalizationProvider>
  );
};

export default LocalizationProviderComp;
