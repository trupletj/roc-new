import React from "react";
import Image from "next/image";
import SectionHeader from "../moleculs/SectionHeader";

function Branches() {
  return (
    <section>
      <div className="container mx-auto ">
        <SectionHeader title={"title"} buttonTitle={"titil"} />
        <div className="grid grid-cols-3 gap-4 aspect-[5/2] ">
          <div className="col-span-2 h-full bg-red-200 w-full relative">
            <Image
              src="https://picsum.photos/600/300?random=11"
              alt="123"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-1 w-full h-full relative">
            <Image
              src="https://picsum.photos/900/300?random=11"
              alt="123"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 aspect-[5/2] ">
          <div className="col-span-1 h-full bg-red-200 w-full relative">
            <Image
              src="https://picsum.photos/600/300?random=11"
              alt="123"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-2 w-full h-full relative">
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
