import React, { useState } from 'react'
import {X} from 'lucide-react'

const App = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    const newTask = [...task];
    newTask.push({ title, details })
    console.log(newTask)
    setTask(newTask)
    setTitle('')
    setDetails('')
  }
  const deleteNote=(index)=>{
    const newTask=[...task]
    newTask.splice(index,1)
    alert("Note Deleted")
    setTask(newTask)
    setTitle('')
    setDetails('')
  }

  return (
    <div className='min-h-screen lg:flex  bg-black text-white '>
      <form className='flex  gap-4 flex-col lg:w-1/2  items-start p-10'
        onSubmit={(e) => {
          submitHandler(e)
        }}>
        <h1>Add Notes</h1>
        {/* Title Input */}
        <input type="text" className='px-5 font-medium py-2 border-2 outline-none rounded w-full' placeholder='Enter Notes Heading'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }} />
        {/* Detail Input */}
        <textarea type="text" className='px-5 font-medium py-2 border-2 h-32 outline-none rounded w-full ' placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }} />
        <button className='bg-white text-black px-5 py-2 outline-none rounded-2xl w-full hover:bg-gray-600'>Add Notes</button>
      </form>
      <div className=' lg:w-1/2 lg:border-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto'>
          {task.map(function (elem, index) {
            return <div key={index} className='h-52 w-32 rounded-xl bg-cover relative text-black py-9 px-4 
            bg-[url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7qMZEJSG6vy2aOHZ7uuSF75vX7cOAgTl3sQ&s)]'>
              <button className='absolute top-5 right-2 bg-red-500 rounded-full active:scale-105 hover:bg-red-800'
              onClick={()=>{
                deleteNote(index)
              }}><X size={14} strokeWidth={2.5}/></button>
              <h3 className='leading-tight text-xl font-bold'>Name: {elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-700'>Details: {elem.details}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App
