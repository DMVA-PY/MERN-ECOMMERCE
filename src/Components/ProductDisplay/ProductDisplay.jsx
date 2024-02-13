import React, { useContext } from 'react'
import '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/ProductDisplay/ProductDisplay.css'
import star_dull_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/star_dull_icon.png'
import star_icon from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/star_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {

  const {product} = props;
  const {addToCart} = useContext(ShopContext);
  
  return (
    <div className='productdisplay'>

        {/* LEFT */}
        <div className='productdisplay-left'>


            <div className='productdisplay-img-list'>
                <img src={product.image} alt="" />                
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>

            {/*  IMAGEN  */}
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>

        </div>


        {/* RIGHT  */}
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-start'>
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
            </div>

            {/*   PRICES    */}
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>


            {/*   DESCRIPTION  */}
            <div className='productdisplay-right-description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit non quidem pariatur consequatur ab minima nobis commodi ipsa amet sapiente, doloribus doloremque unde? Nemo unde possimus, nobis repudiandae facilis facere.
            </div>




            {/*  SIZES   */}
            <div className='productdisplay-right-size'>
                <h1>Select size</h1>
                <div className='productdisplay-right-size'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XLL</div>
                </div>
            </div>

          {/*  BUTTON  */}
          <div className='button-product'>
              <button onClick={() => addToCart(product.id)} className='square-button'>ADD TO CART</button>
              <p className='productdisplay-right-category'><span>Category:</span> Women. t-shirt, crop top</p>
              <p className='productdisplay-right-category'><span>Tags:</span> Morern, Latest, Trends</p>
          </div>


            </div>

    </div>
  )
}

export default ProductDisplay;