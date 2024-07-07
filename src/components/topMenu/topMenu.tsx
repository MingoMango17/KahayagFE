import React from "react";
import Image from "next/image";

interface Params {
  title: string;
  price: string;
  imageURL: string;
}

const TopMenu = ({ title, price, imageURL }: Params) => {
  return (
    <div className="flex justify-center group">
      <div className="bg-yellowOrange flex flex-row w-2/4 rounded-lg shadow-xl">
        <div className="left-side flex flex-col justify-center text-left flex-1 py-2 px-3">
          <p className="text-2xl text-black font-medium">{title}</p>
          <p className="text-maroon text-xl pt-2 font-bold">{price}</p>
        </div>
        <div className="right-side flex items-center flex-1 p-2 z-10">
          <Image
            src={imageURL}
            alt="food pic"
            className="object-contain group-hover:rotate-180 duration-200 transform"
            style={{ maxWidth: "200px", maxHeight: "200px" }} 
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
