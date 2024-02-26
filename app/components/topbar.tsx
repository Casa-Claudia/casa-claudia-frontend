import React from 'react';

export default function Topbar() {
    return (

        <div className="flex justify-between items-center h-20 px-16 py-2 bg-light-brown  ">
            <div className="flex items-center h-10 w-32">
                <img src="/next.svg" alt="Logo" className="w-8 h-8 " />
            </div>
            <div className="flex items-center font-semibold space-x-6">
                <button className="text-my-black hover:text-gray-800 hover:border-b-2 hover:border-my-black">About</button>
                <button className="text-my-black hover:text-gray-800 hover:border-b-2 hover:border-my-black ">Contact</button>
                <button className="text-my-black hover:text-gray-800 hover:border-b-2 hover:border-my-black ">Language</button>
                <button className="text-my-black hover:text-gray-800 hover:border-b-2 hover:border-my-black">Gallery</button>
            </div>

            <div className="flex items-center">
                <button className="text-my-grey font-bold border-2 border-solid border-my-grey rounded-tr-lg rounded-br-lg h-10 w-32 hover:font-extrabold hover:scale-105 transition-all">Book Now</button>
            </div>
        </div>
    );
}
