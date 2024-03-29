"use client";

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SiteContext } from "./LayoutComponent";
import getAllItems from '@/utils/getAllItems'


export default function AddMoreFormAndBtn({  }) {
  const { showAddCard, setShowAddCard, items: item } = useContext(SiteContext);

  // console.log(item)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  /**
   *
   * HANDLE ADD ITEM FORM
   * @param {*} data accepting form data through submitting form
   *
   */
  const handleAddItemForm = async (d) => {
    
    const img = new FormData();
    img.set('file', d.image[0]);
    let result = await fetch("api/upload", {
      method: "POST",
      body: img,
    });

    // result = await result.json()
    // const imgurl = result.path.split('/')

    console.log(item)
      
    const data = {
      Id: Math.ceil(Math.random() * 10000000000),
      Name: d.name,
      Price: d.price,
      // ImageUrl: `/public/uploads/${imgurl[imgurl.length - 1]}`,
      ImageUrl: `/${d.image[0].name}`,
      IsPopular: true,
      IsRecommended: true,
    };

    toast.success("Item added succefully. Thanks for contribution!");
    setShowAddCard(!showAddCard);
    reset();

    if (data && item != undefined) {
      item?.Items.push(data);
      console.log(item);
    } 

  };

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

        {/*--------FORM -----------*/}
        <form
          onSubmit={handleSubmit(handleAddItemForm)}
          className="mt-6 pr-3"
          action=""
          encType="multipart/form-data"
        >
          <div className="flex flex-col mb-3">
            <label htmlFor="name" className="text-[14px]">
              Item Name
            </label>
            <input
              className="bg-[#EEEFF0] px-2 py-1 focus:outline-none rounded"
              {...register("name", { required: true, pattern: /^[A-Za-z\s]+$/i })}
              aria-invalid={errors.name ? "true" : "false"}
              type="text"
              id="name"
            />
            {/*-----EROR SHOWING---- */}
            {errors.name?.type === "required" && (
              <p role="alert" className="text-[14px] text-red-500 mt-[4px]">
                Item name is required.
              </p>
            )}
            {errors.name?.type === "pattern" && (
              <p role="alert" className="text-[14px] text-red-500 mt-[4px]">
                Item name should be valid characters.
              </p>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="price" className="text-[14px]">
              Price
            </label>
            <input
              {...register("price", { required: true, min: 1 })}
              aria-invalid={errors.price ? "true" : "false"}
              className="bg-[#EEEFF0] px-2 py-1 focus:outline-none rounded"
              type="number"
              id="price"
            />
            {/*-----EROR SHOWING---- */}
            {errors.price?.type === "required" && (
              <p role="alert" className="text-[14px] text-red-500 mt-[4px]">
                Price field is required.
              </p>
            )}
            {/*-----EROR SHOWING---- */}
            {errors.price?.type === "min" && (
              <p role="alert" className="text-[14px] text-red-500 mt-[4px]">
                Price should be valid numbers.
              </p>
            )}
          </div>

          <div className="flex flex-col mb-3">
            <label htmlFor="image" className="text-[14px]">
              Image
            </label>
            <input
              {...register("image", {required: true})}
              aria-invalid={errors.image ? "true" : "false"}
              className="bg-[#EEEFF0] px-2 py-1 focus:outline-none rounded"
              type="file"
              id="image"
            />
            {/*-----EROR SHOWING---- */}
            {errors.image?.type === "required" && (
              <p role="alert" className="text-[14px] text-red-500 mt-[4px]">
                Image is required.
              </p>
            )}
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
