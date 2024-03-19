'use client';
import { Fish, RollerCoaster, Soup, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import GoogleMapReact from 'google-map-react';
const center: google.maps.LatLngLiteral = { lat: 45.33926585744499, lng: 13.59162859673946 };
let apiKey = process.env.GOOGLE_MAPS_API_KEY;
import { MapPin } from 'lucide-react';

interface MarkerProps {
  lat: number;
  lng: number;
}

export default function Location() {
  const { t } = useTranslation('location');
  const Marker = ({ lat, lng }: MarkerProps) => {
    return (
      <div className='text-red-500'><MapPin className='h-10 w-10'/></div>
    );
  };
  
  return (
    <div className="location-parent">
      <div className="location grid grid-cols-1 bg-my-white px-4 py-10 md:relative md:px-16">
        <h2 className="text-3xl font-semibold text-black">{t("loc")}</h2>
        <div className="el-list ml-10 mt-4 md:mt-10">
          <ul>
            <li className="flex items-center py-4">
              <Fish className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">{t("sea")}</span>
            </li>
            <li className="flex items-center py-4">
              <Soup className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">{t("restaurant")}</span>
            </li>
            <li className="flex items-center py-4">
              <Target className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">{t("town")}</span>
            </li>
            <li className="flex items-center py-4">
              <RollerCoaster className="mr-4 text-black" />
              <span className="text-md font-medium text-black md:text-xl">
              {t("waterpark")}
              </span>
            </li>
          </ul>
        </div>
        <div className="map container z-10 mt-4 h-[200px] w-full px-4 lg:absolute lg:left-1/2 lg:top-20 lg:mt-0 lg:h-[400px] lg:w-[600px] lg:-translate-x-1 ">
          <div id="map" className="h-full w-full shadow-lg">
            <GoogleMapReact
              bootstrapURLKeys={{ key: apiKey ? apiKey: ''}}
              defaultCenter={center}
              defaultZoom={15}
            >
              {/* <Marker lat={center.lat} lng={center.lng}/> */}
            </GoogleMapReact>
          </div>
        </div>
      </div>
      <div className="h-[100px] hidden lg:flex bg-khaki"></div>
    </div>
  );
}
