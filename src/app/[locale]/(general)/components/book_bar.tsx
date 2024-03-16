"use client";
import { useCheckoutState } from "@/state/checkout";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Cal from "./calendar/calendar";
import { useTranslation } from "react-i18next";

export default function BookBar() {
  const { range } = useCheckoutState();
  const { t } = useTranslation("book_bar");

  const firstDate = range[0]?.toLocaleDateString("de-DE", { year: 'numeric', month: '2-digit', day: '2-digit' });
  const secondDate = range[1]?.toLocaleDateString("de-DE", { year: 'numeric', month: '2-digit', day: '2-digit' });
  const timeDiff = Math.round((range[1]?.getTime() - range[0]?.getTime()) / (1000 * 60 * 60 * 24))
  const isValid = useMemo(() => range[0] !== null && range[1] !== null && range[0]?.getTime() < range[1]?.getTime() && timeDiff > 1, [range]);
  const selectedDates = isValid? `${firstDate} - ${secondDate}`: t("booker:no-dates");
  const [isWindowOpen, setIsWindowOpen] = useState(false);

  const toggleCalendar = () => {
    setIsWindowOpen(!isWindowOpen);
  };

  useEffect(() => {
    if (isValid) {
      setIsWindowOpen(false);
    }
  }, [isValid]);

  return (
    <main>
      <div className="relative z-10 hidden lg:flex justify-between h-[80px] w-[133%] items-center bg-my-white text-my-grey overflow-visible">
        <div className="flex w-1/3 items-start px-4 py-2">
          <img className="mr-2" src="/Location.svg" alt="Location" />
          <div className="flex flex-col">
            <h2 className="mb-0.5">{t("loc")}</h2>
            <p className="text-my-light-grey text-sm">{t("novigrad")}</p>
          </div>
        </div>

        <div className="flex w-2/3 items-start justify-center bg-my-white px-0.5 py-2">
          <img className="mr-2" src="/Calendar.svg" alt="Location" />
          <div className="flex flex-col justify-start relative">
            <button onClick={toggleCalendar} className="mb-0.5 transform font-semibold hover:scale-105">{t("check")}</button>
            <p className="text-my-light-grey text-sm text-center">{selectedDates}</p>
            {isWindowOpen && (
            <div className="mt-5 flex absolute popup top-full left-0 items-center justify-center pl-1 pr-4 bg-white">
              <div className="container w-[700px] text-black">
                <Cal />
              </div>
            </div>
            )}
          </div>
        </div>

      <div className=" w-1/3 h-[80px] flex items-center justify-center bg-my-grey px-0.5  py-2">
        <Link className="mb-0.5 transform text-lg text-my-white hover:scale-105 hover:font-semibold"
        href={"/#booker"}>
          {t("book")}
        </Link>
      </div>
      </div>
    </main>
  );
}
