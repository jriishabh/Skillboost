import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
   <nav className='container'> 
   
    <ul>
      <li>Home</li>
      <li>About</li>
      <li><button className='btn'>Contact us</button></li>
    </ul>
   </nav>
  )
}

export default Navbar