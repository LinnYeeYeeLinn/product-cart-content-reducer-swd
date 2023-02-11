import React from 'react';
import {useNavigate} from 'react-router-dom';

const Success = () => {
    const navigate = useNavigate();
  return (
    <div className='w-1/2 mx-auto border-2 shadow-md py-10 rounded-md mt-10 text-center'>
        <h1 className='text-3xl font-semibold text-dark'>Thanks for shopping with us!</h1>
        <button onClick={() => navigate('/')} className="px-3 py-2 rounded-md text-white bg-danger mt-8 transform transition hover:scale-90">Go Shopping</button>
    </div>
  )
}

export default Success