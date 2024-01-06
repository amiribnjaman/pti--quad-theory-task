"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CSS/style.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";

export default function ItemSlider({ IsPopular, IsRecommended, items }) {
  const { Items } = items;
  console.log(IsPopular, IsRecommended, Items);

  //   const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={15}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {IsPopular
          ? Items.map(
              (item) =>
                item.IsPopular && (
                  <SwiperSlide>
                    <div className="cursor-pointer">
                      <img
                        src={item.ImageUrl}
                        className="w-full h-[200px] rounded-lg"
                        alt=""
                      />
                      <h5 className="text-center">{item.Name}</h5>
                    </div>
                  </SwiperSlide>
                )
            )
          : IsRecommended
          ? Items.map(
              (item) =>
                item.IsRecommended && (
                  <SwiperSlide>
                    <div className="cursor-pointer">
                      <img
                        src={item.ImageUrl}
                        className="w-full h-[200px] rounded-lg"
                        alt=""
                      />
                      <h5 className="text-center">{item.Name}</h5>
                    </div>
                  </SwiperSlide>
                )
            )
          : ""}
      </Swiper>
    </>
  );
}
