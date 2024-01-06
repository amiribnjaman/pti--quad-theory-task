"use client";

import React, { useState } from "react";

export default function AddMoreBtn() {
  const [showAddCard, setShowAddCard] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowAddCard(!showAddCard)}
        className="text-[14px] text-[#FA7431] relative"
      >
        AddMore
      </button>

      {/*----------ADD MORE FORM------- */}
      <div
        className={`${
          showAddCard ? "block" : "hidden"
        } shadow-md py-4 pl-5 pr-3 rounded-md bg-white fixed z-50 top-[20%] left-1/2 -translate-x-1/2 w-[350px] min-h-[300px]`}
      >
        <div className="flex justify-between items-center">
          <h4 className="text-[#FC6011] text-[14px] font-semibold tracking-wider">
            Add a new Item
          </h4>
          <button
            onClick={() => setShowAddCard(!showAddCard)}
            className="w-[30px]"
          >
            X
          </button>
        </div>

        <form className="mt-6 pr-3" action="" encType="multipart/form-data">
          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="text-[14px]">
              Item Name
            </label>
            <input
              className="bg-[#EEEFF0] px-2 py-1 focus:outline-none rounded"
              type="text"
              id="name"
              placeholder=""
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="price" className="text-[14px]">
              Price
            </label>
            <input
              className="bg-[#EEEFF0] px-2 py-1 focus:outline-none rounded"
              type="number"
              name="price"
              id=""
            />
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="image" className="text-[14px]">
              Image
            </label>
            <input
              className="bg-[#EEEFF0] px-2 py-1 focus:outline-none rounded"
              type="file"
              name=""
              id="image"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full text-center bg-[#FC6011] py-2 rounded-md mt-3 text-white text-[14px] font-semibold tracking-wider"
            >
              Add Item
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
