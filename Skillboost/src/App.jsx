import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Footer from './Components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
       <div className="container">
       <About></About>
       <Footer></Footer>
       </div>
     
    </div>
  )
}

export default App