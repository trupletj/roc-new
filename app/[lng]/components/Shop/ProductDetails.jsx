"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { useTranslation } from "@/app/i18n/client";

function ProductDetail({ params, ItemData, TypeData }) {
  const { lng } = params;
  const { items, isLoading } = ItemData;
  const { types } = TypeData;
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(false);
  const [productType, setProductType] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const { openBasket, setOpenBasket, apiDomain, card, setCard } =
    useContext(GlobalContext);

  useEffect(() => {
    if (types?.record[0]) {
      setProductType(types?.record[0]);
    }
    items?.record.map((item) => {
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
    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-6 text-gray-900">
      <div className="lg:col-span-3 flex">
        <div>
          {!isLoading &&
            items?.record?.map((product) => {
              return (
                <Image
                  src={apiDomain + product.image_path}
                  alt={product.name || "123"}
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className="self-center mx-auto"
                ></Image>
              );
            })}
        </div>
        <div className="">
          {productType?.main_image && (
            <Image
              src={apiDomain + productType.main_image}
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
        <div className="flex flex-row items-start text-sm text-gray-500  ">
          <span>Шоп</span>
          <span className="mx-1">-</span>
          <span>{productType?.category?.name}</span>
          <span className="mx-1">-</span>

          <span className="text-[#F0B450]">{productType?.name} </span>
        </div>
        <div className="space-y-2 flex flex-col items-start">
          <p className="text-2xl font-normal mt-2">
            {lng == "en" ? productType.name : productType.mn_name}
          </p>
          {!selectedItem && (
            <p className="text-[#F0B450] text-xl font-normal">
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
          <p className="text-3xl text-[#6B6969] font-normal mt-2">
            Chocolate, Nuts, Fruits
          </p>
          <p className="pb-5">
            {lng === "en"
              ? productType.description
              : productType.mn_description}
          </p>
          <h1 className="font-normal">Кофены төрөл</h1>
          <div className="grid grid-cols-2">
            <label
              htmlFor={1}
              className={`col-span-1 cursor-pointer select-none mr-3 px-9  border border-[#080505] bg-[${
                true ? "#080505" : "#ffffff"
              }] p-2 text-center  ${true ? "text-white" : "text-black "} `}
            >
              Үрлэн кофе
            </label>
            <label
              htmlFor={1}
              className={`col-span-1 cursor-pointer select-none mr-3 px-9 border border-[#080505]  bg-[${
                false ? "#080505" : "#ffffff"
              }] p-2 text-center  ${false ? "text-white" : "text-black "} `}
            >
              Нунтаг - Эспрессо
            </label>
          </div>
          <h1 className="font-normal">Хэмжээ</h1>
          <div className="grid-cols-2 grid gap-1">
            {items?.record.map((item) => {
              return (
                <label
                  htmlFor={1}
                  className={`col-span-1 cursor-pointer select-none px-9 border border-[#080505] bg-[${
                    selectedItem && selectedItem.id == item.id
                      ? "#080505"
                      : "FFFFFF"
                  }] p-2 text-center  ${
                    selectedItem && selectedItem.id == item.id
                      ? "text-white"
                      : "text-black "
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
            <div className="grid grid-cols-5 gap-5 w-full pt-10">
              <div className="flex items-center justify-between ">
                <span className="flex items-center justify-center">
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
                <span className="flex items-center justify-center text-xl font-normal">
                  {(card[selectedItem.id]?.quantity || 1) <= 9
                    ? "0" + (card[selectedItem.id]?.quantity || 1)
                    : card[selectedItem.id]?.quantity || 1}
                </span>
                <span className="flex items-center justify-center">
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
              <button className="bg-[#F0B450] text-white py-1 px-3 col-span-2">
                {t("buy_now")}
              </button>
              <button
                className="bg-[#080505] text-white py-2 px-3 col-span-2"
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
