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
        <div className="w-full max-w-[1640px] mx-auto h-px border-t-0 bg-white opacity-100 " />
        <div className="container  mx-auto flex flex-row justify-between items-center">
          <ul className="flex flex-row gap-6">
            {DataNav.filter((item) => !item.right).map((item, i) => (
              <Subnav
                key={"navigation-nav-" + i}
                item={item}
                lng={lng}
                pathName={pathName}
              />
            ))}
          </ul>
          <div className="uppercase">
            {DataNav.filter((item) => item.right).map((item, i) => (
              <Subnav
                key={"navigation-nav-" + i}
                item={item}
                lng={lng}
                pathName={pathName}
              />
            ))}
            {/* <Link href={`/${lng}`}>{t("contact_us")}</Link> */}
          </div>
        </div>
      </section>
    </>
  );
}

const Subnav = ({ item, lng, pathName }) => {
  const { t } = useTranslation(lng, "header");
  return (
    <li className="group h-[60px] flex items-center group gap-4 ">
      <div
        key={"mobile-nav-subnav" + item.name}
        className={
          pathName === `/${lng}${item.link}`
            ? "text-[#F0B450] flex flex-row items-center justify-center  cursor-pointer "
            : "flex flex-row items-center justify-center  cursor-pointer  "
        }
      >
        {item.link && (
          <Link href={`/${lng}${item.link}`} passHref>
            <span className="uppercase group-hover:text-[#F0B450]">
              {t(item.name)}
            </span>
          </Link>
        )}
        {!item.link && (
          <span className="uppercase group-hover:text-[#F0B450]">
            {t(item.name)}
          </span>
        )}

        {/* {item.sub && <span className="ml-[5px]"><Arrow /></span>} */}
      </div>
      {item.sub && (
        <div className="absolute right-0 z-10 top-[60px] w-full origin-top-right  focus:outline-none bg-[#080505] hidden group-hover:block transition transform duration-300 ease-in-out">
          <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-white opacity-100 "></div>

          <ul className="flex flex-cols container mx-auto pt-[20px] pb-[80px]">
            {item.sub &&
              item.sub.map((sub, i) => (
                <li
                  className={` w-full  `}
                  key={"navigation-item-sub-nav-item" + i}
                >
                  {sub.title && (
                    <h1 className="text-[#F0B450] uppercase mb-[15px] text-2xl">
                      {t(sub.title)}
                    </h1>
                  )}
                  <ul
                    key={"navigation-ul-nav-" + sub.title}
                    className="flex flex-col"
                  >
                    {sub.links.map((link) => (
                      <li
                        key={link.name}
                        className={`flex hover:text-[#F0B450] ${
                          item.right ? "flex-row-reverse" : "flex-row"
                        } uppercase text-2xl my-2.5`}
                      >
                        <Link href={`/${lng}${link.link}`} passHref>
                          {t(link.name)}
                        </Link>
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
