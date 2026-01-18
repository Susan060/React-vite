import React from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'

const Product = () => {
  const navigate=useNavigate()
  const btnClicked=()=>{
    navigate('/')
  }
  return (
    <div className='flex justify-center gap-10 py-4'>
      <button onClick={btnClicked} className='bg-cyan-900 text-lg rounded  p-4'>Return to Home</button>
      <button className='bg-cyan-900 text-lg rounded  p-4' onClick={()=>{
        navigate(-1)
      }}>Prev</button>

      <Link className='text-xl font-semibold' to='/product/men'>Mens Product</Link>
      <Link className='text-xl font-semibold' to='/product/women'>Womens Product</Link>
      {/* <h1>This is Product</h1> */}
      <Outlet/>
    </div>
  )
}

export default Product
