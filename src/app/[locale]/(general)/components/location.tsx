'use client';
import { Fish, RollerCoaster, Soup, Target } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Map from './map';


export default function Location() {
  const { t } = useTranslation('location');
  
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
        <div className="map container mt-4 w-full px-4 lg:absolute lg:left-1/2 lg:top-20 lg:mt-0 lg:w-[700px] lg:-translate-x-1 ">
          <div id="map" className="h-full w-full shadow-lg">
            <Map />
          </div>
        </div>
      </div>
      <div className="h-[100px] hidden lg:flex bg-khaki"></div>
    </div>
  );
}
