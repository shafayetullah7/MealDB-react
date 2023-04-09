import React from 'react';
import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Meal from './Meal';
import {MdKeyboardBackspace } from "react-icons/md";

const CategoryMeals = () => {
    const {strCategory} = useParams();
    const {meals} = useLoaderData();
    const navigate = useNavigate()
    // console.log(meals);
    return (
        <div className='my-20 mx-2 md:mx-20 border border-orange-100 rounded-xl p-5 bg-gray-200'>
            <div className='flex items-center gap-5'>
                <MdKeyboardBackspace className='text-orange-500 text-3xl cursor-pointer rounded-md duration-300 hover:text-black hover:border-black active:scale-50' onClick={()=>navigate('/')}></MdKeyboardBackspace>
                <h2 className='text-3xl font-bold text-orange-500'>{strCategory} Items</h2>
            </div>
            
            <div className='h-[40rem] p-5 overflow-x-auto grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center gap-7 mt-10 w-fit mx-auto'>
                {meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)}
            </div>
        </div>
        
    );
};

export default CategoryMeals;

export const loadCategoryMeals = async ({params})=>{
    const {strCategory} = params;
    let meals;
    let error;
    try{
        
        let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`);
        meals = await res.json();
        meals = meals.meals;
    }
    catch(e){
        error = e;
    }
    return {meals,error};
}