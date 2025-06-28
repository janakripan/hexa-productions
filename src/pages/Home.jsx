import React from 'react'
import Hero from '../components/home/Hero'
import Summary from '../components/home/Summary'
import Services from '../components/home/Services'
import Features from '../components/home/Features'
import AboutSection from '../components/home/AboutSection'


const Home = () => {
  return (
    <div className='w-full min-h-screen  '>
     <section className='w-full h-screen relative overflow-hidden'>
      <Hero/>
     </section>
     <section id='summary' className='w-full  h-fit'>
        <Summary/>
     </section>
     <section className='w-full min-h-screen h-fit'>
      <Services/>
     </section>
     <section className='w-full min-h-screen h-fit bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100'>
      <Features/>
     </section>
     <section className='w-full h-fit min-h-screen'>
      <AboutSection/>
     </section>
      
    </div>
  )
}

export default Home
