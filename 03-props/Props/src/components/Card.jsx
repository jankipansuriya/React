import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
      <div className="card">
          <img alt='HPscotland'src={props.img}></img>
          <h1>{props.user},{props.age}</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, quaerat!</p>
          <button>Click Me!</button>
      </div>
    </div>
  )
}

export default Card