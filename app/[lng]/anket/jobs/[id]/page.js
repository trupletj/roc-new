import Image from "next/image";
import React from "react";

import anket1 from "@/public/assets/anket1.png";
import Link from "next/link";

function WorkAtRock() {
  return (
    <div className="w-full ">
    {/* <div className="w-full bg-white"> */}
      <div className="container py-10">
        <div className="max-w-[900px] w-full mx-auto space-y-6 text-xl">
          <span className="text-sm text-[#6B6969]"> April 23,2023</span>
          <h1 className="text-6xl font-medium ">WORK AT ROC</h1>
          <p>
            One likes what one likes, therefore it is important for us to find
            out what our customers prefer. We try our best to roast our coffee
            according to our clients taste.
          </p>
          <div className="w-full aspect-video relative">
            <Image
              alt="dfsf"
              fill
              src={anket1}
              style={{ objectFit: "cover" }}
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
            bring to the team, more than just do the job.
          </p>
          <div>
            <p>
              If youre interested in a role at ROC, please email your CV and
              covering letter to{" "}
            </p>
            <Link href="/" className="text-[#6B6969]">
              info@roc.mn
            </Link>
          </div>
        </div>
        <div className="max-w-[900px] mx-auto mt-10">
          <h1 className="my-3 text-2xl font-medium">HOW TO APPLY:</h1>
          <div className="gap-4 grid grid-cols-2">
            <Link href="/" className="text-white bg-[#080505] text-center py-2">
              Ажлын байрны дэлгэрэнгүй
            </Link>
            <Link href="/" className="text-white bg-[#080505] text-center py-2">
              Анкет бөглөх
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-5 mt-20">
          <div className="flex flex-col justify-between  col-span-1 ">
            <div className="w-full relative aspect-video">
              <Image
                alt="ss"
                fill
                style={{ objectFit: "cover" }}
                src={anket1}
              />
            </div>
            <span className="text-sm text-[#6B6969]"> April 23, 2024</span>
            <h1 className="text-2xl font-normal">Live: Barista</h1>
            <p>
              We are always delighted to hear from inspiring people with a
              passion for speciality coffee who wish to join our team.
            </p>
            <Link href="/" className="text-[#080505] underline">
              Read more
            </Link>
          </div>
          <div className="flex flex-col justify-between space-y-4 col-span-1">
            <div className="w-full relative aspect-video">
              <Image
                alt="ssd"
                fill
                style={{ objectFit: "cover" }}
                src={anket1}
              />
            </div>
            <span className="text-sm text-[#6B6969]"> April 23, 2024</span>
            <h1 className="text-2xl font-normal">Live: Barista</h1>
            <p>
              We are always delighted to hear from inspiring people with a
              passion for speciality coffee who wish to join our team.
            </p>
            <Link href="/" className="text-[#080505] underline">
              Read more
            </Link>
          </div>
          <div className="flex flex-col justify-between space-y-4 col-span-1">
            <div className="w-full relative aspect-video">
              <Image
                alt="dsfsd"
                fill
                style={{ objectFit: "cover" }}
                src={anket1}
              />
            </div>
            <span className="text-sm text-[#6B6969]"> April 23, 2024</span>
            <h1 className="text-2xl font-normal">Live: Barista</h1>
            <p>
              We are always delighted to hear from inspiring people with a
              passion for speciality coffee who wish to join our team.
            </p>
            <Link href="/" className="text-[#080505] underline">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorkAtRock;
