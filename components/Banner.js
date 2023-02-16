import React from 'react'
import nucasaBanner from '../public/nucasa-bg-2.png'
import Image from 'next/legacy/image';

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px]
    xl:h-[600px] 2xl:h-[700px]'>
        <Image 
          src={nucasaBanner} 
          layout='fill'
          objectFit='cover'
        />
    <div className='absolute top-1/2 w-full text-center'>
        <p className='bannerMessage'>This site is for Educational</p>
        <p className='bannerMessage'>Purposes.</p>

        <button className='text-[#289bac] bg-[#ffb37f] px-10 
        py-4 shadow-md rounded-full font-bold my-3 hover:bg-[#ea773d] hover:shadow-xl 
      active:scale-90 transition duration-150'>No personal information is requested.</button>
    </div>
    </div>
  )
}

export default Banner