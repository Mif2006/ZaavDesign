import React from 'react'
import { points } from '../constants'
import CirclePointer from './CirclePoint'
import Broski from './Broski'


const CircleWithPoints = () => {
  return (
    <div className='relative w-full h-full flex items-center justify-center'>
      <div className={`absolute z-10 pointer-events-none text-center transition-opacity duration-500 z-10`}>
        <h1 className='text-white text-3xl md:text-4xl lg:text-5xl font-bold'>Webchain</h1>
        <p className='text-gray-400 mt-2 text-2xl font-light'>Development</p>
      </div>

     <div className='relative size-[320px] sm:size-[440px] md:size-[540px] lg:size-[640px]'>
          <div className='absolute inset-0 border border-gray-400 rounded-full opacity-60' />
          <div className='absolute inset-1 border border-gray-400 rounded-full opacity-30 blur-[1px]' />
          <div className='absolute inset-1 border border-gray-400 rounded-full opacity-10 blur-[2px]' />

          {points.map((index, point) => {
            const angle = (index * (360 / points.length)) * (Math.PI / 180)
            const radius = 50
            
            return (
              <div key={point.color}>
              {/* <CirclePointer
                className="circle-point"
                angle={angle}
                radius={radius}
                Icon={point.Icon}
                color={point.color}
                // onClick={() => {return 0}}
              /> */}
              <Broski
                  className="circle-point"
                  angle={angle}
                  radius={radius}
                  Icon={point.Icon}
                  color={point.color}
                  // onClick={() => {return 0}}
              />
              </div>
            )
          })}

      </div> 
    </div>
  )
}

export default CircleWithPoints