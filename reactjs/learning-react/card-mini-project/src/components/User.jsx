import React from 'react'

const User = (props) => {
  return (
    <div style={
        {color:'pink' , 
        padding: '10px',
        fontSize: '30px'
        }
    }
    >
    {props.name}
    </div>
  )
}

export default User