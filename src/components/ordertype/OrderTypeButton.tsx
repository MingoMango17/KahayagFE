"use client"

import React, { useState } from 'react'

function OrderTypeButton() {
  const [selectedOrderType, setSelectedOrderType] = useState('Dine in')

  return (
    <div className='w-[300px] flex justify-center'>
        <button className={`bg-grayButton hover:opacity-90 text-gray-700 w-full rounded-l-full p-2 semi-bold ${ selectedOrderType === "Dine in" && "bg-maroon text-white"}`} onClick={() => setSelectedOrderType("Dine in")}>Dine in</button>
        <button className={`bg-grayButton hover:opacity-90 text-gray-700 w-full rounded-r-full p-2 semi-bold ${ selectedOrderType === "Take out" && "bg-maroon text-white"}`} onClick={() => setSelectedOrderType("Take out")}>Take out</button>
    </div>
  )
}

export default OrderTypeButton