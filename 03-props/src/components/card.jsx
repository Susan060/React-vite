import React from 'react'

const card = (props) => {
  return (
    <>
    <div className='parent'>
      <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user}.</h1>
        <h1>{props.age}.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ad?</p>
        <button>View Profile</button>
      </div>
      </div>
      </>
  )
}

export default card
