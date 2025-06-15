"use client"

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Flip } from 'gsap/all';

class LetterProps {
  children: string;
  classN: string
}

const Letter = ({ children, classN }: LetterProps) => {
  return <div className={`letter ${classN} `}>{children}</div>;
};

const Flipper: React.FC = () => {
  const [stopper, setStopper] = useState(false)
  gsap.registerPlugin(Flip);

  const containerRef = useRef<HTMLDivElement>(null);
  const layouts = ["final", "plain", "columns", "grid"];
  let curLayout = 0;
  

  useEffect(() => {
  
    console.log(curLayout)
    console.log(stopper)
  }, [stopper, curLayout])

  useEffect(() => {
    if(!stopper) {
    const nextState = () => {
      const state = Flip.getState(".letter, .for, .gsap", { props: "color,backgroundColor", simple: true });
      // console.log(curLayout)

      if (containerRef.current) {
        containerRef.current.classList.remove(layouts[curLayout]);
        if (curLayout >= 3) {
          // Stop the animation after going through all layouts
          // setTimeout(() =>   setStopper(true), 3000 )
       
        }
        curLayout = (curLayout + 1) % layouts.length;
      
     
      
        containerRef.current.classList.add(layouts[curLayout]);

        Flip.from(state, {
          absolute: true,
          stagger: 0.07,
          duration: 0.7,
          ease: "power2.inOut",
          spin: curLayout === 0,
          simple: true,
          onEnter: (elements: Element[], animation: gsap.core.Animation) => {
            gsap.fromTo(elements, { opacity: 0 }, { opacity: 1, delay: animation.duration() - 0.1 });
          },
          onLeave: (elements: Element[]) => {
            gsap.to(elements, { opacity: 0 });
          }
        });
      }

      gsap.delayedCall(curLayout === 0 ? 3.5 : 1.5, nextState);
    };

    gsap.delayedCall(1, nextState);
  } else {
    console.log("stopped")
  }

    return () => {
      // Clean up any ongoing animations when the component unmounts
      gsap.killTweensOf(containerRef.current);
    };
  }, []);

  return (
    <div className='w-full bg-gray-400 h-screen flex items-center'>
      {!stopper && 
      <>
      <div className="container columns" ref={containerRef}>
        <Letter classN="bg-blue-500">F</Letter>
        <Letter classN="bg-green-500">l</Letter>
        <Letter classN="bg-red-500">i</Letter>
        <Letter classN="bg-purple-500">p</Letter>
        <div className="for">for</div>
        <div className="gsap">GSAP</div>
      </div>

      <a href="https://gsap.com/">
        <img src="https://assets.codepen.io/16327/gsap-logo-light.svg" className="logo" />
      </a>
    </>
}
    </div>
  );
};

export default Flipper;
