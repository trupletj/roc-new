"use client";
import Image from "next/image";
import React, { useState } from "react";

import anket1 from "@/public/assets/anket1.png";
import Link from "next/link";

function WorkAtRock() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="container py-10">
        <div className="grid grid-cols-3 gap-4 ">
          <div className="flex flex-col justify-between space-y-4 col-span-1 my-4">
            <div className="w-full relative aspect-video">
              <Image
                alt="sds"
                fill
                style={{ objectFit: "cover" }}
                src={anket1}
              />
            </div>
            <span className="text-sm text-[#6B6969]"> April 23, 2024</span>
            <h1 className="text-2xl font-normal">Live Barista</h1>
            <p className="">
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
                alt="sds"
                fill
                style={{ objectFit: "cover" }}
                src={anket1}
              />
            </div>
            <span className="text-sm text-[#6B6969]"> April 23, 2024</span>
            <h1 className="text-2xl font-normal">Live Barista</h1>
            <p className="">
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
                alt="sds"
                fill
                style={{ objectFit: "cover" }}
                src={anket1}
              />
            </div>
            <span className="text-sm text-[#6B6969]"> April 23, 2024</span>
            <h1 className="text-2xl font-normal">Live Barista</h1>
            <p className="">
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
                alt="sds"
                fill
                style={{ objectFit: "cover" }}
                src={anket1}
              />
            </div>
            <span className="text-sm text-[#6B6969]"> April 23, 2024</span>
            <h1 className="text-2xl font-normal">Live Barista</h1>
            <p className="">
              We are always delighted to hear from inspiring people with a
              passion for speciality coffee who wish to join our team.
            </p>
            <Link href="/" className="text-[#080505] underline">
              Read more
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default WorkAtRock;
