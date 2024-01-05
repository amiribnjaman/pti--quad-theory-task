import Image from 'next/image';
import React from 'react'

export default function FoodItemCard({ item }) {
  console.log(item)
  // const splitBackWordSlash = item.ImageUrl.split('\\')
  // const newImageUrl = splitBackWordSlash[0].concat(splitBackWordSlash[1]);
  // console.log(n, j)
  return (
    <div className="w-1/5">
      {/* <img src={item.ImageUrl} alt="" /> */}
      <Image src={item.ImageUrl} alt="food-image" width="100" height="100" />
    </div>
  );
}
