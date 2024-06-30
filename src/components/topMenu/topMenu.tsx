import React from "react";

interface Params {
  title: string;
  price: string;
  imageURL: string;
}

const TopMenu = ({ title, price, imageURL }: Params) => {
  return (
    <div className="flex justify-center">
      <div className="bg-white flex flex-row w-2/4 outline-2 outline-black outline rounded-md">
        <div className="left-side flex flex-col justify-center text-left flex-1 py-2 px-3">
          <p className="text-2xl text-black font-medium">{title}</p>
          <p className="text-maroon text-base pt-2 font-bold">{price}</p>
        </div>
        <div className="right-side flex items-center flex-1 p-2 z-10">
          <img
            src={imageURL}
            alt="food pic"
            className="object-contain"
            style={{ maxWidth: "200px", maxHeight: "200px" }} 
          />
        </div>
      </div>
    </div>
  );
};

export default TopMenu;
