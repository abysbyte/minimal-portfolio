import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Navbar from './components/Navigation/navbar'
const App = () => {
  return (
    <div className='text-white'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Projects' element={<Projects /> } />
        </Routes>
    </div>
  )
}

export default App