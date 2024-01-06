"use client";

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CSS/style.css";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

export default function ItemSlider({ IsPopular, IsRecommended, items }) {
  const { Items } = items;

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={15}
        freeMode={true}
        // pagination={{
        //   clickable: true,
        // }}
        breakpoints={{
          576: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 5,
          },
        }}
        navigation={true}
        modules={[FreeMode, Pagination, Navigation]}
        className="mySwiper"
      >
        {IsPopular
          ? Items?.map(
              (item) =>
                item.IsPopular && (
                  <div key={item.Id}>
                    <SwiperSlide>
                    <div className="cursor-pointer h-[240px]">
                      <Image style={{height: '210px'}} className='rounded-md' src={item.ImageUrl} width='200' height='210' alt={item.Name} />
                      {/* <img
                        src={item.ImageUrl}
                        className="w-full h-[210px] rounded-lg"
                        alt=""
                      /> */}
                      <h5 className="text-center">{item.Name}</h5>
                    </div>
                  </SwiperSlide>
                  </div>
                )
            )
          : IsRecommended
          ? Items?.map(
              (item) =>
                item.IsRecommended && (
                  <div key={item.Id}>
                    <SwiperSlide>
                    <div className="cursor-pointer h-[240px]">
                      <Image style={{height: '210px'}} className='rounded-md' src={item.ImageUrl} width='200' height='210' alt={item.Name} />
                      {/* <img
                        src={item.ImageUrl}
                        className="w-full h-[210px] rounded-lg"
                        alt=""
                      /> */}
                      <h5 className="text-center">{item.Name}</h5>
                    </div>
                  </SwiperSlide>
                  </div>
                )
            )
          : ""}
      </Swiper>
    </>
  );
}
