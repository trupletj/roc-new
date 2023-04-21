import Image from "next/image";
import Link from "next/link";
import React from "react";
import coffee1 from "@/public/assets/coffee1.png";
import coffee2 from "@/public/assets/coffee2.png";
import SectionHeader from "../moleculs/SectionHeader";
import ShopBag from "../atoms/icons/ShopBag";

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

function CoffeeList({ lng }) {
  return (
    <div className="container mx-auto my-10 px-5">
      <SectionHeader title="Кофе - ROC Blends" buttonTitle="Бүгдийг үзэх" />
      <div className="w-full overflow-x-auto pb-2">
        <ul className="grid grid-cols-4 gap-4 min-w-[640px] text-white">
          {data.map((item) => (
            <li className="w-full relativ " key={item.name}>
              <div className="w-full aspect-square relative group">
                <Image src={item.img} fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition duration-300">
                  <Link
                    href={`/${lng}/shop`}
                    className="absolute right-0 top-0 p-2 bg-black  group-hover:block hidden"
                  >
                    <ShopBag />
                  </Link>
                  <Link
                    href={`/${lng}/shop`}
                    className="absolute w-full left-0 bottom-0 p-2 bg-black  group-hover:block hidden text-center text-white"
                  >
                    Дэлгэрэнгүй
                  </Link>
                </div>
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
