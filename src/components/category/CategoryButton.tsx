import Image from 'next/image'
import React from 'react'

interface Params{
  name: string;
  imgUrl: string;
  isSelected: Boolean;
}

function CategoryButton({name, imgUrl, isSelected}:Params) {
  return (
    <div className={`rounded-full ${isSelected ? 'bg-maroon' : 'bg-grayButton'} w-[200px] h-[60px] flex items-center p-2 cursor-pointer hover:shadow-inner `}>

        {imgUrl && <div className='w-12 h-12 bg-white rounded-full flex items-center justify-center'>
            <Image src={imgUrl} width={100} height={100} alt='category icon'/>
        </div>}
        
        <div className={`flex-grow text-center  font-bold ${isSelected ? 'text-white' : 'text-gray-700 '}`}>
          <p>{name}</p>
        </div>

    </div>
  )
}

export default CategoryButton