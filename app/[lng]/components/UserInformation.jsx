"use client";
import React, { useState, useEffect, useContext } from "react";
import { useTranslation } from "@/app/i18n/client";
import GlobalContext from "@/app/[lng]/context/GlobalContext";
import { useRouter } from "next/navigation";

function UserInformation({ lng }) {
  const [openIndex, setOpenIndex] = useState(-1);
  const { t } = useTranslation(lng, "client");
  const { user, openLogin, setOpenLogin } = useContext(GlobalContext);
  const router = useRouter();
  return (
    <ul className="font-light">
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => {
              setOpenIndex((val) => {
                return val != 0 ? 0 : -1;
              });
            }}
            className="flex justify-between text-lg py-5 items-center cursor-pointer"
          >
            <h1>{t("delivery_addresses")}</h1>
            <div>
              {openIndex !== 0 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_144"
                    data-name="Path 144"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(-4597.47 68.53)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_143"
                    data-name="Path 143"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(4614.531 -58.939) rotate(180)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className={openIndex === 0 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                {user?.addresses?.length > 0 ? (
                  <ul className="mb-5 space-y-2">
                    {user?.addresses?.map((address, index) => (
                      <li
                        className="py-3 bg-[#E5E5E5] cursor-pointer flex flex-col space-y-2 px-4 text-sm"
                        key={`address-${index}`}
                        onClick={() => {
                          setOpenLogin(false);
                          router.push(
                            `/${lng}/profile/my-addresses?id=${address.id}`
                          );
                        }}
                      >
                        <span className="font-normal">{address.name}</span>
                        <span>{address.address_information}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-xs mb-5">{t("empty_address_text")}</p>
                )}
                <a
                  href={`/${lng}/profile/my-addresses?id=0`}
                  className="flex space-between w-full justify-center  border  bg-black  px-6 py-2 text-base font-light text-white"
                >
                  <span className="w-1/6"></span>
                  <p className="w-4/6 text-center ">{t("new")}</p>
                  <span className="w-1/6 flex items-center justify-end">
                    <svg
                      id="Group_815"
                      data-name="Group 815"
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 18 18"
                    >
                      <path
                        id="Path_148"
                        data-name="Path 148"
                        d="M0,0V18"
                        transform="translate(18 9) rotate(90)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                      <path
                        id="Path_149"
                        data-name="Path 149"
                        d="M0,0V18"
                        transform="translate(9 18) rotate(180)"
                        fill="none"
                        stroke="#fff"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => {
              setOpenIndex((val) => {
                return val != 1 ? 1 : -1;
              });
            }}
            className="flex justify-between text-lg py-5 items-center  cursor-pointer"
          >
            <h1>{t("my_orders")}</h1>
            <div>
              {openIndex !== 1 ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_144"
                    data-name="Path 144"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(-4597.47 68.53)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17.061"
                  height="9.591"
                  viewBox="0 0 17.061 9.591"
                >
                  <path
                    id="Path_143"
                    data-name="Path 143"
                    d="M4598-68l8,8,4.333-4.333L4614-68"
                    transform="translate(4614.531 -58.939) rotate(180)"
                    fill="none"
                    stroke="#080505"
                    strokeWidth="1.5"
                  />
                </svg>
              )}
            </div>
          </div>
          <div className={openIndex === 1 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row items-center md:space-x-16 ">
                  <ul className="w-full space-y-4">
                    <li className="flex flex-row w-full justify-between space-y-2 space-x-4">
                      <div className="h-20 w-16 flex-shrink-0 overflow-hidden ">
                        <img
                          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="w-full flex flex-col space-y-1">
                        <h1 className="font-normal text-lg">R885497629</h1>
                        <p className="text-sm">2023/04/22 00:17</p>
                        <p className="text-sm font-normal text-[#6B6969]">
                          Захиалга амжилттай хүргэгдсэн
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <span>Дүн:</span>
                        <span className="font-normal text-lg">45,000₮</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <button
                  className="w-full bg-black text-white py-2 my-4"
                  onClick={() => {
                    router.push(`/${lng}/profile/order-histories`);
                    setOpenLogin(false);
                  }}
                >
                  Бүгдийг харах
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default UserInformation;
