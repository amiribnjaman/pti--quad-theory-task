"use client";

import { ubuntu } from "@/utils/fonts";
import Link from "next/link";
import { useContext } from "react";
import { SiteContext } from "./LayoutComponent";

export default function Navbar() {
  const {showMenu, setShowMenu} = useContext(SiteContext)

  return (
    <nav className="w-[95%] md:w-[90%] lg:w-[75%] relative gap-7 md:gap-0 mx-auto flex justify-between items-center py-8 ">
      {/*---------LOGO--------- */}
      <div>
        <Link href="/" className={`${ubuntu.className} text-3xl font-semibold`}>
          pti.
        </Link>
      </div>

      {/*--------------NAVBAR MIDDLE-------- */}
      <div className="flex justify-between md:gap-3 items-center gap-[4px] w-[90%] md:w-auto">
        {/*----------SEARCHBAR-------------- */}
        <div className="flex justify-between md:gap-3 w-[60%] md:w-[410px] bg-[#FEFEFE] rounded-md px-3 py-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-[#FEA491]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          <input
            type="text"
            className="bg-transparent w-[92%] focus:outline-none py-1"
            placeholder="Search Audiobook"
          />
        </div>

        {/*----------MENU ITEM-------------- */}
        <div className="w-[35%] md:w-[155px]">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex justify-between w-full items-center bg-[#FEFEFE] px-2.5 py-[11px] rounded-md"
          >
            <span className="text-[12px] font-semibold">MENU</span>
            {showMenu ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4 text-[#FD6011]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            )}
          </button>
          <ul
            className={`${
              showMenu ? "block" : "hidden"
            } w-[153px] absolute top-[80px] right-[1%] md:right-[13%] lg:right-[18%] xl:right-[21%] bg-[#FEFEFE] rounded-xl py-3 shadow`}
          >
            <li>
              <Link className="px-4 block py-1 text-[15px] text-[#586776] hover:text-[#FD6011] hover:bg-[#E7E9EC]"
                href=""
              >
                Home
              </Link >
            </li>
            <li>
              <Link 
                className="px-4 block py-1 text-[15px] text-[#586776] hover:text-[#FD6011] hover:bg-[#E7E9EC]"
                href=""
              >
                Details
              </Link >
            </li>
            <li>
              <Link 
                className="px-4 block py-1 text-[15px] text-[#586776] hover:text-[#FD6011] hover:bg-[#E7E9EC]"
                href=""
              >
                Category
              </Link >
            </li>
            <li>
              <Link 
                className="px-4 block py-1 text-[15px] text-[#586776] hover:text-[#FD6011] hover:bg-[#E7E9EC]"
                href=""
              >
                My Favourites
              </Link >
            </li>
            <li>
              <Link 
                className="px-4 block py-1 text-[15px] text-[#586776] hover:text-[#FD6011] hover:bg-[#E7E9EC]"
                href=""
              >
                Profile
              </Link >
            </li>
            <li>
              <Link 
                className="px-4 block py-1 text-[15px] text-[#586776] hover:text-[#FD6011] hover:bg-[#E7E9EC]"
                href=""
              >
                Log In/Sign up
              </Link >
            </li>
          </ul>
        </div>
      </div>

      {/*----------USER CARD-------- */}
      <div className="md:block hidden">
        <button className="bg-[#FD6011] p-1.5 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
