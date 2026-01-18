import React from 'react'
import { useParams } from 'react-router-dom'

const Courses = () => {
    const params=useParams()
    console.log(params.id)
  return (
    <div>
      <h1> {params.id}This is a course Page</h1>
    </div>
  )
}

export default Courses
