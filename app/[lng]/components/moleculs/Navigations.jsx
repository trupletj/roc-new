"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "@/app/i18n/client.js";
import { Menu, Transition } from "@headlessui/react";

import Arrow from "../atoms/icons/Arrow";

const DataNav = [
  {
    name: "about_us",
    link: "",
  },
  {
    name: "coffee",
    link: "/coffee",
    sub: [
      {
        title: "coffee_category",
        links: [
          { name: "all_coffee", link: "/test" },
          { name: "coffee_bean", link: "/test" },
          { name: "cold_brew", link: "/test" },
        ],
      },
      {
        title: "coffee_type",
        links: [
          { name: "blend", link: "/mn/test" },
          { name: "single", link: "/mn/test" },
          { name: "origin", link: "/mn/test" },
        ],
      },
      {
        title: "other",
        links: [
          { name: "hario_v60", link: "/mn/test" },
          { name: "world_of_coffea", link: "/mn/test" },
        ],
      },
    ],
  },
  { name: "products", link: "/products" },
  { name: "service", link: "/service" },
  { name: "branch", link: "/branch" },
];

function Navigations({ lng }) {
  const { t } = useTranslation(lng, "header");
  const pathName = usePathname();
  console.log("router params------>", pathName);

  return (
    <>
      <section className={`w-full text-base  relative hidden lg:block`}>
        <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100 " />
        <div className="container  mx-auto flex flex-row justify-between items-center">
          <ul className="flex flex-row">
            {DataNav.map((item, i) => (
              <Subnav key={i} item={item} lng={lng} pathName={pathName} />
            ))}
          </ul>
          <div>
            <Link href={`/${lng}/contact`}>{t("contact_us")}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

const Subnav = ({ item, lng, pathName }) => {
  const { t } = useTranslation(lng, "header");
  console.log(item, lng, pathName);
  console.log(item.name);
  return (
    <div className="group h-[60px] flex items-center">
      <li
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
      </li>
      {item.sub && (
        <div className="absolute right-0 z-10 top-[60px] w-full origin-top-right  focus:outline-none bg-white dark:bg-[#191919] hidden group-hover:block">
          <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black dark:bg-white opacity-100 "></div>

          <ul className="flex flex-cols container mx-auto pt-[20px] pb-[80px]">
            {item.sub &&
              item.sub.map((sub) => (
                <li className="mr-[80px]">
                  <h1 className="text-[#F0B450] uppercase mb-[15px]">
                    {sub.title}
                  </h1>
                  <ul key={sub.title} className="flex flex-col">
                    {sub.links.map((link) => (
                      <li
                        key={link.name}
                        className="flex flex-row"
                        onClick={() => setOpen(false)}
                      >
                        <Link href={`/${lng}${link.link}`}>{link.name}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navigations;
