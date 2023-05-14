"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import story1 from "@/public/assets/about/story_1.png";
import story2 from "@/public/assets/about/story_2.png";
import story3 from "@/public/assets/about/story_3.png";
import roast1 from "@/public/assets/about/roast_1.png";
import roast2 from "@/public/assets/about/roast_2.png";
import roast3 from "@/public/assets/about/roast_3.png";
import story4 from "@/public/assets/about/story_4.png";
import weare from "@/public/assets/about/weare.jpg";
import man from "@/public/assets/about/man.jpg";
import { useTranslation } from "@/app/i18n/client";
import { useSearchParams } from "next/navigation";

function AboutPage({ lng, slug }) {
  const slug_helper = {
    "our-history": 0,
    "who-we-are": 1,
    "how-we-roast": 2,
    "partners-and-sourcing": 3,
  };
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const [cindex, setCindex] = useState(0);
  const [openIndex, setOpenIndex] = useState(
    slug_helper[slug] !== undefined ? slug_helper[slug] : 0
  );

  console.log(openIndex);
  const isBrowser = () => typeof window !== "undefined";
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <ul>
        <li className="border-b border-b-gray-900 last:border-none">
          <div>
            <div
              onClick={() => {
                setOpenIndex((val) => {
                  return val != 0 ? 0 : -1;
                });
                scrollToTop();
              }}
              className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
            >
              <h1>{t("our_story")}</h1>
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
                  <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-5">
                    <div className=" w-full md:w-5/12">
                      <h1 className="text-6xl font-medium mb-5 text-center md:text-left">
                        True to each and every bean since 2016
                      </h1>
                      <p className="text-2xl font-semibold text-center md:text-left">
                        Six years ago we started as a local coffee shop and
                        coffee roaster with a Probatone 5. Our mission is to
                        build a cozy coffee community. We focused on practicing
                        and implementing our coffee knowledge and bettering our
                        roasting practices and brewing protocol. We understood
                        that we had the responsibility to cultivate the local
                        coffee community. Within that time, our community had
                        expanded along with demand.
                      </p>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="story"
                        src={story1}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mb-10">
                <div className="flex flex-col">
                  <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-5">
                    <div className=" w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="story"
                        src={story2}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="w-full md:w-5/12  text-2xl font-semibold">
                      <p className="mb-5 ">
                        After three years of firm focus, we had created and
                        developed our second branch in 2019. The vision remained
                        the same, and with the help of our previous experience,
                        our expertise in roastery broadened with the upgrade
                        into Probatone 12.
                      </p>
                      <p className="mb-5">
                        Today, we have five branches and a coffee roasting
                        factory, equipped with the Probat G75. As we stand
                        today, we are capable of producing 800-1000 kgs of
                        coffee per day.
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
                          src={story3}
                          fill
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <h1 className="text-center mt-2">
                        {'"Our first photoshoot."'} photo by @blguneehiroshi
                      </h1>
                    </div>
                    <div className="w-1/2 ">
                      <div className="relative aspect-square w-full">
                        <Image
                          alt="sds"
                          src={story4}
                          fill
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <h1 className="text-center mt-2">
                        {'"Brewed coffee equipment."'} photo by @blguneehiroshi
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
              onClick={() => {
                setOpenIndex((val) => {
                  return val != 1 ? 1 : -1;
                });
                scrollToTop();
              }}
              className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
            >
              <h1>{t("who_we_are")}</h1>
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
                  <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-5">
                    <div className="w-full md:w-5/12">
                      <h1 className="text-6xl font-medium mb-5">
                        As the leading specialty coffee producing company in
                        Mongolia, our key members are baristas and roasters.
                      </h1>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="sds"
                        src={weare}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-16">
                    <p className="text-xl font-semibold">
                      Within the service industry there is the added demand of
                      food, and we are able to cater to these demands that our
                      customers place upon us as, today, we are manned with 70+
                      staff. With our manpower, we proudly serve a thousand cups
                      of coffee on a daily basis in our branches. Our packaged
                      coffee sales reach 100,000 cups per day across other
                      coffee shops and home brewers across the country. Our
                      community of customers and coffee enthusiasts alike are
                      the representation of who we are and how we came here
                    </p>
                  </div>
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
                  return val != 2 ? 2 : -1;
                });
                scrollToTop();
              }}
              className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
            >
              <h1>HOW WE ROAST</h1>
              <div>
                {openIndex !== 2 ? (
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
                  <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-5">
                    <div className="w-full md:w-5/12">
                      <h1 className="text-6xl font-medium mb-5">
                        We only use world-class professional coffee equipment
                      </h1>
                      <p className="text-xl font-semibold">
                        Our roastery is exclusively equipped with Probat
                        roasting machineries. Our espresso bars use La Marzocco
                        and Bezzera espresso machines, along with Mazzer and
                        Mahlkonig grinders. We use Hario for brewed coffee. Our
                        baristas go through rigorous training and work by the
                        way of ranks to cultivate the necessary skills. Serving
                        baristas are the highest skilled and uphold the utmost
                        discipline.
                      </p>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="roast"
                        src={roast1}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        style={{ objectFit: "cover" }}
                      />
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
                          alt="roast"
                          src={roast2}
                          fill
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {/* <h1 className="text-center mt-2">
                      Our roasting factory, Probat G75 © Lumos Studia
                    </h1> */}
                    </div>
                    <div className="w-1/2 ">
                      <div className="relative aspect-square w-full">
                        <Image
                          alt="roast"
                          src={roast3}
                          fill
                          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {/* <h1 className="text-center mt-2">
                      ROC Team, 2022 © Baljma Ganbold
                    </h1> */}
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
              onClick={() => {
                setOpenIndex((val) => {
                  return val != 3 ? 3 : -1;
                });
                scrollToTop();
              }}
              className="flex justify-between text-2xl py-5 items-center uppercase cursor-pointer"
            >
              <h1>PARTNERS & SOURCING</h1>
              <div>
                {openIndex !== 3 ? (
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
                  <div className="flex flex-col md:flex-row items-center md:space-x-16 space-y-5">
                    <div className="w-full md:w-5/12">
                      <h1 className="text-6xl font-medium mb-5">
                        Bean roadmap to Mongolia
                      </h1>
                      <p className="text-xl font-semibold">
                        As a country that doesn’t produce green coffee beans,
                        maintaining our fresh “crop-to-cup” principle comes with
                        a certain set of challenges. To overcome these
                        challenges, we have a long lasting partnership with List
                        + Biesler. We have chosen the best single origin crops
                        from around the world, which List + Biesler collects in
                        Hamburg. From there, our beans come via Poland - Belarus
                        - Russia – then to Mongolia. We also set regulations
                        with Mongolian customs affiliated to green beans. Thanks
                        to this rigorous and enriching pathway, we can
                        confidently say we can stay true to each and every bean
                      </p>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="man"
                        src={man}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default AboutPage;
