import React from 'react'
import arrow_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/arrow.png'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Breadcrums/Breadcrums.css'

const Breadcrums = ({product}) => {

    return (
        <div className='breadcrum'>
            Home <img src={arrow_icon} alt="" /> 
            Shop <img src={arrow_icon} alt="" /> 
            {product.category} <img src={arrow_icon} alt="" />  
            {product.name} <img src={arrow_icon} alt="" />
        </div>
    )
} 

export default Breadcrums;