"use client"

// Import necessary hooks and components
import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const ScalingWordComponent = () => {
  const wordRef = useRef(null);
  const triggerRef = useRef(null);

  // useGSAP(() => {
  //   // Define the animation
  //   const scaleAnimation = gsap.fromTo(
  //     wordRef.current,
  //     { fontSize: "12000px", paddingLeft: "2200px"}, // Start from a very large font size
  //     {
  //       fontSize: "300px",
  //       paddingLeft: "0px", // Scale down to a smaller font size
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: triggerRef.current,
  //         start: "top top", // Start when the top of the trigger hits the top of the viewport
  //         end: "+=100%", // End after scrolling through the entire height of the element
  //         scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  //         pin: true, // Pin the trigger element for the duration of the scroll
  //       },
  //     }
  //   );

  //   // Cleanup function
  //   return () => {
  //     scaleAnimation.kill();
  //     ScrollTrigger.getAll().forEach(ST => ST.kill());
  //   };
  // }, []);
  

  return (
    <section ref={triggerRef}  style={{ backgroundImage: "url(/images/IMG_4795.jpg)" }} className="bg-cover overflow-hidden bg-center relative h-screen flex items-center justify-start">
      <div ref={wordRef} className="text-black font-bold text w-screen h-screen flex items-center justify-center ">
        {/* Your scaling word here */}     
        ZAAVG
      </div>
    </section>
  );
};

export default ScalingWordComponent;
