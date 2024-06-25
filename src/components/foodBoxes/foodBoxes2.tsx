import React from "react";

interface Params {
  title: string;
  orange: string;
  subTitle: string;
  imageURL: string;
}

const foodBoxes = ({ title, orange, subTitle, imageURL }: Params) => {
  return (
    <div className="bg-white flex rounded-lg drop-shadow-lg my-10 w-2/3">
      <div className="flex flex-1">
        <img src={imageURL} alt="food" className="object-contain" />
      </div>

      <div className="flex flex-col flex-1 justify-center">
        <p className="text-3xl font-bold inline px-5">{title}</p>
        <p className="text-yellowOrange font-bold text-3xl inline   px-5">{orange}</p>
        <p className="text-sm mt-2 text-grayText inline-block w-4/5   px-5">
          {subTitle}
        </p>
        <button className="py-1  ml-3 bg-pure text-white bg-gradient-to-r from-maroon to-yellowOrange font-bold mt-16 w-80">
          Proceed to Order
        </button>
      </div>
    </div>
  );
};

export default foodBoxes;
