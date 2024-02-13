import './Navbar.css'
import logo from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/logo.png'
import cart_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/cart_icon.png'
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext)
    const [menu, setMenu] = useState('')

    return (
    <div className='navbar'>

        <div className='nav-logo'>
            <img src={logo} alt="" />
           
            <div onClick={()=>{setMenu('null')}}> 
            <Link to='/'> 
                  <p>VARELS</p>
            </Link>
            </div>
        </div>


        <ul className='nav-menu'>
            
            <li onClick={()=>{setMenu('shop')}}>
                <Link to='/shop'>Shop</Link>
                {menu === 'shop' ? <hr/> : <></>} 
            </li>

            <li onClick={()=>{setMenu('men')}}>
                <Link to='/men'>Men</Link>
                {menu === 'men' ? <hr/> : <></>}
            </li>

            <li onClick={()=>{setMenu('women')}}>                
                <Link to='/women'>Women</Link>
                {menu === 'women' ? <hr/> : <></>}
            </li>

            <li onClick={()=>{setMenu('kid')}}>
                <Link to='/kid'>Kids</Link>
                {menu === 'kid' ? <hr/> : <></>}
            </li>

        </ul>


        <div className='nav-login-cart'>
            <Link to='/login'>
                <button>
                    Login
                </button>
            </Link>
            <Link to='/cart'>
                <img src={cart_icon} alt="" />
            </Link>
            <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>


    </div>
  )
}

export default Navbar