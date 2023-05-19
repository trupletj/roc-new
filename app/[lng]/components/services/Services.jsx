"use client";
import Image from "next/image";
import React, { useState } from "react";
import whole_sale_image from "@/public/assets/services/whole_supply.jpg";
import catering_image from "@/public/assets/services/catering.jpg";
import distributioin_image from "@/public/assets/services/maintainces.jpg";
import roasting_image from "@/public/assets/services/roasting_to_taste.jpg";
import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

function Services({ lng, slug }) {
  const slug_helper = {
    "roasting-to-a-taste": 0,
    "whole-sale": 1,
    "catering-and-coffee-truck": 2,
    "distribution-and-maintenance": 3,
  };
  const searchParams = useSearchParams();
  const [cindex, setCindex] = useState(0);
  const [openIndex, setOpenIndex] = useState(
    slug_helper[slug] !== undefined ? slug_helper[slug.toLowerCase()] : 0
  );
  const { t: service_catering } = useTranslation(lng, "service_catering");
  const { t: service_distribution } = useTranslation(
    lng,
    "service_distribution"
  );
  const { t: service_roast } = useTranslation(lng, "service_roast");
  const { t: service_whole_sale } = useTranslation(lng, "service_whole_sale");
  return (
    <ul className="mb-10 pb-20">
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => setOpenIndex((val) => (val == 0 ? -1 : 0))}
            className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
          >
            <h1>{service_roast("name")}</h1>
            <div>
              {openIndex === 0 ? (
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
                <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-10">
                  <div className="w-full md:w-7/12 relative aspect-square">
                    <Image
                      alt="roasting"
                      src={roasting_image}
                      fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 65vw,
              55vw"
                      quality={100}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-full md:w-5/12">
                    <div className="text-xl text-center md:text-left font-semibold">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: service_roast("main_text"),
                        }}
                      ></p>
                    </div>
                    <form className="w-full mt-6 max-w-[560px]">
                      <div className="flex flex-row bg-white items-center  w-full border border-black justify-between">
                        <input
                          className="text-black bg-white border-none px-[20px] outline-0"
                          type="text"
                          placeholder="Email"
                        />
                        <button className="bg-black text-white py-3 px-5">
                          {service_roast("btn_name")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => setOpenIndex((val) => (val == 1 ? -1 : 1))}
            className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
          >
            <h1>{service_whole_sale("name")}</h1>
            <div>
              {openIndex === 1 ? (
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
                <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-10">
                  <div className="w-full md:w-7/12 relative aspect-square">
                    <Image
                      alt="whole sale"
                      src={whole_sale_image}
                      fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 65vw,
              55vw"
                      quality={100}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-full md:w-5/12">
                    <div className="text-xl text-center md:text-left font-semibold">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: service_whole_sale("main_text"),
                        }}
                      ></p>
                    </div>
                    <form className="w-full mt-6 max-w-[560px]">
                      <div className="flex flex-row bg-white items-center  w-full border border-black justify-between">
                        <input
                          className="text-black bg-white border-none px-[20px] outline-0"
                          type="text"
                          placeholder="Email"
                        />
                        <button className="bg-black text-white py-3 px-5">
                          {service_whole_sale("btn_name")}
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => setOpenIndex((val) => (val === 2 ? -1 : 2))}
            className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
          >
            <h1>{service_catering("name")}</h1>
            <div>
              {openIndex === 2 ? (
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
          <div className={openIndex === 2 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-10">
                  <div className="w-full md:w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={catering_image}
                      fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 65vw,
              55vw"
                      quality={100}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-full md:w-5/12">
                    <div className="text-xl text-center md:text-left font-semibold">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: service_catering("main_text"),
                        }}
                      ></p>
                    </div>
                    <div className="flex mt-5 ">
                      <Link
                        className="px-5 py-3 my-1 mx-auto bg-black text-white text-sm uppercase"
                        href="#"
                      >
                        {service_catering("btn_name")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => setOpenIndex((val) => (val === 3 ? -1 : 3))}
            className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
          >
            <h1>{service_distribution("name")}</h1>
            <div>
              {openIndex === 3 ? (
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
          <div className={openIndex === 3 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-10">
                  <div className="w-full md:w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={distributioin_image}
                      fill
                      sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 65vw,
              55vw"
                      quality={100}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-full md:w-5/12">
                    <div className="text-xl text-center md:text-left font-semibold">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: service_distribution("main_text"),
                        }}
                      ></p>
                    </div>

                    <div className="flex mt-5">
                      <Link
                        className="px-8 py-3  mt-3 mx-auto bg-black text-white text-sm uppercase"
                        href={`/${lng}/shop`}
                      >
                        {service_distribution("btn_name")}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  );
}

export default Services;
