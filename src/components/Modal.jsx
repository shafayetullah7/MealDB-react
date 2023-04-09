import React, { useContext } from 'react';
import { useLoaderData, useNavigate, useNavigation } from 'react-router-dom';
import { Player } from 'video-react';

import 'video-react/dist/video-react.css';
import { cartContext, warnContext } from '../App';

const Modal = () => {
    const navigate = useNavigate();
    const {meals} = useLoaderData();
    const [meal] = meals;
    const [cart,setCart] = useContext(cartContext);
    const warn = useContext(warnContext);
    // console.log(meal);
    const handleClick = e => {
        e.stopPropagation();
    }
    const addToCart = () =>{
        if(cart.find(item => item.idMeal===meal.idMeal)){
            warn('already in the cart');
        }
        else{
            setCart(cart=>([...cart,meal]));
            warn('added to the cart');
        }
    }
    return (
        <div className='inset-0 fixed top-0 flex justify-center items-center z-40' onClick={handleClick}>
            <div className='w-[600px] h-[500px] rounded-3xl bg-white z-50 overflow-x-auto p-5 relative'>
                <button className='absolute top-5 right-5 text-2xl text-red-600 ' onClick={()=>{navigate(-1)}}>X</button>
                <div className='w-[200px] h-[200px] mx-auto object-cover object-center'>
                    <img className='w-full h-full' src={meal.strMealThumb} alt="" />
                </div>
                <h1>{meal.strInstructions}</h1>
                <button className='my-10 mx-auto px-4 py-1 block border-2 border-rose-500 rounded-xl text-xl font-bold text-rose-500 duration-200 active:scale-95' onClick={addToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Modal;