"use client";

import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import "@fontsource/playfair-display/600.css";
import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import IMG1 from "../assets/images/IMG_4795.jpg";
import IMG2 from "../assets/images/IMG_4797.jpg";
import IMG3 from "../assets/images/IMG_4798.jpg";
import IMG4 from "../assets/images/IMG_4800.jpg";
import IMG5 from "../assets/images/IMG_4803.jpg";
import IMG6 from "../assets/images/IMG_4804.jpg";
import IMG7 from "../assets/images/IMG_4805.jpg";
import IMG8 from "../assets/images/IMG_4806.jpg";

const InsideOfHero = () => {
  const letters = ["Z", "A", "A", "V", "G"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8];
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      gsap.to(carouselRef.current, {
        y: `-${(currentIndex + 1) * 100}%`,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % images.length);
          if (currentIndex === images.length - 1) {
            gsap.set(carouselRef.current, { y: 0 });
          }
        },
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div className="w-full h-full min-h-screen min-w-screen overflow-hidden relative">
      <div className="flex w-screen h-screen relative items-center justify-center">
        <div className="h-full flex flex-col absolute left-[18%] items-center justify-center gap-0">
          {letters.map((letter, index) => (
            <h1
              key={index}
              className="text-[12vw] leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-600"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {letter}
            </h1>
          ))}
        </div>
      </div>

      {/* Social Media Links in the bottom left */}
      <div className="absolute bottom-4 left-10 flex gap-8 text-white text-3xl">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="https://t.me" target="_blank" rel="noopener noreferrer">
          <FaTelegram />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
      </div>


      {/* Vertical Carousel */}
      <div className="absolute shadow-lg flex flex-col right-[10vw] border border-black top-[30%] h-[40vh] w-[20vw] overflow-hidden">
        <div ref={carouselRef} className="flex flex-col h-full transition-transform">
          {images.map((image, index) => (
            <div key={index} className="h-[100%] w-full flex-shrink-0">
              <img
                src={image}
                alt={`carousel-img-${index}`}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Static Images on Bottom Right */}
      <div className="absolute flex flex-row right-0 bottom-0 h-[20vh] w-[30vw]">
        <button className="relative h-full w-[70%] border border-black transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            src={IMG1}
            alt="imgcarousel1"
            className="h-full w-full object-cover"
          />
          <a href="/catalogue">
          <div className="absolute cursor-pointer inset-0 flex items-center justify-center transition-transform duration-300 bg-black bg-opacity-20 hover:bg-opacity-50 text-white font-bold text-lg">
            В КАТАЛОГ
          </div>
          </a>
        </button>
        <button className="absolute h-[80%] w-[50%] border border-black  right-0 bottom-0 transition-transform duration-300 ease-in-out hover:scale-110">
          <img
            src={IMG2}
            alt="imgcarousel2"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black transition-transform duration-300 bg-opacity-20 hover:bg-opacity-50 text-white font-bold text-lg">
            НАШ МАГАЗИН
          </div>
        </button>
      </div>
    </div>
  );
};

export default InsideOfHero;
