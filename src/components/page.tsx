"use client"

import localFont from 'next/font/local'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const bodoniModaSC = localFont({
  src: [
    {
      path: '../fonts/Bodoni_Moda_SC/static/BodoniModaSC_48pt-BoldItalic.ttf', 
      weight: '400',
      style: 'normal',
    },
    // Add other font styles here if available
  ],
});

export default function Code() {
  const initialLetters = ['的', '一', '是', '了', '人']; // Initial Chinese characters
  const finalLetters = ['Z', 'A', 'A', 'V', 'G']; // Letters after transformation
  const [letters, setLetters] = useState(initialLetters);

  const handleAnimationComplete = (index: any) => {
    const updatedLetters = [...letters];
    updatedLetters[index] = finalLetters[index];
    setLetters(updatedLetters);
  };

  return (
    <main className="w-screen bg-white flex items-center relative justify-center bg-cover bg-center z-[5]"
     style={{backgroundImage: `url(/ce.jpg)`}}
      >
{/*   
      <h1 className="text-[#C8FFFA] hidden flex flex-row z-[12]">
        {initialLetters.map((letter, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{
                x: Math.random() * window.innerWidth - window.innerWidth / 2, // Random starting X position
                y: Math.random() * window.innerHeight - window.innerHeight / 2, // Random starting Y position
                rotateY: 0,
                fontSize: '55px',
                color: '#0f0', // Start with green color
                opacity: 0, // Initially invisible
              }}
              animate={{
                x: 0,
                y: 0,
                rotateY: 360,
                fontSize: '220px',
                color: '#C8FFFA', // Turn white when switching to final letters
                opacity: 1, // Make visible after delay
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.5,
                delay: index * 0.5 + 2, // Delay before text appears and animation starts
                ease: "easeInOut",
              }}
              onAnimationComplete={() => handleAnimationComplete(index)}
            >
              {letters[index]}
            </motion.div>
          </AnimatePresence>
        ))}
      </h1>
      <div className='overflow-x-hidden z-[10] w-[520px] h-[500px] bg-cover bg-center'
        style={{backgroundImage: `url(/center.jpg)`, transform: 'rotate(-5deg)'}}
 >
   
        </div>
      <h1 style={{ transform: 'rotate(-10deg)' }} className={`text-black absolute -bottom-52 text-[500px] font-bold`}>ZAAVG</h1>
 */}

    </main>
  );
}


