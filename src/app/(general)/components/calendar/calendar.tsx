"use client";
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './styles.css'
  
export default function Cal() { 
    const [value, onChange] = useState(new Date()); 

    return ( 
        <div className='grid md:grid-cols-1 grid-cols-1 gap-1 w-full'> 
            <Calendar
                value={value} 
                showDoubleView={true}
            />
        </div> 
    ); 
}