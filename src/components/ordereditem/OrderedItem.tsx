"use client";

import React from 'react';

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

function OrderedItem({ name, desc, quantity, price, imgUrl, onIncrement, onDecrement, onDelete }: Params) {
  return (
    <div className='flex w-full h-auto shadow-md rounded-md overflow-hidden p-2 gap-3 items-center hover:bg-gray-100'>
      <img src={imgUrl} alt="food pic" className='rounded-md w-24 flex items-center text-sm text-gray-500 object-fill flex-1' />

      <div className='flex w-full flex-1'>
        <div className='w-full p-2'>
          <h1 className='font-bold text-gray-700'>{name}</h1>
          <span className='text-gray-500'>{desc}</span>
          <div className='flex items-center w-full mt-3'>
            <button
              className='bg-maroon rounded-full text-white h-[30px] w-[30px] flex items-center justify-center font-bold'
              onClick={onDecrement}
            >
              -
            </button>
            <span className='m-3 font-semibold text-gray-700'>{quantity}</span>
            <button
              className='bg-maroon rounded-full text-white h-[30px] w-[30px] flex items-center justify-center font-bold'
              onClick={onIncrement}
            >
              +
            </button>
          </div>
        </div>

        <div className='flex flex-col items-end w-2/4 p-2 '>
          <img
            src="/delete_icon.svg"
            alt="thrash"
            className='w-[30px] h-[30px] cursor-pointer'
            onClick={onDelete}
          />
          <p className='text-gray-700 mt-10 font-bold'>{price && 'P' + price}</p>
        </div>
      </div>
    </div>
  )
}

export default OrderedItem;
