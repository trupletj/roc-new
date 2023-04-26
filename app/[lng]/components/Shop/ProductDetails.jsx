"use client";
import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { useTranslation } from "@/app/i18n/client";

function ProductDetail({ params, ItemData, TypeData, GrinderData }) {
  const { lng } = params;
  const { items, isLoading } = ItemData;
  const { grinders, grinderLoading } = GrinderData;
  const { types } = TypeData;
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(false);
  const [selectedGrind, setSelectedGrind] = useState(3);
  const [productType, setProductType] = useState(false);
  const [itemsCount, setItemsCount] = useState({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const { openBasket, setOpenBasket, mediaDomain, card, setCard } =
    useContext(GlobalContext);

  useEffect(() => {
    if (types?.record[0]) {
      setProductType(types?.record[0]);
    }
    items?.record.map((item) => {
      if (!selectedItem) {
        setSelectedItem(item);
      }
      setItemsCount((val) => {
        let helper = { ...val };
        helper[item.id] = 1;
        return helper;
      });
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
      <div className="lg:col-span-3 grid grid-rows-4 md:grid-cols-4  aspect-video">
        <div className="row-span-1 md:col-span-1 flex md:flex-col pr-3  overflow-auto">
          {!isLoading &&
            items?.record?.map((product, i) => {
              return (
                <Image
                  key={i}
                  src={mediaDomain + product.image_path}
                  alt={product.name || "123"}
                  width="100"
                  height="100"
                  style={{ objectFit: "cover" }}
                  className={`self-center mx-auto cursor-pointer border my-1 ${
                    selectedItem.id === product.id
                      ? "border-[#F0B450]"
                      : "border-gray-500"
                  }`}
                  onClick={() => {
                    setSelectedItem((val) => {
                      return product;
                    });
                  }}
                ></Image>
              );
            })}
        </div>
        <div className="col-span-3">
          {selectedItem?.image_path && (
            <Image
              src={mediaDomain + selectedItem.image_path}
              alt={selectedItem.name || "123"}
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
            {lng === "en" ? productType.name : productType.mn_name}
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
            <p className="text-[#F0B450] text-2xl font-normal">
              {selectedItem?.price.toLocaleString("en-US", {
                style: "decimal",
              })}
              {"₮"}
            </p>
          )}
          {/* <p className="text-3xl text-[#6B6969] font-normal mt-2">
            Chocolate, Nuts, Fruits
          </p> */}
          <p className="pb-5">
            {lng === "en"
              ? productType.description || "-"
              : productType.mn_description || "-"}
          </p>
          {productType?.category_id == 2 && (
            <>
              <h1 className="font-normal">{t("grinder_type")}</h1>

              <div className="grid grid-cols-2"></div>

              {!grinderLoading && (
                <div className={`grid grid-cols-4 gap-2`}>
                  {grinders?.record
                    .sort((a, b) => a.level - b.level)
                    .map((grinder) => (
                      <div
                        key={`grinder-key-${grinder.id}`}
                        htmlFor={1}
                        onClick={() => {
                          setSelectedGrind((val) => {
                            return grinder.id;
                          });
                        }}
                        className={`col-span-1 cursor-pointer select-none mr-3  border ${
                          selectedGrind === grinder.id
                            ? "border-[#F0B450]"
                            : "border-black"
                        }   bg-white  p-2 text-center  text-[${
                          selectedGrind === grinder.id ? "#F0B450" : "black"
                        }]`}
                      >
                        <div className="flex flex-col justify-between">
                          <Image
                            src={mediaDomain + grinder.image_path}
                            alt={grinder.name || "123"}
                            width="70"
                            height="70"
                            style={{ objectFit: "contain" }}
                            className="self-center mx-auto"
                          />
                          <p className="align-bottom">
                            {lng === "en" ? grinder.name : grinder.mn_name}
                          </p>
                        </div>
                      </div>
                    ))}
                </div>
              )}
            </>
          )}
          {/* <label
              htmlFor={1}
              className={`col-span-1 cursor-pointer select-none mr-3 px-9 border border-[#080505]  bg-[${
                false ? "#080505" : "#ffffff"
              }] p-2 text-center  ${false ? "text-white" : "text-black "} `}
            >
              Нунтаг - Эспрессо
            </label> */}
          <h1 className="font-normal">Хэмжээ</h1>
          <div className="grid-cols-4 grid gap-1">
            {items?.record.map((item, i) => {
              return (
                <label
                  key={i}
                  htmlFor={1}
                  className={`col-span-1 cursor-pointer select-none px-9 border border-[#080505] bg-[${
                    selectedItem && selectedItem.id === item.id
                      ? "#080505"
                      : "FFFFFF"
                  }] p-2 text-center  ${
                    selectedItem && selectedItem.id === item.id
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
                <span
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    setItemsCount((val) => {
                      let helper = { ...val };
                      helper[selectedItem.id] += -1;
                      if (helper[selectedItem.id] < 1) {
                        helper[selectedItem.id] = 1;
                      }
                      return helper;
                    });
                  }}
                >
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
                  {/* {(card[selectedItem.id]?.quantity || 1) <= 9
                    ? "0" + (card[selectedItem.id]?.quantity || 1)
                    : card[selectedItem.id]?.quantity || 1} */}
                  {itemsCount[selectedItem.id]}
                </span>
                <span
                  className="flex items-center justify-center cursor-pointer min-h-[25px]"
                  onClick={() => {
                    setItemsCount((val) => {
                      let helper = { ...val };
                      helper[selectedItem.id] += 1;
                      return helper;
                    });
                  }}
                >
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
              {/* <button className="bg-[#F0B450] text-white py-1 px-3 col-span-2">
                {t("buy_now")}
              </button> */}
              <button
                className="bg-[#080505] text-white py-2 px-3 col-span-2 min-h-[25px]"
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
                      helper[selectedItem.id].quantity +=
                        itemsCount[selectedItem.id];
                    }
                    if (helper[selectedItem.id].quantity === NaN) {
                      helper[selectedItem.id].quantity = 1;
                    }
                    localStorage.setItem("card", JSON.stringify(helper));
                    return helper;
                  });

                  setOpenBasket(true);
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
