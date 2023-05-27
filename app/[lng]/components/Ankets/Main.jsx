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
          <h1 className="text-6xl font-medium ">WORK AT ROC</h1>
          <p>
            One likes what one likes, therefore it is important for us to find
            out what our customers prefer. We try our best to roast our coffee
            according to our clients taste.
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
            For your application for listed jobs to be considered, you must
            include the job title in the subject line of your email. Due to the
            volume of applications, please do make sure you go into detail as to
            why working for ROC will make a difference, not just to your life,
            but ours too.
          </p>
          <p>
            Were an ambitious company with an incredible team of people so we
            need to know if you are going to join us, what you are going to
            bring to the team, more than just
          </p>
          <div>
            If youre interested in a role at ROC, please email your CV and
            covering letter to
            <Link href="/" className="text-[#6B6969]">
              info@roc.mn
            </Link>
          </div>
        </div>
      </div>
      {availablePositions?.length > 0 && <WorkAtRock />}
      <div className="container flex flex-col items-center justify-center py-10 pb-20">
        <p className="my-4">Одоогоор нээлттэй ажлын байр зарлагдаагүй байна</p>
        <Link
          href={`/${lng}/anket/newanket`}
          className="w-full max-w-[400px] border py-2 text-center text-white bg-[#080505]"
        >
          Юу ч гэсэн анкет илгээе
        </Link>
      </div>
      <ClientRegister />
    </>
  );
}

export default Main;
