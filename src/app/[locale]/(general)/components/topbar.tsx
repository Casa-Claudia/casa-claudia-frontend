'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useLanguageState, LanguageEnum } from '@/state/language';
import { useTranslation } from 'react-i18next';

export default function Topbar() {
  const { t } = useTranslation("topbar");
  const [showDropdown, setShowDropdown] = useState(false);
  const {setLanguage } = useLanguageState();
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="flex h-20 items-center justify-between bg-light-brown px-3 py-2 md:px-16">
      <div className="flex w-1/3 items-center">
        <Link href="/">
          <img src="/next.svg" alt="Logo" className="h-8 w-8" />
        </Link>
      </div>
      <div className="md:text-md flex items-center space-x-2 text-xs font-semibold md:space-x-6 lg:text-lg">
        <Link
          className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800"
          href={"#footer"}
        >
          {t("topbar_contact")}
        </Link>
        <div className="relative">
          <button
            className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800"
            onClick={toggleDropdown}
          >
            {t("topbar_language")}
          </button>
          {showDropdown && (
            <div className="absolute left-0 top-full mt-1 rounded-md bg-white shadow-lg">
              <Link
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => { setShowDropdown(false); setLanguage(LanguageEnum.EN); }}
                href={`/en`}
              >
                {t("topbar_english")}
              </Link>
              <Link
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => {setShowDropdown(false); setLanguage(LanguageEnum.DE);}}
                href={`/de`}
              >
                {t("topbar_german")}
              </Link>
              <Link
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => {setShowDropdown(false); setLanguage(LanguageEnum.SL);}}
                href={`/sl`}
              >
                {t("topbar_slovene")}
              </Link>
            </div>
          )}
        </div>

        <Link
          className="text-my-black hover:border-b-2 hover:border-my-black hover:text-gray-800"
          href={"/#gallery"}
        >
          {t("topbar_gallery")}
        </Link>
      </div>

      <div className="md:text-md md:text-medium flex w-1/3 items-center justify-end text-xs lg:text-lg">
        <Link className="rounded-br-lg text-center flex items-center justify-center rounded-tr-lg border-2 border-solid border-my-grey p-1 font-bold text-my-grey transition-all hover:scale-105 hover:font-extrabold md:h-10 md:w-32"
        href={"/#booker"}
        >
          {t("topbar_book")}
        </Link>
      </div>
    </div>
  );
}
