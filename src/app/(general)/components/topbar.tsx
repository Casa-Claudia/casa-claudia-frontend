"use client";
import React, { RefObject, useState } from 'react';
import Link from 'next/link';
import { useRef } from 'react';

interface Props {
  contactRef: RefObject<HTMLDivElement>;
}

export default function Topbar({contactRef}: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = (ref:HTMLDivElement|null) => {
    if (!ref) return;
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex h-20 items-center justify-between bg-light-brown md:px-16 px-3 py-2">
      <div className="flex items-center w-1/3">
      <Link href="/">
          <img src="/next.svg" alt="Logo" className="h-8 w-8" />
        </Link>
      </div>
      <div className="flex items-center space-x-2 text-xs md:text-md lg:text-lg md:space-x-6 font-semibold">
        {/* <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800">
          About
        </button> */}
        <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800" onClick={() => handleScroll(contactRef.current)}>
          Contact
        </button>
        <div className='relative'>
          <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800" onClick={toggleDropdown}>
            Language
          </button>
          {showDropdown && (
            <div className="absolute top-full left-0 mt-1 bg-white rounded-md shadow-lg">
              <button className="block w-full text-center px-2 md:px-3 py-1 mdtext-sm text-gray-800 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>English</button>
              <button className="block w-full text-center px-2 md:px-3 py-1 mdtext-sm text-gray-800 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>German</button>
              <button className="block w-full text-center px-2 md:px-3 py-1 mdtext-sm text-gray-800 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>Croatian</button>
              <button className="block w-full text-center px-2 md:px-3 py-1 mdtext-sm text-gray-800 hover:bg-gray-200" onClick={() => setShowDropdown(false)}>Slovene</button>
            </div>
          )}
        </div>

        <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800">
          Gallery
        </button>
      </div>

      <div className="flex items-center justify-end text-xs md:text-md lg:text-lg md:text-medium w-1/3">
        <button className="md:h-10 md:w-32 p-1 rounded-br-lg rounded-tr-lg border-2 border-solid border-my-grey font-bold text-my-grey transition-all hover:scale-105 hover:font-extrabold">
          Book Now
        </button>
      </div>
    </div>
  );
}
