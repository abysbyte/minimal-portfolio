import React from 'react'

const Video = () => {
  return (
    <div className='h-full w-full blur-sm'>
        <video className='h-full w-full object-cover' autoPlay loop muted src='/public/video/yao lao.mov'></video>
    </div>
  )
}

export default Video