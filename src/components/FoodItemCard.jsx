// import Image from 'next/image';
import React from 'react'

export default function FoodItemCard({ item }) {
  console.log(item)
  // const splitBackWordSlash = item.ImageUrl.split('\\')
  // const newImageUrl = splitBackWordSlash[0].concat(splitBackWordSlash[1]);
  // console.log(n, j)
  return (
    <div className=" rounded-md">
      <img src={item.ImageUrl} alt="" className='rounded-lg h-[220px]'/>
      <h4 className='text-center mt-1'>{item.Name}</h4>
       {/* <Image placeholder='blur' blurDataURL={item.ImageUrl} src={item.ImageUrl} alt="food-image" width="100" height="100" /> */}
    </div>
  );
}
