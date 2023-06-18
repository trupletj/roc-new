import React from "react";
import ArrowR from "../atoms/ArrowR";
import Link from "next/link";

function SectionHeader({ title, buttonTitle, href }) {
  return (
    <div className="flex flex-row justify-between mb-11 w-full">
      <h1 className="lg:text-3xl font-light  text-base text-white">{title}</h1>
      {buttonTitle && href && (
        <Link
          href={href}
          className="py-3 px-6 text-white lg:flex flex-row w-fit items-center  hidden md:block"
        >
          <span className="mr-1 text-3.5 text-white text-uppercase  uppercase ">
            {buttonTitle}
          </span>
          <ArrowR />
        </Link>
      )}
    </div>
  );
}

export default SectionHeader;
