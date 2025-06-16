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
        height: "200px",
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
      className="rounded-[40px] mt-20 md:mt-10 lg:mt-0 absolute top-[21%] cursor-pointer w-[320px] h-[420px] md:w-[300px] lg:h-[660px] overflow-hidden bg-gray-800 bg-cover bg-center p-2 flex-center flex-col md:flex-row gap-0 md:gap-4 lg:gap-12"
      onClick={handleClick}
      initial="center"
      animate={animate}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        width: "42%",
        backgroundImage: `url(${src})`,
      }}
    >
      <div ref={blockRef} className="z-[10] bg-black opacity-0 absolute inset-0 w-full h-full" />
      <div className="flex flex-col gap-3 md:gap-5 z-[10] relative">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <h3
            className="text-[24px] md:text-5xl text-white text-center md:text-left font-extrabold tracking-wider leading-tight shadow-md"
            ref={nameRef}
          >
            {name}
          </h3>
        </div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <button
            ref={buttonRef}
            className="text-[20px] whitespace-nowrap font-semibold  md:text-[24px] font-semibold text-white bg-indigo-500 px-7 py-4 rounded-lg opacity-0 transition-transfor scale-80  ease-in-out"
          >
            В Каталог
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TechMotion;
