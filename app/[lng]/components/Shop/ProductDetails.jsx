"use client";
import React, { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { useTranslation } from "@/app/i18n/client";
import DetailsAdditional from "./DetailsAdditional";

import "swiper/swiper.min.css";
import RecommendList from "./RecommendList";

function ProductDetail({ params, ItemData, TypeData, GrinderData }) {
  const { lng } = params;
  const { items, isLoading } = ItemData;
  const { grinders, grinderLoading } = GrinderData;
  const { types } = TypeData;
  const { t } = useTranslation();

  const [selectedItem, setSelectedItem] = useState(false);
  const [selectedGrind, setSelectedGrind] = useState(false);
  const [productType, setProductType] = useState(false);
  const [itemsCount, setItemsCount] = useState({});
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const { setOpenBasket, mediaDomain, setCard, setAlerts } =
    useContext(GlobalContext);

  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    null;
  }

  useEffect(() => {
    if (
      !grinderLoading &&
      !selectedGrind &&
      grinders.record[0] &&
      productType?.category_id == 2
    ) {
      setSelectedGrind((val) => {
        return {
          id: grinders.record[0].id,
          name: grinders.record[0].name,
          mn_name: grinders.record[0].mn_name,
        };
      });
    }
  }, [grinderLoading]);
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
    <>
      <div className="grid grid-cols-1 gap-8  lg:grid-cols-6 text-gray-900 ">
        {!isLoading && !grinderLoading && (
          <>
            <div className="lg:col-span-3 md:grid grid-rows-3 md:gap-x-2 md:grid-rows-1 md:grid-cols-8 md:aspect-[8/7] hidden">
              <div className="md:col-span-7 hidden md:block row-span-5 aspect-square relative  md:order-2 md:mb-0 mb-2">
                {!isLoading && selectedItem?.image_path && (
                  <Image
                    src={mediaDomain + selectedItem.image_path}
                    alt={selectedItem.name || "About Picture"}
                    fill
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                    quality={100}
                    style={{ objectFit: "cover" }}
                    className="self-center mx-auto"
                  />
                )}
              </div>
              <div className="col-span-1 row-span-3 hidden md:block md:overflow-y-auto overflow-x-scroll  md:overflow-x-hidden md:order-1  md:space-y-2 space-x-2 md:space-x-0 md:px-2 pb-2 ">
                {!isLoading &&
                  items?.record?.map((product, i) => {
                    return (
                      <div
                        className="relative aspect-square w-full"
                        key={"additional-image-changer-item-" + i}
                      >
                        <Image
                          src={mediaDomain + product.image_path}
                          alt={product.name || "About Picture"}
                          fill
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                          quality={100}
                          style={{ objectFit: "cover" }}
                          className={`cursor-pointer border  ${
                            selectedItem.id === product.id
                              ? "border-[#F0B450]"
                              : "border-gray-500"
                          }`}
                          onClick={() => {
                            setSelectedItem((val) => {
                              return product;
                            });
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
            </div>
            <div className="w-full md:hidden">
              {!isLoading && !grinderLoading && (
                <Swiper
                  slidesPerView={1}
                  className="w-full relative aspect-square"
                >
                  {items?.record?.map((product, key) => (
                    <SwiperSlide key={key}>
                      <Image
                        src={mediaDomain + product.image_path}
                        alt={product.name || "About Picture"}
                        quality={100}
                        fill
                        style={{ objectFit: "cover" }}
                        className={`cursor-pointer border  ${
                          selectedItem.id === product.id
                            ? "border-[#F0B450]"
                            : "border-gray-500"
                        }`}
                      />

                      {/* <img
                    src='/assets/home/slide_1.png'
                    alt="About Picture"
                    priority
                  /> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
            </div>
            <div className="lg:col-span-3">
              <div className="flex flex-row items-start text-sm text-gray-500">
                <span>{t("shop")}</span>
                <span className="mx-1">-</span>
                <span>{productType?.category?.name}</span>
                <span className="mx-1">-</span>

                <span className="text-[#F0B450]">{productType?.name} </span>
              </div>
              <div className="space-y-2 flex flex-col items-start">
                <p className="text-3xl font-medium mt-2">
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
                    ? productType.description || " "
                    : productType.mn_description || " "}
                </p>
                {productType?.category_id == 2 && (
                  <>
                    <h1 className="font-normal uppercase">
                      {t("grinder_type")}
                    </h1>

                    {!grinderLoading && (
                      <div
                        className={` col-span-4  grid  grid-cols-7  w-full gap-2`}
                      >
                        {grinders?.record
                          .sort((a, b) => a.level - b.level)
                          .map((grinder) => (
                            <div
                              key={`grinder-key-${grinder.id}`}
                              htmlFor={1}
                              onClick={() => {
                                setSelectedGrind((val) => {
                                  return {
                                    id: grinder.id,
                                    name: grinder.name,
                                    mn_name: grinder.mn_name,
                                  };
                                });
                              }}
                              className={`col-span-1 cursor-pointer select-none grid grid-cols-2 grid-rows-2  ${
                                selectedGrind.id === grinder.id
                                  ? "border-[#F0B450]"
                                  : "border-black"
                              }   bg-white text-center  text-[${
                                selectedGrind.id === grinder.id
                                  ? "#F0B450"
                                  : "black"
                              }]`}
                              style={{ background: "#eceae6" }}
                            >
                              <div className="col-span-2 row-span-2  p-2 ">
                                <div className=" aspect-square w-full relative">
                                  {/* <Image
                                    src={mediaDomain + grinder.image_path}
                                    alt={grinder.name || "About Picture"}
                                    fill
                                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              quality={100}
                                    style={{ objectFit: "contain" }}
                                  /> */}

                                  <Image
                                    src={mediaDomain + grinder.image_path}
                                    alt={grinder.name || "About Picture"}
                                    fill
                                    style={{ objectFit: "contain" }}
                                  />
                                </div>
                              </div>
                              <p className="col-span-2 row-span-1 flex items-center justify-center text-xs uppercase font-medium ">
                                {lng === "en" ? grinder.name : grinder.mn_name}
                              </p>
                            </div>
                          ))}
                      </div>
                    )}
                    {/* <div className="grid  grid-cols-4 ">
                     
                    </div> */}
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
                <h1 className="font-normal uppercase">{t("size")}</h1>
                <div
                  className={`grid grid-cols-${
                    items?.record.length > 12 ? 12 : items?.record.length
                  }  gap-1 w-full`}
                >
                  {items?.record.map((item, i) => {
                    return (
                      <label
                        key={"detail-item-size-item-" + i}
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
                  <div className="grid grid-cols-4 gap-5 w-full pt-10">
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
                      className="bg-[#080505] text-white py-2 px-3 col-span-3 border min-h-[25px]"
                      onClick={() => {
                        if (productType?.category_id == 2 && !selectedGrind) {
                          setAlerts((val) => {
                            return [
                              ...val,
                              {
                                title: t("Warning"),
                                description: t("choose_grinder_type"),
                              },
                            ];
                          });
                          return false;
                        }
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

                          if (!helper[selectedItem.id]?.grinders) {
                            helper[selectedItem.id].grinders = {};
                          }

                          if (
                            !helper[selectedItem.id].grinders[selectedGrind.id]
                          ) {
                            helper[selectedItem.id].grinders[selectedGrind.id] =
                              {
                                ...selectedGrind,
                                quantity: itemsCount[selectedItem.id],
                              };
                          } else {
                            helper[selectedItem.id].grinders[
                              selectedGrind.id
                            ].quantity += itemsCount[selectedItem.id];
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

            <div
              className={`lg:col-span-3 order-last md:order-none relative ${
                productType.session_image ? "aspect-square" : ""
              }`}
            >
              {productType.session_image && (
                <>
                  <picture>
                    <img src={mediaDomain + productType.session_image} alt="" />
                  </picture>
                  {/* <Image
                  src={mediaDomain + productType.session_image}
                  alt={selectedItem.name || "About Picture"}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 60vw,
              60vw"
                  style={{ objectFit: "contain" }}
                  quality={100}
                /> */}
                </>
              )}
            </div>
            <div className="lg:col-span-3">
              {productType && (
                <DetailsAdditional lng={lng} productType={productType} />
              )}
            </div>
          </>
        )}
      </div>
      <RecommendList lng={lng} />
    </>
  );
}

export default ProductDetail;
