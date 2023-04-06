"use client";
import React from "react";
import Link from "next/link";
import { useTranslation } from "@/app/i18n/client.js";

import Arrow from "../atoms/icons/Arrow";

const DataNav = [
  {
    name: "about_us",
    link: "/about_us",
  },
  {
    name: "coffee",
    link: "/coffee",
    sub: [
      {
        title: "coffee_category",
        links: [
          { name: "all_coffee", link: "/mn/test" },
          { name: "coffee_bean", link: "/mn/test" },
          { name: "cold_brew", link: "/mn/test" },
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

  return (
    <section className={`w-full text-base uppercase relative`}>
      <div className="container h-[60px] mx-auto flex flex-row justify-between items-center">
        <ul className="flex flex-row">
          {DataNav.map((item) => (
            <li
              key={item.name}
              className="flex flex-row items-center justify-center mr-[50px] cursor-pointer "
            >
              <span>{t(item.name)}</span>
              <span className="ml-[5px]">
                <Arrow />
              </span>
            </li>
          ))}
        </ul>
        <div>
          <Link href={`/${lng}/contact`}>{t("contact_us")}</Link>
        </div>
      </div>
      <SubNav />
    </section>
  );
}

const SubNav = ({ subnavdata }) => {
  return (
    <>
      <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100 "></div>
      <div
        className="absolute right-0 z-10 top-[61px] w-full origin-top-right  focus:outline-none bg-white dark:bg-[#191919]"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex={-1}
      >
        <div className="container mx-auto">
          <p>asdf</p>
          <p>asdf</p>
          <p>asdf</p>
        </div>
      </div>
    </>
  );
};

export default Navigations;
