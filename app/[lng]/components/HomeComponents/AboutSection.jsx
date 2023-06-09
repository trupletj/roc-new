import React from "react";
import Image from "next/image";
import SectionHeader from "../moleculs/SectionHeader";
import image1 from "@/public/assets/home/DSC04462.jpg";
import image2 from "@/public/assets/home/how_we_roast.png";
import image3 from "@/public/assets/home/partners_and_sources.png";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
import ArrowR from "../atoms/ArrowR";
// import { useTranslation } from "../i18n";

async function AboutSection({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section>
      <div className="container mx-auto px-5 my-10">
        <SectionHeader title={t("about")} href={`/${lng}/about`} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 aspect-[1/3] lg:aspect-square text-white">
          <div className="grid-span-1 lg:col-span-2 aspect-square lg:aspect-auto relative ">
            <Image
              src={image1}
              alt="About Picture"
              fill
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-[#000000d1] to-transparent  from-1%  bg-opacity-5">
              <h1 className="font-semibold text-xl">
                <Link href={`/${lng}/about/our_story`}>{t("our_story")} </Link>
              </h1>

              <p
                className="my-4"
                dangerouslySetInnerHTML={{ __html: t("our_story_description") }}
              />
              {/* <Link
                className=" lg:inline-block hidden text-white uppercase flex-row  items-center "
                href={`/${lng}/about/our_story`}
              >
                {t("read_more")}
              </Link> */}
            </div>
          </div>

          <div className="col-span-1 aspect-square lg:aspect-auto relative">
            <Image
              src={image2}
              alt="About Picture"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 100vw,
              100vw"
            />
            <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-[#000000d1] to-transparent  from-1%  bg-opacity-5 ">
              <h1 className="font-semibold text-xl">
                <Link href={`/${lng}/about/how-we-brew`}>
                  {t("how_we_roast")}
                </Link>
              </h1>
              <p
                className="my-4"
                dangerouslySetInnerHTML={{
                  __html: t("how_we_roast_description"),
                }}
              />
              {/* <Link className="py-2 px-3 lg:inline-block hidden bg-white text-[#080505] ">
                {t("read_more")}
              </Link> */}
            </div>
          </div>
          <div className="col-span-1 aspect-square lg:aspect-auto relative">
            <Image
              src={image3}
              alt="About Picture"
              fill
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 75vw,
              75vw"
              quality={100}
              style={{ objectFit: "cover" }}
            />
            <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-[#000000d1] to-transparent  from-1%  bg-opacity-5">
              <h1 className="font-semibold text-xl">
                <Link href={`/${lng}/about/partners-and-sourcing`}>
                  {t("partners_sourcing")}
                </Link>
              </h1>

              <p
                className="my-4"
                dangerouslySetInnerHTML={{
                  __html: t("partners_sourcing_description"),
                }}
              />
              {/* <Link className="py-2 px-3 lg:inline-block hidden bg-white text-[#080505] ">
                {t("read_more")}
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
