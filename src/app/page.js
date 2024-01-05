import Image from 'next/image'
import bannerImg from '@/Assets/Image1.png'

export default function Home() {
  return (
    <main className="">
      {/*------------HOME PAGE BANNER SECTION------------ */}
      <section className="w-[75%] mx-auto my-24 bg-[#F99F1C] rounded-lg h-auto flex items-center px-8 text-white">
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
    </main>
  );
}
