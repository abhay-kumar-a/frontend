import React, { use, useEffect } from 'react'
import { useState } from 'react'

const UseEffectHook = () => {

    // most power full and most used and one of the most important hook is useEffect hook 
    // most confusing hook.

    // problem 
    // react rendeing process -> make UI  -> while making ui we want to run some code or function like
    // like api calling , DOM manipulation , timer function , event listners etc 

    // exp role - ruck (UI) -> footpath(other codes)-> walking , cycling etc.

    // once the react rendering process is over then we can call the side effects functions

    // mounting , unmounting 

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    function useEffectHook() {
        console.log("UseEffect is running ...........")
    }

    function aChange() {
        console.log("a ki value change ho gyi.. ")
    }
    function bChange() {
        console.log("b ki value change ho gyi.. ")
    }
    // useEffect(bChange);
    useEffect(bChange, [b]) //[] this is dependency array 
    // if dependency array is empty then useEffect will run only once 
    // if dependency array is not empty then useEffect will run only when the value in the dependency array changes


    useEffect(aChange, [a])

    return (
        <div>
            <h1>A : {a}</h1>
            <h1>B : {b}</h1>

            <button onClick={() => {
                setA(a + 1);
            }}
            >Change A</button>
            <button onClick={() => {
                setB(b - 1);
            }}>Change B</button>

        </div>
    )
}

export default UseEffectHook