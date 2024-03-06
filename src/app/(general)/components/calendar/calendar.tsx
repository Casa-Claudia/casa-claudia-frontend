'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';

export default function Cal() {
  const { range, setRange } = useCheckoutState();
  const fullDates = [ new Date(2024,3,9), new Date(2024,3,20), new Date(2024,3,11) ];

  const disableDates= (date:Date, fullDates:Date[]) => {
    if (date.getDay() != 6) return true;
    return anyDateSame(date, fullDates);
  };
  const anyDateSame = (date:Date, fullDates:Date[]) => {
    return fullDates.some(fullDate => date.getTime() === fullDate.getTime());
  };



  return (
    <div className="flex items-center justify-center w-full">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => setRange(e)}
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
