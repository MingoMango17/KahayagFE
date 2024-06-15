import React from 'react'
import Image from 'next/image'

interface Params {
    title: string,
    desc: string,
}

const LandingCard = ({ title, desc }: Params) => {
    return (
        <div className='flex flex-col text-center items-center w-2/5 p-10'>
            <Image
                src="/landingCard.svg"
                alt="Landing Card"
                width={100}
                height={300}
                priority
            />
            <p className='font-bold'>{title}</p>
            <p className='font-thin text-sm'>{desc}</p>
        </div>
    )
}

export default LandingCard