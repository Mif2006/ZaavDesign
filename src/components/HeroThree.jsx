import React, { useRef } from 'react'
import jungle from '../assets/jungle.jpeg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import IMG3 from '../assets/IMG_4813.jpg'
import bg from '../assets/bg.png'
import cave from '../assets/cave.jpeg'

gsap.registerPlugin(ScrollTrigger)

const HeroThree = () => {
    const triggerRef = useRef()

    const animate = () => {
        gsap.to('.title2', {
            opacity: 1,
            duration: 1,
            fontSize: "100px"
        })
    }

    useGSAP(() => {
        gsap.to('.title', {
            fontSize: "0px",
            y: -100,
            rotate: 0,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "+=100%",
                scrub: true,
                pin: true,
            },
            progress: (progress) => {
                if (progress >= 0.99) {
                    animate()
                }
            }
        })
     
    })

    return (
        <>
            <section ref={triggerRef}
                style={{ backgroundImage: `url(${IMG3})` }}
                className='bg-cover bg-center w-full flex items-center justify-center min-h-screen h-screen overflow-hidden relative'>
                <div style={{ backgroundImage: `url(${jungle})` }} className='bg-cover bg-center w-screen h-screen z-[24]'>
                <h1 className=' z-[28] opacity-0 scale-0 title2 masked-text z-[10] text-[1px] font-bold '>ZAAVG</h1>

                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='title masked-text z-[10] text-[50px] md:text-[200px] lg:text-[480px] font-bold transform rotate-[-10deg] translate-y-[15%]'>ZAAVG</h1>
                    {/* <p className='desc text-[20px] text-white opacity-1'>Авторские украшения с отстрова Бали</p> */}
                </div>
            </section>
        </>
    )
}

export default HeroThree
