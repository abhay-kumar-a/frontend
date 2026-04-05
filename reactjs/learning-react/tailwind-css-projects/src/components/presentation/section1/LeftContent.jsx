import React from 'react'
import Hero from './Hero';
import Arrow from './Arrow';
const LeftContent = () => {
  return (
    <div className='h-full w-1/4 rounded-3xl flex flex-col justify-between '>
       <Hero/>
       <Arrow/>
    </div>
  )
}

export default LeftContent