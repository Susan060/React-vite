import { ArrowRight, MoveRight } from 'lucide-react'
import React from 'react'
import RightcardContent from './RightcardContent'

const RightCard = (props) => {
  return (
    <div className='h-full shrink-0 w-80 overflow-hidden relative rounded-4xl'> 
      <img 
      className='h-full w-full object-cover' src={props.img} alt="" />
      <RightcardContent tag={props.tag} id={props.id} color={props.color}/>
    </div>
  )
}

export default RightCard
