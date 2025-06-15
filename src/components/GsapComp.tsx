"use client"

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import Image from 'next/image'
import { animateWithGsap } from '@/utils/animations'

const GsapComp = () => {
    const wordRef = useRef(null);
    const triggerRef = useRef(null);
    const triggertworef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
     useGSAP(() => {
    // Define the animation
    const scaleAnimation = gsap.fromTo(
      wordRef.current,
      { 
        fontSize: "8000px",
        scale: 5,
        paddingLeft: "1200px"
      }, // Start from a very large font size
      {
        fontSize: "300px",
        scale: 1,
        paddingLeft: "0px", // Scale down to a smaller font size
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top", // Start when the top of the trigger hits the top of the viewport
          end: "+=100%", // End after scrolling through the entire height of the element
          scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          pin: true, // Pin the trigger element for the duration of the scroll
        },
        // onComplete: () => {
        //     gsap.to(".shoptext", {
        //         opacity: 1,
        //         scale: 1
        //     })
        // },

      }
    );

         gsap.to(".shoptext", {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: triggertworef.current,
                    start: "top top", // Start when the top of the trigger hits the top of the viewport
                    end: "+=100%", // End after scrolling through the entire height of the element
                    toggleActions: "play reverse play reverse"
                  },
            })

            gsap.to('.g_text', {
               y: 0,
              opacity: 1,
              ease: 'power2.inOut', 
              duration: 1 ,
              scrollTrigger: {
                trigger: triggertworef.current,
                start: "top top", // Start when the top of the trigger hits the top of the viewport
                end: "+=100%", // End after scrolling through the entire height of the element
                toggleActions: "play reverse play reverse"
              },
            })

    // Cleanup function
    return () => {
      scaleAnimation.kill();
      ScrollTrigger.getAll().forEach(ST => ST.kill());
    };
  }, []);
  return (
    <section className='flex flex-col'>
    <div ref={triggerRef}
    //   style={{ backgroundImage: "url(/images/IMG_4795.jpg)" }}
       className="bg-cover overflow-hidden bg-center relative min-h-screen flex items-center justify-start">
        {/* <Image src="/images/IMG_4795.jpg" alt='storevideo' width={1000} height={1000} className='w-screen h-screen' /> */}
        <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute top-0 left-0 w-full h-full object-cover z-1"
            >
                <source src="/videos/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div >
                <h3 className='absolute top-[12vh] left-[35vw] opacity-0 scale-[0.5] text-white text-[100px] shoptext z-[20]'>Магазин</h3>
            </div>
      <div ref={wordRef} className="absolute text-[300px] text-black font-bold text w-screen h-screen flex items-center justify-center ">
        {/* Your scaling word here */}     
        ZAAVG
      </div>
      <div className='absolute bottom-0 w-screen h-[30vh] flex justify-center items-center'>
    <h3 className='text-white text-2xl shoptext z-[20]'>Клеметовский пер. 2, Москва</h3>
    </div>
    </div>

 
          
        
    <div ref={triggertworef} className='bg-blue border w-screen h-[1vh]'>

    </div>
    </section>
  )
}

export default GsapComp