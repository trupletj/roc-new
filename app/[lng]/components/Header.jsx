import React from "react";
import { useTranslation } from "@/app/i18n";

import DarkModeBtn from "@/app/[lng]/components/atoms/DarkModeBtn";
import { TranslateBtn } from "@/app/[lng]/components/atoms/TranslateBtn";
import Logo from "./atoms/Logo";
import Search from "./atoms/icons/Search";
import User from "./atoms/icons/User";
import ShopBag from "./atoms/icons/ShopBag";
import Navigations from "./moleculs/Navigations";
import MobileNav from "./moleculs/MobileNav";
import Burger from "./atoms/icons/Burger";
import Basket from "./Shop/Basket";
import ModalLogin from "./moleculs/ModalLogin";

const DataNav = [
  {
    name: "about_us",
    sub: [
      {
        links: [
          { name: "history", link: "/shop" },
          { name: "team", link: "/test" },
          { name: "how_we_roast", link: "/test" },
          { name: "partners_sourcing", link: "/test" },
        ],
      },
    ],
  },
  {
    name: "coffee",
    sub: [
      {
        title: "coffee_category",
        links: [
          { name: "all_coffee", link: "/shop" },
          { name: "coffee_bean", link: "/test" },
          { name: "cold_brew", link: "/test" },
        ],
      },
      {
        title: "coffee_type",
        links: [
          { name: "blend", link: "/test" },
          { name: "single", link: "/test" },
          { name: "origin", link: "/test" },
        ],
      },
      {
        title: "other",
        links: [
          { name: "hario_v60", link: "/test" },
          { name: "world_of_coffea", link: "/test" },
        ],
      },
    ],
  },
  {
    name: "shop",
    sub: [
      {
        links: [
          { name: "all_coffee", link: "/shop" },
          { name: "coffee_bean", link: "/test" },
          { name: "cold_brew", link: "/test" },
        ],
      },
    ],
  },

  { name: "service", link: "/service" },
  { name: "branch", link: "/branch" },
];

async function Header({ lng }) {
  const { t } = await useTranslation(lng, "header");

  return (
    <>
      <div
        className={`font-sans text-base leading-5 w-full lg:flex flex-col items-center hidden `}
      >
        <section
          className={`h-[40px] w-full pt-[10px] bg-[#DFDDD7] hidden lg:block `}
        >
          <div className="container mx-auto  flex flex-row justify-between  text-[#080505]">
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
          <div className="container mx-auto flex flex-row items-center px-10  h-[80px]">
            <div className="w-1/4">
              <div className=" lg:hidden">
                <Burger />
              </div>
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
        <Navigations DataNav={DataNav} lng={lng} />
      </div>
      <MobileNav DataNav={DataNav} lng={lng} />
      <ModalLogin />
      <Basket />
    </>
  );
}

export default Header;
