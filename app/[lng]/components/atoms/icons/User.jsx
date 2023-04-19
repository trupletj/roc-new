"use client";
import React, { useContext } from "react";
import GlobalContext from "@/app/[lng]/context/GlobalContext";

function User() {
  const { openLogin, setOpenLogin } = useContext(GlobalContext);
  return (
    <span className=" cursor-pointer " onClick={() => setOpenLogin(true)}>
      <svg
        id="Group_5"
        data-name="Group 5"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="25.752"
        height={25}
        viewBox="0 0 25.752 25"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="25.752"
              height={25}
              fill="currentColor"
            />
          </clipPath>
        </defs>
        <g id="Group_4" data-name="Group 4" clipPath="url(#clip-path)">
          <path
            id="Path_5"
            data-name="Path 5"
            d="M16.825,12.744a6.983,6.983,0,1,0-7.9,0A12.9,12.9,0,0,0,0,25H1.894a10.983,10.983,0,1,1,21.965,0h1.894a12.9,12.9,0,0,0-8.927-12.256m-3.949-.671a5.09,5.09,0,1,1,5.089-5.089,5.095,5.095,0,0,1-5.089,5.089"
            fill="currentColor"
          />
        </g>
      </svg>
    </span>
  );
}

export default User;
