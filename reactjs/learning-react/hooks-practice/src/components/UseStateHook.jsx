import React from 'react'
import './UseStateHook.css'

import { useState } from 'react'
const UseStateHook = () => {

    // let num  = 98;

    // let  onClick = () =>{
    //     num = 99;
    //     console.log(num)
    // }

    const [num, setNum] = useState(1);

    let inse = () =>{
        setNum(num + 1)
    }
    let desc = () =>{
        setNum(num - 1)
    }

  return (

    <div className='useStateHook'>
        <h1 className='number'>{num}</h1>
        <button className='btn1' onClick={inse}>Increase</button>
        <button className='btn1' onClick={desc}>Decrease</button>
        <button className='btn1' onClick={() => setNum(0)}>Reset</button>

        <button className='btn1' onClick={() => setNum(num+5)}>Jump</button>

    </div>
  )
}

export default UseStateHook