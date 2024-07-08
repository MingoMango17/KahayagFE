import React from "react";
import Image from "next/image";

interface Params {
  title: string;
  orange: string;
  subTitle: string;
  imageURL: string;
}

const FoodBoxes = ({ title, orange, subTitle, imageURL }: Params) => {
  return (
    <div className="bg-white flex rounded-lg overflow-hidden drop-shadow-lg w-3/4 h-auto " >
      <div className="flex flex-col justify-between gap-3 p-5 w-full">
        <div>
          <p className="text-3xl font-bold">{title}</p>
          <p className="text-yellowOrange font-bold text-3xl">{orange}</p>
          <p className="text-sm mt-3 text-grayText w-4/5">{subTitle}</p>
        </div>
        <div className="mt-auto"> {/* This div pushes the button to the bottom */}
          <button className="p-2 bg-pure text-white bg-gradient-to-r from-maroon to-yellowOrange font-bold w-full rounded-md">
            Proceed to Order
          </button>
        </div>
      </div>
      <div className="relative w-1/2">
        <Image
          src={imageURL}
          alt="food"
          className="object-cover h-full"
          width={400}
          height={500}
        />
      </div>
    </div>
  );
};

export default FoodBoxes;
