import React, { useRef } from 'react';
import rings from '../assets/rings.jpeg'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import IMG5 from '../assets/IMG_6036.jpg'
import IMG6 from '../assets/IMG_6040.jpg'
import IMG7 from '../assets/IMG_6037.jpg'


const OverlayTextComponent = ({ backgroundImage, overlayColor, text }) => {
    const triggerRef = useRef()
    useGSAP(() => {
        // gsap.to(".text", {
            
        //     scrollTrigger: {
        //                 trigger: triggerRef.current,
        //                 start: "top top", // Start when the top of the trigger hits the top of the viewport
        //                 end: "+=100%", // End after scrolling through the entire height of the element
        //                 scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        //                 pin: true, // Pin the trigger element for the duration of the scroll
        //               },
        // })

    })
    return (
        // <section className="overlay-text-section"
        // //  style={{ backgroundImage: `url(${backgroundImage})` }}
        //  >
        //    {/* <div className='absolute inset-0 left-0 right-0 z-[32] h-screen w-screen'>
        //     <img src={rings} className='h-full w-full' />
        //     </div> */}
        //     <div style={{ backgroundImage: `url(${rings})` }} className="absolute bg-cover bg-center bg-black  w-full rotate-[-60deg] h-full z-[1]"></div>
            
        //     <h1 className="overlay-text absolute top-64 rotate-[-6deg] text-[420px]">{text}</h1>
        //     {/* <h1 className="overlay-text absolute bottom-[72vh] rotate-[-6deg] text-[420px]">{text}</h1> */}
        // </section>
         <section ref={triggerRef} className="overlay-text-section"
        //   style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            {/* <div className='absolute inset-0 left-0 right-0 z-[32] h-screen w-screen'>
             <img src={rings} className='h-full w-full' />
             </div> */}
             {/* <div className="absolute top-[48vh] left-0  bg-cover bg-center bg-black  w-full min-w-screen w-[2000px] rotate-[-6deg] h-[70%] z-[1]" /> */}
             <div className='relative z-[20] rotate-[-10deg] h-[300px] w-[300px] z-[2]'>
        <img src={IMG5} style={{top: "-10%", left: "-120%"}} className='absolute  h-full w-full object-cover' />
      </div>
      {/* <div className='relative z-[20] rotate-[-10deg] h-[300px] w-[300px] z-[2]'>
        <img src={IMG4} style={{top: "0%", left: "0%"}} className='absolute rotate-[10deg]  h-full w-full object-cover' />
        
      </div> */}
      <div className='relative z-[20] rotate-[-10deg] h-[300px] w-[300px] z-[2]'>
   
        <img src={IMG7} style={{bottom: "22%", left: "120%"}} className='absolute  h-full w-full object-cover' />
        
      </div>
             <img 
                src={rings} 
                className="absolute inset-0 left-0 top-0 w-full h-full z-[12]"
                style={{
                    clipPath: 'polygon(0 100%, 40% 0, 110% 100%)',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                }}
            />   
                  <h1 className="overlay-text absolute top-64 text-white z-[48] rotate-[-6deg]">{text}</h1>

             {/* <h1 className="overlay-text absolute bottom-[72vh] rotate-[-6deg] text-[420px]">{text}</h1> */}
         </section>
        
    );
};

export default OverlayTextComponent;
