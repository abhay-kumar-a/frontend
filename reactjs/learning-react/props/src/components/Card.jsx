import React from 'react'

const Card = (props) => {
  return (
    <>
   <div className='card'>
      <img src={props.image}></img>
      <h1>{props.user}</h1>
      <p>AGE : {props.age}</p>
      <button>View Profile</button>
    </div>
    </>
  )
}

export default Card