"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import hero1 from "@/public/assets/home/slide_1.png";
import hero2 from "@/public/assets/home/slide_2.png";

import "swiper/swiper.min.css";

const images = [
  { src: hero1, key: 1 },
  // { src: hero2, key: 2 },
];

function Carousel() {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    null;
  }
  return (
    <Swiper
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="max-w-[1920px] max-h-[80vh] w-full aspect-video lg:aspect-[5/2] flex items-center justify-center mx-auto mb-10 "
    >
      {images.map((image) => (
        <SwiperSlide key={image.key}>
          <Image
            src={image.src}
            alt="About Picture"
            style={{ objectFit: "contain" }}
            priority
            sizes="(max-width: 768px) 110vw,
              (max-width: 1200px) 110vw,
              110vw"
            quality={100}
          />
          {/* <img
            src='/assets/home/slide_1.png'
            alt="About Picture"
            priority
          /> */}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
