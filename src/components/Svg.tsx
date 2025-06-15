"use client";

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/all';
import { Observer } from 'gsap/all';
import { SplitText } from 'gsap/all';

gsap.registerPlugin(MotionPathPlugin, Observer, SplitText);

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={`fixed inset-0 w-full h-screen bg-black text-white ${className}`}>
      <div className="w-full h-full overflow-hidden">
        <div className="w-full h-full relative">
          {children}
        </div>
      </div>
    </section>
  );
};

const Svg = () => {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const imagesRef = useRef<HTMLDivElement[]>([]);
  const headingsRef = useRef<HTMLDivElement[]>([]);
  const outerWrappersRef = useRef<HTMLDivElement[]>([]);
  const innerWrappersRef = useRef<HTMLDivElement[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);

  useEffect(() => {
    let sections = document.querySelectorAll<HTMLElement>("section");
    let images = document.querySelectorAll<HTMLElement>(".bg");
    let headings = gsap.utils.toArray<HTMLElement>(".section-heading");
    let outerWrappers = gsap.utils.toArray<HTMLElement>(".outer");
    let innerWrappers = gsap.utils.toArray<HTMLElement>(".inner");
    let splitHeadings = headings.map(heading => new SplitText(heading, { type: "chars,words,lines", linesClass: "clip-text" }));
    let currentIndex = -1;
    let wrap = gsap.utils.wrap(0, sections.length);
    let animating = false;

    gsap.set(outerWrappers, { yPercent: 100 });
    gsap.set(innerWrappers, { yPercent: -100 });

    function gotoSection(index: number, direction: number) {
      index = wrap(index); // make sure it's valid
      animating = true;
      let fromTop = direction === -1;
      let dFactor = fromTop ? -1 : 1;
      let tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => animating = false
      });

      if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        tl.to(images[currentIndex], { yPercent: -15 * dFactor })
          .set(sections[currentIndex], { autoAlpha: 0 });
      }

      gsap.set(sections[index], { autoAlpha: 1, zIndex: 1 });
      tl.fromTo([outerWrappers[index], innerWrappers[index]], { 
        yPercent: i => i ? -100 * dFactor : 100 * dFactor
      }, { 
        yPercent: 0 
      }, 0)
      .fromTo(images[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
      .fromTo(splitHeadings[index].chars, { 
          autoAlpha: 0, 
          yPercent: 150 * dFactor
      }, {
          autoAlpha: 1,
          yPercent: 0,
          duration: 1,
          ease: "power2",
          stagger: {
            each: 0.02,
            from: "random"
          }
        }, 0.2);

      currentIndex = index;
    }

    Observer.create({
      type: "wheel,touch,pointer",
      wheelSpeed: -1,
      onDown: () => !animating && gotoSection(currentIndex - 1, -1),
      onUp: () => !animating && gotoSection(currentIndex + 1, 1),
      tolerance: 10,
      preventDefault: true
    });

    gotoSection(0, 1);

  }, []);

  return (
    <div>
      <header className="fixed top-0 left-0 w-full z-10 flex items-center justify-between p-5">
        <div className="font-bebas-neue uppercase font-bold tracking-wide">Animated Sections</div>
        <div><a href="https://codepen.io/BrianCross/pen/PoWapLP" className="text-white hover:text-gray-200 transition-colors duration-300">Original By Brian</a></div>
      </header>
      <Section >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent bg-opacity-60 flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant-garamond font-normal text-center leading-none tracking-wider text-gray-200">Scroll down</h2>
        </div>
      </Section>
      <Section >
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-transparent bg-opacity-60 bg-[url('https://images.unsplash.com/photo-1617128734662-66da6c1d3505?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzc3NTM3MA&ixlib=rb-1.2.1&q=75&w=1920')] bg-cover bg-center flex items-center justify-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-cormorant-garamond font-normal text-center leading-none tracking-wider text-gray-200">Animated with GSAP</h2>
        </div>
      </Section>
      {/* Add other sections similarly */}
    </div>
  );
};

export default Svg;


// useEffect(() => {
//   gsap.to("#rect", {
//     duration: 5, 
//     repeat: 12,
//     repeatDelay: 3,
//     yoyo: true,
//     ease: "power1.inOut",
//     motionPath:{
//       path: "#path",
//       align: "#path",
//       autoRotate: true,
//       alignOrigin: [0.5, 0.5]
//     }
//   });
// }, [])


{/* <h1>MotionPathPlugin (new in GSAP 3)</h1>

<svg width="100%" height="100%" viewBox="-20 0 557 190" id="svg">
  <circle cx="100" cy="100" r="3" />
  <circle cx="300" cy="20" r="3" />
  <path id="path" d="M9,100c0,0,18.53-41.58,49.91-65.11c30-22.5,65.81-24.88,77.39-24.88c33.87,0,57.55,11.71,77.05,28.47c23.09,19.85,40.33,46.79,61.71,69.77c24.09,25.89,53.44,46.75,102.37,46.75c22.23,0,40.62-2.83,55.84-7.43c27.97-8.45,44.21-22.88,54.78-36.7c14.35-18.75,16.43-36.37,16.43-36.37"/>
  <g id="rect">
    <rect width="85" height="30" fill="dodgerblue" />
    <text x="10" y="19" font-size="14">SVG &lt;rect&gt;</text>
  </g>
</svg>

<div id="div">#div</div>

<a href="https://greensock.com" target="_blank">
<img className="gsap-3-logo" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-3-logo.svg" width="150" />
</a> */}