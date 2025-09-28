import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='font-[font3] flex items-center justify-center gap-3 mb-6'>
      <div className='lg:border-3 border-2 hover:border-[#f38c9d] lg:h-44 flex items-center px-3 pb-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[5vw] mt-6' to={'/projects'}>Projects</Link>
      </div>
      <div className='lg:border-3 border-2 hover:border-[#f38c9d] lg:h-44 flex items-center px-3 pb-1 lg:px-14 border-white rounded-full uppercase'>
        <Link className='text-[5vw] mt-6' to={'/about'}>About</Link>
      </div>
    </div>
  )
}

export default HomeBottomText