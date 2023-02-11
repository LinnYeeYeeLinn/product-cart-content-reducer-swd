import React, { useEffect, useState } from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import { getData } from '../api';
import { AiFillStar } from 'react-icons/ai';
import { useStateContext } from '../context/StateContext';
import ProductCategory from '../components/ProductCategory';
// import Loading from '../components/Loading/Loading';

const ProductDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState({});
    const [products, setProducts] = useState([]);
    const {dispatch} = useStateContext();

    const getSingleDetail = async () => {
        const {data} = await getData(`/products/${id}`);
        setProduct(data);
    }

    const productByCategory = async () => {
        const {data} = await getData(`/products/category/${product.category}`);
        const filterCategory = data?.filter(i => i.id !== product.id)
        setProducts(filterCategory);
    }

    useEffect(() => {
        getSingleDetail();
        productByCategory();
    }, [product, products])

    return (
        <>
            {/* {product && product.length > 0 ? ( */}
                <div>
                    <div className='flex gap-10 mt-10'>
                        <img src={product?.image} className='h-52 shadow-md p-5 rounded ' alt="" />
                        <div>
                            <h1 className="font-semibold text-xl">{product?.title}</h1>
                            <div className="my-2">
                                <h3 className="font-semibold text-lg">Description</h3>
                                <p className="mt-2">{product?.description}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <AiFillStar className='text-danger' />
                                <span>{product?.rating?.rate}</span>
                            </div>
                            <p className="font-semibold text-2xl">${product?.price}</p>
                            <div className="flex gap-3 mt-3">
                                <button className="px-3 py-2 rounded-md text-white bg-primary transform transition hover:scale-90" onClick={() => dispatch({type: "ADD_TO_CART", payload: product})} >Add To Cart</button>
                                <button onClick={() => navigate('/success')} className="px-3 py-2 rounded-md text-white bg-dark transform transition hover:scale-90">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h2 className="font-semibold text-xl">You may also like</h2>
                        <div className="flex gap-4 mt-4">
                            {products?.map(i => <ProductCategory key={i.id} i={i} />)}
                        </div>
                    </div>
                </div>
            {/* ) : <Loading />} */}
        </>
    )
}

export default ProductDetail