import React from "react";
import ArrowR from "../atoms/ArrowR";

function SectionHeader({ title, buttonTitle }) {
  return (
    <div className="flex flex-row justify-between mb-11 w-full">
      <h1 className="lg:text-3xl font-light text-white text-base">{title}</h1>
      {buttonTitle && (
        <button className="py-3 px-6 bg-[#ECEBE7] lg:flex flex-row items-center  hidden">
          <span className="mr-1 text-3.5 text-[#080505] ">{buttonTitle}</span>
          <ArrowR />
        </button>
      )}
    </div>
  );
}

export default SectionHeader;
