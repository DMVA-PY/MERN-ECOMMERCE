import React from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Hero/Hero.css'
import hand_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/hand_icon.png'
import arrow_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/arrow.png'
import hero_right from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className='hero-hand-icon'>
            <p>new</p>
            <img src={hand_icon} alt="" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
        </div>
        <div className='hero-latest-btn'>
          <div>Latest collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      <div className='hero-right'>
          <img src={hero_right} alt="" />
      </div>

    </div>
  )
}

export default Hero