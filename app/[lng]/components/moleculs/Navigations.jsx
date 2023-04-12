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
      <section
        className={`w-full text-base uppercase relative hidden lg:block`}
      >
        <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100 " />
        <div className="container h-[60px] mx-auto flex flex-row justify-between items-center">
          <ul className="flex flex-row">
            {DataNav.map((item) => (
              <Menu>
                {({ open }) => (
                  <>
                    <Menu.Button>
                      <li
                        key={item.name}
                        className={
                          pathName === `/${lng}${item.link}`
                            ? "text-[#F0B450] flex flex-row items-center justify-center mr-[50px] cursor-pointer uppercase"
                            : "flex flex-row items-center justify-center mr-[50px] cursor-pointer uppercase "
                        }
                      >
                        <span>{t(item.name)}</span>
                        <span className="ml-[5px]">
                          <Arrow />
                        </span>
                      </li>
                    </Menu.Button>
                    {open && (
                      <div className="absolute right-0 z-10 top-[60px] w-full origin-top-right  focus:outline-none bg-white dark:bg-[#191919]">
                        <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black dark:bg-white opacity-100 "></div>
                        <Menu.Items>
                          <Menu.Item as={Fragment}>
                            {item.sub &&
                              item.sub.map((sub) => (
                                <div key={sub.title} className="flex flex-col">
                                  {sub.title}
                                </div>
                              ))}
                          </Menu.Item>
                        </Menu.Items>
                      </div>
                    )}
                  </>
                )}
              </Menu>
            ))}
          </ul>
          <div>
            <Link href={`/${lng}/contact`}>{t("contact_us")}</Link>
          </div>
        </div>
      </section>
      <section className={`w-full text-base uppercase relative lg:hidden`}>
        <div className="w-full max-w-[1640px] mx-auto h-[1px] border-t-0 bg-black  dark:bg-white opacity-100 "></div>
        <div className="container h-[60px] mx-auto flex flex-row justify-between items-center">
          Mobile Menu
        </div>
      </section>
    </>
  );
}

export default Navigations;
