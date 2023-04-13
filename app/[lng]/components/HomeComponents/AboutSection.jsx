import React from "react";
import Image from "next/image";
import SectionHeader from "../moleculs/SectionHeader";

function AboutSection() {
  return (
    <section>
      <div className="container mx-auto ">
        <SectionHeader title={"Root of Cofffea"} />
        <div className="grid grid-cols-2 gap-4 aspect-square ">
          <div className="col-span-2 h-full bg-red-200 w-full relative">
            <Image
              src="https://picsum.photos/2500/1300?random=11"
              alt="123"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-1 w-full h-full relative">
            <Image
              src="https://picsum.photos/1920/1300?random=11"
              alt="123"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="col-span-1 w-full h-full relative">
            <Image
              src="https://picsum.photos/1900/1300?random=11"
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

export default AboutSection;
