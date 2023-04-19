import React from "react";
import Image from "next/image";
import SectionHeader from "../moleculs/SectionHeader";
import Link from "next/link";

function Branches() {
  return (
    <section className="hidden lg:block">
      <div className="container mx-auto my-10">
        <SectionHeader title={"Салбарууд"} buttonTitle={"Бүх салбарууд"} />
        <div className="grid grid-cols-4  aspect-[3/1] ">
          <div className="col-span-3 h-full bg-red-200 w-full relative">
            <Image
              src="https://picsum.photos/600/300?random=11"
              alt="123"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-1 w-full h-full flex flex-col  justify-between py-10 px-10 bg-[#393636] text-white">
            <h1 className="text-[32px]">ROC Drink Bar</h1>
            <p>
              The newly opened ROC Drink Bar branch adds a new color to the
              coffee bars of Mongolia and serves special drinks catered for both
              day and night.
            </p>
            <div>
              <h1 className="font-bold">Location:</h1>
              <p>
                60th Building (South of State Department Store), 40th Myangat
                street, Sukhbaatar District, Ulaanbaatar, Mongolia
              </p>
            </div>
            <div>
              <h1 className="font-bold">Hours:</h1>
              <p>07:00 - 00:00</p>
            </div>
            <div className="flex flex-wrap w-full justify-between">
              <Link
                className="px-5 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={"/"}
              >
                Menu
              </Link>
              <Link
                className="px-5 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={"/"}
              >
                View on Google Map
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4  aspect-[3/1] ">
          <div className="col-span-1 w-full h-full flex flex-col  justify-between py-10 px-10 bg-[#393636] text-white">
            <h1 className="text-[32px]">ROC Drink Bar</h1>
            <p>
              The newly opened ROC Drink Bar branch adds a new color to the
              coffee bars of Mongolia and serves special drinks catered for both
              day and night.
            </p>
            <div>
              <h1 className="font-bold">Location:</h1>
              <p>
                60th Building (South of State Department Store), 40th Myangat
                street, Sukhbaatar District, Ulaanbaatar, Mongolia
              </p>
            </div>
            <div>
              <h1 className="font-bold">Hours:</h1>
              <p>07:00 - 00:00</p>
            </div>
            <div className="flex flex-wrap w-full justify-between">
              <Link
                className="px-5 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={"/"}
              >
                Menu
              </Link>
              <Link
                className="px-5 py-2 my-1 bg-[#ECEBE7] text-[#080505] text-sm"
                href={"/"}
              >
                View on Google Map
              </Link>
            </div>
          </div>
          <div className="col-span-3 w-full h-full relative">
            <Image
              src="https://picsum.photos/900/300?random=11"
              alt="123"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Branches;
