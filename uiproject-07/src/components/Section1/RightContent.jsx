import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full w-2/3 flex flex-nowrap overflow-x-auto gap-10 p-6'>
      {props.users.map(function (elem,index) {
        return <RightCard key={index} id={index} color={elem.color} img={elem.img} tag={elem.tag}/>
      })}
    </div>
  )
}

export default RightContent
