"use client";
import React from "react";
import ClientRegister from "../ClientRegister";
import WorkAtRock from "./WorkAtRock";
import Image from "next/image";
import anket1 from "@/public/assets/anket1.png";
import Link from "next/link";

function Main({ lng }) {
  const [availablePositions, setAvailablePositions] = React.useState([]);
  return (
    <>
      <div className="container py-10">
        <div className="max-w-[900px] w-full mx-auto space-y-6 text-xl">
          <h1 className="text-3xl font-medium ">
            {lng == "en" && <>Welcome to ROC!</>}
            {lng == "mn" && <>ROC-д тавтай морил!</>}
          </h1>
          <p>
            {lng == "en" && (
              <>
                We have exciting job opportunities available in our coffee shops
                and restaurants.
              </>
            )}
            {lng == "mn" && (
              <>
                Кофе болон хоол үйлдвэрлэлийн салбарт ажиллах боломжийг санал
                болгож байна.
              </>
            )}
          </p>
          <div className="w-full aspect-video relative">
            <Image
              alt="sds"
              fill
              src={anket1}
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              quality={100}
            />
          </div>
          <p>
            {lng == "en" && (
              <>
                {`We're not just looking for baristas; we need people with various
                skills and talents to join our team. Whether you're a talented
                barista, skilled chef, friendly server, or creative marketer, we
                value what you bring to the table. If you're passionate,
                motivated, and ready to be part of a dynamic team, we want to
                hear from you. Join us in creating amazing experiences for our
                customers and shaping the future of ROC. Apply now and start
                your rewarding career with us!`}
              </>
            )}
            {lng == "mn" && (
              <>
                {`Дан ганц бариста биш өөрийн ур чадвараа ашиглах хэн бүхэнд
                нээлттэй. Та туршлагатай бариста, тогооч, найрсаг харилцаатай,
                бүтээлч багийн гишүүний аль ч бай бид үнэлэн ажиллах болно.
                Хэрэв та хүсэл тэмүүлэлтэй, урам зоригтой, эрч хүчтэй багийн нэг
                хэсэг болхийг хүсч байгаа бол бидэнд мэдээллээ явуулна уу.`}
              </>
            )}
          </p>
          <p></p>
        </div>
      </div>
      {availablePositions?.length > 0 && <WorkAtRock />}
      <div className="container flex flex-col items-center justify-center py-10 pb-20">
        <Link
          href={`/${lng}/anket/newanket`}
          className="w-full max-w-[400px] border py-2 text-center text-white bg-[#080505]"
        >
          {lng == "en" && <>Apply now</>}
          {lng == "mn" && <>Анкет илгээх</>}
        </Link>
      </div>
      <ClientRegister />
    </>
  );
}

export default Main;
