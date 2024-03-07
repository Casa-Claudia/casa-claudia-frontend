'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';

export default function Cal() {
  const { range, setRange } = useCheckoutState();
  const fullDates = [ new Date(2024,2,16)];
  
  const disableDates= (date:Date, fullDates:Date[]) => {
    if (date.getDay() != 6) return true;
    return fullDates.some(fullDate => date.getTime() === fullDate.getTime());
  };

  const checkIfValidRange = (range:[Date, Date], fullDates: Date[], setRange: (range: [Date, Date]) => void) => {
    const [start, end] = range;
    if (!start || !end) return;
  
    const isInvalidRange = fullDates.some(date => start.getTime() < date.getTime() && end.getTime() > date.getTime());
  
    if (isInvalidRange) {
      console.log('not valid range');
      setRange([end, end]);
    } else {
      setRange(range);
    }
  };



  return (
    <div className="flex items-center justify-center w-full">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => checkIfValidRange(e, fullDates, setRange)}
        selectRange={true}
        maxDate={new Date(2024, 11, 31)}
        minDate={new Date()}
        next2Label={null}
        prev2Label={null}
        tileDisabled={	({ activeStartDate, date, view }) => disableDates(date, fullDates)}
        allowPartialRange={true}
      />
    </div>
  );
}
