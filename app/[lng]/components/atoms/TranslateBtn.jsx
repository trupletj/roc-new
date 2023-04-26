"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { languages } from "../../../i18n/settings";
import Arrow from "@/app/[lng]/components/atoms/icons/Arrow";

export const TranslateBtn = ({ lng }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="relative inline-block text-left">
        <div
          className="flex flex-row items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button
            type="button"
            className="inline-flex w-full justify-center   font-semibold  "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {languages.map((language) => {
              if (language === lng) {
                return (
                  <span key={language} className="uppercase">
                    {language}
                  </span>
                );
              }
            })}
          </button>
          <Arrow />
        </div>
        {/*
                        Dropdown menu, show/hide based on menu state.

                        Entering: "transition ease-out duration-100"
                    From: "transform opacity-0 scale-95"
                    To: "transform opacity-100 scale-100"
                        Leaving: "transition ease-in duration-75"
                    From: "transform opacity-100 scale-100"
                    To: "transform opacity-0 scale-95"
                      */}
        {isOpen && (
          <div
            className="absolute right-0 z-10   origin-top-right  bg-[#DFDDD7] focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
              <Link
                href={`/mn`}
                className="text-gray-700 block px-4 py-2 "
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
                onClick={() => setIsOpen(false)}
              >
                MN
              </Link>
              <Link
                href={`/en`}
                className="text-gray-700 block px-4 py-2"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
                onClick={() => setIsOpen(false)}
              >
                EN
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
