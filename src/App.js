import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer';
import Product from '/home/vare/Documents/projects2/e-commerce/frontend/src/Pages/Product.jsx'
import Cart from '/home/vare/Documents/projects2/e-commerce/frontend/src/Pages/Cart.jsx'
import Shop from '/home/vare/Documents/projects2/e-commerce/frontend/src/Pages/Shop.jsx'
import LoginSignup from '/home/vare/Documents/projects2/e-commerce/frontend/src/Pages/LoginSignup.jsx'
import ShopCategory from '/home/vare/Documents/projects2/e-commerce/frontend/src/Pages/ShopCategory.jsx'
import men_banner from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/banner_mens.png'
import women_banner from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/banner_women.png'
import kid_banner from '/home/vare/Documents/projects2/e-commerce/frontend/src/Components/Assets/banner_kids.png'

const App =()=> {
  return (
    <div className="App">
      <BrowserRouter>

        <Navbar/>

        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/men' element={<ShopCategory banner={men_banner} category='men'/>}/>
          <Route path='/women' element={<ShopCategory banner={women_banner} category='women'/>}/>
          <Route path='/kid' element={<ShopCategory banner={kid_banner} category='kid'/>}/>
          <Route path='/product' element={<Product/>}> 
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>

        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App; 
