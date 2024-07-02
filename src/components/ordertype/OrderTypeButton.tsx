// "use client"

// import React, { useState } from 'react'


interface orderTypeProps{
  selectedOrderType: string,
  setSelectedOrderType: (mode:string) => void;
}

function OrderTypeButton({selectedOrderType,setSelectedOrderType}: orderTypeProps) {
  // const [selectedOrderType, setSelectedOrderType] = useState('Dine In')

  return (
    <div className='w-[300px] flex justify-center'>
        <button className={`bg-grayButton hover:opacity-90 text-gray-700 w-full rounded-l-full p-2 semi-bold ${ selectedOrderType === "Dine In" && "bg-maroon text-white"}`} onClick={() => setSelectedOrderType("Dine In")}>Dine In</button>
        <button className={`bg-grayButton hover:opacity-90 text-gray-700 w-full rounded-r-full p-2 semi-bold ${ selectedOrderType === "Take Out" && "bg-maroon text-white"}`} onClick={() => setSelectedOrderType("Take Out")}>Take Out</button>
    </div>
  )
}

export default OrderTypeButton