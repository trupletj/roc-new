import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useTranslation } from "@/app/i18n";

import roastery_image from "@/public/assets/branches/roastery.png";
import buddha_image from "@/public/assets/branches/buddha.png";
import fountain_image from "@/public/assets/branches/fountain.png";
import un_image from "@/public/assets/branches/un.png";
import mpm_image from "@/public/assets/branches/mpm.png";
import choijin_image from "@/public/assets/branches/choijin.png";

async function Branch({ lng, slug }) {
  const { t } = await useTranslation(lng, slug);

  const main_images = {
    roastery: roastery_image,
    buddha: buddha_image,
    fountain: fountain_image,
    un: un_image,
    mpm: mpm_image,
    choijin: choijin_image,
  };
  return (
    <div className="w-full bg-[#080505] text-white py-10">
      <div className="container flex flex-col items-center space-y-10">
        <div className="w-full aspect-[8/3] relative ">
          {main_images[slug] && (
            <Image
              alt="123"
              src={main_images[slug]}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <h1 className="text-3xl">{t("name")}</h1>
        {t("phone") != "phone" && (
          <ul className="flex flex-row space-x-5 text-base font-light justify-center">
            <li>
              <p dangerouslySetInnerHTML={{ __html: t("phone") }} />
            </li>
            <li>
              <p dangerouslySetInnerHTML={{ __html: t("address") }} />
            </li>
            <li>
              <p dangerouslySetInnerHTML={{ __html: t("work_hours") }} />
            </li>
          </ul>
        )}
        {t("map") != "map" && (
          <Link href="/" className="bg-[#F2F2F2] text-[#080505] px-16 py-1">
            View Google map
          </Link>
        )}
        <div className="max-w-[900px] mx-auto space-y-5 text-xl">
          <p dangerouslySetInnerHTML={{ __html: t("main_text") }} />
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <div className="aspect-square col-span-1 w-full relative">
            <Image
              alt="123"
              src={t("image_1")}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="aspect-square col-span-1 w-full relative">
            <Image
              alt="123"
              src={t("image_2")}
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        {/* <div className="max-w-[900px] mx-auto space-y-5 pt-10 w-full pb-20">
          <h1 className="text-3xl text-left">Drink Bar information</h1>
          <div className="flex justify-between pb-10">
            <div className="w-1/4">
              <ul>
                <li>Phone: </li>
                <li>Address: </li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>+976 7721 3333 </li>
                <li>
                  South of State Department Store, 40th Myangat street,
                  Sukhbaatar District
                </li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>Opening hours: </li>
                <li>Monday: 07:00 - 00:00</li>
                <li>Tuesday: 07:00-00:00</li>
                <li>Wednesday: 07:00-00:00</li>
              </ul>
            </div>
            <div className="w-1/4">
              <ul>
                <li>Thursday: 07:00-00:00</li>
                <li>Friday: 07:00-00:00</li>
                <li>Saturday: 07:00-00:00</li>
                <li>Sunday: 07:00-00:00</li>
              </ul>
            </div>
          </div>
          <div className="aspect-[7/3]  w-full relative">
            <Image alt="123" src={map} fill style={{ objectFit: "cover" }} />
          </div>
        </div> */}
        {/* <SectionHeader title="Бусад салбарууд" buttonTitle="Бүгдийг үзэх" />
        <div className="grid grid-cols-3 gap-4 w-full">
          <div className="space-y-5">
            <div className="aspect-square  w-full relative">
              <Image
                alt="123"
                src={image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl">ROC Restaurant, Buddha Vista</h1>
          </div>
          <div className="space-y-5">
            <div className="aspect-square  w-full relative">
              <Image
                alt="123"
                src={image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl">
              ROC UN, West of United Nations building
            </h1>
          </div>
          <div className="space-y-5">
            <div className="aspect-square  w-full relative">
              <Image
                alt="123"
                src={image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <h1 className="text-2xl">ROC Restaurant, Buddha Vista</h1>
          </div>
        </div> */}
      </div>
    </div>
  );
}
export default Branch;
