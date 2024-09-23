import React from 'react'
import './Hero.css'
import arrow from '../../assets/dark-arrow.png'
const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>we provide fictional e-learning platform</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium obcaecati id nihil soluta culpa consectetur porro, quod, repudiandae dolorem atque iure nesciunt corrupti quidem voluptate magni! Explicabo obcaecati sapiente nihil?</p>
        <button className='btn'>Explore more <img src={arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero