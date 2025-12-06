import React, { useRef } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/projects'
import Agence from './pages/agence'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



const App = () => {
  
  return (
    <div className='text-white'>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path='/projects' element={<Projects></Projects>}/>
        <Route path="/agence" element={<Agence></Agence>}/>
      </Routes>
    </div>
  )
}

export default App
