"use client"

import React, { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from 'gsap/all';

interface SectionProps {
  children: React.ReactNode;
}

const FullScreenSection: React.FC<SectionProps> = ({ children }) => {
  return (
    <div className="full-screen-section">
      {children}
    </div>
  );
};

const FullScreenScrollComponent: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);
    
    const sections = containerRef.current.children;
    const sectionArray = Array.from(sections);

    sectionArray.forEach((section, index) => {
      gsap.to(section, {
        yPercent: -100 * index,
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: index === 0 ? containerRef.current : false,
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="full-screen-container">
      <FullScreenSection>
        <h1>Section 1</h1>
      </FullScreenSection>
      <FullScreenSection>
        <h1>Section 2</h1>
      </FullScreenSection>
      <FullScreenSection>
        <h1>Section 3</h1>
      </FullScreenSection>
      <FullScreenSection>
        <h1>Section 4</h1>
      </FullScreenSection>
    </div>
  );
};

export default FullScreenScrollComponent;
