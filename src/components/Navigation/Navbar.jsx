import React from 'react'

const Navbar = () => {

  const navGreenRef = React.useRef(null)
  return (
    <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
      <div className='font-[font2]'>
        <h1 className='lg:text-4xl text-xl'>VT</h1>
      </div>
      <div
      onMouseEnter={() => {
        navGreenRef.current.style.height = '100%'
      }}
      onMouseLeave={() => {
        navGreenRef.current.style.height = '0%'
      }}
      className='relative lg:h-16 h-10 lg:w-[16vw] w-32 bg-[#f53981]'>
        <div ref={navGreenRef} className='bg-red-500 h-full w-full transition-all absolute top-0 h-0 w-full'>
        <div className='relative h-full lg:px-12 px-8 flex flex-col justify-center items-end lg:gap-1.5 gap-0.5'>
          <div className='lg:w-18 w-12 h-0.5 bg-white'></div>
          <div className='lg:w-10 w-6 h-0.5 bg-white'></div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar