import React from 'react'
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
        <div className='px-10 pt-5 bg-maroon flex text-white justify-between w-screen'>
            <div>
                <Image
                src="/logo.svg"
                alt="App Logo"
                width={150}
                height={36}
                priority
                />
            </div>
            <div className='flex items-center justify-center font-bold'>
                <button className='mx-10 text-shadow-lg'>
                    <span className='text-shadow-sm'>Home</span>
                </button>
                <button className='mx-10'>
                    Menu
                </button>
                <button className='mx-10'>
                    Special Offers
                </button>
                <button className='mx-10 mr-20 '>
                    Contact Us
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar