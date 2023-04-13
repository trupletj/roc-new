"use client";
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/swiper.min.css";

const images = [
  { src: "https://picsum.photos/5600/3200?random=1", key: 1 },
  { src: "https://picsum.photos/1920/1080?random=2", key: 2 },
  { src: "https://picsum.photos/800/300?random=3", key: 3 },
  { src: "https://picsum.photos/950/900?random=4", key: 4 },
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
      className="max-w-[1920px] w-full aspect-[2/1] flex items-center justify-center mx-auto"
    >
      {images.map((image) => (
        <SwiperSlide key={image.key}>
          <Image
            fill
            src={image.src}
            alt="123"
            style={{ objectFit: "cover" }}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Carousel;
