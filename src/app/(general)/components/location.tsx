'use client';
import { Fish, RollerCoaster, Soup, Target } from 'lucide-react';

import GoogleMapReact from 'google-map-react';

const center: google.maps.LatLngLiteral = { lat: 30, lng: -110 };
let apiKey: string = 'AIzaSyDWpxDQcMf1vIkR8zCqCiZFKk-lImBuGws';

export default function Location() {
  return (
    <div className="location-parent">
      <div className="location grid grid-cols-1 bg-my-white px-4 py-10 md:relative md:px-16">
        <h2 className="text-3xl font-semibold text-black">Location</h2>
        <div className="el-list ml-10 mt-4 md:mt-10">
          <ul>
            <li className="flex items-center py-4">
              <Fish className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">Sea: 3.5km</span>
            </li>
            <li className="flex items-center py-4">
              <Soup className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">Restaurants: 300m</span>
            </li>
            <li className="flex items-center py-4">
              <Target className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">Town: 3.5km</span>
            </li>
            <li className="flex items-center py-4">
              <RollerCoaster className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">
                Waterpark Istralandia: 3.3km
              </span>
            </li>
          </ul>
        </div>
        <div className="map container z-10 mt-4 h-[200px] w-full px-4 lg:absolute lg:left-1/2 lg:top-20 lg:mt-0 lg:h-[400px] lg:w-[600px] lg:-translate-x-1 ">
          <div id="map" className="h-full w-full">
            <GoogleMapReact
              bootstrapURLKeys={{ key: apiKey }}
              defaultCenter={center}
              defaultZoom={11}
            ></GoogleMapReact>
          </div>
        </div>
      </div>
      <div className="h-[100px] hidden lg:flex bg-khaki"></div>
    </div>
  );
}
