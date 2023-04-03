import React from "react";
import localFont from "next/font/local";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";

import DarkModeBtn from "@/app/[lng]/components/DarkModeBtn";
import { TranslateBtn } from "./TranslateBtn";
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
    sub: [
      { name: "about_us", link: "/about_us" },
      { name: "about_us", link: "/about_us" },
    ],
  },
  { name: "coffee", link: "/coffee" },
  { name: "products", link: "/products" },
  { name: "service", link: "/service" },
  { name: "branch", link: "/branch" },
];

const poppins = localFont({
  src: [
    {
      path: "../../../public/fonts/NoirPro-Regular.ttf",
    },
  ],
  variable: "--font-poppins",
});
async function Header({ lng }) {
  const { t } = await useTranslation(lng, "header");

  console.log(lng);
  return (
    <div
      className={`${poppins.variable} font-sans text-base leading-5 w-full flex flex-col items-center`}
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
      <section className="w-full">
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
      <section className={`w-full text-base uppercase`}>
        <div className="container h-[60px] mx-auto flex flex-row justify-between items-center">
          <ul className="flex flex-row">
            {DataNav.map((item) => (
              <li
                key={item.name}
                className="flex flex-row items-center justify-center mr-[50px] cursor-pointer"
              >
                <span>{t(item.name)}</span>
                <span className="ml-[5px]">
                  <Arrow />
                </span>
              </li>
            ))}
          </ul>
          <div>
            <Link href={"/"}>{t("contact_us")}</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
