import Navbar from '@/components/navbar/Navbar'
import React from 'react'
import Image from 'next/image'

const HomePage = () => {
  return (
    <div className='p-10 bg-svg-background bg-no-repeat bg-cover bg-center w-screen h-[700px]'>
      <div className='flex justify-between'>
        <div className='w-max'>
          <div className='flex flex-col text-white font-extrabold text-txl overflow-visible whitespace-nowrap'>
            <span>Experience the</span>
            <span>essence of</span>
            <span>Kahayag in</span>
            <span className='mb-5'>every bite</span>
          </div>
          <div className='flex flex-col'>
            <span className='text-pure mb-5'>Skip the wait, order ahead, and savor every moment with Kahayags delicious offering</span>
            <button className='bg-pure text-white font-bold w-[150px] h-[40px] rounded-full flex items-center justify-center'>Order Now</button>
          </div>
        </div>
        <div>
          <Image
            className='-translate-y-[4.5rem]'
            src="/ramen.svg"
            alt="ramen Logo"
            width={2000}
            height={2000}
            priority
          />
        </div>
      </div>
    </div>
    // <div>
    //   <div className="absolute inset-0 bg-maroon rounded-full">
    //     <p className=''>dsads</p>
    //   </div>
    // </div>
  )
}

export default HomePage