"use client";
import { Fish, RollerCoaster, Soup, Target } from "lucide-react";

import React, { useEffect } from 'react';

// Define the center of the map
let map: google.maps.Map;
const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
let apiKey: string = "AIzaSyDWpxDQcMf1vIkR8zCqCiZFKk-lImBuGws"

function initMap(): void {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center,
    zoom: 8
  });
}

  // You can add additional map configurations or features 


export default function Location() {
  useEffect(() => {
    // Call initMap when the component mounts
    initMap();
  }, []); // Empty dependency array ensures it only runs once when the component mounts

  return (
    <div className="location-parent">
      <div className="relative location bg-my-white px-16 py-10">
        <h2 className="text-3xl font-semibold text-black">Location</h2>
        <div className="el-list ml-10 mt-10">
          <ul>
            <li className="flex py-4 items-center">
              <Fish className="mr-4 text-black" />
              <span className="font-medium text-xl text-black">Sea: 3.5km</span>
            </li>
            <li className="flex py-4 items-center">
              <Soup className="mr-4 text-black" />
              <span className="font-medium text-xl text-black">Restaurants: 300m</span>
            </li>
            <li className="flex py-4 items-center">
              <Target className="mr-4 text-black" />
              <span className="font-medium text-xl text-black">Town: 3.5km</span>
            </li>
            <li className="flex py-4 items-center">
              <RollerCoaster className="mr-4 text-black" />
              <span className="font-medium text-xl text-black">Waterpark Istralandia: 3.3km</span>
            </li>
          </ul>
        </div>
        <div className="map absolute h-[400px] w-[600px] top-20 left-1/2 -translate-x-1 bg-white z-10">
          <div id="map" className="h-full w-full">
            <script src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`} async defer></script>
          </div>
        </div>
      </div>
      <div className="bg-khaki h-[100px]"></div>
    </div>
  );
}
