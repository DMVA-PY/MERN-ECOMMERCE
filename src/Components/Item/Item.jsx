import React, { useEffect } from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Item/Item.css'
import { Link } from 'react-router-dom'

const Item = (props) => {
  
  return (
    <div className='item-container'>
      <div className='item'>
          <Link to={`/product/${props.id}`} > 
            <img className='item-img' src={props.image} alt="" />
          </Link>
          <p>{props.name}</p>7
          <div className='item-prices'>
              <div className='item-price-new'>
                  ${props.new_price}
              </div>
              <div className='item-price-old'>
                  ${props.old_price}
              </div>
          </div>
      </div>
    </div>  
    )
}

export default Item;