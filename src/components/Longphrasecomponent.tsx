"use client"

// Import necessary hooks and components
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const LongPhraseComponent = () => {
  const phraseRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    // Define the animation
    const scrollAnimation = gsap.fromTo(
      phraseRef.current,
      { xPercent: 0 },
      {
        xPercent: -92,
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top", // When the top of the trigger hits the top of the viewport
          end: "+=100%", // End after scrolling through the entire width of the element
          scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          pin: true, // Pin the trigger element for the duration of the scroll
          anticipatePin: 1, // Anticipate the pinning and start the animation earlier
        },
      }
    );

    // Cleanup function
    return () => {
      scrollAnimation.kill();
      ScrollTrigger.getAll().forEach(ST => ST.kill());
    };
  }, []);

  return (
    <section ref={triggerRef} className="relative bg-black h-screen flex items-center justify-start">
      <div ref={phraseRef} className="flex text-white text-[200px] font-bold space-x-4 ">
        
        {/* Your long phrase elements here */}
        <span className="inline-block">This</span>
        <span className="inline-block">is</span>
        <span className="inline-block">a</span>
        {/* Add more spans as needed */}
        <span className="inline-block">very</span>
        <span className="inline-block">long</span>
        <span className="inline-block">phrase.</span>
        <span className="inline-block">This</span>
        <span className="inline-block">is</span>
        <span className="inline-block">a</span>
        {/* Add more spans as needed */}
        <span className="inline-block">very</span>
        <span className="inline-block">long</span>
        <span className="inline-block">phrase.</span>
        <span className="inline-block">This</span>
        <span className="inline-block">is</span>
        <span className="inline-block">a</span>
        {/* Add more spans as needed */}
        <span className="inline-block">very</span>
        <span className="inline-block">long</span>
        <span className="inline-block">phraseeee.</span>
        <span className="inline-block">very</span>
        <span className="inline-block">long</span>
        <span className="inline-block">phrase.</span>
        <span className="inline-block">This</span>
        <span className="inline-block">is</span>
        <span className="inline-block">a</span>
        {/* Add more spans as needed */}
        <span className="inline-block">very</span>
        <span className="inline-block">long</span>
        <span className="inline-block">phraseeee.</span>
        <span className="inline-block">very</span>
        <span className="inline-block">long</span>
        <span className="inline-block">phrase.</span>
        <span className="inline-block">This</span>
        <span className="inline-block">is</span>
        <span className="inline-block">a</span>
        {/* Add more spans as needed */}

      </div>
    </section>
  );
};

export default LongPhraseComponent;
