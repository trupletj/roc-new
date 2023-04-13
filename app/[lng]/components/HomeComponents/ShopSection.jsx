import Image from "next/image";
import React from "react";
import SectionHeader from "../moleculs/SectionHeader";

const data = [
  {
    name: "Brazil 1",
    img: "https://picsum.photos/900/300?random=11",
  },
  {
    name: "Brazil 2",
    img: "https://picsum.photos/700/700?random=12",
  },
  {
    name: "Brazil 3",
    img: "https://picsum.photos/300/900?random=13",
  },
  {
    name: "Brazil 4",
    img: "https://picsum.photos/500/600?random=14",
  },
];

function ShopSection() {
  return (
    <div className="container mx-auto ">
      <SectionHeader
        title="Tанд санал болгох бүтээгдэхүүн"
        buttonTitle="Дэлгүүрээр Зочлох"
      />
      <div>
        <ul className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <li key={item.name}>
              <div className="w-full aspect-square overflow-hidden bg-white flex items-center justify-center">
                <Image src={item.img} width={330} height={330} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ShopSection;
