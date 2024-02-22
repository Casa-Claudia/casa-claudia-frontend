import React from 'react';

export default function Topbar() {
    return (
        <div className="flex justify-between items-center h-20 px-16 py-2 bg-light-brown  ">
            <div className="flex items-center">
                <img src="/next.svg" alt="Logo" className="w-8 h-8 " />
            </div>
            <div className="flex items-center space-x-6">
                <button className="text-my-black hover:text-gray-800">About</button>
                <button className="text-my-black hover:text-gray-800">Contact</button>
                <button className="text-my-black hover:text-gray-800">Language</button>
                <button className="text-my-black hover:text-gray-800">Gallery</button>
            </div>

            <div className="flex items-center">
                <button className="text-my-light-grey font-bold border border-solid border-my-light-grey rounded-tr-lg rounded-br-lg h-10 w-32">Book Now</button>
            </div>
        </div>
    );
}
