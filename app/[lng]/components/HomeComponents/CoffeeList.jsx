import Image from "next/image";
import React from "react";
import coffee1 from "@/public/assets/coffee1.png";
import coffee2 from "@/public/assets/coffee2.png";
import SectionHeader from "../moleculs/SectionHeader";

const data = [
  {
    name: "Brazil Mogania",
    img: coffee2,
  },
  {
    name: "Ethiopia Sudamo",
    img: coffee1,
  },
  {
    name: "Colombia Exselso",
    img: coffee1,
  },
  {
    name: "Guatemala Antigua",
    img: coffee1,
  },
];

function CoffeeList() {
  return (
    <div className="container mx-auto my-10 px-5">
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
              <h1 className="w-full text-center py-3">{item.name}</h1>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CoffeeList;
