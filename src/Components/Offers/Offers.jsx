import React from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Offers/Offers.css'
import exclusive_image from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>

        <div className='offers-left'>
            <h1>Exclusive</h1>
            <h1>Offers for You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check now</button>
        </div>

        <div className='offers-right'>
            <img src={exclusive_image} alt="" />
        </div>
        
    </div>
  )
}

export default Offers