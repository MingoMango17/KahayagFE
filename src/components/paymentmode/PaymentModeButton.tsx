// "use client"

// import React, { useState } from 'react'

interface PaymentModeButtonProps{
  selectedModeOfPayment: string,
  setSelectedModeOfPayment: (mode:string) => void;

}

function PaymentModeButton({selectedModeOfPayment, setSelectedModeOfPayment}:PaymentModeButtonProps) {
  // const [selectedModeOfPayment, setSelectedModeOfPayment] = useState('Cash')

  return (
    <div className='w-[300px] flex justify-center'>
        <button className={`bg-grayButton text-gray-700 w-full rounded-l-full p-2 semi-bold hover:opacity-90 ${ selectedModeOfPayment === "Cash" && "bg-maroon text-white"}`} onClick={() => setSelectedModeOfPayment("Cash")}>Cash</button>
        <button className={`bg-grayButton text-gray-700 w-full border-r-2 p-2 semi-bold hover:opacity-90 ${ selectedModeOfPayment === "Paymaya" && "bg-maroon text-white"}`} onClick={() => setSelectedModeOfPayment("Paymaya")}>Paymaya</button>
        <button className={`bg-grayButton text-gray-700 w-full rounded-r-full p-2 semi-bold hover:opacity-90 ${ selectedModeOfPayment === "Gcash" && "bg-maroon text-white"}`} onClick={() => setSelectedModeOfPayment("Gcash")}>Gcash</button>
    </div>
  )
}

export default PaymentModeButton