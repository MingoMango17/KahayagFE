import React from 'react';
import Image from 'next/image';

interface Params{
  name: string;
  desc: string;
  price: number;
  imgUrl: string;
}

function FoodSelectionCard({ name, desc, price, imgUrl}: Params) {
  return (
    <div className='relative overflow-hidden w-[400px] h-[280px] rounded-xl shadow-lg cursor-pointer group'>
      <Image src={imgUrl} width={50} height={50} alt='food image' className='w-full h-48 object-cover' />
      
      <div className='flex justify-between p-5'>
        <div className='flex flex-col'>
          <h1 className='font-bold font-sans text-lg'>{name}</h1>
          <span className='font-light text-sm'>{desc}</span>
        </div>
        <p className='text-maroon'>P {[price]}</p>
      </div>

      <div className='absolute inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        <button className='bg-white text-maroon border-maroon border-1 font-normal py-2 px-4 rounded-lg shadow-lg hover:bg-maroon hover:text-white'>Order Now</button>
      </div>
    </div>
  );
}

export default FoodSelectionCard;
