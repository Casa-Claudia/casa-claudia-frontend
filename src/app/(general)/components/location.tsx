'use client';
import { Fish, RollerCoaster, Soup, Target } from 'lucide-react';

import React, { useEffect } from 'react';

// Define the center of the map
let map: google.maps.Map;
const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };
let apiKey: string = 'AIzaSyDWpxDQcMf1vIkR8zCqCiZFKk-lImBuGws';

function initMap(): void {
  map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
    center,
    zoom: 8,
  });
}

// You can add additional map configurations or features

export default function Location() {
  useEffect(() => {
    initMap();
  }, []);

  return (
    <div className="location-parent">
      <div className="location md:relative grid grid-cols-1 bg-my-white md:px-16 px-4 py-10">
        <h2 className="text-3xl font-semibold text-black">Location</h2>
        <div className="el-list ml-10 md:mt-10 mt-4">
          <ul>
            <li className="flex items-center py-4">
              <Fish className="mr-4 text-black" />
              <span className="md:text-xl text-md font-medium text-black">Sea: 3.5km</span>
            </li>
            <li className="flex items-center py-4">
              <Soup className="mr-4 text-black" />
              <span className="md:text-xl text-md font-medium text-black">Restaurants: 300m</span>
            </li>
            <li className="flex items-center py-4">
              <Target className="mr-4 text-black" />
              <span className="md:text-xl text-md font-medium text-black">Town: 3.5km</span>
            </li>
            <li className="flex items-center py-4">
              <RollerCoaster className="mr-4 text-black" />
              <span className="md:text-xl text-md font-medium text-black">Waterpark Istralandia: 3.3km</span>
            </li>
          </ul>
        </div>
        <div className="map lg:absolute lg:left-1/2 lg:top-20 z-10 lg:h-[400px] lg:w-[600px] w-full mt-4 lg:mt-0 px-4 h-[200px] container lg:-translate-x-1 ">
          <div id="map" className="h-full w-full">
            <script
              defer
              src={`https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`}
            ></script>
          </div>
        </div>
      </div>
      <div className="h-[100px] bg-khaki"></div>
    </div>
  );
}
