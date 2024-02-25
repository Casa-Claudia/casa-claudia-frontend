import React from 'react';

export default function TopbarCheckout() {
    return (
        <div className="flex items-center h-20 px-16 py-2 bg-light-brown">
            <div className="flex items-center">
                <img src="/next.svg" alt="Logo" className="w-8 h-8" />
            </div>
            <div className="flex items-center flex-grow justify-center space-x-6">
                <button className="text-my-black hover:text-gray-800">About</button>
                <button className="text-my-black hover:text-gray-800">Contact</button>
                <button className="text-my-black hover:text-gray-800">Language</button>
                <button className="text-my-black hover:text-gray-800">Gallery</button>
            </div>
        </div>
    );
}
