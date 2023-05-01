import Link from "next/link";
import React from "react";
import Image from "next/image";

import { useTranslation } from "@/app/i18n";
//images
import roastery_image from "@/public/assets/branches/roastery.png";
import buddha_image from "@/public/assets/branches/buddha.png";
import fountain_image from "@/public/assets/branches/fountain.png";
import un_image from "@/public/assets/branches/un.png";
import mpm_image from "@/public/assets/branches/mpm.png";
import choijin_image from "@/public/assets/branches/choijin.png";

async function BranchesMainPage({ lng }) {
  const { t: roastery } = await useTranslation(lng, "roastery");
  const { t: buddha } = await useTranslation(lng, "buddha");
  const { t: choijin } = await useTranslation(lng, "choijin");
  const { t: fountain } = await useTranslation(lng, "fountain");
  const { t: mpm } = await useTranslation(lng, "mpm");
  const { t: un } = await useTranslation(lng, "un");
  return (
    <div className="container flex flex-col items-center py-10 pb-20 space-y-10">
      <h1 className="text-5xl font-medium ">ROC CAFFEINE BAR</h1>
      <ul className="grid grid-cols-1 md:grid-cols-6 max-w-[1024px] mx-auto gap-4 text-xs w-full text-center">
        <li className="bg-[#F2F2F2] p-2">
          <Link href={`/${lng}/branches/roastery`}>{roastery("name")}</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href={`/${lng}/branches/buddha`}>{buddha("name")}</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href={`/${lng}/branches/un`}>{un("name")}</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href={`/${lng}/branches/fountain`}>{fountain("name")}</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href={`/${lng}/branches/mpm`}>{mpm("name")}</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href={`/${lng}/branches/choijin`}>{choijin("name")}</Link>
        </li>
      </ul>
      <section className="w-full text-lg">
        <div className="grid grid-cols-1 aspect-square md:aspect-[3/1] md:grid-cols-3 gap-4  mb-20">
          <div className="col-span-1 relative h-full">
            <div className="relative h-full">
              <Image
                alt="roastery"
                src={roastery_image}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-12 left-0 h-12 w-full bg-white flex items-center">
              {roastery("name")}
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 relative h-full">
            <div className="relative h-full ">
              <Image
                alt="buddha"
                src={buddha_image}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-12 left-0 h-12 w-full flex items-center">
              {buddha("name")}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 aspect-square md:aspect-[3/1] md:grid-cols-3 gap-4  mb-20">
          <div className="md:col-span-2 col-span-1 relative h-full">
            <div className="relative h-full ">
              <Image
                alt="fountain"
                src={fountain_image}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-12 left-0 h-12 w-full flex items-center">
              {fountain("name")}
            </div>
          </div>
          <div className="col-span-1 relative h-full">
            <div className="relative h-full">
              <Image
                alt="un"
                src={un_image}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-12 left-0 h-12 w-full bg-white flex items-center">
              {un("name")}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 aspect-square md:aspect-[3/1] md:grid-cols-3 gap-4  mb-20">
          <div className="col-span-1 relative h-full">
            <div className="relative h-full">
              <Image
                alt="mpm"
                src={mpm_image}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-12 left-0 h-12 w-full bg-white flex items-center">
              {mpm("name")}
            </div>
          </div>
          <div className="md:col-span-2 col-span-1 relative h-full">
            <div className="relative h-full ">
              <Image
                alt="choijin"
                src={choijin_image}
                fill
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="absolute -bottom-12 left-0 h-12 w-full flex items-center">
              {choijin("name")}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BranchesMainPage;
