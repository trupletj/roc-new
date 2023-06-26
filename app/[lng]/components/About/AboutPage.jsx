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
    "how-we-brew": 2,
    "partners-and-sourcing": 3,
  };
  const searchParams = useSearchParams();
  const { t } = useTranslation();
  const [cindex, setCindex] = useState(0);
  const [openIndex, setOpenIndex] = useState(
    slug_helper[slug] !== undefined ? slug_helper[slug] : 0
  );

  const isBrowser = () => typeof window !== "undefined";
  const scrollToTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <ul className="font-light text-sm">
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
              <h1 className="">{t("our_story")}</h1>
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
                      <h1 className="md:text-3xl text-2xl mb-5 text-left">
                        {lng == "en" && (
                          <>True to each and every bean since 2016</>
                        )}
                        {lng == "mn" && <>Бидний тухай</>}
                      </h1>
                      <p className="md:text-2xl  text-left">
                        {lng == "en" && (
                          <>
                            Seven years ago we started as a local coffee shop
                            and coffee roaster with a Probatone 5. Our mission
                            is to build a cozy coffee community. We focused on
                            practicing and implementing our coffee knowledge and
                            bettering our roasting practices and brewing
                            protocol. We understood that we had the
                            responsibility to cultivate the local coffee
                            community. Within that time, our community had
                            expanded along with demand.
                          </>
                        )}
                        {lng == "mn" && (
                          <>
                            Долоон жилийн өмнө бид анхны салбар аа Probatone-5
                            ростерийн машинтайгаар эхэлж байлаа Бидний зорилго
                            нь тав тухтай кофе сонирхогчдын бүлгийг бүрдүүлэх
                            байсан бөгөөд түлхүү кофе хийх арга барил болон кофе
                            хуурах дээр туршлага хуримтлуулах түүнийгээ туршиж
                            хэрэгжүүлэх дээр илүү анхаарч байсан юм. Кофе
                            сонирхогч хүмүүсийн мэдлэгийг дээшлүүлж хамтдаа
                            хөгжих нь бидний гол хариуцлага гэдгийг тухайн үед
                            чухлаар авч үздэг байсны үр дүнд тэдгээр хүмүүсийн
                            тоо нэмэгдэж дагаад ROC н эрэлт ч ихэссэн юм.
                          </>
                        )}
                      </p>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        loading="lazy"
                        alt="story"
                        src={story1}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                        quality={100}
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
              50vw"
                        quality={100}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                    <div className="w-full md:w-5/12  md:text-2xl ">
                      <p className="mb-5 ">
                        {lng == "en" && (
                          <>
                            After three years of firm focus, we had created and
                            developed our second branch in 2019. The vision
                            remained the same, and with the help of our previous
                            experience, our expertise in roastery broadened with
                            the upgrade into Probatone 12. Today, we have five
                            branches and a coffee roasting factory, equipped
                            with the Probat G75. As we stand today, we are
                            capable of producing 800-1000 kgs of coffee per day.
                          </>
                        )}
                        {lng == "mn" && (
                          <>
                            3 жил кофе болон кофе сонирхогчид дээрээ төвлөрч
                            ажилласны дараа бид дараачийн салбараа 2019 онд
                            нээсэн юм. Компанийн алсын хараа хэвээрээ байсан
                            бөгөөд өмнөх хуримтлуулсан туршлагын тусламжтайгаар
                            ростери гээ Probatone-12 Болгон сайжруулсан юм.
                            Өдгөө бид 5 салбар, Probat G-75 гэх хамгийн орчин
                            үеийн өдөрт 800кг-1000кг хүртэл кофе хуурах хүчин
                            чадалтай үйл ажиллагаагаа явуулж байна.{" "}
                          </>
                        )}
                      </p>
                      {/* <p className="mb-5">
                        Today, we have five branches and a coffee roasting
                        factory, equipped with the Probat G75. As we stand
                        today, we are capable of producing 800-1000 kgs of
                        coffee per day.
                      </p> */}
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
              50vw"
                          quality={100}
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
              50vw"
                          quality={100}
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
                      <h1 className="md:text-3xl text-2xl mb-5">
                        {lng == "en" && (
                          <>
                            As the leading specialty coffee producing company in
                            Mongolia, our key members are baristas and roasters.
                          </>
                        )}
                        {lng == "mn" && (
                          <>
                            Монголын тэргүүлэгч кофе үйлдвэрлэгчийн хувьд бидний
                            гол хүмүүс бол бариста болон ростер юм.
                          </>
                        )}
                      </h1>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="sds"
                        src={weare}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                        quality={100}
                        style={{ objectFit: "contain" }}
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-16">
                    <p className="md:text-xl  ">
                      {lng == "en" && (
                        <>
                          Within the service industry there is the added demand
                          of food, and we are able to cater to these demands
                          that our customers place upon us as, today, we are
                          manned with 70+ staff. With our manpower, we proudly
                          serve a thousand cups of coffee on a daily basis in
                          our branches. Our packaged coffee sales reach 100,000
                          cups per day across other coffee shops and home
                          brewers across the country. Our community of customers
                          and coffee enthusiasts alike are the representation of
                          who we are and how we came here
                        </>
                      )}
                      {lng == "mn" && (
                        <>
                          {" "}
                          Үйлчилгээний салбарт ажиллаж байгааг дагаад бид
                          үйлчилгээндээ хоол нэмэх шаардлагатай болсон юм.
                          Өнөөдрийн байдлаар бид 80 хүнтэй хамт болон
                          хэрэглэгчдийнхээ хэрэгцээ шаардлагад нийцүүлж ажиллаж
                          байна. Бид өдөр тутам дунджаар 5 салбараар дамжуулан
                          1000-1200 аяга кофе хэрэглэгчдэд хүргэж байгаадаа
                          сэтгэл хангалуун байдаг. Үүний зэрэгцээ савласан
                          кофены борлуулалт дээр суурилан тооцвол ROC ын үр
                          өдөрт Монголын өнцөг булан бүр дэх кофе шопууд болон
                          кофе хэрэглэгчдэд 100.000 аяга эцсийн бүтээгдэхүүн
                          болж хүрч байна. Манай үйлчлүүлэгчид болон кофе
                          сонирхогч, хэрэглэгчид биднийг хэн гэдгийг хэрхэн энэ
                          түвшинд ирснийг төлөөлдөг.{" "}
                        </>
                      )}
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
              <h1>
                {lng == "en" && <>HOW WE BREW</>}
                {lng == "mn" && <>Бид хэрхэн кофе хийдэг вэ?</>}
              </h1>
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
                      <h1 className="md:text-3xl text-2xl mb-5">
                        {lng == "en" && (
                          <>
                            We only use world-class professional coffee
                            equipment
                          </>
                        )}
                        {lng == "mn" && (
                          <>
                            ROC зөвхөн дэлхийн жишигт нийцсэн, мэргэжлийн
                            хамгийн шилдэг тоног төхөөрөмж ашигладаг.
                          </>
                        )}
                      </h1>
                      <p className="md:text-xl ">
                        {lng == "en" && (
                          <>
                            Our roastery is exclusively equipped with Probat
                            roasting machineries. Our espresso bars use La
                            Marzocco and Bezzera espresso machines, along with
                            Mazzer and Mahlkonig grinders. We use Hario for
                            brewed coffee. Our baristas go through rigorous
                            training and work by the way of ranks to cultivate
                            the necessary skills. Serving baristas are the
                            highest skilled and uphold the utmost discipline.
                          </>
                        )}
                        {lng == "mn" && (
                          <>
                            Манай кофены үйлдвэр нь Германы Probat ын тоног
                            төхөөрөмжөөр бүрэн тоноглогдсон бол салбарууд нь La
                            Marzocco, Bezzera эспрессо машин, Mazzer, Mahlkonig
                            бутлагчийг ашигладаг. Гар аргийн кофендоо Hario
                            брэндийн хэрэгслүүдийг ашигладаг бөгөөд манай
                            бариста нар маш нарийн шалгуураар сургагдан
                            бэлтгэгдэж зэрэглэл ахих замаар шат ахин баристад
                            байх шаардлагатай ур чадвар мэдлэгийг олж авдаг.
                            Бариста болон хэрэглэгчдэд үйлчлэх нь хамгийн өндөр
                            ур чадвартай байх ёстой гэж бид үздэг бөгөөд дээд
                            зэргийн сахилга батыг чанд баримталдаг.{" "}
                          </>
                        )}
                      </p>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="roast"
                        src={roast1}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                        style={{ objectFit: "cover" }}
                        quality={100}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full mb-5">
                <div className="flex flex-col">
                  <div className="flex flex-row items-center space-x-5">
                    <div className="w-1/2 ">
                      <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                          alt="roast"
                          src={roast2}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                          style={{ objectFit: "cover" }}
                          quality={100}
                        />
                      </div>
                      {/* <h1 className="text-center mt-2">
                      Our roasting factory, Probat G75 © Lumos Studia
                    </h1> */}
                    </div>
                    <div className="w-1/2 ">
                      <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                          alt="roast"
                          src={roast3}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                          style={{ objectFit: "cover" }}
                          quality={100}
                          priority
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
              <h1>
                {lng == "en" && <>PARTNERS AND SOURCING</>}
                {lng == "mn" && <>Хамтын ажиллагаа ба Түүхий эд</>}
              </h1>
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
                      <h1 className="md:text-3xl text-2xl mb-5">
                        {lng == "en" && <>Bean roadmap to Mongolia</>}
                        {lng == "mn" && <></>}
                      </h1>
                      <p className="md:text-xl  ">
                        {lng == "en" && (
                          <>
                            As a country that doesn’t produce green coffee
                            beans, maintaining our fresh “crop-to-cup” principle
                            comes with a certain set of challenges. To overcome
                            these challenges, we have a long lasting partnership
                            with List + Biesler. We have chosen the best single
                            origin crops from around the world, which List +
                            Biesler collects in Hamburg. From there, our beans
                            come via Poland - Belarus - Russia – then to
                            Mongolia. We also set regulations with Mongolian
                            customs affiliated to green beans. Thanks to this
                            rigorous and enriching pathway, we can confidently
                            say we can stay true to each and every bean
                          </>
                        )}
                        {lng == "mn" && (
                          <>
                            {" "}
                            Кофе ургадаггүй бүсэд оршдог улсын хувьд
                            Тариалангаас аяга/ Ургацаас аяга хүртэлх кофег
                            шинээр нь байлгах зарчмыг баримтлах нь тодорхой
                            бэрхшээлүүдийг дагуулдаг. Эдгээр сорилтуудыг даван
                            тулхын тулд бид List+Biesler тэй урт хугацааны
                            хамтын ажиллагаатай ажиллаж ирсэн юм. Дэлхийн олон
                            орноос бидний сонгосон Single Origin үрийг Герман
                            улсын Гамбург дэх List+ BIesler нэгтгэн бидэн рүү
                            нийлүүлдэг. Ингэхдээ Польш- Беларус- Орос оор дамжин
                            Монголд ирдэг. Мөн ногоон үрийн талаар Монголын
                            гаалийн байгууллуудад танил болсоор тогтоосон дүрэм
                            журмуудыг хамтран тодорхойлж чадсан юм. Энэхүү урт
                            бөгөөд ээдрээтэй замыг туулж эцсийн бүтээгдэхүүнээ
                            гаргадгийн хувьд бид өөрсдийнхөө кофены ширхэг
                            бүрийг итгэлтэйгээр хамгийн сайн нь гэж хэлж чаддаг.
                          </>
                        )}
                      </p>
                    </div>
                    <div className="w-full md:w-7/12 relative aspect-square">
                      <Image
                        alt="man"
                        src={man}
                        fill
                        sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
                        quality={100}
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
