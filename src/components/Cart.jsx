import React, { useContext, useState } from 'react';
import { MdShoppingCart } from "react-icons/md";
import { cartContext } from '../App';
import CartItem from './CartItem';

const Cart = () => {
    const [expand,setExpand] = useState(false);
    const [cart,setCart] = useContext(cartContext);
    return (
        <div className={`${expand && 'w-[20rem] h-[30rem] bg-rose-500'} ${!expand && 'w-[3.4rem] h-[3.4rem]'} border border-rose-500 rounded-xl duration-500 ease-in-out fixed bottom-5 right-5 z-10`}>
            <div className={`${expand && 'border-b border-white'}`}>
            <MdShoppingCart className={`${expand && 'text-white'} text-4xl m-2 cursor-pointer ${!expand && 'text-rose-600'}`} onClick={()=>setExpand(!expand)}></MdShoppingCart>
            </div>
            <div className={`${!expand && 'hidden'} text-4xl m-2 overflow-x-auto`}>
                {cart.map(item => <CartItem key={item.idMeal} item={item}></CartItem>)}
            </div>
        </div>
    );
};

export default Cart;