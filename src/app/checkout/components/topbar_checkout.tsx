"use client";
import React, { RefObject, useState } from 'react';
import Link from 'next/link';


export default function TopbarCheckout() {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex h-20 items-center flex-grow bg-light-brown md:px-16 px-3 py-2">
      <div className="flex items-center w-1/3">
      <Link href="/">
          <img src="/next.svg" alt="Logo" className="h-8 w-8" />
        </Link>
      </div>
      <div className="flex w-1/3  items-center justify-center space-x-2 text-xs md:text-md lg:text-lg md:space-x-6 font-semibold">
        {/* <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800">
          About
        </button> */}
        <Link className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800"
        href={
          "#footer"
        }>
          Contact
        </Link>
        <div className='relative'>
          <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800" onClick={toggleDropdown}>
            Language
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg">
              <button className="block w-full text-center px-2 md:px-3 py-1 mdtext-sm text-gray-800 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>English</button>
              <button className="block w-full text-center px-2 md:px-3 py-1 mdtext-sm text-gray-800 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>German</button>
              <button className="block w-full text-center px-2 md:px-3 py-1 mdtext-sm text-gray-800 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>Slovene</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
