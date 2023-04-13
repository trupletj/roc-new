import React from "react";
import ArrowR from "../atoms/ArrowR";

function SectionHeader({ title, buttonTitle }) {
  return (
    <div className="flex flex-row justify-between mb-[45px]">
      <h1 className="text-[32px]">{title}</h1>
      <button className="py-[12px] px-[25px] bg-[#ECEBE7] flex flex-row items-center">
        <span className="mr-[5px] text-[14px] text-[#080505]">
          {buttonTitle}
        </span>
        <ArrowR />
      </button>
    </div>
  );
}

export default SectionHeader;
