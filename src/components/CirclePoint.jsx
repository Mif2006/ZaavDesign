import React from 'react'

const CirclePointer = ({ angle, radius, Icon, color, classname}) => {

  const left = `${50 + radius + Math.cos(angle)}%`
  const top = `${50 + radius + Math.sin(angle)}%`

  return (
    <div
      className={`absolute transform -translate-x-1/2 -translate-y-1/2
      ${classname}`}
      style={{left, top}}
      //  onClick={onClick}
       >
        <div className='relative'>
          <div className='size-12 md:size-20 rounded-full bg-black border border-gray-400 flex items-center justify-center cursor-pointer shadow-[0_0_15px_rgba(255,255,0.1]'>
            <Icon className={`size-6 md:size-10 ${color}`} />
          </div>
        </div>
    </div>
  )
}

export default CirclePointer