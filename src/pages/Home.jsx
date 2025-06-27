import React from 'react'
import Hero from '../components/home/Hero'


const Home = () => {
  return (
    <div className='w-full min-h-screen  '>
     <section className='w-full h-screen relative overflow-hidden'>
      <Hero/>
     </section>
     <section id='summary' className='w-full h-screen bg-red-400'>

     </section>
      
    </div>
  )
}

export default Home
