"use client";

import React, { useState, useRef, useEffect } from 'react';
import { MoveLeft, MoveRight, MoveUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import video1 from '../assets/videos/1012.mov'
import video2 from '../assets/videos/1013.mov'

import shop from '../assets/images/shop.jpg'

import IMG1 from '../assets/images/IMG_4795.jpg'
import IMG2 from '../assets/images/IMG_4797.jpg'
import IMG3 from '../assets/images/IMG_4798.jpg'
import IMG4 from '../assets/images/IMG_4800.jpg'
import IMG5 from '../assets/images/IMG_4803.jpg'
import IMG6 from '../assets/images/IMG_4804.jpg'
import IMG7 from '../assets/images/IMG_4805.jpg'
import IMG8 from '../assets/images/IMG_4806.jpg'


const Hero = () => {
  const videos = [video1, video2, video1];
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // GSAP animation to slide videos in and out
  const animateVideo = (direction) => {
    const nextIndex = direction === 'left'
      ? (currentIndex === 0 ? videos.length - 1 : currentIndex - 1)
      : (currentIndex === videos.length - 1 ? 0 : currentIndex + 1);

    // Slide out the current video
    gsap.to(videoRef.current, {
      x: direction === 'left' ? '100%' : '-100%',
      duration: 0.7,
      ease: 'power2.inOut',
      onComplete: () => {
        videoRef.current.pause();
        setCurrentIndex(nextIndex);
        gsap.fromTo(
          videoRef.current,
          { x: direction === 'left' ? '-100%' : '100%' },
          { x: '0%', duration: 0.7, ease: 'power2.inOut', onComplete: () => videoRef.current.play() }
        );
      }
    });
  };

  useEffect(() => {
    gsap.set(videoRef.current, { x: '0%' });
    videoRef.current.play();
  }, []);

  const handleMoveLeft = () => animateVideo('left');
  const handleMoveRight = () => animateVideo('right');

  return (
    <div className="w-screen px-2 min-h-screen pt-[8vh]">
      <div className="w-full flex flex-row gap-2 items-center">
        <div className="flex flex-col w-[50vw] gap-2 pt-[2px]">
          <div className="bg-gray-400 p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row lg:justify-between w-[50vw] h-auto min-h-[35vh] rounded-[37px]">
            <div className="flex flex-col gap-4 md:gap-6 flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[36px] text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-indigo-500 font-semibold leading-tight">
                  Авторские Украшения с Острова Бали
                </h1>
                <div className="flex flex-row items-center gap-2 lg:gap-0">
                  <button className="rounded-full bg-black text-white px-4 py-2 sm:px-6 sm:py-3 md:h-[60px] md:w-[160px] text-sm md:text-base transition-transform duration-500 hover:scale-105 whitespace-nowrap">
                    В Каталог
                  </button>
                  <div className="rounded-full cursor-pointer text-white flex items-center justify-center h-[40px] w-[40px] sm:h-[50px] sm:w-[50px] md:h-[6vh] md:w-[6vh] bg-black transition-transform duration-500 hover:scale-105">
                    <MoveUpRight />
                  </div>
                </div>
              </div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                Украшения, заряженные энергетикой чудо-острова. Уникальный дизайн со смыслом. Доставка по всему миру.
              </p>
            </div>
          </div>

          <div className="flex flex-row gap-2">
            <div className="h-[55vh] w-[25vw] bg-gray-400 rounded-[27px]">
              <img alt="image2" src={shop} width={800} height={800} className="h-[80%] w-full object-cover object-center rounded-[27px]" />
              <div className="flex justify-between h-[20%] px-[12px] items-center">
                
                <h3 className="font-semibold text-[20px]">Наш Магазин</h3>
               
                <a href='https://yandex.by/maps/org/zaav_g/76673064389/?ll=37.631595%2C55.741181&utm_source=share&z=16'>
                <div className="rounded-full cursor-pointer text-white flex items-center justify-center h-[6vh] w-[6vh] bg-black transition-transform duration-500 hover:scale-105">
                  <MoveUpRight />
                </div>
                </a>
              </div>
            </div>

            <div className="h-[55vh] w-[25vw] bg-gray-400 rounded-[27px]">
              <img src={IMG7}  alt={shop} width={800} height={800} className="h-[80%] w-full object-cover object-center rounded-[27px]" />
              <div className="flex justify-between h-[20%] px-[12px] items-center">
                <h3 className="font-semibold text-[20px]">Новинки</h3>
                <a href='/catalogue'>
                <div className="rounded-full cursor-pointer text-white flex items-center justify-center h-[6vh] w-[6vh] bg-black transition-transform duration-500 hover:scale-105">
                  <MoveUpRight />
                </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative w-[50vw] h-[90vh] rounded-[37px] bg-gray-900 overflow-hidden">
          <video
            ref={videoRef}
            src={videos[currentIndex]}
            className="object-cover absolute w-full h-full inset-0 rounded-[37px]"
            autoPlay
            muted
            loop
          />

          <div className="absolute px-[12px] flex justify-between bottom-0 left-0 right-0 h-16 border-t border-transparent">
            <div className="rounded-full text-white flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 opacity-0"></div>
            <div className="flex flex-row gap-1">
              <div
                className="rounded-full text-white cursor-pointer flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 transition-transform duration-500 hover:scale-105"
                onClick={handleMoveLeft}
              >
                <MoveLeft />
              </div>
              <div
                className="rounded-full text-white cursor-pointer flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 transition-transform duration-500 hover:scale-105"
                onClick={handleMoveRight}
              >
                <MoveRight />
              </div>
            </div>
            <div className="rounded-full text-white cursor-pointer flex items-center justify-center h-[6vh] w-[6vh] bg-gray-900 transition-transform duration-500 hover:scale-105">
              <MoveUpRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
