import React from 'react'
import Hero from '../components/home/Hero'
import Summary from '../components/home/Summary'
import Services from '../components/home/Services'
import Features from '../components/home/Features'
import AboutSection from '../components/home/AboutSection'
import Contact from '../components/home/Contact'


const Home = () => {
  return (
    <div className='w-full min-h-screen  '>
     <section id='home' className='w-full h-screen relative overflow-hidden'>
      <Hero/>
     </section>
     <section id='summary' className='w-full  h-fit'>
        <Summary/>
     </section>
     <section id='services' className='w-full min-h-screen h-fit'>
      <Services/>
     </section>
     <section id='features' className='w-full min-h-screen h-fit bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100'>
      <Features/>
     </section>
     <section id='about' className='w-full h-fit min-h-screen'>
      <AboutSection/>
     </section>
     <section id='contact' className='w-full h-fit min-h-screen'>
      <Contact/>
     </section>
      
    </div>
  )
}

export default Home
