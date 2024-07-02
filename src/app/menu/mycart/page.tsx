import React from 'react'
import OrderTypeButton from '@/components/ordertype/OrderTypeButton'
import PaymentModeButton from '@/components/paymentmode/PaymentModeButton'
import PaymentSummary from '@/components/paymentsummary/PaymentSummary'
import OrderSummary from '@/components/ordersummary/OrderSummary'
import OrderedItem from '@/components/ordereditem/OrderedItem'

function page() {
  return (
    <>
      <div className='flex flex-col items-center  w-full'>
        <div className='w-full text-center mt-5'>
          <h1 className='font-extrabold text-2xl text-gray-800'>My Cart</h1>
          <span className='font-extralight text-sm text-gray-400'>Id Number: 0100010</span>
        </div>

        <div className='block lg:flex justify-center mt-5 w-full'>
          <div className='flex flex-col items-center w-full'>
            <div className='flex flex-col items-center w-full px-5 gap-2'>
              <h1 className='font-semibold text-gray-800 text-lg'>Type of Order</h1>
              <OrderTypeButton/>
            </div>

            <div className='mt-10 w-full h-[400px] flex items-center flex-col'>
              <h1 className='font-semibold text-gray-800 text-lg  text-center border-b-2 w-1/2 py-2'>Orders</h1>
              <ul className='w-3/4 h-full flex flex-col items-center gap-4 overflow-y-scroll'>
                <li><OrderedItem name='tae soup' desc='Hot paper soup' imgUrl='/noodles.svg' price={100} quantity={5}/></li>
                <li><OrderedItem name='tae soup' desc='Hot paper soup' imgUrl='/noodles.svg' price={100} quantity={5}/></li>
                <li><OrderedItem name='tae soup' desc='Hot paper soup' imgUrl='/noodles.svg' price={100} quantity={5}/></li>
                <li><OrderedItem name='tae soup' desc='Hot paper soup' imgUrl='/noodles.svg' price={100} quantity={5}/></li>
                <li><OrderedItem name='tae soup' desc='Hot paper soup' imgUrl='/noodles.svg' price={100} quantity={5}/></li>
              </ul>
            </div>
          </div>

          <div className='flex items-center flex-col w-full mt-10 md:mt-0'>
            <div className='flex flex-col items-center w-full px-5 gap-2'>
              <h1 className='font-semibold text-gray-800 text-lg'>Mode of Payment</h1>
              <PaymentModeButton/>
            </div>

            <div className='flex items-center flex-col w-full mt-10'>
              <h1 className='font-semibold text-gray-800 text-lg mb-1'>Payment Summary</h1>
              <PaymentSummary totalQuantity={20} subtotal={2} discount={0} total={300}/>
            </div>

            <div className='flex items-center flex-col w-full mt-10'>
              <h1 className='font-semibold text-gray-800 text-lg'>Order Summary</h1>
              <OrderSummary orderType='Dine in' totalQuantity={20} modeOfPayment='Cash' total={300}/>
            </div>
          </div>

        </div>

        <button className='bg-maroon w-[400px] mt-10 mb-5 p-2 rounded-full font-bold text-white shadow-lg transform hover:scale-105 duration-100 ease-in'>Checkout</button>
      </div>
    </>
  )
}

export default page