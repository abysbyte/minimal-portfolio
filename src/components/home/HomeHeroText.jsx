import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font3] text-center pt-5'>
      <div className='text-[8vw] uppercase leading-[8vw] justify-center flex items-center'>Crafting Clean</div>
      <div className='text-[8vw] uppercase leading-[8vw] justify-center flex items-start'>Code<div className='h-[7vw] w-[16vw] rounded-full overflow-hidden -mt-2.5'><Video/></div><span className='font-sans -mt-4'>&</span></div>
      <div className='text-[8vw] uppercase leading-[8vw] justify-center flex items-center'>Creative Design</div>
    </div>
  )
}

export default HomeHeroText