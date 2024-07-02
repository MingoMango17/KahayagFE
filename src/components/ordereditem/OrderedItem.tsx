"use client"

import React, { useState } from 'react'

interface Params{
  name: string;
  desc: string;
  quantity: number;
  price: number;
  imgUrl: string;
}

function OrderedItem( {name, desc, quantity, price, imgUrl}: Params) {
  const [numberOfItems, setNumberOfItems] = useState(quantity)

  const handleReduceQuantity = () => {
    const result = numberOfItems - 1
    if ( result < 0) return
    setNumberOfItems(result)
  }

  const handleAddQuantity = () =>{
    const result = numberOfItems + 1
    setNumberOfItems(result)
  }

  return (
    <div className='flex w-[400px] h-auto shadow-md rounded-md overflow-hidden p-2 gap-3 items-center hover:bg-gray-100'>
      <img src={imgUrl} alt="food pic" className='rounded-md h-[100px] flex items-center text-sm text-gray-500'/>

      <div className='flex w-full '> 
        <div className='w-full p-2'>
          <h1 className='font-bold text-gray-700'>{name}</h1>
          <span className='text-gray-500'>{desc}</span>
          <div className='flex items-center w-full mt-3'>
            <button className='bg-maroon rounded-full text-white h-[30px] w-[30px] flex items-center justify-center font-bold' onClick={() => handleReduceQuantity()}>-</button>
            <span className='m-3 font-semibold text-gray-700'>{numberOfItems}</span>
            <button className='bg-maroon rounded-full text-white h-[30px] w-[30px] flex items-center justify-center font-bold' onClick={() => handleAddQuantity()}>+</button>
          </div>
        </div>

        <div className='flex flex-col items-end w-2/4 p-2 '>
          <img src="/delete_icon.svg" alt="thrash" className='w-[30px] h-[30px] cursor-pointer'/>
          <p className='text-gray-700 mt-10 font-semibold'>{price && 'P'+price}</p>
        </div>
      </div>

    </div>
  )
}

export default OrderedItem