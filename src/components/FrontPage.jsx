import React from 'react'
import TrueHero from './TrueHero'
import Highlights from './Highlights'
import Features from './Features'
import Shop from './Shop'
import Testimonials from './Testimonials'
import Services from "./Services"
import Size from './Size'
import ImageSlider from './HeroComp'
import VideoComp from './VideoComp'

const FrontPage = () => {
  return (
    <div className='min-h-screen min-w-screen overflow-hidden bg-black'>
        <TrueHero />
      <Highlights />
      <Features />
    <ImageSlider />
      <Shop />
      {/* <VideoComp /> */}
      {/* <Services /> */}
     <Testimonials />
    <Size />
    </div>
  )
}

export default FrontPage