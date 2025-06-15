import React, { useState } from 'react'
import IMG from '../assets/images/IMG_4794.jpg'
import IMG2 from '../assets/images/IMG_4806.jpg'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Observer, TextPlugin} from 'gsap/all'


gsap.registerPlugin(Observer, TextPlugin)

const Hero = () => {
  const img1Ref = React.useRef(null);
  const img2Ref = React.useRef(null);
  const [animating, setAnimating] = useState(false)

  const gotoSection = () => {
    setAnimating(true)
    const tl = gsap.timeline({
        defaults: { duration: 2, ease: "sine.in" },
        onComplete: () => console.log('Animation completed')
      });
  
      tl.to(img1Ref.current, { opacity: 0 })
        .to(img2Ref.current, { height: '100%' }, '<')

        gsap.to(".font-bold", {
            duration: 2,
            text: "GVAAZ",
            ease: "none",
        })
        setAnimating(false)
  }
  const goBacktoSection = () => {
    setAnimating(true)
    const tl = gsap.timeline({
        defaults: { duration: 2, ease: "sine.in" },
        onComplete: () => console.log('Animation completed')
      });
  
      tl.to(img1Ref.current, { opacity: 1 })
        .to(img2Ref.current, { height: '0%' }, '<')
        gsap.to(".font-bold", {
            duration: 2,
            text: "ZAAVG",
            ease: "none",
        })
        setAnimating(false)
       
  }

//   useGSAP(() => {
//     gsap.to(".font-bold", {
//         duration: 2,
//         text: "This is the new text",
//         ease: "none",
//     })
//   }, [])


  Observer.create({
    type: "wheel,touch,pointer",
    wheelSpeed: -1,
    onDown: () => !animating && goBacktoSection(),
    onUp: () => !animating && gotoSection(),
    tolerance: 20,
    preventDefault: true
  });

  return (
    <section className='w-full min-h-screen flex flex-col relative'>
      <div ref={img1Ref} id='img1' className='absolute w-full min-h-screen pt-[6vh] bg-cover bg-center z-[1]' style={{ backgroundImage: `url(${IMG})` }} />
      <div ref={img2Ref} id='img2' className='absolute bottom-0 h-[0%] w-full bg-cover bg-center z-[2]' style={{ backgroundImage: `url(${IMG2})` }} />

      <div className='w-full h-screen flex items-center justify-center'>
        <h1 id='title' className='font-bold z-[10] text-[190px] text-center'>ZAAVG</h1>
      </div>
    </section>
  )
}

export default Hero;
