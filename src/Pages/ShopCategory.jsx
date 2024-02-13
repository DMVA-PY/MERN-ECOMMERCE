import React, { useContext} from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Pages/CSS/ShopCategory.css'
import {ShopContext} from '/home/vare/Documents/projects2/e-commerce/frontend/src/Context/ShopContext.jsx'
import dropdown_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/dropdown_icon.png'
import Item from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Item/Item.jsx'
import { useEffect } from 'react'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext);

  return (

    <div className='shop-category'>
        <img className='shop-category-banner' src={props.banner} alt="" />
        <div className='shopcategory-index-sort'> 
            <p>
              <span>Showing 1-12</span> out of 36 products
            </p>
            <div className='shopcategory-sort'>
                Sort by <img src={dropdown_icon} alt="" />
            </div>
        </div>

        <div className='shopcategory-products'>
            {all_product.map((item, i)=>{
              if (props.category === item.category) {
                return <Item key={i} id={item.id} name={item.name} image={item.image} old_price={item.old_price} new_price={item.new_price}/>;
              } 
              else {
                return null;
              }
            })}
        </div>

        <div className='shopcategory-loadmore'>
            Explore more
        </div>

    </div>
  )
}

export default ShopCategory;