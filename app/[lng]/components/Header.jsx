import React from "react";
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
import Link from "next/link";
import Welcome from "./atoms/Welcome";
const DataNav = [
  {
    name: "shop",
    link: "/shop",
  },
  {
    name: "about_us",
    sub: [
      {
        links: [
          { name: "our_story", link: "/about/our-history" },
          { name: "who_we_are", link: "/about/who-we-are" },
          { name: "how_we_roast", link: "/about/how-we-roast" },
          {
            name: "partners_sourcing",
            link: "/about/partners-and-sourcing",
          },
        ],
      },
    ],
  },

  {
    name: "service",
    sub: [
      {
        links: [
          {
            name: "ROASTING TO A TASTE",
            link: "/services/roasting-to-a-taste",
          },
          { name: "WHOLESALE", link: "/services/whole-sale" },
          {
            name: "CATERING & COFFEE TRUCK",
            link: "/services/catering-and-coffee-truck",
          },
          {
            name: "DISTRIBUTION & MAINTANENCE",
            link: "/services/distribution-and-maintenance",
          },
        ],
      },
    ],
  },
  {
    name: "branch",
    sub: [
      {
        links: [
          { name: "THE ROASTERY", link: "/branches/roastery" },
          { name: "ROC BUDDHA VISTA", link: "/branches/buddha" },
          { name: "ROC UNITED NATIONS", link: "/branches/un" },
          { name: "ROC FOUNTAIN", link: "/branches/fountain" },
          { name: "ROC MPM BUILDING", link: "/branches/mpm" },
          { name: "ROC CHOIJIN SUITES", link: "/branches/choijin" },
        ],
      },
    ],
  },
  {
    name: "Work at roc",
    link: "/anket",
    right: true,
    // sub: [
    //   {
    //     links: [
    //       { name: "work at roc", link: "/branches/roastery" },
    //       { name: "Privacy Policy", link: "/branches/buddha" },
    //       { name: "terms and conditions", link: "/branches/buddha" },
    //     ],
    //   },
    // ],
  },
];

async function Header({ lng }) {
  return (
    <>
      <div
        className={`font-sans text-base leading-5 w-full lg:flex flex-col items-center hidden bg-[#080505] text-white`}
      >
        {/* <section
          className={`h-[40px] w-full pt-[10px] bg-[#DFDDD7] hidden lg:block `}
        >
          <div className="container mx-auto  flex flex-row justify-between  text-[#080505]">
            <Welcome lng={lng} />
            <ul className="flex flex-row"> */}
        {/* <li className="ml-10">
                <DarkModeBtn />
              </li> */}
        {/* <li className="ml-[30px]">
                <TranslateBtn lng={lng} />
              </li>
            </ul>
          </div>
        </section> */}
        <section className="w-full relative">
          <div className="container mx-auto flex flex-row items-center px-10  h-[80px]">
            <div className="w-1/4">
              <div className=" lg:hidden">
                <Burger />
              </div>
            </div>
            <div className="dark:text-white my-2 w-1/2 flex justify-center">
              <Link href={`/${lng}`}>
                <Logo />
              </Link>
            </div>
            <ul className="w-1/4 flex flex-row justify-end items-center">
              {/* <li className="mr-[30px] hidden lg:block">
                <Search />
              </li> */}
              <li className="mr-[30px]">
                <User />
              </li>
              <li className="mr-[30px]">
                <ShopBag />
              </li>
              <li>
                <TranslateBtn lng={lng} />
              </li>
            </ul>
          </div>
        </section>
        <Navigations DataNav={DataNav} lng={lng} />
      </div>
      <MobileNav DataNav={DataNav} lng={lng} />
      <ModalLogin lng={lng} />
      <Basket lng={lng} />
    </>
  );
}

export default Header;
