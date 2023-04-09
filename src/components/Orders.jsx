import React, { useContext } from 'react';
import { cartContext } from '../App';
import Order from './Order';

const Orders = () => {
    const [cart,setCart] = useContext(cartContext);
    return (
        <div className='w-[700px] bg-rose-500 rounded-xl p-5 mx-auto'>
            {cart.map(item => <Order key={item.idMeal} item={item}></Order>)}
        </div>
    );
};

export default Orders;