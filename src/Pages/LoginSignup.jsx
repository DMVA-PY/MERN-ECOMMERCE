import React from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Pages/CSS/LoginSignup.css'

const LoginSignup = () => {
  return (

    <div className='loginsignup'>

        <div className='loginsignup-container'>
            <h1>Sign up</h1>

            <div className="loginsignup-fields">
                <input type="text" placeholder='Your Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
            </div>

            <button className='login-button'>Continue</button>
            <p className='loginsignup-login'>Already have an account?   <span>Login</span>
            </p>

            <div className="loginsignup-agree">
              <input type="checkbox" name='' id='' />
              <p>By continuing, i agree to the terms of use & privacy policy</p>
            </div>
            
        </div>

    </div>
  )
}

export default LoginSignup