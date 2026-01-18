
import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Man from './pages/Man'
import {Routes,Route} from 'react-router-dom'
import NotFound from './pages/NotFound'
import Courses from './pages/Courses'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/contact/:id' element={<Courses/>}></Route>
        <Route path='/product' element={<Product/>}>
        <Route path='men' element={<Man/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
