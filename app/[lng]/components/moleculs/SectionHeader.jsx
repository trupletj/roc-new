import React from "react";
import ArrowR from "../atoms/ArrowR";
import Link from "next/link";

function SectionHeader({ title, buttonTitle, href }) {
  return (
    <div className="flex flex-row justify-between mb-11 w-full">
      <h1 className="lg:text-3xl font-light  text-base">{title}</h1>
      {buttonTitle && href && (
        <Link
          href={href}
          className="py-3 px-6 bg-[#ECEBE7] lg:flex flex-row w-fit items-center  "
        >
          <span className="mr-1 text-3.5 text-[#080505] ">{buttonTitle}</span>
          <ArrowR />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
