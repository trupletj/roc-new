"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import Link from "next/link";
import ShopBag from "../atoms/icons/ShopBag";
import { useTranslation } from "@/app/i18n/client";

function ProductDetail({ params, ItemData, TypeData }) {
  const { lng, good } = params;
  const { items, isLoading, isError } = ItemData;
  const { types, type_loading, type_error } = TypeData;
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(false);
  const [productType, setProductType] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { openBasket, setOpenBasket, api_domain, card, setCard } =
    useContext(GlobalContext);

  useEffect(() => {
    if (types?.record[0]) {
      setProductType(types?.record[0]);
    }
    items.record.map((item) => {
      setMinPrice((val) => {
        if (val === 0 || item.price <= val) {
          return item.price;
        }
        return val;
      });

      setMaxPrice((val) => {
        if (val === 0 || item.price >= val) {
          return item.price;
        }
        return val;
      });
    });
  }, []);
  return (
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6">
      <div className="lg:col-span-3 flex">
        <div>
          {items.record &&
            items.record.map((product) => {
              return (
                <Image
                  src={api_domain + product.image_path}
                  alt={product.name || "123"}
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className="self-center mx-auto"
                ></Image>
              );
            })}
        </div>
        <div>
          {productType?.main_image && (
            <Image
              src={api_domain + productType.main_image}
              alt={productType.name || "123"}
              width="500"
              height="500"
              style={{ objectFit: "cover" }}
              className="self-center mx-auto"
            ></Image>
          )}
        </div>
      </div>

      <div className="lg:col-span-3">
        <div className="flex flex-row  text-gray-500  ">
          <span>Шоп</span>
          <span className="mx-1">-</span>
          <span>{productType?.category?.name}</span>
          <span className="mx-1">-</span>

          <span className="text-[#F0B450]">{productType?.name} </span>
        </div>
        <div className="space-y-2">
          <p>{lng == "en" ? productType.name : productType.mn_name}</p>
          {!selectedItem && (
            <p className="text-[#F0B450]">
              {minPrice?.toLocaleString("en-US", {
                style: "decimal",
              })}
              {"₮"} -{" "}
              {maxPrice?.toLocaleString("en-US", {
                style: "decimal",
              })}
              ₮
            </p>
          )}
          {selectedItem && (
            <p className="text-[#F0B450]">
              {selectedItem?.price.toLocaleString("en-US", {
                style: "decimal",
              })}
              {"₮"}
            </p>
          )}
          <p>
            {lng === "en"
              ? productType.description
              : productType.mn_description}
          </p>
          <div className="flex gap-1">
            {items?.record.map((item) => {
              return (
                <label
                  htmlFor={1}
                  className={`block cursor-pointer select-none  bg-[${
                    selectedItem && selectedItem.id == item.id
                      ? "#F0B450"
                      : "#080505"
                  }] p-2 text-center  ${
                    selectedItem && selectedItem.id == item.id
                      ? "text-black"
                      : "text-white "
                  } `}
                  onClick={() => {
                    setSelectedItem((val) => {
                      return item;
                    });
                  }}
                >
                  {item.size.name}
                </label>
              );
            })}
          </div>

          {selectedItem && (
            <div className="flex gap-1 ">
              <div className="flex items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="1.5"
                    viewBox="0 0 18 1.5"
                  >
                    <path
                      fill="none"
                      stroke="#201d1d"
                      strokeWidth="1.5"
                      d="M18 .75H0"
                      data-name="Path 101"
                    ></path>
                  </svg>
                </span>
                <span className="py-px px-3 mx-1 text-base font-normal">
                  {card[selectedItem.id]?.quantity || 1}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    data-name="Group 444"
                    viewBox="0 0 18 18"
                  >
                    <path
                      fill="none"
                      stroke="#201d1d"
                      strokeWidth="1.5"
                      d="M9 0v18"
                      data-name="Path 100"
                    ></path>
                    <path
                      fill="none"
                      stroke="#201d1d"
                      strokeWidth="1.5"
                      d="M18 9H0"
                      data-name="Path 101"
                    ></path>
                  </svg>
                </span>
              </div>
              <button
                className="bg-[#F0B450] text-white py-1 px-3"
                onClick={() => {
                  setCard((val) => {
                    const localCard = localStorage.getItem("card");
                    let helper = localCard ? JSON.parse(localCard) : val;
                    if (!helper[selectedItem.id])
                      helper[selectedItem.id] = {
                        ...selectedItem,
                        ["quantity"]: 1,
                      };
                    else {
                      helper[selectedItem.id].quantity += 1;
                    }
                    console.log(helper);
                    localStorage.setItem("card", JSON.stringify(helper));
                    return helper;
                  });
                }}
              >
                {t("add_to_cart")}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
