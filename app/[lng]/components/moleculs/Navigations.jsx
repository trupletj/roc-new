"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client.js";

import Arrow from "../atoms/icons/Arrow";

function Navigations({ lng, DataNav }) {
  const { t } = useTranslation(lng, "header");
  const pathName = usePathname();

  return (
    <>
      <section className={`w-full text-base  relative hidden lg:block`}>
        <div className="w-full max-w-[1640px] mx-auto h-px border-t-0 bg-black  dark:bg-white opacity-100 " />
        <div className="container  mx-auto flex flex-row justify-between items-center">
          <ul className="flex flex-row">
            {DataNav.map((item, i) => (
              <Subnav key={i} item={item} lng={lng} pathName={pathName} />
            ))}
          </ul>
          <div className="uppercase">
            <Link href={`/${lng}/contact`}>{t("contact_us")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const Subnav = ({ item, lng, pathName }) => {
  const { t } = useTranslation(lng, "header");
  return (
    <li className="group h-[60px] flex items-center">
      <div
        key={item.name}
        className={
          pathName === `/${lng}${item.link}`
            ? "text-[#F0B450] flex flex-row items-center justify-center mr-[50px] cursor-pointer "
            : "flex flex-row items-center justify-center mr-[50px] cursor-pointer  "
        }
      >
        <span className="uppercase">{t(item.name)}</span>
        <span className="ml-[5px]">
          <Arrow />
        </span>
      </div>
      {item.sub && (
        <div className="absolute right-0 z-10 top-[60px] w-full origin-top-right  focus:outline-none bg-white dark:bg-[#191919] hidden group-hover:block transition transform duration-300 ease-in-out">
          <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black dark:bg-white opacity-100 "></div>

          <ul className="flex flex-cols container mx-auto pt-[20px] pb-[80px]">
            {item.sub &&
              item.sub.map((sub, i) => (
                <li className="mr-[80px]" key={i}>
                  {sub.title && (
                    <h1 className="text-[#F0B450] uppercase mb-[15px]">
                      {sub.title}
                    </h1>
                  )}
                  <ul key={sub.title} className="flex flex-col">
                    {sub.links.map((link) => (
                      <li key={link.name} className="flex flex-row ">
                        <Link href={`/${lng}${link.link}`}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      )}
    </li>
  );
};

export default Navigations;
