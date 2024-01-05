import Link from "next/link";
import React from "react";
import footerImg from '@/Assets/Image2.png'
import Image from "next/image";
import { ubuntu } from "@/utils/fonts";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F99F1C] pb-12 mt-16">
      <div className="w-[70%] mx-auto flex justify-between items-center">
        {/*-----------FOOTER LEFT SIDE-------- */}
        <div>
          {/*---------FOOTER SEARCH BOX-------- */}
          <div className="w-[400px] pl-3 py-1 pr-1 rounded-xl bg-[#F2F2F2] flex justify-between">
            <input
              type="text"
              className="px-2 bg-transparent focus:outline-none"
              placeholder="Enter Your Email"
            />
            <button className="bg-[#FC6011] rounded-lg px-2 py-1 text-white flex items-center gap-1">
              <span>Subscribe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>

          {/*----------COPYRIGHT AREA------- */}
          <div className="mt-20">
            <Link href="/" className={`${ubuntu.className} font-semibold text-3xl`}>
              pto<span className="text-[#FE613B]">.</span>
            </Link>
            <div className="mt-3">
              <p className="font-semibold text-[14px]">
                Copyright&copy;Tripp. All Right Reserved.
              </p>
            </div>
          </div>
        </div>

        {/*-------------FOOTER RIGHT--------- */}
        <div className="">
          <Image src={footerImg} alt="footer-img" height={300} />
        </div>
      </div>
    </footer>
  );
}
