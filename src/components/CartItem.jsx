import React, { useState } from 'react';
import {AiFillPlusSquare, AiFillMinusSquare, AiFillDelete} from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';

const CartItem = ({c, increasePrice, decreasePrice}) => {
  const [count, setCount] = useState(1);

  const increaseCount = () => {
      setCount(pre => pre + 1);
      increasePrice(c.price);
  }

  const decreaseCount = () => {
      if(count > 1){
        setCount(pre => pre - 1);
        decreasePrice(c.price);
      }
  }

  const {dispatch} = useStateContext();
  return (
    <div className='border p-4 rounded-md w-4/5 mb-2 flex gap-5'>
      <img src={c?.image} className='h-28' alt="" />
      <div className=''>
        <h3 className="">{c?.title.substring(0,45)}...</h3>
        <p className="font-semibold text-xl my-2">${c?.price * count}</p>
        <div className="flex gap-8 items-center">
          <div className="flex gap-5 items-center border-2 px-4 py-1 rounded w-max">
              <AiFillMinusSquare onClick={decreaseCount} className='text-2xl cursor-pointer text-gray-400' />
              <p className='font-semibold text-lg'>{count}</p>
              <AiFillPlusSquare onClick={increaseCount} className='text-2xl cursor-pointer text-gray-400' />
            </div>
            <AiFillDelete onClick={() => {
               dispatch({type: "DELETE_CART", payload: c})
               decreasePrice(c.price * count)
            } } className='text-xl text-danger cursor-pointer' />
        </div>
      </div>
    </div>
  )
}

export default CartItem