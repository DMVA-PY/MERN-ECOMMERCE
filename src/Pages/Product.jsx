import React, { useContext } from 'react'
import { ShopContext } from '/home/vare/Documents/projects2/e-commerce/frontend/src/Context/ShopContext.jsx'
import { useParams } from 'react-router-dom'
import Breadcrums from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Breadcrums/Breadcrums.jsx'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox'
import { useEffect } from 'react'
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts'


const Product = () => {
  const {all_product}  = useContext(ShopContext);
  const { productId } = useParams();
  const product = all_product.find((e)=> e.id === Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <div className='productcontainer'>
        <Breadcrums product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox />
        <RelatedProducts product={product}/>
    </div>
  )
} 

export default Product;