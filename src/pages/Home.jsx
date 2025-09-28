import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomText from '../components/home/HomeBottomText'
const Home = () => {
  return (
    <>
      <div className='h-screen w-screen fixed'>
        <Video />
    </div>
      <div className='h-screen w-screen relative flex flex-col justify-between pb-2 overflow-hidden mt-4'>
        <HomeHeroText />
        <HomeBottomText />
      </div>
    </>
  )
}

export default Home