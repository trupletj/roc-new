import Image from "next/image";
import React from "react";
import product1 from "@/public/assets/product1.png";
import product2 from "@/public/assets/product2.png";
import product3 from "@/public/assets/product3.png";
import product4 from "@/public/assets/product4.png";
import SectionHeader from "../moleculs/SectionHeader";

const data = [
  {
    name: "Brazil 1",
    img: product1,
  },
  {
    name: "Brazil 2",
    img: product2,
  },
  {
    name: "Brazil 3",
    img: product3,
  },
  {
    name: "Brazil 4",
    img: product4,
  },
];

function ShopSection() {
  return (
    <div className="container mx-auto my-10 px-5 ">
      <SectionHeader
        title="Tанд санал болгох бүтээгдэхүүн"
        buttonTitle="Дэлгүүрээр Зочлох"
      />
      <div className="w-full overflow-x-scroll pb-2">
        <ul className="grid grid-cols-4 gap-4 min-w-[640px]">
          {data.map((item) => (
            <li className="w-full" key={item.name}>
              <div className="w-full aspect-square relative">
                <Image src={item.img} fill style={{ objectFit: "cover" }} />
              </div>
              <h1>Header bar</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShopSection;
