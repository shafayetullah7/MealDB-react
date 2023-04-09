import React from 'react';
import { MdFastfood } from "react-icons/md";
import { Link } from 'react-router-dom';


const Nav = () => {
    return (
        <div className='bg-rose-500 text-white px-10 py-3 flex justify-between items-center'>
            <div className='flex w-fit gap-4 items-center'>
            <MdFastfood className='text-4xl text-o'></MdFastfood>
            <p className='text-3xl font-bold'>Taste Tribe</p>
            </div>
            <div className='flex w-fit gap-5'>
                <Link className='block w-fit px-5 py-1 font-bold text-lg rounded-md duration-200 transition-all hover:underline active:scale-90' to="/">Home</Link>
                <Link className='block w-fit px-5 py-1 font-bold text-lg rounded-md duration-200 transition-all hover:underline active:scale-90' to="/orders">Orders</Link>
                <Link className='block w-fit px-5 py-1 font-bold text-lg rounded-md duration-200 transition-all hover:underline active:scale-90' to="">About Us</Link>
            </div>
        </div>
    );
};

export default Nav;