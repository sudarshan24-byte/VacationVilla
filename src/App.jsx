import React from 'react'
import Activities from './components/Activities'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Plan from './components/Plan'
import Rooms from './components/Rooms'
import Destination from './components/Destination'
import ImageSlider from './components/ImageSlider'
import Slider from './components/Slider'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Activities />
      <Plan />
      {/* <Rooms /> */}
      <Destination />
      <ImageSlider />
      <Slider />
      <Footer />
      {/* <div>Hello</div> */}
    </div>
  )
}

export default App
