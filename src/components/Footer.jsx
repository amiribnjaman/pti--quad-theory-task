import Link from "next/link";
import React from "react";
import footerImg from "@/Assets/Image2.png";
import Image from "next/image";
import { ubuntu } from "@/utils/fonts";

export default function Footer() {
  return (
    <footer className="w-full bg-[#F99F1C] pb-14 mt-28">
      <div className="pt-4 md:pt-0 px-1 md:w-[89%] lg:w-[87%] mt-8 md:mt-0 md:px-0 md:w-[70%] mx-auto flex justify-between items-center">
        {/*-----------FOOTER LEFT SIDE-------- */}
        <div className="md:w-[50%] w-full pt-8">
          {/*---------FOOTER SEARCH BOX-------- */}
          <div className="w-[100%] md:w-[400px] pl-3 py-1 pr-2 rounded-lg md:rounded-xl bg-[#F2F2F2] flex justify-between">
            <input
              type="text"
              className="px-2 w-[80%] bg-transparent focus:outline-none"
              placeholder="Enter Your Email"
            />
            <button className="md:bg-[#FC6011] text-[#FC6011] rounded-lg px-2 py-1.5 md:text-white flex items-center gap-1">
              <span className="text-[14px]">Subscribe</span>
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
          <div className="md:mt-20 mt-12 md:gap-4 md:justify-between text-center md:text-left w-full flex flex-col md:flex-row flex-col-reverse">
            <div>
              <Link
                href="/"
                className={`${ubuntu.className} font-semibold text-3xl`}
              >
                pti<span className="text-[#FE613B]">.</span>
              </Link>
              <p className="font-semibold text-[13px] mt-4">
                Copyright&copy;Tripp. All Right Reserved.
              </p>
            </div>

            {/*--------SOCIAL ICONS--------- */}
            <div className="mt-4 mb-6 md:mb-0 flex md:my-0 justify-center items-center md:items-end">
              <div>
                <ul className="flex justify-center gap-2">
                  <li>
                    <Link href="/" className="bg-[#FEDDBA]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        width="30"
                        viewBox="0 0 488 512"
                        fill="currentColor"
                        className="md:text-[#FC6F17] text-white md:hover:text-[#FC6F17] md:hover:bg-[#FEDDBA] bg-[#FC6F17] md:bg-[#FEDDBA] hover:bg-[#FC6F17] hover:text-[#FEDDBA] p-2 rounded-full"
                      >
                        <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        width="30"
                        viewBox="0 0 512 512"
                        fill="currentColor"
                        className="md:text-[#FC6F17] text-white md:hover:text-[#FC6F17] md:hover:bg-[#FEDDBA] bg-[#FC6F17] md:bg-[#FEDDBA] hover:bg-[#FC6F17] hover:text-[#FEDDBA] p-2 rounded-full"
                      >
                        <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" />
                      </svg>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="30"
                        width="30"
                        viewBox="0 0 448 512"
                        fill="CurrentColor"
                        className="md:text-[#FC6F17] text-white md:hover:text-[#FC6F17] md:hover:bg-[#FEDDBA] bg-[#FC6F17] md:bg-[#FEDDBA] hover:bg-[#FC6F17] hover:text-[#FEDDBA] p-2 rounded-full"
                      >
                        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
                      </svg>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/*-------------FOOTER RIGHT--------- */}
        <div className="hidden md:block">
          <Image src={footerImg} alt="footer-img" height={300} />
        </div>
      </div>
    </footer>
  );
}
