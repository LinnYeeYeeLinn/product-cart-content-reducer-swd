import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css';
import Cart from './pages/Cart';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Success from './pages/Success';

const App = () => {
  return (
    <div className='container mx-auto my-5'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/detail/:id' element={<ProductDetail />} />
        <Route path='/success' element={<Success />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
