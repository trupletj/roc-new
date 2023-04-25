import Link from "next/link";
import React from "react";
import Image from "next/image";

//images
import branches1 from "@/public/assets/branches1.png";
import branches2 from "@/public/assets/branches2.png";
import branches3 from "@/public/assets/branches3.png";
import branches4 from "@/public/assets/branches4.png";
import branches5 from "@/public/assets/branches5.png";
import branches6 from "@/public/assets/branches6.png";

function BranchesMainPage() {
  return (
    <div className="container flex flex-col items-center py-10 pb-20 space-y-10">
      <h1 className="text-5xl font-medium ">ROC CAFFEINE BAR</h1>
      <ul className="grid grid-cols-1 md:grid-cols-6 max-w-[1024px] mx-auto gap-4 text-xs w-full text-center">
        <li className="bg-[#F2F2F2] p-2">
          <Link href="/">THE ROASTERY</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href="/">ROC BUDDHA VISTA</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href="/">ROC UN</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href="/">ROC FOUNTAIN</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href="/">ROC MPM</Link>
        </li>
        <li className="bg-[#F2F2F2] p-2">
          <Link href="/">ROC CHOIJIN</Link>
        </li>
      </ul>
      <section className="w-full text-lg">
        <div className="grid grid-cols-1 aspect-square md:aspect-[3/1] md:grid-cols-3 gap-4 bg-red-100">
          <div className="col-span-1 relative">
            <div className="relative h-96 w-96">
              <Image src={branches1} fill style={{ objectFit: "cover" }} />
            </div>
            <p>sfsdf</p>
          </div>
          {/* <div className="md:col-span-2 col-span-1">
            <div className="relative h-full">
              <Image src={branches2} fill style={{ objectFit: "cover" }} />
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default BranchesMainPage;
