import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './RightContent'

const Page1 = (props) => {
  return (
    <div className='flex py-3 h-[90vh] px-10 gap-20'>  
        <LeftContent />
        <RightContent profile = {props.profile}/>
    </div>
  )
}

export default Page1