import React, { useRef } from 'react'
import IMG1 from '../assets/images/IMG_4804.jpg';
import IMG2 from '../assets/images/IMG_4806.jpg';
import IMG3 from '../assets/images/IMG_4795.jpg'
import IMG4 from '../assets/images/IMG_4797.jpg'
import IMG5 from '../assets/images/IMG_4798.jpg'
import IMG6 from '../assets/images/IMG_4800.jpg'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);


const Colage = () => {
    const colageTrigger = useRef(null);
    useGSAP(() => {
        gsap.to(".boxImg", {
            x: 500,
            scrollTrigger: {
                trigger: colageTrigger.current,
                start: "top top",
                end: "+=100%", // Adjust based on how much scroll space you want
                scrub: true,
                pin: true,
              },
        })
        // gsap.to(".box", {
        //     x: 600,
        //     scrollTrigger: {
        //         trigger: colageTrigger.current,
        //         start: "top top",
        //         end: "+=100%", // Adjust based on how much scroll space you want
        //         scrub: true,
        //       },
        // })
     

    })
  return (
    <div ref={colageTrigger} className='w-screen min-h-screen bg-zinc'>
        <div className=' flex flex-row'>
        <img src={IMG3} className='w-[45vw]  translate-x-[-27%]' />
        <img src={IMG2} className='w-[45vw] boxImg z-[2] translate-x-[-27%]' />
        <div style={{left: "33%" }} className='top-0  flex items-center justify-center z-[1] absolute w-[45vw] h-[30vw]'>
            <h1 className='  text-white pb-12 font-semibold text-6xl'>Hello There</h1>
        </div>
        <img src={IMG1} className='w-[45vw] z-[4] translate-x-[-27%]' />
        </div>
        <div className='box flex flex-row'>
        <img src={IMG4} className='w-[42vw] z-[4] translate-x-[-37%]' />
        <img src={IMG5} className=' w-[42vw] z-[2] translate-x-[-37%]' />
        <img src={IMG6} className='w-[42vw] z-[4] translate-x-[-37%]' />
        <img src={IMG4} className='w-[42vw] z-[4] translate-x-[-37%]' />
        <img src={IMG5} className='w-[42vw] z-[2] translate-x-[-37%]' />
        <img src={IMG6} className='w-[42vw] z-[4] translate-x-[-37%]' />
        </div>
    </div>
  )
}

export default Colage