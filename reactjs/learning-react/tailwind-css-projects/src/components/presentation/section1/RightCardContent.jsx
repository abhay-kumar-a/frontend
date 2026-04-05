import React from 'react'
import Rightcard from './Rightcard';
import { RiArrowRightLine } from "@remixicon/react";

const RightCardContent = (props) => {
  return (<div className='absolute top-0 left-0 h-full w-full p-5 flex flex-col justify-between bg-linear-to-t from-black/70 via-black/30 to-transparent rounded-3xl'>
  
  <h2 className='bg-white text-xl font-semibold rounded-full h-10 w-10 flex justify-center items-center'>
    {props.id}
  </h2>

  <div>
    <p className='text-white text-sm mb-10 leading-normal font-semibold'>
      {props.intro}
    </p>

    <div className='flex justify-between'>
      <button className='text-white font-medium bg-blue-400 px-6 py-2 rounded-3xl text-lg'>
        {props.tag}
      </button>

      <button className='text-white font-medium bg-blue-400 px-5 py-2 rounded-4xl'>
        <RiArrowRightLine size={30} color='white' />
      </button>
    </div>
  </div>

</div>
  )
}

export default RightCardContent