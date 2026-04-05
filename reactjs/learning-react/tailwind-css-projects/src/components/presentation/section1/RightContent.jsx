import React from 'react'

import Rightcard from './Rightcard';
const RightContent = (props) => {
    return (

    <div className='h-full p-6  w-2/3 overflow-x-auto rounded-4xl flex flex-nowrap gap-5'>
        
        {props.profile.map((profile) => {
            return <Rightcard id={profile.id} img={profile.img} tag={profile.tag} intro={profile.intro} />
        })}
 
    </div>
        
    )
}

export default RightContent