import React from 'react'

const Card = (name) => {
    console.log(name);
    
  return (
    <div className='card'>
        <h1>{name.user} purwar</h1>
        <button>view profile</button>
      </div>
  )
}

export default Card
