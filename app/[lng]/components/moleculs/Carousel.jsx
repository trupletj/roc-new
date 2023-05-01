"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import hero1 from "@/public/assets/home/slide.png";

import "swiper/swiper.min.css";

const images = [{ src: hero1, key: 1 }];

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
      className="max-w-[1920px] max-h-[80vh] w-full aspect-square lg:aspect-[2/1] flex items-center justify-center mx-auto mb-10"
    >
      {images.map((image) => (
        <SwiperSlide key={image.key}>
          <Image
            fill
            src={image.src}
            alt="About Picture"
            style={{ objectFit: "cover" }}
            priority
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
