"use client"

import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [fontSize, setFontSize] = useState(13000);
  const [paddingLeft, setPaddingLeft] = useState(3000);
  const prevScrollY = useRef(window.scrollY);
  const [minValueReached, setMinValueReached] = useState(false);

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = '';
    };

    const handleScroll = (e: any) => {
      e.preventDefault(); 

      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY < prevScrollY.current ? 'down' : 'up';
      prevScrollY.current = currentScrollY;



      if (scrollDirection === 'down') {
       
        setFontSize(prevFontSize => Math.max(prevFontSize - 1000, 300));
        setPaddingLeft(prevPaddingLeft => Math.max(prevPaddingLeft - 300, 0));
      } else if (scrollDirection === "up") {
        setFontSize(prevFontSize => Math.min(prevFontSize + 1000, 13000));
        setPaddingLeft(prevPaddingLeft => Math.min(prevPaddingLeft + 300, 3000));
      }

      // Check if minimum values are reached
      if (fontSize == 300) {
        setMinValueReached(true);
      } 
    
  }
  

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [fontSize, paddingLeft]); // Depend on fontSize and paddingLeft to re-run the effect when they change

  return (
    <>
    
      <div className={`${minValueReached ? "" : "fixed"} w-screen overflow-hidden text-center min-h-screen bg-cover bg-center bg-black flex items-center justify-center`}
           style={{ backgroundImage: "url(/ZaavG.jpeg)" }}>
        <h1 className="z-[20] text-[12000px] flex items-center pl-[3000px] justify-center text-center w-screen h-screen text" 
             style={{ fontSize: `${fontSize}px`, paddingLeft: `${paddingLeft}px` }}
             >ZAAVG</h1>
      </div>

        <div className="w-screen overflow-hidden text-center min-h-screen bg-cover bg-center bg-black flex items-center justify-center"
             style={{ backgroundImage: "url(/ZaavG.jpeg)" }}>
       
        </div>
      
    </>
  );
};

export default Home;
