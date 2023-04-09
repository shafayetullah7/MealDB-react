import React from 'react';

const Order = (item) => {
    console.log(item);
    return (
        <div className='flex border border-white rounded-md p-2 justify-between w-full gap-10'>
            <p className='truncate text-sm text-white'>{item.strMeal}</p>
            <button className='text-xl'>X</button>
        </div>
    );
};

export default Order;