'use client';
import React, { RefObject, useState } from 'react';
import Link from 'next/link';
import { useRef } from 'react';

interface Props {
  contactRef: RefObject<HTMLDivElement>;
}

export default function Topbar({ contactRef }: Props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleScroll = (ref: HTMLDivElement | null) => {
    if (!ref) return;
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex h-20 items-center justify-between bg-light-brown px-3 py-2 md:px-16">
      <div className="flex w-1/3 items-center">
        <Link href="/">
          <img src="/next.svg" alt="Logo" className="h-8 w-8" />
        </Link>
      </div>
      <div className="md:text-md flex items-center space-x-2 text-xs font-semibold md:space-x-6 lg:text-lg">
        {/* <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800">
          About
        </button> */}
        <button
          className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800"
          onClick={() => handleScroll(contactRef.current)}
        >
          Contact
        </button>
        <div className="relative">
          <button
            className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800"
            onClick={toggleDropdown}
          >
            Language
          </button>
          {showDropdown && (
            <div className="absolute left-0 top-full mt-1 rounded-md bg-white shadow-lg">
              <button
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => setShowDropdown(false)}
              >
                English
              </button>
              <button
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => setShowDropdown(false)}
              >
                German
              </button>
              <button
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => setShowDropdown(false)}
              >
                Croatian
              </button>
              <button
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => setShowDropdown(false)}
              >
                Slovene
              </button>
            </div>
          )}
        </div>

        <Link
          className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800"
          href="#gallery"
        >
          Gallery
        </Link>
      </div>

      <div className="md:text-md md:text-medium flex w-1/3 items-center justify-end text-xs lg:text-lg">
        <button className="rounded-br-lg rounded-tr-lg border-2 border-solid border-my-grey p-1 font-bold text-my-grey transition-all hover:scale-105 hover:font-extrabold md:h-10 md:w-32">
          Book Now
        </button>
      </div>
    </div>
  );
}
