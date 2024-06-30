import React from 'react'
import Image from 'next/image'

interface Params{
  itemsCount: number
}

function Cart({itemsCount}:Params) {
  return (
    <div className="fixed bottom-4 right-4 p-2 rounded-full shadow-lg hover:bg-maroon-light transition-all duration-300 cursor-pointer h-[70px] w-[70px] bg-yellowOrange hover:">
      <div className="absolute top-2 right-2 h-8 w-8 bg-lightOrange rounded-full z-0 flex items-center justify-center font-semibold text-maroon">
        {!itemsCount ? '0' : itemsCount}
      </div>
      <Image src="/cart.svg" alt="Floating Icon" width={40} height={40} className="absolute z-10 mt-5"/>
    </div>


  )
}

export default Cart