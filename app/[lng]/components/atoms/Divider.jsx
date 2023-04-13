import React from "react";

function Divider({ my }) {
  return (
    <div
      className={`my-[${
        my || "100px"
      }] w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100`}
    ></div>
  );
}

export default Divider;
