"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import SectionHeader from "../moleculs/SectionHeader";
import ShopBag from "../atoms/icons/ShopBag";
import { apiDomain, useItems } from "@/app/hooks/useItems";
import GlobalContext from "@/app/[lng]/context/GlobalContext";

import { useTranslation } from "@/app/i18n/client";

function CoffeeList({ lng }) {
  const { mediaDomain } = useContext(GlobalContext);
  const { items, isLoading, isError } = useItems({
    url: `${apiDomain}client/good/top?parent=2`,
  });
  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-10 px-5">
      {!isLoading && !isError && (
        <>
          <SectionHeader
            title={t("coffee_list")}
            buttonTitle={t("read_more")}
            href={`/${lng}/shop`}
          />
          <div className="w-full overflow-x-auto pb-2">
            <ul className="grid grid-cols-4 gap-4 min-w-[640px] ">
              {items?.record.map((item) => (
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
                        Дэлгэрэнгүй
                      </Link>
                    </div>
                  </div>
                  <h1 className="w-full text-center py-3">{item.name}</h1>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default CoffeeList;
