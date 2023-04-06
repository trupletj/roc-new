"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import Arrow from "./icons/Arrow";

function DarkModeBtn() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <>
      <div className="relative inline-block text-left">
        <div
          className="flex flex-row items-center justify-center cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <button
            type="button"
            className="inline-flex w-full justify-center   font-semibold uppercase "
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            {theme !== "light" ? <div>DARK</div> : <div>light</div>}
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
            className="absolute right-0 z-10  w-24 origin-top-right  bg-[#DFDDD7] focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            <div className="py-1" role="none">
              {/* Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" */}
              <button
                className="text-gray-700 block px-4 py-2 "
                role="menuitem"
                tabIndex={-1}
                id="menu-item-0"
                onClick={() => {
                  setTheme("dark"), setIsOpen(false);
                }}
              >
                DARK
              </button>
              <button
                className="text-gray-700 block px-4 py-2"
                role="menuitem"
                tabIndex={-1}
                id="menu-item-1"
                onClick={() => {
                  setTheme("light"), setIsOpen(false);
                }}
              >
                LIGHT
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default DarkModeBtn;
