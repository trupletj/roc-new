"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import SectionHeader from "../moleculs/SectionHeader";
import ShopBag from "../atoms/icons/ShopBag";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { apiDomain, useItems } from "@/app/hooks/useItems";

import { useTranslation } from "@/app/i18n/client";
import ArrowR from "../atoms/ArrowR";

function ShopSection({ lng }) {
  const { t } = useTranslation();
  const { mediaDomain } = useContext(GlobalContext);
  const { items, isLoading, isError } = useItems({
    url: `${apiDomain}client/good/top`,
  });
  return (
    <div className="container mx-auto my-10 px-5">
      {!isLoading && !isError && (
        <>
          <SectionHeader
            lng={lng}
            title={t("recomended_products")}
            buttonTitle={t("read_more")}
            href={`/${lng}/shop`}
          />
          <div className="w-full overflow-x-auto pb-2">
            <ul className="grid grid-cols-4 gap-4 min-w-[640px]">
              {items.record.map((item) => (
                <li className="w-full relativ " key={item.good.id}>
                  <div className="w-full aspect-square relative group">
                    <Image
                      src={
                        mediaDomain +
                        (item.main_image
                          ? item.main_image
                          : item.good.image_path)
                      }
                      alt={item.good.name || "123"}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                      <Link
                        href={`/${lng}/shop/product/${item.good.type_id}`}
                        className="absolute right-0 top-0 p-2 bg-black  group-hover:block hidden text-white"
                      >
                        <ShopBag />
                      </Link>
                      <Link
                        href={`/${lng}/shop/product/${item.good.type_id}`}
                        className="absolute w-full left-0 bottom-0 p-2 bg-black  group-hover:block hidden text-center text-white"
                      >
                        {t("view")}
                      </Link>
                    </div>
                  </div>
                  <h1 className="w-full text-center py-3 text-white">
                    {item.name}
                  </h1>
                </li>
              ))}
            </ul>
          </div>
          <Link
            href={`/${lng}/shop`}
            className="text-white flex items-center my-5 md:hidden"
          >
            <span className="mr-4"> {t("read_more")}</span> <ArrowR />
          </Link>{" "}
        </>
      )}
    </div>
  );
}

export default ShopSection;
