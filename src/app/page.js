import Image from "next/image";
import bannerImg from "@/Assets/Image1.png";
import getAllItems from "@/utils/getAllItems";
import FoodItemCard from "@/components/FoodItemCard";

export default async function Home() {

  /**
   * CALL THE DATA FETCHING FUNCTION
   */
  const items = await getAllItems();

  return (
    <main className="w-[75%] mx-auto">
      {/*------------BANNER SECTION------------ */}
      <section className="my-28 bg-[#F99F1C] rounded-3xl h-auto flex items-center px-8 text-white">
        <div className="pl-16">
          <h1 className="text-4xl font-semibold tracking-wider leading-tight text-[#FFEFE7]">
            Deliver Food To Your Door Step!
          </h1>
          <p className="text-[#ECD0A8] mt-3">
            Authentic food, Quick Service, Fast Delivery
          </p>
        </div>
        <div>
          <Image src={bannerImg} alt="banner-img" />
        </div>
      </section>

      {/*------------POPULAR FOOD SECTION------------*/}
      <section className="mt-3 ">
        {/*-----HEADER-----*/}
        <div className="flex justify-between">
          <h3 className="text-2xl">Popular</h3>
          <span>next</span>
        </div>

        {/*-----ITEMS SHOWING SECTION-----*/}
        <div className="grid grid-cols-5 gap-y-8 gap-x-4 my-4">
          {
            items.Items.map(item => (
              item.IsPopular && <FoodItemCard item={item} />
            ))
          }
        </div>
      </section>
    </main>
  );
}
