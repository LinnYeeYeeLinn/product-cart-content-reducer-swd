import React from 'react';
import {FaSearch, FaShopify, FaShoppingCart} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const {search, setSearch, state: {cart}} = useStateContext();
  return (
    <div className='shadow-lg px-5 py-3 rounded flex items-center justify-between sticky top-0 z-50 bg-white'>
       <Link to='/'>
        <div className="flex items-center gap-2">
              <FaShopify className='text-3xl text-danger' />
              <small className='uppercase text-xl font-semibold'>mms-shop</small>
          </div>
       </Link>
        <div className="flex items-center gap-2">
            <Link to='/cart'>
              <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-dark text-white cursor-pointer">
                  <FaShoppingCart />
                  <span>{cart.length}</span>
              </div>
            </Link>
            <div className='flex items-center gap-2 border rounded-md border-1 px-3 py-2'>
              <FaSearch />
              <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' className='outline-none' />
            </div>
        </div>
    </div>
  )
}

export default Navbar