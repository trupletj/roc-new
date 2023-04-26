import React from "react";

function Divider({ my }) {
  const space = my ? my : 24;
  return (
    <div
      className={`my-${space} w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black opacity-5 `}
    />
  );
}
export default Divider;
