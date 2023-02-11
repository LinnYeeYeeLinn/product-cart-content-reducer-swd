import React from 'react'
import { useStateContext } from '../context/StateContext';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading/Loading';

const Product = () => {
  const {state: {products}} = useStateContext();

  return (
    <div className='flex flex-wrap gap-7 justify-center mt-10'>
      {products.length > 0 ? products?.map(product => <ProductCard key={product?.id} product={product} />) : <Loading /> }
    </div>
  )
}

export default Product