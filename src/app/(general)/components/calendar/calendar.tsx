'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';

export default function Cal() {
  const { range, setRange } = useCheckoutState();

  return (
    <div className="flex items-center justify-center w-full">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => setRange(e)}
        selectRange={true}
        maxDate={new Date(2024, 11, 31)}
        minDate={new Date()}
      />
    </div>
  );
}
