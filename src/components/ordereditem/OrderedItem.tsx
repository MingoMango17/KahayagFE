"use client";

import React from "react";

interface Params {
  name: string;
  desc: string;
  quantity: number;
  price: number;
  imgUrl: string;
  onIncrement: () => void;
  onDecrement: () => void;
  onDelete: () => void;
}

function OrderedItem({
  name,
  desc,
  quantity,
  price,
  imgUrl,
  onIncrement,
  onDecrement,
  onDelete,
}: Params) {
  return (
    <div className="flex w-96 h-40 shadow-md rounded-md overflow-hidden p-2 gap-3 items-center hover:bg-gray-100">
      <div className="w-24 h-24 flex-shrink-0">
        <img
          src={imgUrl}
          alt="food pic"
          className="rounded-md w-full h-full object-cover"
        />
      </div>
      <div className="flex">
        <div className="p-2">
          <h1 className="font-bold text-gray-700">{name}</h1>
          <span className="text-gray-500 text-sm">{desc}</span>
          <div className="flex items-center">
            <button
              className="bg-maroon rounded-full text-white h-8 w-8 flex items-center justify-center font-bold"
              onClick={onDecrement}
            >
              -
            </button>
            <span className="m-3 font-semibold text-gray-700">{quantity}</span>
            <button
              className="bg-maroon rounded-full text-white h-8 w-8 flex items-center justify-center font-bold"
              onClick={onIncrement}
            >
              +
            </button>
          </div>
        </div>

        <div className="flex flex-col items-end w-1/3 p-2">
          <img
            src="/delete_icon.svg"
            alt="trash"
            className="w-8 h-8 cursor-pointer"
            onClick={onDelete}
          />
          <p className="text-gray-700 mt-10 font-bold">
            {price && "P" + price}
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderedItem;
