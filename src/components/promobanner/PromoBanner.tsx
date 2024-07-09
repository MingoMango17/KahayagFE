import Image from "next/image";
import React from "react";

interface PromoBannerProps {
  title: string;
  name: string;
  desc: string;
  imgUrl: string;
  onClick: () => void;
}

const PromoBanner: React.FC<PromoBannerProps> = ({ title, name, desc, imgUrl, onClick }) => {
  return (
    <div className="w-full h-full bg-gradient-to-t from-yellowOrange to-lightOrange cursor-pointer shadow-md hover:shadow-lg border-yellowOrange sm:border-1 flex gap-1">
      <div className="flex-1 flex flex-col gap-3 p-5">
        <h2 className="text-white font-extrabold uppercase text-2xl">{title}</h2>
        <p className="font-semibold text-gray-900">{name}</p>
        <p className="text-gray-800 text-sm">{desc}</p>
        <button className="bg-maroon text-white font-bold py-2 rounded-full text-sm shadow-lg hover:scale-105 transform transition duration-300 ease-in-out w-3/4 mt-5" onClick={onClick}>
          Order Now
        </button>
      </div>
      <div className="relative h-full w-full flex-1">
        <Image src={imgUrl} alt={name} fill className="object-cover"/>
      </div>
    </div>
  );
};

export default PromoBanner;
