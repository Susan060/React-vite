import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center py-4 px-8 bg-cyan-900 justify-between'>
      <h2 className='text-xl font-bold '>Kantipur</h2>
      <div className='flex gap-8 '>
        <Link className='text-lg font-medium ' to="/">Home</Link>
        <Link className='text-lg font-medium ' to="/about">About</Link>
        <Link className='text-lg font-medium ' to="/contact">Contact</Link>
        <Link className='text-lg font-medium ' to="/product">Product</Link>

      </div>
    </div>
  )
}

export default Navbar
