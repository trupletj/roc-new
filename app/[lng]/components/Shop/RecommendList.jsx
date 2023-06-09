"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";
import SectionHeader from "../moleculs/SectionHeader";
import ShopBagOnly from "../atoms/icons/ShopBagOnly";
import {
  apiDomain,
  useItems,
  mediaDomain,
  fetcherForSwrGet,
} from "@/app/hooks/useItems";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import useSWR from "swr";
import { useTranslation } from "@/app/i18n/client";
import ArrowR from "../atoms/ArrowR";
import Loading from "../atoms/Loading";

function RecommendList({ lng }) {
  // const { items, isLoading, isError } = useItems({
  //   url: `${apiDomain}client/good/top?parent=2`,
  // });

  const { data, error } = useSWR(
    `${apiDomain}client/good/top?parent=2`,
    fetcherForSwrGet
  );

  const { t } = useTranslation();
  return (
    <div className="container mx-auto my-10 px-5 border-t-[#080505]">
      {!data && <Loading color={"black"} />}
      {data?.record && (
        <>
          <div className="flex flex-row justify-between mb-11 w-full">
            <h1 className="lg:text-3xl font-light  text-base ">
              {t("recomend_products")}
            </h1>

            <Link
              href={`/${lng}/shop`}
              className="py-3 px-6 bg-[#ECEBE7] lg:flex flex-row w-fit items-center  hidden md:block"
            >
              <span className="mr-1 text-3.5 text-[#080505] ">
                {t("read_more")}
              </span>
              <ArrowR />
            </Link>
          </div>
          <div className="w-full overflow-x-auto pb-2">
            <ul className="grid grid-cols-3 gap-8 min-w-[640px] ">
              {data?.record.map((item) => (
                <li
                  className="w-full relativ "
                  key={"coffe-list" + item.good.id}
                >
                  <div className="w-full aspect-square relative group">
                    <Image
                      src={
                        mediaDomain +
                        (item.main_image
                          ? item.main_image
                          : item.good.image_path)
                      }
                      alt={item.good.name || "About Picture"}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                      <Link
                        href={`/${lng}/shop/product/${item.good.type_id}`}
                        className="absolute right-0 top-0 p-2 bg-black  group-hover:block hidden text-white"
                      >
                        <ShopBagOnly />
                      </Link>
                      <Link
                        href={`/${lng}/shop/product/${item.good.type_id}`}
                        className="absolute w-full left-0 bottom-0 p-2 bg-black  group-hover:block hidden text-center text-white"
                      >
                        {t("view")}
                      </Link>
                    </div>
                  </div>
                  <h1 className="w-full text-center py-3 ">
                    <Link href={`/${lng}/shop/product/${item.good.type_id}`}>
                      {item.name}
                    </Link>
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
          </Link>
        </>
      )}
    </div>
  );
}

export default RecommendList;
