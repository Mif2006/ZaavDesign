import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { navList } from '../constants';
import { useGSAP } from '@gsap/react';

const Navbar = () => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const linkRefs = useRef([]);
  const rotationFactors = useRef([]);

  // useEffect(() => {
  //   const handleMouseMove = (e) => {
  //     setMousePosition({
  //       x: e.clientX,
  //       y: e.clientY,
  //     });
  //   };

  //   window.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // useGSAP(() => {
  //   if (linkRefs.current.length > 0) {
  //     linkRefs.current.forEach((ref, index) => {
  //       const rect = ref.getBoundingClientRect();
  //       const centerX = rect.left + rect.width / 2;
  //       const centerY = rect.top + rect.height / 2;

  //       // Generate a random rotation factor if not already generated
  //       if (!rotationFactors.current[index]) {
  //         rotationFactors.current[index] = 0; // Random between -0.025 and 0.025
  //       }

  //       gsap.to(ref, {
  //         x: (mousePosition.x - centerX) / 80,
  //         y: (mousePosition.y - centerY) / 80,
  //         rotation: (mousePosition.x - centerX) * rotationFactors.current[index],
  //         ease: 'circ.out',
  //         duration: 20,
  //       });
  //     });
  //   }
  // }, [mousePosition]);

  return (
    <nav className='w-full h-[6vh] bg-transparent fixed top-0 z-[16]'>
      <div className='w-full h-full text-white flex flex-row gap-4 font-semibold items-center justify-center'>
        {navList.map((link, index) => (
          <p
            key={index}
            ref={(el) => {
              if (el && !linkRefs.current.includes(el)) {
                linkRefs.current.push(el);
              }
            }}
            style={{ transformOrigin: 'center' }} // Center the rotation origin
            className='transition-all cursor-pointer duration-200'
          >
            {link.name}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
