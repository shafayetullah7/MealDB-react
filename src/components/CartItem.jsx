import React from 'react';

const CartItem = ({item}) => {
    return (
        <div className='flex border border-white rounded-md p-2'>
            <p className='truncate text-sm text-white'>{item.strMeal}</p>
        </div>
    );
};

export default CartItem;