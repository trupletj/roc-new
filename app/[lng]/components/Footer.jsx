import Link from "next/link";
import React from "react";
import LogoWithText from "./atoms/LogoWithText";
import Divider from "./atoms/Divider";
import FB from "./atoms/icons/FB";
import Insta from "./atoms/icons/Insta";
import LinkedIn from "./atoms/icons/LinkedIn";
import TW from "./atoms/icons/TW";

const data = [
  {
    title: "ROC",
    links: [
      { name: "Бидний Тухай", link: "/" },
      { name: "Бидний Түүх", link: "/" },
      { name: "Sustainability", link: "/" },
      { name: "Ажлын Байр", link: "/" },
    ],
  },

  {
    title: "Бүтээгдэхүүн",
    links: [
      {
        name: "Кофе",
        link: "/",
      },
      { name: "Кофе Subscription", link: "/" },
      { name: "Тоног төхөөрөмж", link: "/" },
      { name: "Мерчендайз", link: "/" },
    ],
  },
  {
    title: "Үйлчилгээ",
    links: [
      { name: "Roasting", link: "/" },
      { name: "Катеринг, Кофе Тэрэг", link: "/" },
      { name: "түгээлт ба засвар үйлчилгээ", link: "/" },
      { name: "Хангамж", link: "/" },
      { name: "Бөөний Худалдаа", link: "/" },
      { name: "Бариста сургалт", link: "/" },
      { name: "Кофе Нэрэх Сургалт", link: "/" },
    ],
  },
];
const mobileViewData = [
  {
    links: [
      { name: "Бидний Тухай", link: "/" },
      { name: "Бидний Түүх", link: "/" },
      { name: "Бүтээгдэхүүн", link: "/" },
      { name: "Үйлчилгээ", link: "/" },
    ],
  },

  {
    links: [
      {
        name: "Roc-д ажиллах",
        link: "/",
      },
      { name: "Хаяг, Байршил", link: "/" },
      { name: "Блог", link: "/" },
    ],
  },
];
function Footer({ lng }) {
  return (
    <>
      <footer className="w-full hidden lg:block bg-[#080505] text-white">
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
                <div className="flex flex-col " key={i}>
                  <h1 className="text-[#F0B450]  mb-5">{item.title}</h1>
                  {item.links.map((link, i) => (
                    <Link href={link.link} key={i} className="mb-5">
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="flex flex-col w-1/2 items-end">
              <h1 className="text-[#F0B450] mb-5">Холбогдох</h1>
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
              <p className="mb-5">
                Будда Виста, Хан-Уул Дүүрэг, Улаанбтар, Монгол
              </p>
              <p className="mb-5">+ 976 7721 3333</p>
              <p className="mb-5">info@roc.mn</p>
            </div>
          </section>
        </div>
      </footer>
      <footer className="lg:hidden bg-[#080505] text-white">
        <div className=" max-w-[500px] mx-auto">
          <section className="flex flex-col justify-between pt-10">
            <MobileFooterTop />
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
        <span className="flex px-10 justify-between">
          <p className="mb-5">+ 976 7721 3333</p>
          <p className="mb-5">info@roc.mn</p>
        </span>
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
  return (
    <div className="flex flex-row justify-between items-start w-full px-10">
      {mobileViewData.map((item, i) => (
        <div className="flex flex-col " key={i}>
          {item.links.map((link, i) => (
            <Link href={link.link} key={i} className="mb-5">
              {link.name}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Footer;
