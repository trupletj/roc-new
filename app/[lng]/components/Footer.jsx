"use client";
import Link from "next/link";
import React from "react";
import LogoWithText from "./atoms/LogoWithText";
import Divider from "./atoms/Divider";
import FB from "./atoms/icons/FB";
import Insta from "./atoms/icons/Insta";
import LinkedIn from "./atoms/icons/LinkedIn";
import TW from "./atoms/icons/TW";
import { useTranslation } from "@/app/i18n/client.js";

const data = [
  {
    title: "ROC",
    links: [
      { name: "our_story", link: "/about?prefix=0" },
      { name: "who_we_are", link: "/about?prefix=1" },
      { name: "how_we_roast", link: "/about?prefix=2" },
      { name: "partners_sourcing", link: "/about?prefix=3" },
    ],
  },

  {
    title: "shop",
    links: [
      {
        name: "beans",
        link: `/shop`,
      },
      { name: "espresso_machines", link: `/shop` },
      { name: "merchendies", link: `/shop` },
    ],
  },
  {
    title: "services",
    links: [
      { name: "roasting", link: "/services?prefix=0" },
      { name: "whole_sale", link: "/services?prefix=1" },
      { name: "catering", link: "/services?prefix=2" },
      { name: "distrubution", link: "/services?prefix=3" },
    ],
  },
];
const mobileViewData = [
  {
    links: [
      { name: "about_us", link: "/about" },
      { name: "our_story", link: "/about?prefix=0" },
      { name: "products", link: "/shop" },
      { name: "service", link: "/services" },
    ],
  },

  {
    links: [
      {
        name: "work_at_roc",
        link: "/anket",
      },
      { name: "address_and_location", link: "/" },
      { name: "blog", link: "/" },
    ],
  },
];
function Footer({ lng }) {
  const { t } = useTranslation(lng, "header");
  return (
    <>
      <footer className="w-full hidden lg:block bg-[#080505] text-white uppercase">
        <div className="container mx-auto">
          <div className="lg:flex justify-center hidden">
            <div className="w-[150px] h-[150px]">
              <LogoWithText />
            </div>
          </div>
          <div
            className={`my-[10px] w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100 `}
          />
          <section className="flex justify-between my-10">
            <div className="flex flex-col lg:flex-row justify-between items-start w-1/2">
              {data.map((item, i) => (
                <div className="flex flex-col " key={`footer-item-div-${i}`}>
                  <h1 className="text-[#F0B450]  mb-5">
                    {t(item.title)}
                  </h1>
                  {item.links.map((link, i) => (
                    <Link
                      href={`/${lng}${link.link}`}
                      key={`footer-item-link-${i}`}
                      className="mb-5"
                    >
                      {t(link.name)}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col w-1/2 items-end">
              <h1 className="text-[#F0B450] mb-5">{t("contact_us")}</h1>
              <ul className="flex mb-5">
                <li className="ml-7">
                  <FB />
                </li>
                <li className="ml-7">
                  <Insta />
                </li>
                <li className="ml-7">
                  <LinkedIn />
                </li>
                <li className="ml-7">
                  <TW />
                </li>
              </ul>
              <p className="mb-5">{t("address_value")}</p>
              <p className="mb-5">+ 976 7721 3333</p>
              <p className="mb-5">info@roc.mn</p>
            </div>
          </section>
        </div>
      </footer>
      <footer className="lg:hidden bg-[#080505] text-white">
        <div className=" max-w-[500px] mx-auto">
          <section className="flex flex-col justify-between pt-10">
            <MobileFooterTop t={t} />
          </section>
        </div>
        <MobileFooterBottom lng={lng} />
      </footer>
    </>
  );
}

export function MobileFooterBottom({ lng }) {
  return (
    <div className=" w-full bg-[#393636] ">
      <div className="max-w-[500px] mx-auto flex flex-col py-10">
        <div className="flex px-10 justify-between">
          <p className="mb-5">+ 976 7721 3333</p>
          <p className="mb-5">info@roc.mn</p>
        </div>
        <ul className="flex mb-5 justify-around px-20">
          <li className="">
            <FB />
          </li>
          <li>
            <Insta />
          </li>
          <li>
            <LinkedIn />
          </li>
          <li>
            <TW />
          </li>
        </ul>
        <div className="flex w-full justify-center font-light">
          <Link href={"/mn"} className={lng === "mn" ? "font-bold" : ""}>
            МОН
          </Link>
          <Link
            href={"/en"}
            className={lng === "en" ? "font-bold ml-2" : "ml-2"}
          >
            ENG
          </Link>
        </div>
      </div>
    </div>
  );
}

export function MobileFooterTop({ lng }) {
  const { t } = useTranslation(lng, "header");
  return (
    <div className="flex flex-row justify-between items-start w-full px-10">
      {mobileViewData.map((item, i) => (
        <div className="flex flex-col " key={`mobile-footer-item-div-${i}`}>
          {item.links.map((link, i) => (
            <Link
              href={link.link}
              key={`footer-item-link-${i}`}
              className="mb-5"
            >
              {t(link.name)}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
