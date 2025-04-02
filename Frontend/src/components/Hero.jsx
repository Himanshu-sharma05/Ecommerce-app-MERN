import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col sm:flex-row border border-gray-400 '>
        <div className="hero-left">

        </div>
        <div className="hero-right w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
            <div className='text-[#414141]'>
                <div className='flex items-center gap-2 '>
                    <p className='w-8 md:w-11 h-[2px] bg-[#414141}'></p>
                    <p className='font-medium text-sm md:text-base'>Our Best Seller</p>
                </div>
                <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrivals</h1>
                <div className='flex items-center gap-2'></div>
            </div>
        </div>
    </div>
  )
}

export default Hero