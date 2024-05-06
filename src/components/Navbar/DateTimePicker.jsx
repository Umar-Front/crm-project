import React from 'react'
// import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import moment from "moment"

export default function FirstComponent() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date"
        defaultValue={moment()}
        views={['yeare', 'month', 'day']}
        slotProps={{ textField: { size: 'small' } }}

      />
    </LocalizationProvider>
  );
}