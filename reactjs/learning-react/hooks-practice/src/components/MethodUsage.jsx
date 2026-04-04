import React from 'react'
import './MethodUsage.css'

const MethodUsage = () => {

let i = 0;
function onClick() {
console.log(i++, "On clock")
}
  
function mouseEnter() {
console.log(i++, "Mouse Enter...")
}

  return (
    <div>
         <h1>So Are you testing the Hooks</h1>

      {/* <button onClick={onClick}>CLick Me</button> */}
      <button onDoubleClick={onClick}>CLick Me</button>
      {/* <button onMouseEnter={mouseEnter} onDoubleClick={onClick}>CLick Me</button> */}

      {/* use can create the funtion insite the button as well as outside the button */}

      <button onMouseEnter={() => {
        console.log(i++, "Mouse Enter insite the button...")
      }}>
        CLick Me</button>


      {/* <input type="text" /> */}

      {/* <input onChange={
            () =>{
              // console.log(i++ , "Input per click huaa hai..")
            
              console.log(i++ , "typing")
            }
          } type="text" placeholder='Enter Name' /> */}


      <input onChange={
        (elem) => {
          // console.log(i++ , "Input per click huaa hai..")

          console.log(elem)

          console.log(elem.target)
          console.log(elem.target.value)

        }
      } type="text" placeholder='Enter your Name' />

      {/* call funtion insite the button */}
      <input onClick={function () {
        onClick()
      }}

        type='text' placeholder='Enter Your age' />

    </div>

    
  )
}

export default MethodUsage