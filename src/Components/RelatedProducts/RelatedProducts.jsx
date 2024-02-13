import React from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/RelatedProducts/RelatedProducts.css'
import data_product from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/data.js'
import Item from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Item/Item.jsx'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className='relatedproducts-item'>
            {data_product.map((item, i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
        </div>
    </div>
  )
}

export default RelatedProducts;