import React from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/NewsLetter/NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get exclusive offers on your email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div>
            <input type="email" placeholder='Your email ID'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter