import React from 'react';

export default function Topbar() {
  return (
    <div className="flex h-20 items-center justify-between bg-light-brown md:px-16 px-4 py-2  ">
      <div className="flex items-center">
        <img src="/next.svg" alt="Logo" className="h-8 w-8 " />
      </div>
      <div className="flex items-center space-x-2 text-xs md:text-md lg:text-lg md:space-x-6 font-semibold">
        <button className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800">
          About
        </button>
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

      <div className="flex items-center text-xs md:text-md lg:text-lg md:text-medium">
        <button className="md:h-10 md:w-32 p-1 rounded-br-lg rounded-tr-lg border-2 border-solid border-my-grey font-bold text-my-grey transition-all hover:scale-105 hover:font-extrabold">
          Book Now
        </button>
      </div>
    </div>
  );
}
