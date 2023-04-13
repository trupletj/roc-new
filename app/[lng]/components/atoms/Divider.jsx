import React from "react";

function Divider({ my }) {
  const space = my || "100px";
  return (
    <div
      className={`my-[${space}] w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100 `}
    />
  );
}

export default Divider;
