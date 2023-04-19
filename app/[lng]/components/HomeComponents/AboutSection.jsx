import React from "react";
import Image from "next/image";
import SectionHeader from "../moleculs/SectionHeader";
import image1 from "@/public/assets/image1.png";
import image2 from "@/public/assets/image2.png";
import image3 from "@/public/assets/image3.png";
import Link from "next/link";

function AboutSection() {
  return (
    <section>
      <div className="container mx-auto px-5 my-10">
        <SectionHeader title={"Root of Coffea"} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 aspect-[1/3] lg:aspect-square ">
          <div className="grid-span-1 lg:col-span-2 aspect-square lg:aspect-auto relative ">
            <Image src={image1} alt="123" fill style={{ objectFit: "cover" }} />
            <div className="absolute bottom-0 left-0 h-100">
              <h1 className="">Our story</h1>
              <p>True to each and every bean since 2016.</p>
              <Link className="" href="/"></Link>
            </div>
          </div>

          <div className="col-span-1 aspect-square lg:aspect-auto relative">
            <Image src={image2} alt="123" fill style={{ objectFit: "cover" }} />
            <div className="absolute bottom-0 left-0 h-100">
              <h1>head</h1>
              <p>True to each and every bean since 2016.</p>
              <Link className="" href="/"></Link>
            </div>
          </div>
          <div className="col-span-1 aspect-square lg:aspect-auto relative">
            <Image src={image3} alt="123" fill style={{ objectFit: "cover" }} />
            <div className="absolute bottom-0 left-0 h-100">
              <h1>head</h1>
              <p>True to each and every bean since 2016.</p>
              <Link className="" href="/"></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
