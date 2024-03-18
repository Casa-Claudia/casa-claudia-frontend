'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguageState, LanguageEnum } from '@/state/language';
import { useTranslation } from 'react-i18next';
import { usePathname } from 'next/navigation';

export default function Topbar() {
  const { t } = useTranslation("topbar");
  const [showDropdown, setShowDropdown] = useState(false);
  const [restOfPath, setRestOfPath] = useState('');
  const {setLanguage } = useLanguageState();
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes('privacy-policy')){
      setRestOfPath('privacy-policy');
    } else if (pathname.includes('terms-and-conditions')){
      setRestOfPath('terms-and-conditions');
    }
  }, []);

  return (
    <div className="flex h-20 items-center justify-between bg-light-brown px-3 py-2 md:px-16">
      <div className="flex w-1/3 items-start h-full ">
        <Link href="/">
          <img src="/logo.svg" alt="Logo" className="w-full" />
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
                href={`/en/${restOfPath}`}
              >
                {t("topbar_english")}
              </Link>
              <Link
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => {setShowDropdown(false); setLanguage(LanguageEnum.DE);}}
                href={`/de/${restOfPath}`}
              >
                {t("topbar_german")}
              </Link>
              <Link
                className="mdtext-sm block w-full px-2 py-1 text-center text-gray-800 hover:bg-gray-200 md:px-3"
                onClick={() => {setShowDropdown(false); setLanguage(LanguageEnum.SL);}}
                href={`/sl/${restOfPath}`}
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

      <div className="md:text-md flex w-1/3 items-center justify-end text-xs lg:text-lg">
        <Link className="rounded-br-lg md:px-2 px-1 py-1 text-center flex items-center justify-center rounded-tr-lg border-2 border-solid border-my-grey font-bold text-my-grey transition-all hover:scale-105 md:h-10"
        href={"/#booker"}
        >
          {t("topbar_book")}
        </Link>
      </div>
    </div>
  );
}
