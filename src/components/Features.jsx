import { useGSAP } from '@gsap/react';
import React, { useRef, useEffect } from 'react';
import { animateWithGsap } from '../utils';
import explore1Img from '../assets/images/IMG_4807.jpg';
import explore2Img from '../assets/images/IMG_4800.jpg';
import exploreVideo from '../assets/videos/1013.mov';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const videoRef = useRef(null);

  useGSAP(() => {
    gsap.to('#exploreVideo', {
      scrollTrigger: {
        trigger: '#exploreVideo',
        toggleActions: 'play pause pause reverse',
        start: '-10% bottom', // When 10% of the video enters the viewport from the bottom
        onEnter: () => {
          videoRef.current.play(); // Start playing the video when it enters the viewport
        },
        onLeave: () => {
          videoRef.current.pause(); // Pause the video when it leaves the viewport
        },
        onEnterBack: () => {
          videoRef.current.play(); // Resume playing when re-entering
        },
        onLeaveBack: () => {
          videoRef.current.pause(); // Pause again when scrolling back
        }
      }
    });

    // Animate elements on scroll
    animateWithGsap('#features_title', { y: 0, opacity: 1 });
    animateWithGsap(
      '.g_grow',
      {
        scale: 1,
        opacity: 1,
        ease: 'power1'
      },
      { scrub: 5.5 }
    );
    animateWithGsap('.g_text', { y: 0, opacity: 1, ease: 'power2.inOut', duration: 1 });
  }, []);

  return (
    <section className="h-full common-padding bg-gradient-to-b from-black to-purple-900/20 relative overflow-hidden">
      <div className="screen-max-width">
        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">ZaavG.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">Forged in Bali.</h2>
          </div>
          <div className="flex-center flex-col sm:px-10">
            <div className="relative h-[50vh] w-full flex items-center">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                ref={videoRef} // Video ref to control playback
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-video-container">
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore1Img} alt="titanium" className="feature-video g_grow" />
                </div>
                <div className="overflow-hidden flex-1 h-[50vh]">
                  <img src={explore2Img} alt="titanium2" className="feature-video g_grow" />
                </div>
              </div>

              <div className="feature-text-container">
                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                   
                    ZaavG этр{' '}
                    <span className="text-white">
                    Украшения, заряженные энергетикой чудо-острова.
                    </span>
                    {" "}Уникальный дизайн со смыслом. Доставка по всему миру
                  </p>
                </div>

                <div className="flex-1 flex-center">
                  <p className="feature-text g_text">
                   
                  Это не просто ювелирные украшения высокого качества.{' '}
                    <span className="text-white">Zaav G</span>, - это образ мышления, стиль жизни и философия в каждом изделии.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
