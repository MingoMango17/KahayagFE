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
      <div className="flex flex-col flex-1 px-5 my-5">
        <p className="text-3xl font-bold inline mr-2">{title}</p>
        <p className="text-yellowOrange font-bold text-3xl inline">{orange}</p>
        <p className="text-sm mt-2 text-grayText inline-block w-4/5">
          {subTitle}
        </p>
        <button className="py-1 bg-pure text-white bg-gradient-to-r from-maroon to-yellowOrange font-bold mt-16 w-80">
          Proceed to Order
        </button>
      </div>
      <div className="flex flex-1">
        <img src={imageURL} alt="food" className=" object-cover" />
      </div>
    </div>
  );
};

export default foodBoxes;
