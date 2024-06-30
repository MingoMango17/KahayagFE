import Image from "next/image";
import React from "react";


interface Params {
  title: string;
  name: string;
  desc: string;
  imgUrl: string;
}

const PromoBanner = ({ title, name, desc, imgUrl }: Params) => {
  return (
    <div className="w-full lg:w-[600px] h-full bg-gradient-to-t from-yellowOrange to-lightOrange p-5 cursor-pointer shadow-md hover:shadow-lg border-yellowOrange sm:border-1 sm:rounded-xl flex gap-1">

      <div className="flex-grow flex flex-col gap-3">
        <h2 className="text-white font-extrabold uppercase text-2xl">{title}</h2>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-800 text-sm">{desc}</p>
        <button className="bg-maroon text-white font-bold py-2 rounded-full text-sm shadow-lg hover:scale-105 transform transition duration-300 ease-in-out w-3/4 mt-5">
          Order Now
        </button>
      </div>

      <Image src={imgUrl} alt="Marinated Worm" width={200} height={200} className="rounded-lg" />

    </div>
  );
};

export default PromoBanner;
