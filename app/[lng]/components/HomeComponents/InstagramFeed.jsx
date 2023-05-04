import Image from "next/image";
import insta1 from "@/public/assets/insta1.png";
import insta2 from "@/public/assets/insta2.png";
import insta3 from "@/public/assets/insta3.png";
import insta4 from "@/public/assets/insta4.png";
import React from "react";

const data = [
  {
    name: "Brazil 1",
    img: insta1,
  },
  {
    name: "Brazil 2",
    img: insta2,
  },
  {
    name: "Brazil 3",
    img: insta3,
  },
  {
    name: "Brazil 4",
    img: insta4,
  },
];

function InstagramFeed() {
  return (
    <div className="container mx-auto mb-10 hidden lg:block my-10 text-white">
      <h1 className="w-full text-center lg:text-3xl font-light text-base mb-5">
        #ROC_CAFFEINE_BAR
      </h1>

      <div>
        <ul className="grid grid-cols-4 gap-4">
          {data.map((item) => (
            <li key={`insta-feed-item-${item.name}`}>
              <div className="w-full aspect-square relative">
                <Image
                  src={item.img}
                  alt={"About Picture"}
                  fill
                  sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InstagramFeed;
