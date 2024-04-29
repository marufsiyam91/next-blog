import React from 'react'
import Image from 'next/image'
import BookImage from '../../../../public/pngwing.com.png'

const Banner = () => {
  return (
    <div className='max-w-screen-2xl mx-auto p-8'>
        <div className="bg-primary-400 w-full h-[300px] rounded-xl flex justify-between px-8 items-center">
            <h1 className='text-[40px] font-semibold text-white leading-none'>Connect, Share and Trade Your <br/> Favourite Reads</h1>
            <Image src={BookImage} height={220} width={220} alt='book-image'/>
        </div>
    </div>
  )
}

export default Banner