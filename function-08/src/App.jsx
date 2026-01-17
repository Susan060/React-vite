import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

const App = () => {
  const [title,setTitle]=useState('aman')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log('form submitted by',title)
    setTitle('')
  }



  return (
    <>
      <div>
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{
            setTitle(e.target.value)
          }} />
          <button >Submit</button>
          <h1>{title}</h1>
        </form>
      </div>

    </>
  )
}

export default App
