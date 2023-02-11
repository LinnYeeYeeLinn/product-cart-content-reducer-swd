import React from 'react';
import {AiFillStar} from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const ProductCard = ({product}) => {
  const {dispatch} = useStateContext();
  return (
    <div className='border-2 p-5 rounded-md shadow-md w-72 transform transition hover:scale-105'>
      <img src={product?.image} alt="" className="h-56 mx-auto" />
      <div className="mt-2">
        <h1 className="font-semibold">{product?.title.substring(0, 20)}</h1>
        <div className="flex items-center gap-2">
          <AiFillStar className='text-danger' />
          <span>{product?.rating?.rate}</span>
        </div>
        <p className="font-semibold text-2xl mb-2">${product?.price}</p>
        <div className="flex gap-3">
          <button onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} className="px-3 py-2 rounded-md text-white bg-primary transform transition hover:scale-90">Add To Cart</button>
          <Link to={`/detail/${product?.id}`}>
            <button className="px-3 py-2 rounded-md text-white bg-dark transform transition hover:scale-90">Details</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
