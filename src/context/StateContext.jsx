import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getData } from "../api";

export const CreateContext = createContext();

const StateContext = ({children}) => {

    const [search, setSearch] = useState("");
    const [product, setProduct] = useState([]);

    const initialState = {
        products: [],
        cart: []
    }

    const reducer = (state, action) => {
        switch(action.type){
            case "GET_PRODUCTS":
                return {...state, products: action.payload};
            case "ADD_TO_CART":
                // return {...state, cart: [...state.cart, {...action.payload, qty: 1}]};
                const item = action.payload;
                const isExisted = state.cart.find(c => c.id === item.id);
                if(isExisted){
                    return {
                        ...state, cart: state.cart.map(c => c.id === item.id ? {...item} : {...c})
                    }
                }else{
                    return {
                        ...state, cart: [...state.cart, {...item}]
                    }
                }
            case "CART_EMPTY":
                return {...state, cart: []};
            case "DELETE_CART":
                return {...state, cart: state.cart.filter(cart => cart.id !== action.payload.id)}
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async () => {
        const {data} = await getData('/products');
        setProduct(data);
    }

    useEffect(() => {
        getProducts();
    }, [])

    useEffect(() => {
        dispatch({type: "GET_PRODUCTS", payload: product});
        const filterProduct = product.filter(i => i.title.toLowerCase().includes(search.toLowerCase()));
        dispatch({type: "GET_PRODUCTS", payload: filterProduct});
    }, [product, search])

    const data = {state, search, setSearch, dispatch};
  return (
    <CreateContext.Provider value={data} >
      {children}
    </CreateContext.Provider>
  )
}

export const useStateContext = () => useContext(CreateContext);
export default StateContext
