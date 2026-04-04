import React from 'react'
import { Link } from 'react-router-dom'

import './Scrolling.css'
const Scrolling = () => {
    let i = 0;

    function pageScrolling(elem) {
        if (elem > 0) {
            console.log(i++, "scrolling down")
        } else {
            console.log(i++, "scrolling up")
        }
        // console.log(i++, "page scrolling...")
    }

    return (
        <div onWheel={(elem) => {
            pageScrolling(elem.deltaY)
            // console.log(elem.deltaY)
        }}>
            <h1>Home Page</h1>
            <Link to="/">Go to Test Page</Link>

            <div className='page1'></div>

            <div className='page2'></div>


            <div className='page3'></div>

        </div>
    )
}

export default Scrolling