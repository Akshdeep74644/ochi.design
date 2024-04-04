import React from 'react'
import Navbar from './componenets/Navbar'
import Landingpage from './componenets/Landingpage'
import Marquee from './componenets/Marquee'
import About from './componenets/About'
import Eyes from './componenets/Eyes'
import Feature from './componenets/Feature'
import Reviews from './componenets/Reviews'
import Readmore from './componenets/Readmore'
import Card from './componenets/Card'
import Project from './componenets/Project'
import Footer from './componenets/Footer'
import LocomotiveScroll from 'locomotive-scroll';


function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Feature />
      <Reviews />
      <Readmore />
      <Card />
      <Project />
      <Footer />
    </div>
  )
}

export default App
