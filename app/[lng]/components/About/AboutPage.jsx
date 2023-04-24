"use client";
import Image from "next/image";
import React, { useState } from "react";
import image1 from "@/public/assets/hero1.png";

function AboutPage() {
  const [cindex, setCindex] = useState(0);
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <ul>
      <li className="border-b border-b-gray-900 last:border-none">
        <div>
          <div
            onClick={() => setOpenIndex(0)}
            className="flex justify-between text-2xl py-5 items-center uppercase"
          >
            <h1>History</h1>
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
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">
                      True to each and every bean since 2016
                    </h1>
                    <p className="text-xl">
                      Six years ago we started as a local coffee shop and coffee
                      roaster with a Probatone 5. Our mission is to build a cozy
                      coffee community. We focused on practicing and
                      implementing our coffee knowledge and bettering our
                      roasting practices and brewing protocol. We understood
                      that we had the responsibility to cultivate the local
                      coffee community. Within that time, our community had
                      expanded along with demand.
                    </p>
                  </div>
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-10">
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
                  <div className="w-5/12  text-xl">
                    <p className="mb-5 ">
                      After three years of firm focus, we had created and
                      developed our second branch in 2019. The vision remained
                      the same, and with the help of our previous experience,
                      our expertise in roastery broadened with the upgrade into
                      Probatone 12.
                    </p>
                    <p className="mb-5">
                      Today, we have five branches and a coffee roasting
                      factory, equipped with the Probat G75. As we stand today,
                      we are capable of producing 800-1000 kgs of coffee per
                      day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-5">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-5">
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      Our roasting factory, Probat G75 © Lumos Studia
                    </h1>
                  </div>
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      ROC Team, 2022 © Baljma Ganbold
                    </h1>
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
            <h1>TEAM</h1>
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
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">
                      True to each and every bean since 2016
                    </h1>
                    <p className="text-xl">
                      Six years ago we started as a local coffee shop and coffee
                      roaster with a Probatone 5. Our mission is to build a cozy
                      coffee community. We focused on practicing and
                      implementing our coffee knowledge and bettering our
                      roasting practices and brewing protocol. We understood
                      that we had the responsibility to cultivate the local
                      coffee community. Within that time, our community had
                      expanded along with demand.
                    </p>
                  </div>
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-10">
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
                  <div className="w-5/12  text-xl">
                    <p className="mb-5 ">
                      After three years of firm focus, we had created and
                      developed our second branch in 2019. The vision remained
                      the same, and with the help of our previous experience,
                      our expertise in roastery broadened with the upgrade into
                      Probatone 12.
                    </p>
                    <p className="mb-5">
                      Today, we have five branches and a coffee roasting
                      factory, equipped with the Probat G75. As we stand today,
                      we are capable of producing 800-1000 kgs of coffee per
                      day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-5">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-5">
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      Our roasting factory, Probat G75 © Lumos Studia
                    </h1>
                  </div>
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      ROC Team, 2022 © Baljma Ganbold
                    </h1>
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
            <h1>HOW WE ROAST</h1>
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
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">
                      True to each and every bean since 2016
                    </h1>
                    <p className="text-xl">
                      Six years ago we started as a local coffee shop and coffee
                      roaster with a Probatone 5. Our mission is to build a cozy
                      coffee community. We focused on practicing and
                      implementing our coffee knowledge and bettering our
                      roasting practices and brewing protocol. We understood
                      that we had the responsibility to cultivate the local
                      coffee community. Within that time, our community had
                      expanded along with demand.
                    </p>
                  </div>
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-10">
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
                  <div className="w-5/12  text-xl">
                    <p className="mb-5 ">
                      After three years of firm focus, we had created and
                      developed our second branch in 2019. The vision remained
                      the same, and with the help of our previous experience,
                      our expertise in roastery broadened with the upgrade into
                      Probatone 12.
                    </p>
                    <p className="mb-5">
                      Today, we have five branches and a coffee roasting
                      factory, equipped with the Probat G75. As we stand today,
                      we are capable of producing 800-1000 kgs of coffee per
                      day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-5">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-5">
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      Our roasting factory, Probat G75 © Lumos Studia
                    </h1>
                  </div>
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      ROC Team, 2022 © Baljma Ganbold
                    </h1>
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
            <h1>PARTNERS & SOURCING</h1>
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
                  <div className="w-5/12">
                    <h1 className="text-6xl font-normal mb-5">
                      True to each and every bean since 2016
                    </h1>
                    <p className="text-xl">
                      Six years ago we started as a local coffee shop and coffee
                      roaster with a Probatone 5. Our mission is to build a cozy
                      coffee community. We focused on practicing and
                      implementing our coffee knowledge and bettering our
                      roasting practices and brewing protocol. We understood
                      that we had the responsibility to cultivate the local
                      coffee community. Within that time, our community had
                      expanded along with demand.
                    </p>
                  </div>
                  <div className="w-7/12 relative aspect-square">
                    <Image
                      alt="sds"
                      src={image1}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-10">
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
                  <div className="w-5/12  text-xl">
                    <p className="mb-5 ">
                      After three years of firm focus, we had created and
                      developed our second branch in 2019. The vision remained
                      the same, and with the help of our previous experience,
                      our expertise in roastery broadened with the upgrade into
                      Probatone 12.
                    </p>
                    <p className="mb-5">
                      Today, we have five branches and a coffee roasting
                      factory, equipped with the Probat G75. As we stand today,
                      we are capable of producing 800-1000 kgs of coffee per
                      day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-5">
              <div className="flex flex-col">
                <div className="flex flex-row items-center space-x-5">
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      Our roasting factory, Probat G75 © Lumos Studia
                    </h1>
                  </div>
                  <div className="w-1/2 ">
                    <div className="relative aspect-square w-full">
                      <Image
                        alt="sds"
                        src={image1}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <h1 className="text-center mt-2">
                      ROC Team, 2022 © Baljma Ganbold
                    </h1>
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

export default AboutPage;
