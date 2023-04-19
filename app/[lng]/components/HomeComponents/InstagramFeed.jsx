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

function InstagramFeed() {
  return (
    <div className="container mx-auto mb-10 hidden lg:block my-10">
      <h1 className="w-full text-center lg:text-3xl font-light text-base mb-5">
        #ROC_CAFFEINE_BAR
      </h1>
      <div>
        <ul className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <li key={item.name}>
              <div className="w-full aspect-square relative">
                <Image src={item.img} fill style={{ objectFit: "cover" }} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InstagramFeed;
