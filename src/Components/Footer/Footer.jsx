import React from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Footer/Footer.css'
import footer_logo from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/logo_big.png'
import instagram_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/instagram_icon.png'
import pinterest_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/pintester_icon.png'
import wpp_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/whatsapp_icon.png'


const Footer = () => {
  return (
    <div className='footer'>



        <div className='footer-logo'>
            <img src={footer_logo} alt="" />
            <p>VARELS</p>
        </div>



        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>



        <div className='footer-social-icon'>

            <div className='footer-icons-container'>
                <img src={instagram_icon} alt="" />
            </div>

            <div className='footer-icons-container'>
                <img src={pinterest_icon} alt="" />
            </div>

            <div className='footer-icons-container'>
                <img src={wpp_icon} alt="" />
            </div>

        </div>



        <div className='footer-copyright'>
            <hr/>
            <p>Copyright @2023 - All right reserved.</p>
        </div>


    </div>
  )
}

export default Footer