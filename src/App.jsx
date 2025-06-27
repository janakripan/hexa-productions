import React from 'react'
import { Route, Routes } from 'react-router'
import HomeLayout from './Layouts/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={ <HomeLayout/> } >
        <Route index element={<Home/>}/>
        <Route path='about' element={<About/>} />
        <Route path='services' element={<Services/>} />
        <Route path='gallery' element={<Gallery/>} />
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>
     
    </>
  )
}

export default App
