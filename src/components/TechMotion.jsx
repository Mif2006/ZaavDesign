import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { CheckCheck } from "lucide-react";
import IMG1 from '../assets/images/IMG_4795.jpg'
import IMG2 from '../assets/images/IMG_4797.jpg'
import IMG3 from '../assets/images/IMG_4798.jpg'
import IMG4 from '../assets/images/IMG_4800.jpg'
import IMG5 from '../assets/images/IMG_4803.jpg'
import IMG6 from '../assets/images/IMG_4804.jpg'
import IMG7 from '../assets/images/IMG_4805.jpg'
import IMG8 from '../assets/images/IMG_4806.jpg'
import { useGSAP } from "@gsap/react";

const TechMotion = ({
  src,
  name,
  animate,
  variants,
  imagelogo,
  handleClick,
  details,
}) => {
  const wrapperRef = useRef(null);
  const buttonRef = useRef(null);
  const nameRef = useRef(null);
  const blockRef = useRef(null);

  useGSAP(() => {
    const wrapper = wrapperRef.current;
    const button = buttonRef.current;
    const nameText = nameRef.current;
    const block = blockRef.current;

    gsap.fromTo(
      wrapper,
      { height: "40px" },
      {
        height: "300px",
        duration: 1,
        scrollTrigger: {
          trigger: wrapper,
          start: "top 80%", // Trigger when the top of wrapper is at 80% of viewport
          end: "top 50%", // Animation progress stops at 50% of viewport
          scrub: true,    // Smooth scrolling animation
        },
      }
    );
    // GSAP animation for hover
    const tl = gsap.timeline({ paused: true });
    tl
      .to(button, { opacity: 1, scale:0.9, y: 50, duration: 0.4, ease: "power2.out" }) // Show the button with animation
      .to(block, { opacity: 0.5, duration: 0.3, ease: "power2.out" }, 0) // Hide the name text
      .to(nameText, { opacity: 1, y: -70, duration: 0.5, ease: "power2.out" }, 0); // Slide and fade the name

    // Mouse enter and leave event listeners for the wrapper div
    const handleMouseEnter = () => {
      tl.play();
    };

    const handleMouseLeave = () => {
      tl.reverse();
    };

    wrapper.addEventListener("mouseenter", handleMouseEnter);
    wrapper.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      wrapper.removeEventListener("mouseenter", handleMouseEnter);
      wrapper.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <motion.div
      ref={wrapperRef}
      className="rounded-[20px] cursor-pointer w-[280px] h-[200px] sm:w-[320px] sm:h-[220px] md:w-[350px] md:h-[240px] lg:w-[380px] lg:h-[260px] overflow-hidden bg-gray-800 bg-cover bg-center p-2 flex-center flex-row relative"
      onClick={handleClick}
      initial="static"
      animate={animate}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div ref={blockRef} className="z-[10] bg-black opacity-0 absolute inset-0 w-full h-full" />
      <div className="flex flex-row items-center justify-between w-full gap-2 md:gap-3 z-[10] relative px-4">
        <div className="flex items-center justify-start w-full">
          <h3
            className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] text-white text-left font-extrabold tracking-wider leading-tight shadow-md"
            ref={nameRef}
          >
            {name}
          </h3>
        </div>
        <div className="flex items-center justify-end">
          <button
            ref={buttonRef}
            className="text-[12px] sm:text-[14px] md:text-[16px] whitespace-nowrap font-semibold text-white bg-indigo-500 px-3 py-2 md:px-4 md:py-2 rounded-lg opacity-0 transition-transform scale-80 ease-in-out"
          >
            В Каталог
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TechMotion;
