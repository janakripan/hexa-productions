import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'

const HomeLayout = () => {
  return (
    <div className='relative '>
    <Header/>

    <div id='detail' >
        <Outlet/>
    </div>
      
    </div>
  )
}

export default HomeLayout
