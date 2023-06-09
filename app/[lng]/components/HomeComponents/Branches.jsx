import React from "react";
import Image from "next/image";
import branch1 from "@/public/assets/branch1.png";
import branch2 from "@/public/assets/branch2.png";
import SectionHeader from "../moleculs/SectionHeader";
import Link from "next/link";
import { useTranslation } from "@/app/i18n";

async function Branches({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section className="hidden lg:block">
      <div className="container mx-auto my-10">
        <SectionHeader
          title={t("branches")}
          href={`/${lng}/branches`}
          buttonTitle={t("read_more")}
        />
        <div className="grid grid-cols-10  aspect-[3/1] ">
          <div className="col-span-7 h-full bg-red-200 w-full relative">
            <Image
              src={branch1}
              alt="About Picture"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 75vw,
              75vw"
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-3 w-full h-full flex flex-col  justify-between py-10 px-10 bg-[#393636] text-white">
            <h1 className="text-[32px] font-medium">{t("branch_one_name")}</h1>
            <p>{t("branch_one_description")}</p>
            <div>
              <h1 className="font-semibold">{t("location")}:</h1>
              <p>{t("branch_one_location")}</p>
            </div>
            <div>
              <h1 className="font-semibold">{t("working_hours")}:</h1>
              <p>07:30 - 19:00</p>
            </div>
            <div className="flex flex-wrap w-full justify-between">
              <a
                className="px-16 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={"https://roc.mn/img/branches/choijin.pdf"}
              >
                Menu
              </a>
              <a
                className="px-4 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={
                  "https://www.google.com/maps/dir//Choijin+Suites+Jamyan+Gun+Street+22+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80/@47.9158926,106.919168,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5d969246313b247d:0xd09c82e3ffbc4294!2m2!1d106.919168!2d47.9158926"
                }
              >
                View on Google Map
              </a>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10  aspect-[3/1] ">
          <div className="col-span-3 w-full h-full flex flex-col  justify-between py-10 px-10 bg-[#393636] text-white">
            <h1 className="text-[32px] font-medium">{t("branch_two_name")}</h1>
            <p>{t("branch_two_description")}</p>
            <div>
              <h1 className="font-semibold">{t("location")}:</h1>
              <p>{t("branch_two_location")}</p>
            </div>
            <div>
              <h1 className="font-semibold">{t("working_hours")}:</h1>
              <p>07:00 - 00:00</p>
            </div>
            <div className="flex flex-wrap w-full justify-between">
              <a
                className="px-16 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={"https://roc.mn/img/branches/fountain.pdf"}
              >
                Menu
              </a>
              <a
                className="px-4 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={
                  "https://www.google.com/maps/dir//R.O.C,+%D0%A5%D0%B8%D1%87%D1%8D%D1%8D%D0%BD%D0%B3%D2%AF%D0%B9+%D0%A1%D0%B0%D0%B9%D0%B4+%D0%A6%D1%8D%D1%80%D1%8D%D0%BD%D0%B4%D0%BE%D1%80%D0%B6%D0%B8%D0%B9%D0%BD+%D0%93%D1%83%D0%B4%D0%B0%D0%BC%D0%B6,+%D0%A3%D0%BB%D0%B0%D0%B0%D0%BD%D0%B1%D0%B0%D0%B0%D1%82%D0%B0%D1%80/@47.9146571,106.9063011,18.72z/data=!4m8!4m7!1m0!1m5!1m1!1s0x5d96937b3d438a1f:0xdbefbde08884470f!2m2!1d106.9062558!2d47.9147877"
                }
              >
                View on Google Map
              </a>
            </div>
          </div>
          <div className="col-span-7 w-full h-full relative">
            <Image
              src={branch2}
              alt="About Picture"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 75vw,
              75vw"
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branches;
