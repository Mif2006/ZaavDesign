/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';

interface CursorChaserProps {}

const CursorChaser: React.FC<CursorChaserProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);

  // Move useCallback outside of useEffect
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current || !imagesRef.current.length) return;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const containerRect = containerRef.current.getBoundingClientRect();
    const centerX = containerRect.left + containerRect.width / 2;
    const centerY = containerRect.top + containerRect.height / 2;

    // Calculate movement within a 100px boundary
    const boundedMouseX = Math.max(centerX - 10, Math.min(mouseX, centerX + 10));
    const boundedMouseY = Math.max(centerY - 10, Math.min(mouseY, centerY + 10));

    gsap.to(imagesRef.current, 0.5, {
      x: boundedMouseX,
      y: boundedMouseY,
      stagger: 0.15,
      ease: "power2.out",
    });

    const timeline = gsap.timeline({
      defaults: { duration: 0.5, ease: "power2.inOut" },
    });
    timeline.to(imagesRef.current, {
      scale: 1,
      stagger: { amount: 0.15, from: "start" },
    });
    timeline.to(imagesRef.current, {
      scale: 1,
      stagger: { amount: 0.15, from: "end" },
    }, "<+=2.5");
  }, []);

  const addImageRef = useCallback((el: HTMLImageElement | null) => {
    if (el && !imagesRef.current.includes(el)) {
      imagesRef.current.push(el);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !imagesRef.current.length) return;


    gsap.set(imagesRef.current, {
      xPercent: -50,
      yPercent: -50,
      scale: 0,
    });

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return (
    <div id="Wrap" ref={containerRef}>

        <div
        ref={addImageRef}
          className="FollowBox rounded-full bg-yellow-500 w-[100px] h-[100px]"
        />
   
    </div>
  );
};

export default CursorChaser;
