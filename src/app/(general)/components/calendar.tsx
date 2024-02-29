"use client";
import React, { useState } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { MonthCalendar } from '@mui/x-date-pickers/MonthCalendar';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file

export default function BasicDateCalendar() {
    const [value, setValue] = useState<Dayjs | null>(dayjs());
    const [val2, setValue2] = useState<Dayjs | null>(dayjs().add(1, 'month'))

  return (
    <div className='grid md:grid-cols-2 grid-cols-1 gap-1'>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar 
                disablePast 
                value={value} 
                onChange={(newValue) => {
                    setValue(newValue);
                    setValue2(newValue.add(1, "month"));
                }} 
                />
            <DateCalendar 
            // value={val2} 
            />
        </LocalizationProvider>
    </div>
  );
}