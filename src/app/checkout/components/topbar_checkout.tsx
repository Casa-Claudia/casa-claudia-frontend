import React from 'react';

export default function TopbarCheckout() {
  return (
    <div className="flex h-20 items-center bg-light-brown px-16 py-2">
      <div className="flex items-center">
        <img src="/next.svg" alt="Logo" className="h-8 w-8" />
      </div>
      <div className="flex flex-grow items-center justify-center space-x-2 text-xs md:text-md lg:text-lg md:space-x-6">
        {/* <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800">
          About
        </button> */}
        <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800 ">
          Contact
        </button>
        <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800 ">
          Language
        </button>
        <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800">
          Gallery
        </button>
      </div>
    </div>
  );
}
