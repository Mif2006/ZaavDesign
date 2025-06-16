"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import TechMotion from "../components/TechMotion";
import { StepBack, StepForward } from "lucide-react";
import { imagesArray, imageVariants } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4, 5, 6]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Animate the "Бестселлеры" text when it enters the viewport
    const titleAnimation = gsap.fromTo(
      ".bestsellers-title",
      {
        y: 100, // Start below its position
        opacity: 0, // Fully transparent
      },
      {
        y: 0, // Move to its original position
        opacity: 1, // Fully visible
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".bestsellers-title",
          start: "top 80%", // Animation triggers when the title is 80% in view
          end: "top 50%", // Animation completes at 50% in view
          scrub: false,
        },
      }
    );

    return () => {
      titleAnimation.kill();
    };
  }, []);

  const handleNext = (number) => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) =>
          (prevIndex + (number !== undefined ? number : 1)) % positions.length
      );
      return updatedIndexes;
    });
  };

  const handleBack = (number) => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map((prevIndex) => {
        return (
          (prevIndex - (number !== undefined ? number : 1) + positions.length) %
          positions.length
        );
      });
      return updatedIndexes;
    });
  };

  const handleClick = (clickedIndex) => {
    setCurrentIndex(clickedIndex);
    setIsPaused(true);

    const centerCardIndex = positionIndexes.findIndex(
      (index) => positions[index] === "center"
    );

    let difference = Math.abs(centerCardIndex - clickedIndex);
    if (difference > positions.length / 2) {
      difference = positions.length - difference;
    }

    const clickedPosition = positions[positionIndexes[clickedIndex]];
    if (
      clickedPosition === "right1" ||
      clickedPosition === "right2" ||
      clickedPosition === "right3"
    ) {
      handleNext(difference);
    } else if (
      clickedPosition === "left1" ||
      clickedPosition === "left2" ||
      clickedPosition === "left3"
    ) {
      handleBack(difference);
    }

    setTimeout(() => {
      setIsPaused(false);
    }, 12000);
  };

  const positions = [
    "center",
    "left1",
    "left2",
    "left3",
    "right3",
    "right2",
    "right1",
  ];

  return (
    <div
      className="flex items-center justify-center py-[100vh] relative bg-gradient-to-br from-black via-purple-900/20 z-[40] to-black  bg-cover bg-center flex-col gap-2 md:gap-4 pt-28 justify-center bg-transparent min-h-screen w-screen"
      id="bestsellers"
    >
      <div className="flex z-[24] flex-col items-center gap-2 text-center">
        <h1 className="bestsellers-title absolute top-[5vh] text-8xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-tr from-purple-600 to-indigo-500">
          Бестселлеры.
        </h1>
      </div>
      
      {imagesArray.map((image, index) => (
        <TechMotion
          key={index}
          src={image.src}
          name={image.name}
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          handleClick={() => handleClick(index)}
          details={image.details}
        />
      ))}

      <div className="absolute bottom-[1vh] flex flex-row items-center gap-3 md:gap-[10px] pb-12 z-[20] mt-[480px] md:mt-[400px]">
        <button
          className="text-white cursor-pointer bg-indigo-400 transition-transform duration-500 scale-[1] hover:scale-[1.1] rounded-[12px] bg-opacity-90 hover:bg-opacity-100 py-2 px-4"
          onClick={() => handleNext(1)}
        >
          <StepBack />
        </button>

        <button
          className="text-white cursor-pointer transition-transform duration-500 scale-[1] hover:scale-[1.1] bg-indigo-400 bg-opacity-90 hover:bg-opacity-100 rounded-[12px] py-2 px-4"
          onClick={() => handleBack(1)}
        >
          <StepForward />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
