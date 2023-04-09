import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useNavigation } from 'react-router-dom';

const Meal = ({meal}) => {
    // console.log(meal);
    // const [modalOpen,setModalOpen] = useState(false);
    
    const navigate = useNavigate();
    const showModal = e =>{
        e.stopPropagation();
        navigate(`${meal.idMeal}`);
        // setModalOpen(true);
    }
    return (
        <div onClick={showModal}>
            <Outlet></Outlet>
            <div className='border w-[15rem] h-[4rem] sm:h-[15rem] relative rounded-xl overflow-hidden cursor-pointer shadow-xl transition-all transform duration-300 ease-in-out hover:h-[15rem] sm:hover:-translate-y-3'>
                <img className='w-full h-full object-cover object-center' src={meal.strMealThumb} alt="meal image" />
                <div className='absolute inset-0 bg-black bg-opacity-70 hover:bg-opacity-20 duration-300'>
                    <p className='absolute top-2 left-3 text-xl text-orange-500 font-pacifico'>{meal.strMeal}</p>
                </div>
            </div>
        </div>
    );
};

export default Meal;

export const getMealData = async ({params})=>{
    console.log(params);
    const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`);
    const data = await res.json();
    return data;
}