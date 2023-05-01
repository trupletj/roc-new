"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "@/public/assets/hero1.png";
import story1 from "@/public/assets/about/story_1.png";
import story2 from "@/public/assets/about/story_2.png";
import story3 from "@/public/assets/about/story_3.png";
import roast1 from "@/public/assets/about/roast_1.png";
import roast2 from "@/public/assets/about/roast_2.png";
import roast3 from "@/public/assets/about/roast_3.png";
import story4 from "@/public/assets/about/story_4.png";
import weare from "@/public/assets/about/weare.jpg";
import man from "@/public/assets/about/man.jpg";
import { useTranslation } from "@/app/i18n/client";

function DetailsAdditional() {
  const { t } = useTranslation();
  const [cindex, setCindex] = useState(0);
  const [openIndex, setOpenIndex] = useState(-1);
  const isBrowser = () => typeof window !== "undefined";

  return (
    <ul>
      <li className=" last:border-none">
        <div>
          <div
            onClick={() => {
              setOpenIndex((val) => {
                return val != 0 ? 0 : -1;
              });
            }}
            className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
          >
            <h1>Техникийн гол онцлогууд</h1>
            <div>
              {openIndex === 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="1.5"
                  viewBox="0 0 18 1.5"
                >
                  <path
                    fill="none"
                    stroke="#201d1d"
                    strokeWidth="1.5"
                    d="M18 .75H0"
                    data-name="Path 101"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  data-name="Group 444"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="none"
                    stroke="#201d1d"
                    strokeWidth="1.5"
                    d="M9 0v18"
                    data-name="Path 100"
                  ></path>
                  <path
                    fill="none"
                    stroke="#201d1d"
                    strokeWidth="1.5"
                    d="M18 9H0"
                    data-name="Path 101"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <div className={openIndex === 0 ? "block" : "hidden"}>
            <div className="w-full">
              <ul className="flex flex-col space-y-3">
                <li className="w-full">
                  <h1 className="text-xl font-medium">DUAL BOILERS</h1>
                  <p>
                    Separate boilers optimise espresso brewing ans steam
                    production
                  </p>
                </li>
                <li className="w-full">
                  <h1 className="text-xl font-medium">INTEGRATED BREW GROUP</h1>
                  <p>
                    Separate boilers optimise espresso brewing ans steam
                    production
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
      <li className=" last:border-none">
        <div>
          <div
            onClick={() => {
              setOpenIndex((val) => {
                return val != 1 ? 1 : -1;
              });
            }}
            className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
          >
            <h1>Үзүүлэлтүүд</h1>
            <div>
              {openIndex === 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="1.5"
                  viewBox="0 0 18 1.5"
                >
                  <path
                    fill="none"
                    stroke="#201d1d"
                    strokeWidth="1.5"
                    d="M18 .75H0"
                    data-name="Path 101"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  data-name="Group 444"
                  viewBox="0 0 18 18"
                >
                  <path
                    fill="none"
                    stroke="#201d1d"
                    strokeWidth="1.5"
                    d="M9 0v18"
                    data-name="Path 100"
                  ></path>
                  <path
                    fill="none"
                    stroke="#201d1d"
                    strokeWidth="1.5"
                    d="M18 9H0"
                    data-name="Path 101"
                  ></path>
                </svg>
              )}
            </div>
          </div>
          <div className={openIndex === 1 ? "block" : "hidden"}>
            <div className="w-full">
              <ul className="flex flex-col space-y-3">
                <li className="w-full flex justify-between border-b border-[#201D1D] py-2">
                  <h1 className="text-xl font-medium">Загвар</h1>
                  <p>La Marzocco Linea Mini</p>
                </li>
                <li className="w-full flex justify-between border-b border-[#201D1D] py-2">
                  <h1 className="text-xl font-medium">Хэмжээс</h1>
                  <p>37.5 x 35.7 x 45.3</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default DetailsAdditional;
