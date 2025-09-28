import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font3] lg:mt-0 mt-32 text-center pt-5'>
      <div className='lg:text-[7vw] text-[14vw] uppercase lg:leading-[7vw] leading-12 justify-center flex items-center'>Crafting Clean</div>
      <div className='lg:text-[7vw] text-[14vw] uppercase lg:leading-[7vw] leading-12 justify-center flex items-start'>Code<div className='lg:h-[7vw] h-[9vw] lg:w-[16vw] w-[20vw] rounded-full overflow-hidden lg:-mt-2 -mt-1'><Video/></div>and</div>
      <div className='lg:text-[7vw] text-[14vw] uppercase lg:leading-[7vw] leading-12 justify-center flex items-center'>Creative Design</div>
    </div>
  )
}

export default HomeHeroText