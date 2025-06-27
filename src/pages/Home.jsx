import React from 'react'
import Hero from '../components/home/Hero'
import Summary from '../components/home/Summary'


const Home = () => {
  return (
    <div className='w-full min-h-screen  '>
     <section className='w-full h-screen relative overflow-hidden'>
      <Hero/>
     </section>
     <section id='summary' className='w-full  h-fit'>
        <Summary/>
     </section>
      
    </div>
  )
}

export default Home
