"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "@/public/assets/hero1.png";
function Services() {
  const [cindex, setCindex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <ul className="mb-10 pb-20">
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => setOpenIndex(0)}
            className="flex justify-between text-2xl py-5 items-center uppercase"
          >
            <h1>ROASTING TO A TASTE</h1>
            <span>
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
            </span>
          </div>
          <div className={openIndex === 0 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-16">
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">Coffee Truck</h1>
                    <p className="text-xl">
                      Our catering and coffee truck service offers a unique and
                      convenient way to enjoy delicious coffee and food at any
                      event. With our coffee truck and experienced baristas, we
                      bring the cafe experience to you, whether it's a corporate
                      event, private party, or outdoor festival. Our menu
                      features a wide variety of specialty coffee drinks made
                      with the freshest, highest-quality beans and ingredients.
                      We also offer a range of delicious food options, from
                      light bites to full meals, to suit any occasion. Our team
                      is dedicated to providing exceptional service and ensuring
                      that every customer has a memorable experience. Book our
                      catering and coffee truck for your next event and treat
                      your guests to the ultimate coffee and food experience.
                    </p>
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
            onClick={() => setOpenIndex(1)}
            className="flex justify-between text-2xl py-5 items-center uppercase"
          >
            <h1>WHOLESALE</h1>
            <span>
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
            </span>
          </div>
          <div className={openIndex === 1 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-16">
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">Coffee Truck</h1>
                    <p className="text-xl">
                      Our catering and coffee truck service offers a unique and
                      convenient way to enjoy delicious coffee and food at any
                      event. With our coffee truck and experienced baristas, we
                      bring the cafe experience to you, whether it's a corporate
                      event, private party, or outdoor festival. Our menu
                      features a wide variety of specialty coffee drinks made
                      with the freshest, highest-quality beans and ingredients.
                      We also offer a range of delicious food options, from
                      light bites to full meals, to suit any occasion. Our team
                      is dedicated to providing exceptional service and ensuring
                      that every customer has a memorable experience. Book our
                      catering and coffee truck for your next event and treat
                      your guests to the ultimate coffee and food experience.
                    </p>
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
            onClick={() => setOpenIndex(2)}
            className="flex justify-between text-2xl py-5 items-center uppercase"
          >
            <h1>CATERING & COFFEE TRUCK</h1>
            <span>
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
            </span>
          </div>
          <div className={openIndex === 2 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-16">
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">Coffee Truck</h1>
                    <p className="text-xl">
                      Our catering and coffee truck service offers a unique and
                      convenient way to enjoy delicious coffee and food at any
                      event. With our coffee truck and experienced baristas, we
                      bring the cafe experience to you, whether it's a corporate
                      event, private party, or outdoor festival. Our menu
                      features a wide variety of specialty coffee drinks made
                      with the freshest, highest-quality beans and ingredients.
                      We also offer a range of delicious food options, from
                      light bites to full meals, to suit any occasion. Our team
                      is dedicated to providing exceptional service and ensuring
                      that every customer has a memorable experience. Book our
                      catering and coffee truck for your next event and treat
                      your guests to the ultimate coffee and food experience.
                    </p>
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
            onClick={() => setOpenIndex(3)}
            className="flex justify-between text-2xl py-5 items-center uppercase"
          >
            <h1>DISTRIBUTION & MAINTANENCE</h1>
            <span>
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
            </span>
          </div>
          <div className={openIndex === 3 ? "block" : "hidden"}>
            <div className="w-full  mb-10">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-16">
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">Coffee Truck</h1>
                    <p className="text-xl">
                      Our catering and coffee truck service offers a unique and
                      convenient way to enjoy delicious coffee and food at any
                      event. With our coffee truck and experienced baristas, we
                      bring the cafe experience to you, whether it's a corporate
                      event, private party, or outdoor festival. Our menu
                      features a wide variety of specialty coffee drinks made
                      with the freshest, highest-quality beans and ingredients.
                      We also offer a range of delicious food options, from
                      light bites to full meals, to suit any occasion. Our team
                      is dedicated to providing exceptional service and ensuring
                      that every customer has a memorable experience. Book our
                      catering and coffee truck for your next event and treat
                      your guests to the ultimate coffee and food experience.
                    </p>
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
