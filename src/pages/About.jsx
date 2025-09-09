import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useRef } from 'react'

const About = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null);

  useGSAP(function() {

    gsap.to(imageDivRef.current,{
      scrollTrigger: {
        trigger: imageDivRef.current,
        markers: true,
        start: 'top 38%',
        end: 'top -100%',
        scrub: 1,
        pin: true,
      }
    })
  })

  return (
    <div>
      <div className='section1 py-1'>
      <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:w-[15vw] w-[25vw] lg:rounded-3xl rounded-xl lg:top-87 top-87 lg:left-[30vw] left-[30vw] '>
        <img className='h-full w-full object-cover' src="/images/img1.jpg" alt="image" />
      </div>
      <div className='relative'>
      <div className='lg:mt-[35vw] mt-[60vw] font-[font3]'>
        <h1 className='text-[20vw] uppercase leading-[19vw] text-center'>
          Vishal<br/>Thakur
        </h1>
      </div>
      <div className='lg:pl-[40%] lg:mt-20 mt-4 font-[font2]'>
        <p className='lg:text-6xl text-xl'>I'm Vishal Thakur, a Developer & Designer passionate about building modern, scalable, and visually engaging applications.
          I specialize in React, Node.js, and Tailwind, with hands-on experience in cloud technologies like Docker,
          CI/CD, and AWS EC2. My focus is blending clean code and creative design to craft impactful digital solutions
        </p>
      </div>
    </div>
      </div>
      <div className="section2 h-screen">
      </div>
    </div>
  )
}

export default About