"use client";
import React, { useState, Fragment } from "react";
import { useTranslation } from "@/app/i18n/client.js";

import { Dialog, Transition } from "@headlessui/react";

import DarkModeBtn from "../atoms/DarkModeBtn";
import Burger from "../atoms/icons/Burger";
import Logo from "../atoms/Logo";
import TranslateBtn from "../atoms/TranslateBtn";
import Search from "../atoms/icons/Search";
import User from "../atoms/icons/User";
import ShopBag from "../atoms/icons/ShopBag";
import Cross from "../atoms/icons/Cross";
import Divider from "../atoms/Divider";
import Link from "next/link";
import Arrow from "../atoms/icons/Arrow";
import { MobileFooterBottom, MobileFooterTop } from "../Footer";

function MobileNav({ lng, DataNav }) {
  const [open, setOpen] = useState(false);
  const [childOpenIndex, setChildOpenIndex] = useState(-1);
  const { t } = useTranslation(lng, "header");

  return (
    <div
      className={`font-sans text-base leading-5 w-full flex flex-col items-center lg:hidden bg-[#080505] text-white`}
    >
      <section className="w-full relative">
        <div className="container mx-auto flex flex-row items-center px-10 lg:px-0 h-[80px]">
          <div className="w-1/4">
            <div
              className=" lg:hidden cursor-pointer"
              onClick={(val) => {
                setOpen(true);
              }}
            >
              <Burger />
            </div>
          </div>
          <Link
            href="/"
            className="dark:text-white my-2 w-1/2 flex justify-center"
          >
            <Logo />
          </Link>
          <ul className="w-1/4 flex flex-row justify-end items-center">
            <li className="mr-[30px]">
              <User />
            </li>
            <li>
              <ShopBag />
            </li>
          </ul>
        </div>
      </section>

      <Transition.Root show={open} as={Fragment}>
        <section className="fixed z-10 top-0 bottom-0 left-0 right-0 bg-[#191919] overflow-scroll">
          <div className="container mx-auto flex flex-row items-center px-10 lg:px-0 h-[80px] sticky top-0 bg-[#191919]">
            <div className="w-1/4">
              <div
                className=" lg:hidden cursor-pointer"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Cross />
              </div>
            </div>
            <Link
              href={"/"}
              className="dark:text-white my-2 w-1/2 flex justify-center"
            >
              <Logo />
            </Link>
            <ul className="w-1/4 flex flex-row justify-end items-center">
              {/* <li className="mr-[30px] hidden lg:block">
                <Search />
              </li> */}
              <li className="mr-[30px]">
                <User />
              </li>
              <li>
                <ShopBag />
              </li>
            </ul>
          </div>
          <Divider />
          <div className="px-10 w-full flex flex-col items-center">
            {/* <div className="flex py-5 items-center w-full">
              <Search />
              <input
                className="h-[40px] text-sm ml-2 w-full outline-none appearance-none bg-transparent "
                placeholder="Кофе, кофены төрөл, хэрэгсэл..."
                type="text"
              />
            </div> */}
            {/* <div className={`my-0 w-full h-px  bg-white opacity-100 `} /> */}
          </div>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <ul className="px-10 w-full flex flex-col  items-center mb-10">
              {DataNav.map((item, index) => (
                <Subnav
                  key={"mobile-nav-" + index}
                  currentIndex={index}
                  childOpenIndex={childOpenIndex}
                  setChildOpenIndex={setChildOpenIndex}
                  item={item}
                  lng={lng}
                  setOpen={setOpen}
                />
              ))}
              <li className="w-full py-5 uppercase">
                <Link href={`/${lng}`}>{t("contact_us")}</Link>
              </li>
              <div
                className={`my-0 w-full h-px  
              bg-white opacity-100 `}
              />
            </ul>
          </Transition.Child>
          <MobileFooterTop />
          <footer className="w-full sticky bottom-0">
            <MobileFooterBottom lng={lng} />
          </footer>
        </section>
      </Transition.Root>
    </div>
  );
}

const Subnav = ({
  currentIndex,
  item,
  lng,
  childOpenIndex,
  setChildOpenIndex,
  setOpen,
}) => {
  const { t } = useTranslation(lng, "header");
  return (
    <li className="flex flex-col items-center  w-full ">
      {item.sub ? (
        <div
          key={"mobile-sub-nav-" + item.name}
          onClick={() => {
            setChildOpenIndex((val) => {
              if (currentIndex == val) return -1;
              return currentIndex;
            });
          }}
          className="w-full flex flex-row items-center justify-between py-5"
        >
          <span className="uppercase">{t(item.name)}</span>

          <span className="ml-[5px]">
            <Arrow />
          </span>
        </div>
      ) : (
        <div
          key={"mobile-sub-second-" + item.name}
          className="w-full flex flex-row items-center justify-between py-5"
        >
          <Link
            href={item.link}
            className="uppercase"
            onClick={() => setOpen(false)}
          >
            {t(item.name)}
          </Link>
        </div>
      )}
      <div className={`my-0 w-full h-px  bg-white opacity-100 `} />
      {item.sub && childOpenIndex == currentIndex && (
        <ul className="w-full flex flex-col  py-5 bg-[#191919]">
          {item.sub &&
            item.sub.map((sub, i) => (
              <li className="flex flex-col w-full py-5" key={i}>
                {sub.title && (
                  <h1 className="text-[#F0B450] uppercase mb-[5px]">
                    {t(sub.title)}
                  </h1>
                )}
                <ul className="flex flex-col">
                  {sub.links.map((link) => (
                    <li
                      key={"mobile-nav-link-" + link.name}
                      className="flex py-3"
                    >
                      <Link
                        href={`/${lng}${link.link}`}
                        onClick={() => setOpen(false)}
                      >
                        {t(link.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
        </ul>
      )}
    </li>
  );
};

export default MobileNav;
