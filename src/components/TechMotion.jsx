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
        height: "55%",
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
      className="rounded-[40px] mt-20 md:mt-10 lg:mt-0 absolute top-[21%] cursor-pointer 
                 w-[280px] h-[380px] 
                 sm:w-[300px] sm:h-[420px] 
                 md:w-[320px] md:h-[450px] 
                 lg:w-[480px] lg:h-[320px] 
                 xl:w-[520px] xl:h-[340px] 
                 2xl:w-[560px] 2xl:h-[360px]
                 overflow-hidden bg-gray-800 bg-cover bg-center p-2 flex-center flex-col gap-0"
      onClick={handleClick}
      initial="center"
      animate={animate}
      variants={variants}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: `url(${src})`,
      }}
    >
      <div ref={blockRef} className="z-[10] bg-black opacity-0 absolute inset-0 w-full h-full" />
      <div className="flex flex-col gap-3 md:gap-5 z-[10] relative">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <h3
            className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] xl:text-[36px] 2xl:text-[40px] 
                       text-white text-center font-extrabold tracking-wider leading-tight shadow-md px-4"
            ref={nameRef}
          >
            {name}
          </h3>
        </div>
        <div className="absolute inset-0 w-full h-full flex items-center justify-center">
          <button
            ref={buttonRef}
            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 
                       whitespace-nowrap font-semibold text-white bg-indigo-500 
                       px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3 lg:px-7 lg:py-4 
                       rounded-lg opacity-0 transition-transform scale-80 ease-in-out"
          >
            В Каталог
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default TechMotion;