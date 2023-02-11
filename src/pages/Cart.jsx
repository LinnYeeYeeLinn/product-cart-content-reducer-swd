import React, { useEffect, useState } from 'react'
import { useStateContext } from '../context/StateContext';
import CartItem from '../components/CartItem';
import {useNavigate} from 'react-router-dom';

const Cart = () => {
    const [total, setTotal] = useState(0);
    const {state: {cart}, dispatch} = useStateContext();
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(cart.reduce((a,c) => a + c?.price, 0))
    }, [])

    const increasePrice = (price) => {
        setTotal(total + price);
    }

    const decreasePrice = (price) => {
        setTotal(total - price);
    }

  return (
    <>
        {cart?.length == [] ? (
            <div className='w-1/2 mx-auto border-2 shadow-md py-10 rounded-md mt-10 text-center'>
                <h1 className='text-3xl font-semibold text-dark'>Your cart is Empty!</h1>
                <button onClick={() => navigate('/')} className="px-3 py-2 rounded-md text-white bg-danger mt-8 transform transition hover:scale-90">Go Shopping</button>
            </div>
        ) : (
            <div className="grid grid-cols-4 mt-10">
                <div className="col-span-3">
                    {cart?.map(c => <CartItem key={c?.id} c={c} increasePrice={increasePrice} decreasePrice={decreasePrice} /> )}
                </div>
                <div className="col-span-1">
                    <div>
                        <div className="border-2 p-4 rounded-lg shadow-lg">
                            <p>Total Price - <span className='font-semibold text-xl'>${total.toFixed(2)}</span></p>
                            <button onClick={() => navigate('/success')} className="px-3 py-2 rounded-md text-white bg-primary transform transition hover:scale-90 mt-5">Checkout</button>
                        </div>
                        <button onClick={() => dispatch({type: "CART_EMPTY"})} className="px-3 py-1 bg-gray-100 rounded-md mt-5">Cart Empty</button>
                    </div>
                </div>
            </div>
        )}
    </>
  )
}

export default Cart