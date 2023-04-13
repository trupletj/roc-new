import React from "react";
import { useTranslation } from "@/app/i18n";

import DarkModeBtn from "@/app/[lng]/components/atoms/DarkModeBtn";
import { TranslateBtn } from "@/app/[lng]/components/atoms/TranslateBtn";
import Divider from "./atoms/Divider";
import Logo from "./atoms/Logo";
import Search from "./atoms/icons/Search";
import User from "./atoms/icons/User";
import ShopBag from "./atoms/icons/ShopBag";
import Navigations from "./moleculs/Navigations";
import MobileNav from "./moleculs/MobileNav";

async function Header({ lng }) {
  const { t } = await useTranslation(lng, "header");

  return (
    <div
      className={`font-sans text-base leading-5 w-full flex flex-col items-center`}
    >
      <section
        className={`h-[40px] w-full pt-[10px] bg-[#DFDDD7] hidden lg:block `}
      >
        <div className="container mx-auto  flex flex-row justify-between  text-[#080505] ">
          <p>Сайн уу, ROC-д тавтай морил </p>
          <ul className="flex flex-row">
            <li className="ml-10">
              <DarkModeBtn />
            </li>
            <li className="ml-[30px]">
              <TranslateBtn lng={lng} />
            </li>
          </ul>
        </div>
      </section>
      <section className="w-full relative">
        <div className="container mx-auto flex flex-row items-center  h-[80px]">
          <div className="w-1/4">
            <div className=" lg:hidden">burger</div>
          </div>
          <div className="dark:text-white my-2 w-1/2 flex justify-center">
            <Logo />
          </div>
          <ul className="w-1/4 flex flex-row justify-end items-center">
            <li className="mr-[30px] hidden lg:block">
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
      <Navigations lng={lng} />
      <MobileNav />
    </div>
  );
}

export default Header;
