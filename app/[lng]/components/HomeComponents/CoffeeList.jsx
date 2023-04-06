import Image from "next/image";
import React from "react";

const data = [
  {
    name: "Brazil mogonia",
    img: "https://picsum.photos/900/300?random=11",
  },
  {
    name: "Brazil mogonia",
    img: "https://picsum.photos/700/700?random=12",
  },
  {
    name: "Brazil mogonia",
    img: "https://picsum.photos/300/900?random=13",
  },
  {
    name: "Brazil mogonia",
    img: "https://picsum.photos/500/600?random=14",
  },
];

function CoffeeList() {
  return (
    <div className="container mx-auto ">
      <div className="flex flex-row justify-between ">
        <h1>Coffee Roc Blends</h1> <button>Buh coffee uzeh</button>
      </div>
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

export default CoffeeList;
