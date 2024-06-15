import React from 'react'
import Image from 'next/image'
import { Caveat } from "next/font/google";
import LandingCard from '@/components/landingcard/LandingCard';

export const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
})

const HomePage = () => {
  return (
    <div>
      <div className='bg-svg-background bg-no-repeat bg-cover bg-center w-screen h-[84vh]'>
        <div className='flex justify-between p-10'>
          <div className='w-max'>
            <div className='flex flex-col text-white font-[700] text-txl overflow-visible whitespace-nowrap'>
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
              layout="responsive"
              width={2000}
              height={2000}
              priority
            />
          </div>
        </div>
      </div>

      <div className='p-10'>
        <div className={caveat.className}>
          <span className='text-9xl'>H</span>
          <span className='text-7xl'>ow does this work</span>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className='flex justify-between items-center w-3/4'>
          <LandingCard
            title='Browse and Select'
            desc='Discover dishes, customize and add to cart'
          />
          <LandingCard
            title='Place order'
            desc='Confirm choices and receive order confirmation'
          />
          <LandingCard
            title='Pickup with QR Code'
            desc='Show QR code at counter to pay and for quick pickup'
          />
        </div>
      </div>

      <div className='flex justify-center mb-20'>
        <Image
          src="/chef.svg"
          alt="Chef"
          width={300}
          height={500}
          priority
        />
        <div className='ml-40'>
          <div className={caveat.className}>
            <span className='text-9xl'>A</span>
            <span className='text-7xl'>bout us</span>
          </div>
          <div className='w-[600px]'>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident expedita et laudantium excepturi. Quia obcaecati alias a sunt, magnam sint voluptate sequi
              <br />
              <br />
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident expedita et laudantium excepturi. Quia obcaecati alias a sunt, magnam sint voluptate sequi
            </span>
          </div>
        </div>
      </div>

      <div className='p-10 flex justify-between items-end'>
        <div className={caveat.className}>
          <span className='text-8xl'>S</span>
          <span className='text-6xl'>earch by food</span>
        </div>
        <div>
          <span>View All</span>
        </div>
      </div>

      <div className='p-10'>
        <Image
          src='/items.svg'
          alt='items'
          width={1800}
          height={500}
          priority
          layout="responsive"
        />
      </div>

      <div className='flex justify-center mt-20'>
        <div className='flex flex-col text-center'>
          <div className={caveat.className}>
            <span className='text-6xl font-bold'>Our Top 3 Menu</span>
          </div>
          <span className='w-[50rem] text-center mt-5 font-thin'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident expedita et laudantium excepturi. Quia obcaecati alias a sunt, magnam sint voluptate sequi
          </span>
        </div>
      </div>
    </div>
  )
}

export default HomePage