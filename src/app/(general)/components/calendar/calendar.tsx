'use client';

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css';
import { useCheckoutState } from '@/state/checkout';

export default function Cal() {
  const { range, setRange } = useCheckoutState();

  return (
    <div className="grid w-full grid-cols-1 gap-1 md:grid-cols-1">
      <Calendar
        value={range}
        showDoubleView={true}
        onChange={(e: any) => setRange(e)}
        selectRange={true}
      />
    </div>
  );
}
