"use client"

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Title = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Center the title
    gsap.set(titleRef.current, { autoAlpha: 0, scale: 5 });

    // Animate the title
    gsap.to(titleRef.current, {
      duration: 2,
      autoAlpha: 1,
      scale: 1,
      ease: "elastic.out(1, 0.3)",
      flipX: true,
      yoyo: true,
      repeat: -1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  return (
    <div >
        <iframe src="https://aichatonline.org/i/gpts-2OToJQm1Yo-gsap-genius-v3-" width="800" height="500" ></iframe>
    {/* <div className='' ref={titleRef} style={{ fontSize: '72px', textAlign: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>ZAAVG</div> */}
    </div>
  );
}

export default Title;
