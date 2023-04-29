import React from "react";
import Image from "next/image";
import SectionHeader from "../moleculs/SectionHeader";
import image1 from "@/public/assets/image1.png";
import image2 from "@/public/assets/image2.png";
import image3 from "@/public/assets/image3.png";
import Link from "next/link";

import { useTranslation } from "@/app/i18n";
// import { useTranslation } from "../i18n";

async function AboutSection({ lng }) {
  const { t } = await useTranslation(lng);
  return (
    <section>
      <div className="container mx-auto px-5 my-10">
        <SectionHeader title={t("about")} href={`/${lng}/about`} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 aspect-[1/3] lg:aspect-square text-white">
          <div className="grid-span-1 lg:col-span-2 aspect-square lg:aspect-auto relative ">
            <Image src={image1} alt="123" fill style={{ objectFit: "cover" }} />
            <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-black to-transparent  from-1%  bg-opacity-5">
              <h1 className="font-bold text-xl">{t("our_story")}</h1>
              <p className="my-4">{t("our_story_description")}</p>
              <Link
                className="py-2 px-3 lg:inline-block hidden bg-white text-[#080505] "
                href={`/${lng}/about?page=our_story`}
              >
                {t("read_more")}
              </Link>
            </div>
          </div>

          <div className="col-span-1 aspect-square lg:aspect-auto relative">
            <Image src={image2} alt="123" fill style={{ objectFit: "cover" }} />
            <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-black to-transparent  from-1%  bg-opacity-5 ">
              <h1 className="font-bold text-xl">{t("how_we_roast")}</h1>
              <p className="my-4">{t("how_we_roast_description")}</p>
              <Link
                className="py-2 px-3 lg:inline-block hidden bg-white text-[#080505] "
                href={`/${lng}/about?page=how_we_roast`}
              >
                {t("read_more")}
              </Link>
            </div>
          </div>
          <div className="col-span-1 aspect-square lg:aspect-auto relative">
            <Image src={image3} alt="123" fill style={{ objectFit: "cover" }} />
            <div className="absolute bottom-0 left-0 p-3 w-full bg-gradient-to-t from-black to-transparent  from-1%  bg-opacity-5">
              <h1 className="font-bold text-xl">{t("partners_sourcing")}</h1>
              <p className="my-4">{t("partners_sourcing_description")}</p>
              <Link
                className="py-2 px-3 lg:inline-block hidden bg-white text-[#080505] "
                href={`/${lng}/about?page=partners_sourcing`}
              >
                {t("read_more")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
