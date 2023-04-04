import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

import DarkModeBtn from "@/app/[lng]/components/atoms/DarkModeBtn";
import { TranslateBtn } from "@/app/[lng]/components/atoms/TranslateBtn";
import Divider from "./atoms/Divider";
import Logo from "./atoms/Logo";
import Search from "./atoms/icons/Search";
import User from "./atoms/icons/User";
import ShopBag from "./atoms/icons/ShopBag";
import Arrow from "./atoms/icons/Arrow";

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

async function Header({ lng }) {
  const { t } = await useTranslation(lng, "header");

  console.log(lng);
  return (
    <div
      className={`font-sans text-base leading-5 w-full flex flex-col items-center`}
    >
      <section className={`h-[40px] w-full pt-[10px] bg-[#DFDDD7] `}>
        <div className="container mx-auto  flex flex-row justify-between  text-[#080505] ">
          <p>Сайн уу, ROC-д тавтай морил </p>
          <ul className="flex flex-row">
            <li className="ml-10">
              <DarkModeBtn />
            </li>
            <li className="ml-10">
              <TranslateBtn lng={lng} />
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full relative">
        <div className="container mx-auto flex flex-row items-center  h-[80px]">
          <div className="w-1/4"></div>
          <div className="dark:text-white my-2 w-1/2 flex justify-center">
            <Logo />
          </div>
          <ul className="w-1/4 flex flex-row justify-end items-center">
            <li className="mr-[30px]">
              <Search />
            </li>
            <li className="mr-[30px]">
              <User />
            </li>
            <li>
              <ShopBag />
            </li>
          </ul>
        </div>
      </section>

      <Divider />
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
        {/* <SubNav /> */}
      </section>
    </div>
  );
}

const SubNav = ({ subnavdata }) => {
  return (
    <>
      <Divider />
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

export default Header;
