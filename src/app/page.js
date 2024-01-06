'use client';

import Image from "next/image";
import bannerImg from "@/Assets/Image1.png";
import getAllItems from "@/utils/getAllItems";
import ItemSlider from "@/components/ItemSlider";
import AddMoreFormAndBtn from "@/components/AddMoreFormAndBtn";
import { useContext } from "react";
import { SiteContext } from "@/components/LayoutComponent";

export default function Home() {

  /**
   * GET ITEMS VALUE THROUGH USING USECONTEXT
   */
  const {items} = useContext(SiteContext)

  return (
    <main className="w-[95%] md:w-[90%] lg:w-[75%] mx-auto">
      {/*------------BANNER SECTION------------ */}
      <section className="md:my-28 mt-10 mb-14 md:bg-[#F99F1C] rounded-3xl h-auto md:flex items-center px-2 md:px-8 text-white">
        <div className="md:pl-16">
          <h1 className="text-4xl md:text-left text-[#11263C]  text-center font-semibold tracking-wider leading-tight md:text-[#FFEFE7]">
            Deliver Food To Your Door Step!
          </h1>
          <p className="md:text-[#ECD0A8] text-center md:text-left text-[#808B96] text-sm md:text-lg mt-3">
            Authentic food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="bg-[#FD9460] h-[15%] flex justify-center items-start md:h-auto md:bg-transparent mt-20 md:mt-0 rounded-md md:rounded-none">
          <Image
            src={bannerImg}
            className="mt-[-60px] md:mt-0"
            alt="banner-img"
          />
        </div>
      </section>

      {/*------------POPULAR FOOD SECTION------------*/}
      <section className="mt-3 ">
        {/*-----HEADER-----*/}
        <div className="flex justify-between">
          <h3 className="text-2xl">Popular</h3>
          <AddMoreFormAndBtn />
        </div>

        {/*-----------POPULAR FOOD SECTION----------*/}
        <div className="mb-8 mt-2">
          <ItemSlider IsPopular="IsPopular" items={items} />
        </div>
      </section>

      {/*------------RECOMENDED FOOD SECTION------------ */}
      <section className="mt-4 ">
        {/*-----HEADER-----*/}
        <div className="flex justify-between">
          <h3 className="text-2xl">Recommended</h3>
          <AddMoreFormAndBtn />
        </div>

        {/*-----------POPULAR FOOD SECTION----------*/}
        <div className="mb-8 mt-4">
          <ItemSlider IsRecommended="IsRecommended" items={items} />
        </div>
      </section>
    </main>
  );
}
