import React from 'react'
import { RiArrowRightLine } from "@remixicon/react";
import RightCardContent from './RightCardContent';
const Rightcard = (props) => {
  return (
<div className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
         <img className='h-full w-full object-cover'
                src={props.img} alt="Image" />
            <RightCardContent id={props.id} intro={props.intro} tag={props.tag}/>
    </div>
  )
}

export default Rightcard