import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div className='relative '>
    <Header/>

    <div id='detail' >
        <Outlet/>
    </div>
      <Footer/>
    </div>
  )
}

export default HomeLayout
