import React from 'react'

const ProductCategory = ({i}) => {
  return (
    <div className='shadow-md p-2 rounded-md'>
        <img src={i?.image} className='h-32' alt="" />
        <p className="font-semibold mt-2">{i?.price}</p>
    </div>
  )
}

export default ProductCategory